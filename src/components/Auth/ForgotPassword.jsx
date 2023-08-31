import React, { useEffect, useState } from "react";
import Loading from "../layouts/Loading";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/profile";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const { loading, message, error } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    window.scroll(0,0)
  }, [])

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
  }, [dispatch, error, message]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font ">
          <div className="container px-5 py-24 mx-auto flex justify-center items-center flex-wrap">
            <h3 className="text-4xl ">Forgot Password</h3>

            <form
              onSubmit={submitHandler}
              className="flex flex-col justify-center items-start mt-10 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400 para">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="abc@gmail.com"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
              />
              <button
                type="submit"
                className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-3">
                Send Reset Link
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
