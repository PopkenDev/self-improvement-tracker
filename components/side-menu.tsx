"use client";

import { useState } from "react";
import Link from "next/link";

import { faBars, faClose, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RiFocus2Line, RiMoonLine, RiRestaurant2Line } from "@remixicon/react";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/app" },
    {
      label: "Nutrition",
      href: "/app/nutrition-tracker",
      icon: <RiRestaurant2Line className="h-5 w-5 text-white" />,
    },
    {
      label: "Fitness",
      href: "/app",
      icon: <FontAwesomeIcon icon={faDumbbell} />,
    },
    {
      label: "Sleep",
      href: "/app",
      icon: <RiMoonLine className="h-5 w-5 text-white" />,
    },
    {
      label: "Goals",
      href: "/app",
      icon: <RiFocus2Line className="h-5 w-5 text-white" />,
    },
  ];
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
      </button>
      <aside
        className={`light-shadow absolute left-0 top-0 z-50 h-screen w-52 -translate-x-full overflow-hidden bg-[#121212] transition duration-300 ease-in-out ${isOpen ? "translate-x-0" : ""}`}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-2 top-2 h-4 w-4 text-white"
          onClick={() => setIsOpen(false)}
        />
        <div className="px-4 py-24">
          <nav className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-x-2 text-white"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
