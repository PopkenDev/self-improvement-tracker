import { z, ZodType } from "zod";

export type FormData = {
  name?: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

export const RegisterSchema: ZodType<FormData> = z
  .object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, "Password must contain atleast 6 characters"),
    repeatPassword: z
      .string()
      .min(6, "Password must contain atleast 6 characters"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match!",
    path: ["repeatPassword"],
  });

export const LoginSchema: ZodType<FormData> = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, "Password must contain atleast 6 characters"),
});
