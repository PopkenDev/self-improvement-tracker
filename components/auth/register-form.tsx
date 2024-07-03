"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = () => {
    console.log("LOG:", form.getValues());
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-8 flex w-[380px] flex-col space-y-6 p-8"
    >
      <FormItem>
        <FormLabel name="name">Name</FormLabel>
        <div className="relative">
          <Input
            onChange={() => {}}
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
      </FormItem>
      <FormItem>
        <FormLabel name="email">Email</FormLabel>
        <div className="relative">
          <Input
            onChange={() => {}}
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
      </FormItem>
      <FormItem>
        <FormLabel name="password">Password</FormLabel>
        <div className="relative">
          <Input
            type="password"
            name="password"
            onChange={() => {}}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            variant="authentication"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
      </FormItem>
      <FormItem>
        <FormLabel name="repeatPassword">Repeat password</FormLabel>
        <div className="relative">
          <Input
            type="password"
            name="repeatPassword"
            onChange={() => {}}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            variant="authentication"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
      </FormItem>
      <Button type="submit" className="bg-emerald-600 text-white">
        Register
      </Button>
    </form>
  );
};
