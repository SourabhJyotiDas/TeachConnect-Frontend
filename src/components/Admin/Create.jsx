import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FcMindMap } from "react-icons/fc";
import { createCourse } from "../../redux/actions/admin";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layouts/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, message, error } = useSelector((state) => state.admin);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const categories = [
    "Web Development",
    "Andriod Development",
    "Data Structure & Algorithm",
    "Artificial Intellegence",
    "App Development",
    "Game Development",
    "Ios Development",
    "Machine Learning",
    "Computer Science",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
        setImagePrev(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      createCourse(title, description, category, createdBy, image)
    );
    navigate("/admin/courses");
  };

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
    window.scroll(0, 0);
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar />
          <section className="text-gray-400 bg-gray-900 flex flex-col items-center justify-center pt-20 px-3">
            <div>
              <p className="text-center para text-xs">{`Last Updated was on ${
                String(new Date()).split("G")[0]
              }`}</p>
            </div>
            <div className=" flex items-center justify-center h-[100vh] w-full">
              <form
                className="md:w-[50%]  mx-auto flex flex-col justify-center h-auto w-full"
                onSubmit={submitHandler}>
                <div className="flex font-medium justify-center items-center text-white mb-4 md:mb-0 space-x-2 ">
                  <FcMindMap className="text-2xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl">
                    TeachConnect
                  </span>
                </div>
                <label htmlFor="title" className="leading-7 text-gray-400 para">
                  Title
                </label>

                <input
                  type="text"
                  required
                  value={title}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="description"
                  className="leading-7 text-gray-400 para">
                  Description
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label
                  htmlFor="creator"
                  className="leading-7 text-gray-400 para">
                  Creator
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                />

                <select
                  name=""
                  id=""
                  className="bg-gray-800 my-5 py-3 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}>
                  <option value="" className="text-gray-400">
                    Categories
                  </option>
                  {categories.map((item, index) => (
                    <option key={index} value={item} className="text-gray-400">
                      {item}
                    </option>
                  ))}
                </select>

                {/* <img  src={avatar} alt="profilepic" /> */}
                {imagePrev && (
                  <img
                    className="h-[100%] w-[100%] "
                    src={imagePrev}
                    alt="post"
                  />
                )}

                <input
                  className="w-[90%] my-5 cursor-pointer"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <button
                  disabled={loading}
                  type="submit"
                  className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-5">
                  {" "}
                  Create{" "}
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </>
  );
}
