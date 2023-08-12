import React from "react";
import { Link } from "react-router-dom";

export default function PaymentFail() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden flex items-center justify-center h-[80vh]">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
            Transition Fail
          </h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none ">
            Payment Fail
          </h1>
          <p className="flex items-center text-gray-400 mb-2 para">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            PLease try again in couple of minutes.
          </p>
          <Link to={"/subscribe"}>
            <button className="heading flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
              Try Again
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
