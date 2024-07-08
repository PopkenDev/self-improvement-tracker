"use client";

import { useState } from "react";
import Link from "next/link";

import {
  faBars,
  faClose,
  faDumbbell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RiFocus2Line,
  RiMoonLine,
  RiRestaurant2Line,
  RiLogoutBoxRLine,
  RiSettings4Line,
  RiHome4Line,
  RiDonutChartFill,
  RiArrowDropRightLine,
} from "@remixicon/react";
import { useSession } from "next-auth/react";

export const SideMenu = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "/app",
      icon: <RiHome4Line className="h-5 w-5 text-gray-500" />,
    },
    {
      label: "Nutrition",
      href: "/app/nutrition-tracker",
      icon: <RiDonutChartFill className="h-5 w-5 text-gray-500" />,
    },
    {
      label: "Fitness",
      href: "/app",
      icon: <FontAwesomeIcon icon={faDumbbell} />,
    },
    {
      label: "Sleep",
      href: "/app",
      icon: <RiMoonLine className="h-5 w-5 text-gray-500" />,
    },
    {
      label: "Goals",
      href: "/app",
      icon: <RiFocus2Line className="h-5 w-5 text-gray-500" />,
    },
    {
      label: "Recipes",
      href: "/app",
      icon: <RiRestaurant2Line className="h-5 w-5 text-gray-500" />,
    },
  ];
  return (
    <>
      <button title="open menu" type="button" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-500" />
      </button>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-64 -translate-x-full flex-col overflow-hidden border-r border-white/5 bg-[#121212] py-8 transition duration-300 ease-in-out ${isOpen ? "translate-x-0" : ""}`}
      >
        <button
          title="close menu"
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/10"
        >
          <FontAwesomeIcon icon={faClose} className="h-4 w-4 text-gray-500" />
        </button>
        <div className="flex items-center justify-between px-4">
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-300">Today</p>
            <p className="text-xs font-semibold text-gray-500">2482</p>
            <p className="text-xs font-semibold text-gray-500">kcal</p>
          </div>
          <figure className="flex flex-col items-center">
            <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-white/40 bg-[#333]">
              <FontAwesomeIcon
                icon={faUser}
                className="h-10 w-10 text-gray-500"
              />
            </div>
            <span className="text-sm6 text-center text-gray-500">
              {session?.data?.user?.name}
            </span>
          </figure>
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-300">Progress</p>
            <p className="text-xs font-semibold text-gray-500">3.3 kg</p>
            <p className="text-xs font-semibold text-gray-500">lost</p>
          </div>
        </div>
        <div className="flex-1 px-4 py-12">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-between border-b border-white/5 py-3 text-gray-500"
              >
                <div className="flex items-center gap-x-2">
                  {item.icon}
                  {item.label}
                </div>
                <RiArrowDropRightLine className="h-5 w-5 text-gray-500" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="px-4">
          <nav className="flex flex-col">
            <Link
              href="/app/settings"
              className="flex items-center justify-between border-b border-white/5 py-3 text-gray-500"
            >
              <div className="flex items-center gap-x-2">
                <RiSettings4Line className="h-5 w-5 text-gray-500" />
                Settings
              </div>
              <RiArrowDropRightLine className="h-5 w-5 text-gray-500" />
            </Link>
            <button className="flex w-full items-center justify-between border-b border-white/5 py-3 text-gray-500">
              <div className="flex items-center gap-x-2">
                <RiLogoutBoxRLine className="h-5 w-5 text-gray-500" />
                Log out
              </div>
              <RiArrowDropRightLine className="h-5 w-5 text-gray-500" />
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};
