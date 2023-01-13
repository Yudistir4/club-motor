import React from "react";
import { NavLink } from "react-router-dom";
import { config } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center  border-b sticky">
      <div className="flex justify-between w-full max-w-6xl py-6 items-center">
        <img src={config.logo} className="w-[150px]" alt="" />
        <ul className="font-semibold text-xl gap-20 flex flex-row">
          <NavLink
            to="/"
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
                ? "border-b-blue-500"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "border-b-blue-500"
                : "border-y-4 transition-all border-transparent hover:border-b-blue-500 cursor-pointer"
            }
          >
            News
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-blue-500"
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