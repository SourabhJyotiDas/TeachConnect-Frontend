import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import background from "../../assets/bg1.jpg";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../redux/actions/course";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layouts/Loading";
import { deleteCourse } from "../../redux/actions/admin";

export default function AllCourses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);
  const { loading, error, message } = useSelector((state) => state.admin);

  const deleteHandler = async (courseId) => {
    await dispatch(deleteCourse(courseId));
    dispatch(getAllCourses());
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
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 flex flex-col items-center justify-center pt-20 px-3">
          <div>
            <p className="text-center para text-xs">{`Last Updated was on ${
              String(new Date()).split("G")[0]
            }`}</p>
          </div>
          <div className=" scrollbar-none overflow-x-auto w-full xl:w-auto py-10">
            <thead>
              <tr className="">
                <th className="border px-10 border-gray-400 uppercase">Id</th>
                <th className="border px-10 border-gray-400 uppercase">
                  Poster
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Title
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Category
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Creator
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Views
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Lectures
                </th>
                <th className="border px-10 border-gray-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {courses?.map((ele, index) => (
                <tr key={index}>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    #{ele._id}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    <img src={ele.poster.url} alt={ele.title} />
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {ele.title}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {ele.category}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {ele.createdBy}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {ele.views}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap">
                    {ele.numOfVideos}
                  </td>
                  <td className="border px-10 border-gray-400 whitespace-nowrap flex  items-center py-2 space-x-5">
                    <Link to={`/admin/lecture/${ele._id}`}>
                      <button className="text-white bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded flex items-center justify-center heading w-full">
                        View Lectures
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        deleteHandler(ele._id);
                      }}
                      className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded flex items-center justify-center heading w-full">
                      Delete Lectures
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </section>
      )}
    </>
  );
}
