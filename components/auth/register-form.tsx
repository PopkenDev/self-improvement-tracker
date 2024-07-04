"use client";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
// import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../ui/form-error";

type FormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const RegisterSchema: ZodType<FormData> = z
  .object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, "Password must contain atleast 6 characters"),
    repeatPassword: z
      .string()
      .min(6, "Password must contain atleast 6 characters"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("IT WORKED: ", data);
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
      <Button type="submit" className="bg-emerald-600 text-white">
        Register
      </Button>
      <input type="submit" value="Register" className="text-white" />
    </form>
  );
};
