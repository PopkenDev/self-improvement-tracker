import { z, ZodType } from "zod";

export type FormData = {
  name?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;

  // BMR
  gender?: string;
  age?: number;
  weight?: number;
  height?: number;
  activityLevel?: number;
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

export const BMRschema: ZodType<FormData> = z.object({
  gender: z.enum(["male", "female"]),
  age: z.coerce
    .number()
    .min(1, "Please enter your age")
    .max(99, "Please enter a valid age"),

  weight: z.coerce
    .number()
    .min(1, "Please enter your weight")
    .max(200, "Please enter a valid weight"),
  height: z.coerce
    .number()
    .min(1, "Please enter your height")
    .max(250, "Please enter a valid height"),
});
