import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import EditInstructor from "../Common/EditInstructor";
import Instructormap from "../LoadingData/Instructormap";
import { toast } from "react-hot-toast";

const Instructor = () => {
  const [OpenInstructor, setInstructor] = useState(false);
  const [FetchingInstructor,setFetchingInstructor] = useState([])

  useEffect(() => {
    GettingAllData();
  }, []);

  const GettingAllData = async () => {
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
        setFetchingInstructor(apires?.data);
        console.log(FetchingInstructor+"ff");
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
            <button onClick={()=>setInstructor(true)} className="flex gap-2 items-center float-right px-4 py-2 text-yellow-800 text-[18px] rounded-md border-2 hover:text-black hover:font-semibold border-yellow-800 hover:bg-yellow-400">
              <FaPlus size={15} />
              Add Instructor
            </button>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Instructor Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              
                <Instructormap oncheck={GettingAllData} Fetching={FetchingInstructor} />
              
            </table>
          </div>
        </div>
      </div>

      {OpenInstructor && (
        <div className="top-0 right-0 left-0 bottom-0 fixed">
          <div className=" bg-slate-300 opacity-90 w-full h-full flex justify-center items-center ">
            <EditInstructor oncheck={GettingAllData} onclose={()=>setInstructor(false)} />
          </div>
        </div>
      )}


    </>
  );
};

export default Instructor;