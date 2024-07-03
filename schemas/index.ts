import * as z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    repeatPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });
