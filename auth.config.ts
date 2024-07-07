import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas";

export default {
  providers: [],
} satisfies NextAuthConfig;
