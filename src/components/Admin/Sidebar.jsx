import React from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const handleToggle = () => {
    document.getElementById("open").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
    document.getElementById("sidebar").classList.toggle("hidden");
  };

  return (
    <>
      <AiOutlineMenu
        onClick={handleToggle}
        id="open"
        className="fixed top-40 left-3 z-10 text-white text-2xl "
      />
      <AiOutlineCloseCircle
        onClick={handleToggle}
        id="close"
        className="hidden fixed left-3 top-40 z-10 text-white text-2xl "
      />
      <div onClick={handleToggle} id="sidebar" className="hidden">
        <section className=" text-gray-400 bg-gray-800 body-font w-[40vw] h-[85vh] flex flex-col items-center justify-center space-y-5 heading fixed top-[8.5rem] text-xs">
          <Link
            to={"/admin/dashboard"}
            className={
              location.pathname === "/admin/dashboard" ? "active" : ""
            }>
            Dashboard
          </Link>
          <Link
            to={"/admin/createcourse"}
            className={
              location.pathname === "/admin/createcourse" ? "active" : ""
            }>
            Create Courses
          </Link>
          <Link
            to={"/admin/courses"}
            className={location.pathname === "/admin/courses" ? "active" : ""}>
            Courses
          </Link>
          <Link
            to={"/admin/users"}
            className={location.pathname === "/admin/users" ? "active" : ""}>
            Users
          </Link>
        </section>
      </div>
    </>
  );
}
