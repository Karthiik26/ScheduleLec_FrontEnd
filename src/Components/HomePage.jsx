import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Common/Sidebar";
import { FaBookReader } from "react-icons/fa";

const HomePage = () => {
  const location = useLocation();

  const nav = useNavigate();

  console.log(location);
  
  useEffect(()=>{
    if (location.state.email === 'admin@gmail.com') {
      nav('/');
    }else{
      nav('/Email')
    }
  },[location])

  const basePath = location.pathname === "/";

  return (
    <div className="grid lg:grid-cols-[300px,1fr] h-[93vh]">
      <section className={`bg-slate-50 ${!basePath && "hidden"} lg:block`}>
        <Sidebar location={location} />
      </section>

      <section className={`${basePath && "hidden"}`}>
        <Outlet />
      </section>

      {basePath && (
        <div className={`${basePath && "hidden"} lg:block`}>
          <div className="lg:flex flex-col gap-2 justify-center items-center h-[93vh] hidden">
            <NavLink to={"/"} title="Home" className={"cursor-pointer"}>
              <FaBookReader size={150} className="text-gray-400" />
            </NavLink>
            <NavLink to={"/"} title="Home" className={"cursor-pointer"}>
              <h2 className=" text-[52px] font-semibold font-sans text-center text-gray-400 px-4 py-2">
                Schedule Your Lectures
              </h2>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
