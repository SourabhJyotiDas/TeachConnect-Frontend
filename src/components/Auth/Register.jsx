import React, { useState } from "react";
import Loading from "../layouts/Loading";
import { Link } from "react-router-dom";
import { FcMindMap } from "react-icons/fc";
import profile from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/user";

export default function Register({ loading }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(profile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
   await dispatch(register(name, email, password, avatar));
  };
  return (
    <>
      {loading ? (
        <Loading message={"This might take a few seconds"} />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font ">
          <div className="bg-gray-900 h-[auto] flex items-center justify-center md:w-[40vw] mx-auto px-5">
            <div className="h-[auto] w-[100%] m-auto py-5 rounded-md ">
              <div className="flex font-medium justify-center items-center text-white mb-4 md:mb-0 space-x-2 ">
                <FcMindMap className="text-2xl" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl">
                  TeachConnect
                </span>
              </div>

              <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-start mt-10">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400 para">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                />
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

                {/* <img  src={avatar} alt="profilepic" /> */}
                {avatar && (
                  <img
                    className="h-[100px] w-[100px] rounded-full border-2 border-black"
                    src={avatar}
                    alt="post"
                  />
                )}

                <input
                  className="w-[90%] my-5 cursor-pointer"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <div className="text-xs my-5 w-[90%] leading-loose">
                  <p className="font-medium">
                    While uploading your profile picture, please ensure:
                  </p>
                  <li className="">
                    Your image should be in JPEG/JPG/PNG format.
                  </li>
                  <li className="">
                    Picture resolution should be between 200x200 pixels
                    4000x4000 pixels.
                  </li>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full ">
                  Sign up
                </button>
                <div className=" border-0 py-1  focus:outline-none hover:text-white rounded flex items-center para my-5">
                  {" "}
                  <Link to="/login">Already a user ? Login</Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
