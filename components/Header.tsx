import React from "react";
import { MainNav } from "./main-nav";

const Header = () => {
  return (
    <div className="w-screen flex items-center p-5 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-neutral-700 ">
        Siva
      </h2>
      <MainNav />
    </div>
  );
};

export default Header;
