import React, { useState } from "react";
import Loading from "../layouts/Loading";
import { Link } from "react-router-dom";

export default function Login({ loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("Login Successfully");
  };
  return (
    <>
      {loading ? (
        <Loading message="Connecting" />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font ">
          <div className=" h-[100vh] flex items-center bg-gray-900 justify-center md:mx-auto md:w-[50vw] px-3">
            <div className="h-[auto] w-[100%] m-auto  py-5 rounded-md">
              <form
                onSubmit={loginHandler}
                className="flex flex-col justify-center items-start mt-10">
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
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                />
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-400 para">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                />
                <button
                  type="submit"
                  className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-3">
                  Log in
                </button>
                <div className=" border-0 py-1  focus:outline-none hover:text-white rounded flex items-center para my-5">
                  {" "}
                  <Link to="/register">New user ? Register</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
