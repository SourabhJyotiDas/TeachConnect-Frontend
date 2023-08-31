import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from "../../redux/actions/admin";
import { toast } from "react-toastify";
import Loading from "../layouts/Loading";

export default function AllUsers() {
  const dispatch = useDispatch();

  const { users, loading, error, message } = useSelector(
    (state) => state.admin
  );

  const updateHandler = async (id) => {
    await dispatch(updateUserRole(id));
    dispatch(getAllUsers());
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getAllUsers());
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch({ type: "clearMessage" });
    }
    window.scroll(0, 0);
  }, [dispatch, error, message]);

  return (
    <>
      <Sidebar />
      {loading ? (
        <Loading />
      ) : (
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
              {users?.map((data, index) => (
                <tr key={index}>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    #{data._id}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {data.name}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {data.email}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {data.role}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {data.subscription && data.subscription.status}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap flex  items-center py-2 space-x-5">
                    <button
                      onClick={() => {
                        updateHandler(data._id);
                      }}
                      className="text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full">
                      Change Role
                    </button>
                    <button
                      onClick={() => {
                        deleteHandler(data._id);
                      }}
                      className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded flex items-center justify-center heading w-full">
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </section>
      )}
    </>
  );
}
