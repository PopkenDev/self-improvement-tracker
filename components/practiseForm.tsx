"use client";

import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const formSchema: ZodType<FormData> = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const PractiseForm = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
      <label className="text-white" htmlFor="name">
        Name
      </label>
      <input type="text" id="name" {...register("name")} />
      <label className="text-white" htmlFor="email">
        Email
      </label>
      <input type="email" id="email" {...register("email")} />
      <label className="text-white" htmlFor="password">
        Password
      </label>
      <input type="password" id="password" {...register("password")} />
      <button className="text-white" type="submit">
        Submit
      </button>
    </form>
  );
};
