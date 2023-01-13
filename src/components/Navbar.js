import React from "react";
import { NavLink } from "react-router-dom";
import { config } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center  border-b fixed z-20 bg-white px-10 top-0">
      <div className="flex justify-between w-full max-w-6xl py-6 items-center">
        <img src={config.logo} className="w-16 sm:w-[150px]" alt="" />
        <ul className="font-semibold text-base sm:text-xl gap-5  md:gap-10 xl:gap-20 flex flex-row">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            News
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
