import React, { useEffect, useState } from "react";
import Loading from "../layouts/Loading";
import { FcMindMap } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profile";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { message, loading, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(changePassword(oldPassword, newPassword));
    setOldPassword("");
    setNewPassword("");
  };

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
        hideProgressBar: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font ">
          <div className=" flex items-center justify-center h-[100vh]">
            <form
              className="md:w-[50%]  mx-auto flex flex-col justify-center h-[90vh]"
              onSubmit={submitHandler}>
              <div className="flex font-medium justify-center items-center text-white mb-4 md:mb-0 space-x-2 ">
                <FcMindMap className="text-2xl" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl">
                  TeachConnect
                </span>
              </div>
              <label
                htmlFor="oldPassword"
                className="leading-7 text-gray-400 para">
                Old Password
              </label>

              <input
                type="password"
                required
                value={oldPassword}
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label
                htmlFor="oldPassword"
                className="leading-7 text-gray-400 para">
                New Password
              </label>
              <input
                type="password"
                required
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button
                disabled={loading}
                type="submit"
                className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-5">
                {" "}
                Change Password{" "}
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
