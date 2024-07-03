import React, { useState } from "react";
import { toast } from 'react-hot-toast'
const EditByIdInstructor = ({ onclose, instructor, oncheck }) => {
  const [data, setData] = useState({
    name: instructor.name,
    email: instructor.email,
  });

  const InstructorId = instructor._id;

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
    }/Schedule/Lecture/UpdateInstructor/${InstructorId}`;

    try {
      // Assuming data is a JavaScript object
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const apires = await response.json();

      console.log(apires);

      if (apires.success) {
        toast.success(apires?.message);
        oncheck();
        onclose();
      } else {
        toast.error(apires?.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("error" + error);
    }
  };

  return (
    <div className="w-full max-w-full h-full flex justify-center items-center my-28">
      <div className="w-4/12 pl-8 pt-2 pb-2 pr-8 m-2 shadow-2xl grid gap-4  bg-white">
        <form onSubmit={HandleSubmit}>
          <div className=" text-[24px] font-bold p-2 m-1 text-red-600 float-right">
            <button onClick={onclose}>x</button>
          </div>
          <h2 className="font-bold text-xl mt-5 text-center mb-3">
            Update Instructor
          </h2>

          <div className="grid grid-flow-row">
            <label htmlFor="name">Name Of Instructor: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={HandleInputElement}
              placeholder="Enter Your name"
              className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
              required
            />
          </div>

          <div className="grid grid-flow-row">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={HandleInputElement}
              placeholder="Enter Instructors email "
              className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
              required
            />
          </div>

          <div className="grid grid-flow-row mt-8 mb-6">
            <button
              type="submit"
              className="text-lg bg-blue-400 text-white hover:bg-blue-300 font-semibold w-auto p-2 rounded-md"
            >
              Add Instructor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditByIdInstructor;
