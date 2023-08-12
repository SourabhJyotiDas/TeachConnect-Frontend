import React from "react";
import { Link } from "react-router-dom";
import {TbError404} from "react-icons/tb"

export default function NotFound() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font h-[100vh] w-full flex flex-col  items-center justify-center space-y-10">
      <p className="text-5xl flex items-center "> Not Found <TbError404 className="ml-5"/></p>

      <Link to={"/"}>
        <button
          type="button"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  heading">
          Back to Home
        </button>
      </Link>
    </section>
  );
}
