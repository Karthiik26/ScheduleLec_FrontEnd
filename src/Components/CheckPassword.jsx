import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

const CheckPassword = () => {
  
  const location = useLocation();
  console.log(location);

  const nav = useNavigate();

  const [data, setData] = useState({
    password: "",
    AdminId: location?.state?._id,
  });
  
  useEffect(() => {
    if (!location?.state?.name) {
      nav("/Email");
    }
  }, [!location?.state?.name]);

  const HandleInputElement = (e) => {
    const { name, value } = e.target;
    setData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/AdminCheckPasswordLogin`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const apires = await response.json();

      if (apires.success) { 
        toast.success(apires?.message);
        nav("/");

        console.log(apires);

        localStorage.setItem("Admin", apires?.data);
      } else {
        toast.error(apires?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="w-4/12 pl-8 pt-2 pb-2 pr-8 m-2 shadow-2xl grid gap-4">
        <form onSubmit={HandleSubmit}>
          <div>
            {location?.state?.name && (
              <div className="flex justify-center items-center m-4 flex-col">
                <div className="rounded-full border shadow-xl px-12 py-7">
                  <RiAdminFill size={90} />
                  <h1 className="text-center font-bold text-xl">
                    {location?.state?.name}
                  </h1>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-flow-row">
            <label htmlFor="password">Password : </label>
            <input
              type="text"
              name="password"
              id="password"
              value={data.password}
              onChange={HandleInputElement}
              placeholder="Enter Your Password"
              className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
              required
            />
          </div>

          <div className="grid grid-flow-row mt-8 mb-5">
            <button
              type="submit"
              className="text-lg bg-blue-400 text-white hover:bg-blue-300 font-semibold w-auto p-2 rounded-md "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckPassword;
