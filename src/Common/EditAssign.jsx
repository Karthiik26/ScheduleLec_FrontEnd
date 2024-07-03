import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast"

const EditAssign = ({ onclose ,oncheck }) => {
  const [FetchingCourse, setFetchingCourse] = useState([]);
  const [FetchingInstructors, setFetchingInstructors] = useState([]);
  const [selectidcourse, setselectidcourse] = useState(null);
  const [selectidInstructor, setselectidInstructor] = useState(null);

  const [data, setData] = useState({
    date: "",
    batchName: "",
  });

  useEffect(() => {
    GetAllCourses();
    GetAllInstructor();
  }, []);

  const HandleInputElement = (e) => {
    const { name, value } = e.target;

    setData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };

  const GetAllCourses = async () => {
    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/GetAllCourses`;

    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const apires = await response.json();

      console.log(apires?.data);

      if (apires?.success) {
        setFetchingCourse(apires?.data);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error" + error);
    }
  };

  const GetAllInstructor = async () => {
    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/GetAllInstructor`;

    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const apires = await response.json();

      console.log(apires?.data);

      if (apires?.success) {
        setFetchingInstructors(apires?.data);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error" + error);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    let data2 = {
      courseId: selectidcourse,
      instructorId: selectidInstructor,
      date: data.date,
      batchName: data.batchName,
    };

    console.log(data2)

    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/AddLecturerToCourse`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data2),
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
    <>
      <div className="w-full max-w-full h-full flex justify-center items-center my-28">
        <div className="w-4/12 pl-8 pt-2 pb-2 pr-8 m-2 shadow-2xl grid gap-4  bg-white">
          <form onSubmit={HandleSubmit}>
            <div className=" text-[24px] font-bold p-2 m-1 text-red-600 float-right">
              <button onClick={onclose}>x</button>
            </div>
            <h2 className="font-bold text-xl mt-5 text-center mb-3">
              Schedule Lecture
            </h2>

            <div className="grid grid-flow-row">
              <label htmlFor="Course">Course : </label>
              <select
                name="Course"
                id="Course"
                onChange={(e) => setselectidcourse(e.target.value)}
                onClick={() => console.log(selectidcourse)}
                className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
                required
              >
                <option value="">Select Your Course</option>
                {FetchingCourse.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-flow-row">
              <label htmlFor="Instructor">Instructor : </label>
              <select
                name="Instructor"
                id="Instructor"
                onChange={(e) => setselectidInstructor(e.target.value)}
                onClick={() => console.log(selectidInstructor)}
                className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
                required
              >
                <option value="">Select Your Instructor</option>
                {FetchingInstructors.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-flow-row">
              <label htmlFor="date">Select Date: </label>
              <input
                type="date"
                name="date"
                id="date"
                value={data.date}
                onChange={HandleInputElement}
                placeholder="select the date "
                className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
                required
              />
            </div>

            <div className="grid grid-flow-row">
              <label htmlFor="batchName">Enter Batch Name : </label>
              <input
                type="text"
                name="batchName"
                id="batchName"
                value={data.batchName}
                onChange={HandleInputElement}
                placeholder="Enter Batch Name "
                className="p-3 text-[18px] m-2 border-2 focus:outline-blue-300"
                required
              />
            </div>

            <div className="grid grid-flow-row mt-8 mb-6">
              <button
                type="submit"
                className="text-lg bg-blue-700 text-white hover:bg-blue-500 font-semibold w-auto p-2 rounded-md"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAssign;

{
  /* <div className=' text-[24px] font-bold p-2 m-1 text-red-600 float-right' >
            <button onClick={onclose} >x</button>
          </div> */
}
