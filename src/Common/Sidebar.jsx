import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../App.css"
import { RxDashboard } from "react-icons/rx";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";

const Sidebar = () => {

  return (
    <div class="w-full h-full shadow-2xl">
      <div class="flex flex-col justify-between h-full">
        <div class="flex justify-center items-center flex-col gap-3 text-lg text-center font-sans font-semibold">
          <div className="p-8 mt-12 mb-10 border-4 border-gray-500 rounded-full" >
            <FaUser size={95} />
          </div>

          <NavLink
            title="Dashboard"
            to={"/Dashboard"}
            className="py-3  w-64 hover:font-bold isActive float-left hover:text-white rounded-lg px-8 flex justify-evenly items-center hover:bg-gray-500 text-black"
          >
            <RxDashboard size={28} />
            Dashboard
          </NavLink>

          <NavLink
            title="Add Course"
            to={"/Courses"}
            className="py-3 w-64  hover:font-bold isActive float-left hover:text-white rounded-lg px-8 flex  justify-evenly items-center hover:bg-gray-500 text-black"
          >
            <ImBooks size={28} />
            Add Course
          </NavLink>

          <NavLink
            title="Add Instructor"
            to={"/Instructor"}
            className="py-3 w-64  hover:font-bold isActive float-left hover:text-white rounded-lg px-8 flex justify-evenly items-center hover:bg-gray-500 text-black"
          >
            <FaUsers size={28} />
            Add Instructor
          </NavLink>

          <NavLink
            title="Assign Lectures"
            to={"/Assign"}
            className="py-3 hover:font-bold isActive float-left hover:text-white rounded-lg px-8 flex justify-evenly items-center hover:bg-gray-500 text-black"
          >
            <MdAssignmentAdd className="mx-3" size={28} />
            Assign Course's
          </NavLink>
        </div>
        <div className="flex justify-center flex-col gap-1 items-center">
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
