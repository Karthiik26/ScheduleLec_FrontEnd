import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink , useNavigate} from "react-router-dom";

const AuthLayout = ({ children }) => {

  const nav = useNavigate();

  const LogOut = () =>{
    localStorage.removeItem('Admin');
    nav('/Email');
  }

  return (
    <>
      <header className="p-2 shadow-xl bg-slate-50">
        <div className="flex justify-between m-0 items-center">
        <NavLink to={'/'} title="Home" className={'cursor-pointer'} >
          <div className="text-2xl ml-3 mr-3 font-bold p-1">Lecture Scheduling</div>
        </NavLink>
          <div className="mx-4 flex justify-center items-center">
            <button onClick={LogOut} className="border border-red-500 px-2 py-1 text-lg rounded-md bg-white text-red-500 flex hover:bg-red-500 hover:text-white">
              Logout
              <IoLogOutOutline size={26} className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {children}
    </>
  );
};

export default AuthLayout;
