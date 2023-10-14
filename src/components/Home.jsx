import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/BackgroundImage.jpg";
import Statistic from "./layouts/Statistic";
import Subscribe from "./Payments/Subscribe";
import IntroVideo from "./layouts/IntroVideo";

export default function Home() {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  

  return (
    <>
      <section className="text-gray-400 bg-gray-900 ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src={bg1}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-xl text-white font-medium title-font mb-2 uppercase heading">
                  Learn from the experts
                </h2>
                <p className="leading-relaxed capitalize para text-xs">
                  Find valuable content at reasonable price.
                </p>

                <Link to={"/courses"}>
                  <button
                    type="button"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm  heading">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Statistic />

      <IntroVideo video={"https://res.cloudinary.com/dg4wvkt37/video/upload/v1693241308/lazbg29d9nzguq2puvtw.mp4"} />

      <Subscribe />
    </>
  );
}
