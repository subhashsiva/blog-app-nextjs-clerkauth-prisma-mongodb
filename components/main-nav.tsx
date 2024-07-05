"use client";

import { usePathname } from "next/navigation";
import React from "react";

export const MainNav = () => {
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/About",
      label: "About Us",
    },
    {
      href: "/Contact",
      label: "Contact Us",
    },
  ];

  return (
    <ul className="flex items-center px-5 gap-4 ml-auto">
      {routes.map((route) => (
        <li key={route.href}>{route.label}</li>
      ))}
    </ul>
  );
};
