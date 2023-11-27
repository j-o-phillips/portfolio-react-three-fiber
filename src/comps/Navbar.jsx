import React from "react";
import { Link } from "react-router-dom";
import ColorToggle from "./ColorToggle";

const Navbar = () => {
  return (
    <nav className="w-full text-white h-[50px] flex justify-between items-center">
      <Link className="mx-3">Jake Phillips</Link>
      <ColorToggle />
    </nav>
  );
};

export default Navbar;
