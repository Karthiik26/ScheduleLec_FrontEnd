import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditByIdCourse from "../Common/EditByIdCourse";
import { toast } from "react-hot-toast"

const Coursesmap = ({ Fetching, oncheck }) => {
  const [OpenEditByIdcoursebtn, setOpenEditByIdcoursebtn] = useState(false);
  const [course, setcourse] = useState(null);

  async function DeleteData(CourseId){
    console.log(CourseId)
    const URL = `${
      import.meta.env.VITE_BACKEND_URL
    }/Schedule/Lecture/DeleteCourse`;
  
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({CourseId}),
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
      {Fetching.map((course) => (
        <tbody>
          <tr
            key={course._id}
            className="bg-white text-gray-950 text-[18px] border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white"
            >
              {course.name}
            </th>
            <td className="px-6 py-4">{course.level}</td>
            <td className="px-6 py-4">{course.description}</td>
            <td className="px-6 py-4">
              <img
                src={course.image}
                alt="img not found"
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="px-6 py-4">
              {course.batch.length === 0 ? <p>N/A</p> : course.batch.length}
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-row justify-start items-center gap-4">
                <button onClick={()=>{
                  setOpenEditByIdcoursebtn(true)
                  setcourse(course)
                  }} >
                  <FaEdit className="text-green-700" size={30} />
                </button>
                <button onClick={()=>{
                  setcourse(course)
                  DeleteData(course._id)
                }} >
                  <MdDelete className="text-red-700" size={30} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}

      {OpenEditByIdcoursebtn && (
        <div className="top-0 right-0 left-0 bottom-0 fixed">
          <div className=" bg-slate-200 opacity-90 w-full h-full flex justify-center items-center ">
            <EditByIdCourse oncheck={oncheck} course={course} onclose={() => setOpenEditByIdcoursebtn(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Coursesmap;
