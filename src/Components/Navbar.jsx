import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Plans
          </NavLink>
          <NavLink
            to="/prepares"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Prepares
          </NavLink>
          <NavLink
            to="/executes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Executes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
