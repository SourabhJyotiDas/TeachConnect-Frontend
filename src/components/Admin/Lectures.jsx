import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Lectures({ loading }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setVideoPrev(Reader.result);
        setVideo(Reader.result);
      }
    };
  };

  const submitHandler = async () => {
    console.log("uploaded successfully");
  };

  return (
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
              value={description}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
              onChange={(e) => setDescription(e.target.value)}
            />

            {videoPrev && (
              <video
                className="w-[90%] m-auto md:w-[70%] shadow-xl border border-gray-500 outline-none my-10"
                autoPlay
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={videoPrev}></video>
            )}

            <input
              className="w-[90%] my-5 cursor-pointer"
              type="file"
              accept="video/mp4"
              onChange={changeVideoHandler}
            />

            <button
              disabled={loading}
              type="submit"
              className="text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full my-5">
              Upload
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
