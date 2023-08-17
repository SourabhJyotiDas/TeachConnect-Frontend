import React from "react";
import Sidebar from "./Sidebar";

export default function AllUsers() {
  const updateHandler = async (id) => {
    console.log("updated Successfully");
  };

  const deleteHandler = async (id) => {
    console.log("deleted Successfully");
  };

  return (
    <>
      <Sidebar />
      <section className=" text-gray-400 bg-gray-900 body-font flex flex-col space-y-5 items-center justify-center py-10">
        <h2 className="text-center heading text-2xl uppercase">All Users</h2>
        <p className="text-center para text-xs">{`Last Updated was on ${
          String(new Date()).split("G")[0]
        }`}</p>
        <div className=" scrollbar-none overflow-x-auto w-full xl:w-auto">
          <thead>
            <tr className="">
              <th className="border px-10 border-gray-400">Id</th>
              <th className="border px-10 border-gray-400">Name</th>
              <th className="border px-10 border-gray-400">Email</th>
              <th className="border px-10 border-gray-400">Role</th>
              <th className="border px-10 border-gray-400">Subscription</th>
              <th className="border px-10 border-gray-400">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                #iddsfdqsdsad
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                Sourabh Jyoti Das
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                dassourabh126@gmail.com
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                Admin
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap">
                Active
              </td>
              <td className="border px-10 border-gray-400 whitespace-nowrap flex  items-center py-2 space-x-5">
                <button
                  onClick={() => {
                    updateHandler("id");
                  }}
                  className="text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full">
                  Change Role
                </button>
                <button
                  onClick={() => {
                    deleteHandler("id");
                  }}
                  className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded flex items-center justify-center heading w-full">
                  Delete user
                </button>
              </td>
            </tr>
          </tbody>
        </div>
      </section>
    </>
  );
}
