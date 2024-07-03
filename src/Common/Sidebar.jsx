import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../App.css"
import { RxDashboard } from "react-icons/rx";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";

const Sidebar = () => {
  // const user = useSelector((state) => state?.user);
  const [EditUserBtnfunc, setEditUserBtn] = useState(false);
  const [allUsers, setallUsers] = useState([]);
  const [SearchUserB, setSearchUserB] = useState(false);

  const HandleLogOut = async () => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}ChatApp/LogOut`;

    const response = await fetch(URL, {
      method: "GET",
      credentials: "include",
    });

    const mainres = await response.json();

    if (mainres.success) {
      dispatch(logout());
      nav("/Email");
    }
  };

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
          {/* <button
            // title={user?.name}
            className="m-2"
            onClick={() => setEditUserBtn(true)}
          ></button>

          <button
            title="LogOut"
            onClick={HandleLogOut}
            className="w-16 h-16 flex justify-center items-center sidebaractive hover:bg-slate-500 text-black hover:text-white"
          >
            <svg
              className="-ml-3"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 22"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 13L16 11 7 11 7 8 2 12 7 16 7 13z"></path>
              <path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"></path>
            </svg>
          </button> */}
        </div>
      </div>
      {/* message name box */}
      {/* <div className="w-full shadow-lg h-16">
          <div className="h-16 items-center flex">
            <h2 className="text-2xl text-left font-bold p-4">Messages</h2>
          </div>
          <div className="py-[0.5px] bg-slate-300 w-full"></div>

          <div className=" h-[calc(100vh-66px)] overflow-x-hidden overflow-y-auto scrollbar">
            {allUsers.length === 0 && (
              <div className="flex flex-col justify-center items-center mt-10" >
                <div>
                  <svg
                    stroke="currentColor"
                    className="text-slate-400"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    height="5em"
                    width="5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                </div>
                <div className="text-2xl text-center text-slate-400" >Explore Users To Start Conversation</div>
              </div>
            )}
          </div>
        </div> */}

      {/* users search option */}
      {/* {
          SearchUserB && (
          <SearchUsers onclose={()=>{setSearchUserB(false)}} />
        )
        } */}

      {/* edit user */}
      {/* {EditUserBtnfunc && (
          <EditUserBtn onclose={() => setEditUserBtn(false)} user={user} />
        )} */}
    </div>
  );
};

export default Sidebar;
