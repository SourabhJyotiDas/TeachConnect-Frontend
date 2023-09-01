import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/user";

export default function ProfileSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = async () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative h-[100vh] w-full flex flex-col items-center justify-center space-y-5 heading">
        <Link to={"/editprofile"}>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            Edit Profile
          </button>
        </Link>
        <Link to={"/changepassword"}>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            Change Password
          </button>
        </Link>
        <button
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-sm"
          onClick={handlelogout}>
          Logout
        </button>
        <Link to={"/"}>
          <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm">
            Back To Home
          </button>
        </Link>
      </section>
    </>
  );
}
