import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { menus } from "../utils/menus";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 sticky top-0 left-0 bottom-0">
      <div
        className={` p-[8px] bg-[#0e0e0e] max-h-screen ${
          open ? "w-60" : "w-20"
        } duration-500 text-gray-100 px-4 rounded-r-2xl shadow-2xl overflow-y-auto custom-scrollbar`}
      >
         <div className={`py-3 flex  ${open ? "justify-end": "justify-center"} `}>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className=" flex flex-col gap-4 mb-5 relative ">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-black bg-white flex p-2  gap-3.5 rounded-md group items-center text-sm font-medium"
                    : " group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md "
                }`
              }
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default Navbar;
