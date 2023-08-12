import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileSetting() {
  const navigate = useNavigate();
  const handlelogout = async () => {
    console.log("logout Successfully");
    await navigate("/");
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative h-[100vh] w-full flex flex-col items-center justify-center space-y-5 heading">
        <Link to={"/editprofile"}>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Edit Profile
          </button>
        </Link>
        <Link to={"/changepassword"}>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Change Password
          </button>
        </Link>
        <button
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          onClick={handlelogout}>
          Logout
        </button>
        <Link to={"/"}>
          <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Back To Home
          </button>
        </Link>
      </section>
    </>
  );
}