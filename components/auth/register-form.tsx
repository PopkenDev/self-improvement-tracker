"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
import { FormError } from "@/components/ui/form-error";
import { Register } from "@/actions/register";
import { FormData, RegisterSchema } from "@/schemas";

export const RegisterForm = () => {
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
      Register(data);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex w-[450px] flex-col space-y-6 p-8"
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
        {errors.name && <FormError>{errors.name.message}</FormError>}
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
        {errors.email && <FormError>{errors.email.message}</FormError>}
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
        {errors.password && <FormError>{errors.password.message}</FormError>}
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
          <FormError>{errors.repeatPassword.message}</FormError>
        )}
      </FormItem>
      <div className="pt-6">
        <Button
          disabled={isPending}
          type="submit"
          className="w-full bg-emerald-600 text-white"
        >
          Create an account
        </Button>
      </div>
    </form>
  );
};
