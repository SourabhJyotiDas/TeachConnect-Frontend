import React from "react";

export default function IntroVideo({video=""}) {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative flex items-center justify-center py-5 md:py-10">
        <video
          className="w-[90%]  md:w-[70%]  shadow-xl border border-gray-500 outline-none"
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={video}></video>
      </section>
    </>
  );
}
