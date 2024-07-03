import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./button";

export const LoginForm = () => {
  return (
    <form className="flex flex-col space-y-6 p-8 w-[380px] mt-8">
      <div className="flex flex-col gap-y-2 relative">
        <label htmlFor="" className="text-[#efefef] text-sm font-semibold">
          Email
        </label>
        <div className="w-full relative">
          <input
            type="email"
            placeholder="john.doe@example.com"
            className="bg-gradient-to-r from-[#02150f] from-5% to-emerald-800 to-55%  py-2.5 pl-12 px-4 text-white outline-none w-full placeholder:text-white/80 rounded-md"
            required
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute h-5 w-5 text-emerald-400 top-1/2 transform -translate-y-1/2 left-4"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-[#efefef] text-sm font-semibold">
          Password
        </label>
        <div className="w-full relative">
          <input
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            className="bg-gradient-to-r from-[#02150f] from-5% to-emerald-800 to-55%  py-2.5 pl-12 px-4 text-white outline-none w-full placeholder:text-white/80 rounded-md"
            required
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute h-5 w-5 text-emerald-400 top-1/2 transform -translate-y-1/2 left-4"
          />
        </div>
      </div>
      <Button type="button" className="text-white bg-emerald-600">
        Login
      </Button>
    </form>
  );
};
