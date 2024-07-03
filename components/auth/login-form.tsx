"use client";

import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  return (
    <form className="mt-8 flex w-[380px] flex-col space-y-6 p-8">
      <div className="relative flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-semibold text-[#efefef]">
          Email
        </label>
        <div className="relative">
          <Input
            onChange={() => {}}
            required={true}
            type="email"
            placeholder="john.doe@example.com"
            variant="authentication"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-sm font-semibold text-[#efefef]">
          Password
        </label>
        <div className="relative w-full">
          <input
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            className="w-full rounded-md bg-gradient-to-r from-[#02150f] from-5% to-emerald-800 to-55% px-4 py-2.5 pl-12 text-white outline-none placeholder:text-white/80"
            required
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-emerald-400"
          />
        </div>
      </div>
      <Button type="button" className="bg-emerald-600 text-white">
        Login
      </Button>
    </form>
  );
};
