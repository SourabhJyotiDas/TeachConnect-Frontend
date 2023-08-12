import React, { useState } from "react";
import CourseCard from "./CourseCard"

export default function Courses() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

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
  return (
    <>
      <section className=" text-gray-400 bg-gray-900 body-font flex flex-col space-y-5 items-center justify-center py-10">
        <h2 className="text-center heading text-2xl uppercase">All Courses</h2>

        <div className="overflow-hidden">
          <label
            htmlFor="name"
            className="leading-7 text-sm text-gray-400 para">
            Search a course...
          </label>
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out heading"
          />
        </div>

        <div className="scrollbar-none flex items-center overflow-x-auto overflow-scroll h-[100%]  w-full py-5">
          {categories.map((ele, index) => (
            <button
              key={index}
              className="text-black bg-gradient-to-r from-pink-200 to-violet-200 border-0 py-1 px-3 mx-3 focus:outline-none hover:bg-indigo-600 rounded text-xs heading whitespace-nowrap"
              onClick={() => {
                setCategory(ele);
              }}>
              {ele}
            </button>
          ))}
        </div>

        <CourseCard />
        
      </section>
    </>
  );
}
