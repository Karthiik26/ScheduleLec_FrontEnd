import React, { useState } from 'react'
import uploadFile from "../Helper/uploadFile"
import { toast } from "react-hot-toast";

const EditCourseBtn = ({onclose,oncheck}) => {
  const [data, setData] = useState({
    name:"",
    level:"",
    description:"",
    image:""
  });

  const HandleInputElement = (e) => {
    const { name, value } = e.target;

    setData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };

  const HandleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    const response = await uploadFile(file);
    console.log(response);
    setData((Preve) => {
      return {
        ...Preve,
        image: response?.url,
      };
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${import.meta.env.VITE_BACKEND_URL}/Schedule/Lecture/AddCourse`;

    try {

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const apires = await response.json();

      console.log(apires);
      
      if (apires.success) { 
        toast.success(apires?.message);
        oncheck()
        onclose()
      } else {
        toast.error(apires?.message);
      }
        
    } catch (error) {
      toast.error(error.message);
      console.log("error" + error);
    }

  }

  return (
    <div className="w-full max-w-full h-full flex justify-center items-center my-28">
      <div className="w-4/12 pl-8 pt-2 pb-2 pr-8 m-2 shadow-2xl grid gap-4  bg-white">
        <form onSubmit={HandleSubmit}>
          <div className=' text-[24px] font-bold p-2 m-1 text-red-600 float-right' >
            <button onClick={onclose} >x</button>
          </div>
          <h2 className="font-bold text-xl mt-5 text-center mb-3">
            New Course
          </h2>

          <div className="grid grid-flow-row">
            <label htmlFor="name">Name Of Course: </label>
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
            <label htmlFor="level">level : </label>
            <input
              type="text"
              name="level"
              id="level"
              value={data.level}
              onChange={HandleInputElement}
              placeholder="Enter Your level "
              className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
              required
            />
          </div>
          <div className="grid grid-flow-row">
            <label htmlFor="description">description : </label>
            <input
              type="text"
              name="description"
              id="description"
              value={data.description}
              onChange={HandleInputElement}
              placeholder="Enter Your description"
              className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
              required
            />
          </div>

          <div className="p-2">
            <label className="text-md font-sans font-semibold">
              Image :{" "}
            </label>
            <div className="flex justify-start items-center m-4">
              <div>
                {
                  data?.image && (
                    <div>
                    <img className='w-32 h-32 p-1 rounded-full' name={data?.name} src={data?.image} />
                    </div>
                  )
                }
              </div>

              <label htmlFor="profile_pic">
                <div className="mx-8 p-2 bg-amber-300 text-center font-semibold rounded-lg cursor-pointer">
                  Change Photo
                </div>
              </label>
              <input
                type="file"
                id="profile_pic"
                className="hidden"
                onChange={HandleUploadPhoto}
              />
            </div>
          </div>

          <div className="grid grid-flow-row mt-8 mb-6">
            <button
              type="submit"
              className="text-lg bg-blue-700 text-white hover:bg-blue-500 font-semibold w-auto p-2 rounded-md"
            >
             Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCourseBtn
