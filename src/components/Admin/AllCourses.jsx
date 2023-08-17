import React from "react";
import Sidebar from "./Sidebar";
import background from "../../assets/bg1.jpg";
import { Link } from "react-router-dom";

export default function AllCourses() {
  const updateHandler = async (id) => {
    console.log("updated Successfully");
  };

  const deleteHandler = async (id) => {
    console.log("deleted Successfully");
  };

  return (
    <>
      <Sidebar />
      <section className="text-gray-400 bg-gray-900 flex flex-col items-center justify-center pt-20 px-3">
        <div>
          <p className="text-center para text-xs">{`Last Updated was on ${
            String(new Date()).split("G")[0]
          }`}</p>
        </div>
        <div className=" scrollbar-none overflow-x-auto w-full xl:w-auto py-10">
          <thead>
            <tr className="">
              <th className="border px-10 border-gray-400 uppercase">Id</th>
              <th className="border px-10 border-gray-400 uppercase">Poster</th>
              <th className="border px-10 border-gray-400 uppercase">Title</th>
              <th className="border px-10 border-gray-400 uppercase">
                Category
              </th>
              <th className="border px-10 border-gray-400 uppercase">
                Creator
              </th>
              <th className="border px-10 border-gray-400 uppercase">Views</th>
              <th className="border px-10 border-gray-400 uppercase">
                Lectures
              </th>
              <th className="border px-10 border-gray-400 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                #iddsfdqsdsad
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                <img src={background} alt="" />
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                React Course
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                Web development
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                Code with Harry
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                124
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                25
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap flex  items-center py-2 space-x-5">
                <Link to={`/admin/lecture/${"lecture_id"}`}>
                  <button
                    onClick={() => {
                      updateHandler("id");
                    }}
                    className="text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full">
                    View Lectures
                  </button>
                </Link>
                <button
                  onClick={() => {
                    deleteHandler("id");
                  }}
                  className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded flex items-center justify-center heading w-full">
                  Delete Lectures
                </button>
              </td>
            </tr>
          </tbody>
        </div>
      </section>
    </>
  );
}
