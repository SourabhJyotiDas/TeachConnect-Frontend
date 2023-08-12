import React from "react";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Profile() {
  const isAuthenticated = true;
  const user = {
    role: "admin",
    name: "Sourabh",
    email: "Sourabh@gmail.com",
    createdAt: Date.now(),
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font flex flex-col space-y-5 items-center justify-center py-10">
        <img
          className="inline-block h-[100px] w-[100px] rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-1"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt={user.name}
        />
        <h3 className="text-2xl heading">Name : Sourabh Jyoti Das</h3>
        <p>Email : {user.email}</p>
        <p className="para text-center">CreatedAT : {user.createdAt}</p>

        <div className="flex items-center justify-evenly w-full">
          {user && user.role === "admin" ? (
            <>
              <Link to={"/admin/dashboard"}>
                <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg flex items-center">
                  <RxDashboard className="mx-2" />
                  Dashboard
                </button>
              </Link>
            </>
          ) : null}
          <Link to={"/settings"}>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center">
              <FiSettings className="mx-2" />
              Profile
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
