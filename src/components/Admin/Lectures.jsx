import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCourseLectures } from "../../redux/actions/course";
import { useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import { toast } from "react-toastify";
import { addLecture, deleteLecture } from "../../redux/actions/admin";
import { AiOutlineDelete } from "react-icons/ai";

export default function Lectures() {
  const dispatch = useDispatch();
  const params = useParams();

  const { lectures, loading } = useSelector((state) => state.course);

  const {
    loading: adminLoading,
    error,
    message,
  } = useSelector((state) => state.admin);

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
        setVideo(Reader.result);
        setVideoPrev(Reader.result);
      }
    };
  };

  const addLectureHandler = async (e) => {
    e.preventDefault();
    await dispatch(addLecture(params.id, title, description, video));
  };

  const deleteLecturesHandler = async (id) => {
    await dispatch(deleteLecture(params.id, id));
  };

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
    window.scroll(0, 0);
  }, [dispatch, params.id]);

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
      dispatch(getCourseLectures(params.id));
    }
  }, [dispatch, params.id, error, message]);

  return (
    <>
      <Sidebar />
      {loading || adminLoading ? (
        <Loading />
      ) : (
        <div className="bg-gray-900">
          <section className="text-gray-400 bg-gray-900 flex flex-col items-center justify-center pt-20 px-3">
            <div>
              <p className="text-center para text-xs">{`Last Updated was on ${
                String(new Date()).split("G")[0]
              }`}</p>
            </div>

            <div className=" flex items-center justify-center h-full w-full">
              <form
                className="md:w-[50%]  mx-auto flex flex-col justify-center h-auto w-full"
                onSubmit={addLectureHandler}>
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

          <>
            {lectures?.map((data, index) => (
              <div className="mt-5" key={index}>
                <div className="bg-gray-800 p-6  space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 py-3">
                  <h3 className="tracking-widest text-indigo-400 text-base font-medium ">
                    {data.title}
                  </h3>
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                    {data.description}
                  </h3>
                  <div className="flex items-center">
                    <button
                      className="bg-red-600 text-gray-300 text-sm  border-0 py-1 px-3 focus:outline-none hover:text-yellow-500 rounded flex items-center heading"
                      onClick={() => {
                        deleteLecturesHandler(data._id);
                      }}>
                      Delete <AiOutlineDelete className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
}
