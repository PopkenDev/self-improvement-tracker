"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";

export const LoginForm = () => {
  return (
    <form className="mt-8 flex w-[450px] flex-col space-y-8 p-8">
      <FormItem>
        <FormLabel name="email">Email</FormLabel>
        <div className="relative">
          <Input
            onChange={() => {}}
            required={true}
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
      <Button type="button" className="bg-emerald-600 text-white">
        Login
      </Button>
    </form>
  );
};
