import React from "react";
import { Link } from "react-router-dom";
import { FcMindMap } from "react-icons/fc";


export default function Navbar() {
  const isAuthenticated = true;

  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-20 heading ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 space-x-2">
          <FcMindMap className="text-2xl" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl">
            TeachConnect
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to={"/courses"} className="mr-5 hover:text-white">
            Courses
          </Link>
          <Link to={"/request"} className="mr-5 hover:text-white">
            Request A Course
          </Link>
          <Link to={"/contact"} className="mr-5 hover:text-white">
            Contact Us
          </Link>

          {isAuthenticated ? (
            <Link to={"/profile"}>Profile</Link>
          ) : (
            <Link to={"login"}>
              <button className="inline-flex items-center bg-indigo-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base  ">
                Login
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
