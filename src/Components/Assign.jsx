import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import EditAssign from "../Common/EditAssign";
import Lecturer from "../LoadingData/Lecturer";
import { toast } from "react-hot-toast";

const Assign = () => {
  const [openSchedule, setopenSchedule] = useState(false);
  const [FetchingLecture, setFetchingLecture] = useState([]);

  useEffect(() => {
    GettingAllData();
  }, [])

  const GettingAllData = async () => {
    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/GetAllLectures`;

    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const apires = await response?.json();

      console.log(apires?.data);

      if (apires?.success) {
        setFetchingLecture(apires?.data);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error" + error);
    }
  };

  return (
    <>
      <div className="my-6 mx-16">
        <div className="px-12 py-12 border-2  rounded-md flex flex-col">
          <div className="my-4 w-full ">
            <button
              onClick={() => setopenSchedule(true)}
              className="flex gap-2 items-center float-right px-4 py-2 font-semibold text-green-800 text-[18px] rounded-md border-2 hover:text-white hover:font-semibold border-green-800 hover:bg-green-400"
            >
              <FaPlus size={15} />
              Schedule Lecture
            </button>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Courses
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Instructor
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <Lecturer FetchingLecture={FetchingLecture} />
            </table>
          </div>
        </div>
      </div>

      {openSchedule && (
        <div className="top-0 right-0 left-0 bottom-0 fixed">
          <div className=" bg-slate-300 opacity-90 w-full h-full flex justify-center items-center ">
            <EditAssign oncheck={GettingAllData} onclose={() => setopenSchedule(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Assign;
