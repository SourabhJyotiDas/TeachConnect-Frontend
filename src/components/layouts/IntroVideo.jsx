import React from "react";
import bg from "../../assets/bg.mp4"

export default function IntroVideo() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative flex items-center justify-center py-5 md:py-10">
        <video
          className="w-[90%]  md:w-[70%]  shadow-xl border border-gray-500 outline-none"
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={bg}></video>
      </section>
    </>
  );
}
