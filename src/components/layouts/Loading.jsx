import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
  return (
    <>
      <div className="animate-pulse bg-gray-900 h-[100vh] w-[100%] flex items-center justify-center text-white heading" >
        <AiOutlineLoading className="animate-spin h-5 w-5 mr-3 text-white ..." />
        Loading...
      </div>
    </>
  );
}
