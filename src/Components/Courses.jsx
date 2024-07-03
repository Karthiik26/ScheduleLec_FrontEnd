import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import EditCourseBtn from "../Common/EditCourseBtn";
import EditByIdCourse from "../Common/EditByIdCourse";
import Coursesmap from "../LoadingData/Coursesmap";
import { FaPlus } from "react-icons/fa";

const Courses = () => {
  const [OpenEditcoursebtn, setOpenEditCoursebtn] = useState(false);
  const [FetchingCourse, setFetchingCourse] = useState([]);


  useEffect(() => {
    GettingAllData();
  }, []);

  const GettingAllData = async () => {
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
        // console.log(FetchingCourse+"ff");
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error" + error);
    }
  };

  return (
    <>
      <div className="my-6 mx-16">
        <div className="px-12 py-12 border-2 rounded-md flex flex-col">
          <div className="my-4 w-full ">
            <button
              onClick={() => setOpenEditCoursebtn(true)}
              className="flex gap-2 items-center float-right px-4 py-2 text-blue-800 text-[18px] rounded-md border-2 hover:text-white hover:font-semibold border-blue-800 hover:bg-blue-400"
            >
              <FaPlus size={15} />
              Add Course
            </button>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Courses Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Level
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Batch
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <Coursesmap oncheck={GettingAllData} Fetching={FetchingCourse} />
            </table>
          </div>
        </div>
      </div>

      {OpenEditcoursebtn && (
        <div className="top-0 right-0 left-0 bottom-0 fixed">
          <div className=" bg-slate-200 opacity-90 w-full h-full flex justify-center items-center ">
            <EditCourseBtn  oncheck={GettingAllData} onclose={() => setOpenEditCoursebtn(false)} />
          </div>
        </div>
      )}

    </>
  );
};

export default Courses;
