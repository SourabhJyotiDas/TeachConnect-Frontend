import React, { useState } from "react";
import Loading from "../layouts/Loading";

export default function Editprofile({ loading }) {
  const [name, setName] = useState("user.name");
  const [email, setEmail] = useState("user.email");
  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState("user.avatar.url");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatarPrev(Reader.result);
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {loading ? (
        <Loading message={"Updating..."} />
      ) : (
        <div className="text-gray-400 bg-gray-900 h-[100vh] flex items-center justify-center ">
          <div className="md:h-[80%] w-[100%] m-auto  py-5 rounded-md md:w-[50vw] md:mx-auto px-3">
            <h1 className="headingFont text-center text-3xl py-5 ">
              TeachConnect{" "}
            </h1>
            <div className="flex items-center justify-center">
              <img
                className="inline-block h-[100px] w-[100px] rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-1"
                src={avatarPrev}
                alt="post"
              />
            </div>
            <form
              onSubmit={submitHandler}
              className="flex flex-col justify-center items-start mt-10">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="my-5"
              />
              <button type="submit" className="flex justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center w-full">
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
