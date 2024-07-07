"use client";

import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
import { FormErrorMsg } from "@/components/ui/form-error";

type FormData = {
  email: string;
  password: string;
};

const LoginSchema: ZodType<FormData> = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("IT WORKED: ", data);
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
            {...register("email")}
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            variant="authentication"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
        {errors.email && <FormErrorMsg>{errors.email.message}</FormErrorMsg>}
      </FormItem>
      <FormItem>
        <FormLabel name="password">Password</FormLabel>
        <div className="relative">
          <Input
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
      <Button type="submit" variant="default">
        Login
      </Button>
    </form>
  );
};
