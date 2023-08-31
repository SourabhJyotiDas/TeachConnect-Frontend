import React from "react";
import { GoVideo } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeFromPlaylist } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function PlaylistCard({ data }) {

  const dispatch = useDispatch();

  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
          <img
            className="h-auto rounded w-full object-cover object-center mb-6"
            src={data.poster}
            alt={data.name}
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
            {data.name}
          </h3>
          <div className="flex items-center">
            <Link to={`/course/${data.course}`}>
              <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                <GoVideo className="mx-3" />
                Watch Now
              </button>
            </Link>
            <button
              className="text-white border-0 py-1 px-3 focus:outline-none hover:text-yellow-500 rounded text-xs flex items-center heading"
              onClick={() => {
                removeFromPlaylistHandler(data.course);
              }}>
              <AiOutlineDelete className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
