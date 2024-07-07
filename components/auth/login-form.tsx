"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Login } from "@/actions/login";
import { FormData, LoginSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
import { FormError } from "@/components/auth/form-error";
import { FormSucces } from "@/components/auth/form-succes";
import { FormErrorMsg } from "@/components/ui/form-error";

export const LoginForm = () => {
  const [succesMessage, setSuccesMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (values: FormData) => {
    startTransition(() => {
      Login(values).then((data) => {
        setErrorMessage(data?.error);
      });
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex w-screen flex-col space-y-8 p-8 sm:w-[450px]"
    >
      <FormItem>
        <FormLabel name="email">Email</FormLabel>
        <div className="relative">
          <Input
            disabled={isPending}
            {...register("email")}
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            variant="authentication"
          />

          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
        {errors.email && <FormErrorMsg>{errors.email.message}</FormErrorMsg>}
      </FormItem>
      <FormItem>
        <FormLabel name="password">Password</FormLabel>
        <div className="relative">
          <Input
            disabled={isPending}
            {...register("password")}
            type="password"
            name="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            variant="authentication"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
        {errors.password && (
          <FormErrorMsg>{errors.password.message}</FormErrorMsg>
        )}
      </FormItem>
      {succesMessage && <FormSucces message={succesMessage} />}
      {errorMessage && <FormError message={errorMessage} />}
      <Button
        disabled={isPending}
        variant="default"
        type="submit"
        className="w-full"
      >
        Login
      </Button>
    </form>
  );
};
