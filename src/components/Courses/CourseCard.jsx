import React from "react";
import  {GoVideo} from "react-icons/go"
import  {RiPlayList2Fill} from "react-icons/ri"

export default function CourseCard() {
  const addtoPlaylistHandler = async () => {
    console.log("Added to Playlist");
  };
  return (
    <>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                  <GoVideo className="mx-3"/>
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-yellow-500 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                     <RiPlayList2Fill className="mx-3"/>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-indigo-600 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-indigo-600 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-indigo-600 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-indigo-600 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg space-y-3 hover:-translate-y-3 transition-all ease-in-out duration-300 ">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium ">
                  {"Category"}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {"Playlist Name"}
                </h2>
                <p className="leading-relaxed text-base">{"plalist Description"}</p>
                <p>Lacture : 2</p>
                <p>Views : 63</p>
                <div className="flex items-center">
                  <button className="text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-xs flex items-center heading">
                    
                    Watch Now
                  </button>
                  <button
                    className="text-white border-0 py-1 px-3 focus:outline-none hover:text-indigo-600 rounded text-xs flex items-center heading"
                    onClick={addtoPlaylistHandler}>
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
