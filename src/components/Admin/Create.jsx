import React from "react";
import Sidebar from "./Sidebar";

export default function Create() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 flex">
        <Sidebar />
        <div>
        <p className="text-center para text-xs">{`Last Updated was on ${String(new Date()).split("G")[0]}`}</p>
        </div>
      </section>
    </>
  );
}
