import React from "react";
import { GoVideo } from "react-icons/go";
import { RiPlayList2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToPlaylist } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import { Link } from "react-router-dom";

export default function CourseCard({ data }) {
  const dispatch = useDispatch();
  const addtoPlaylistHandler = async (id) => {
    await dispatch(addToPlaylist(id));
    dispatch(loadUser());
  };
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={data.poster.url}
            alt={data.title}
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
            {data.category}
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            {data.title}
          </h2>
          <p className="leading-relaxed text-base">
            {data.description.slice(0, 130)}...
          </p>
          <p>Ratings : {data.ratings}</p>
          <p>Views : {data.views}</p>
          <div className="flex items-center">
            <Link to={`/course/${data._id}`}>
              <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                <GoVideo className="mx-3" />
                Watch Now
              </button>
            </Link>
            <button
              className="text-white border-0 py-1 px-3 focus:outline-none hover:text-yellow-500 rounded text-xs flex items-center heading"
              onClick={() => {
                addtoPlaylistHandler(data._id);
              }}>
              <RiPlayList2Fill className="mx-3" />
              Add To Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
