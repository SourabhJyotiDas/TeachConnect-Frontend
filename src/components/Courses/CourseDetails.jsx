import React, { useEffect, useState } from "react";
import IntroVideo from "../layouts/IntroVideo";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate,  useParams } from "react-router-dom";
import { getCourseLectures } from "../../redux/actions/course";
import { toast } from "react-toastify";
import Loading from "../layouts/Loading";
import { GoVideo } from "react-icons/go";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  const { user } = useSelector((state) => state.user);
  const { lectures, loading, error, message } = useSelector(
    (state) => state.course
  );

  const [title, setTitle] = useState("Click Watch now");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");

  const handleClick = async (index) => {
    setTitle(lectures[index].title);
    setDescription(lectures[index].description);
    setVideo(lectures[index].video.url);
  };

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
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
    }
  }, [dispatch, error, message]);

  if (
    user &&
    user.role !== "admin" &&
    (user.subscription === undefined || user.subscription.status !== "active")
  ) {
    return <Navigate to={"/subscribe"} />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {lectures.length > 0 ? (
            <div className="bg-gray-900">
              <div className="flex flex-col py-10">
                <h3 className="tracking-normal text-gray-400 text-2xl font-medium px-5 text-center heading">
                  {title}
                </h3>
                <IntroVideo video={video} />
                <p className=" text-gray-400 text-sm font-normal para px-5 text-center">
                  {description}
                </p>
              </div>

              <>
                {lectures.map((data, index) => (
                  <div key={index} className="mt-5">
                    <div className="bg-gray-800 p-6  space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 py-3">
                      <h3 className=" text-indigo-400 text-base font-medium ">
                        {data.title}
                      </h3>
                      <h3 className="tracking-wide text-indigo-400 text-xs font-medium ">
                        {data.description}
                      </h3>
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            handleClick(index);
                          }}
                          className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                          <GoVideo className="mx-3" />
                          Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </div>
          ) : (
            <div className="bg-gray-900 text-2xl text-center">
              <h2 className="py-10 text-gray-300">Uploading Soon</h2>
              <Link to={"/courses"}>
                <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Back To Courses
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
