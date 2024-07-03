import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditByIdInstructor from "../Common/EditByIdInstructor";
import { toast } from 'react-hot-toast'

const Instructormap = ({ Fetching , oncheck}) => {
  const [OpenInstructorById, setInstructorById] = useState(false);
  const [instructor, setInstructor] = useState(null);

async function DeleteData(InstructorId){
  console.log(InstructorId)
  const URL = `${
    import.meta.env.VITE_BACKEND_URL
  }/Schedule/Lecture/DeleteInstructor`;

  try {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({InstructorId}),
    });

    const apires = await response.json();
    console.log(apires);

    if (apires.success) {
      toast.success(apires?.message);
      oncheck();
    } else {
      toast.error(apires?.message);
    }
  } catch (error) {
    toast.error(error.message);
    console.log("error" + error);
  }

} 
  return (
    <> 
      {Fetching.map((instruct) => (
        <tbody>
          <tr class="bg-white border-b text-gray-950 text-[18px]  dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white"
            >
              {instruct.name}
            </th>
            <td class="px-6 py-4">{instruct.email}</td>
            <td class="px-6 py-4">
              <div className=" flex flex-row justify-start items-center gap-4 ">
                <button
                  onClick={() => {
                    setInstructorById(true);
                    setInstructor(instruct)
                  }}
                  >
                  <FaEdit className="text-green-700" size={30} />
                </button>
                <button onClick={()=>{
                  setInstructor(instruct)
                  DeleteData(instruct._id)
                }} >
                  <MdDelete className="text-red-700" size={30} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
      {OpenInstructorById && (
        <div className="top-0 right-0 left-0 bottom-0 fixed">
          <div className=" bg-slate-300 opacity-90 w-full h-full flex justify-center items-center ">
            <EditByIdInstructor
              instructor={instructor}
              oncheck={oncheck}
              onclose={() => setInstructorById(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Instructormap;
