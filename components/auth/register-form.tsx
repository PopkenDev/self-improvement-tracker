"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
import { FormError } from "@/components/auth/form-error";
import { Register } from "@/actions/register";
import { FormData, RegisterSchema } from "@/schemas";
import { FormSucces } from "@/components/auth/form-succes";
import { FormErrorMsg } from "@/components/ui/form-error";

export const RegisterForm = () => {
  const [succesMessage, setSuccesMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: FormData) => {
    startTransition(() => {
      Register(data).then((data) => {
        setSuccesMessage(data.success);
        setErrorMessage(data.error);
      });
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex w-screen flex-col space-y-8 p-8 sm:w-[450px]"
      >
        <FormItem>
          <FormLabel name="name">Name</FormLabel>
          <div className="relative">
            <Input
              disabled={isPending}
              {...register("name")}
              type="text"
              name="name"
              placeholder="John Doe"
              variant="authentication"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
            />
          </div>
          {errors.name && <FormErrorMsg>{errors.name.message}</FormErrorMsg>}
        </FormItem>
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
        <FormItem>
          <FormLabel name="repeatPassword">Repeat password</FormLabel>
          <div className="relative">
            <Input
              disabled={isPending}
              {...register("repeatPassword")}
              type="password"
              name="repeatPassword"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
              variant="authentication"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
            />
          </div>
          {errors.repeatPassword && (
            <FormErrorMsg>{errors.repeatPassword.message}</FormErrorMsg>
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
          Create an account
        </Button>
      </form>
    </>
  );
};
