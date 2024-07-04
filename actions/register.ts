"use server";

import { RegisterSchema } from "@/components/auth/register-form";
import { z } from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
};
