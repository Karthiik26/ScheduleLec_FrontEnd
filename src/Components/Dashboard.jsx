import React, { useEffect ,useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const Dashboard = () => {
  useEffect(() => {
    GetAllCourses();
    GetAllInstructor();
  }, []);
  const [selectidcourse, setselectidcourse] = useState('');
  const [selectidInstructor, setselectidInstructor] = useState('');

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
        setselectidcourse(apires?.data);
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
        setselectidInstructor(apires?.data);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error" + error);
    }
  };

  return (
    <>
      <div className="max-w-full h-full flex justify-start items-center flex-col mx-4">
        <div className="mt-10">
          <div className="text-3xl text-slate-700 font-bold">
            Welcome Back Admin
          </div>
        </div>
        <div className="mx-4 mt-10 p-4 border w-full shadow-md rounded-lg ">
          <div className="flex flex-col gap-4 justify-start items-start text-left text-xl font-sans font-bold">
            <div className="bg-pink-300 p-4 m-4 w-72 mt-2 h-28 rounded">
              <div className=" flex gap-x-3 mt-2" >
              <FaUsers size={28} />
              <div>Instructors</div>
              </div>
              <div className="text-lg" >
                Total : {selectidInstructor.length}
              </div>
            </div>
            <div className="bg-green-300 p-4 m-4 w-72 mt-2 h-28 rounded">
              <div className=" flex gap-x-3 mt-2" >
              <IoBookSharp size={28} />
              <div>Courses</div>
              </div>
              <div className="text-lg" >
                Total : {selectidcourse.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
