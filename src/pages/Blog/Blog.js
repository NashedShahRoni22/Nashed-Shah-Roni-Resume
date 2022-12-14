import React from "react";
import ComingSoon from "../../images/ComingSoon.mp4";

const Blog = () => {
  return (
    <section className="h-[100vh]">
      <video
        autoPlay
        loop
        muted
        src={ComingSoon}
        className="h-full w-full object-cover"
        type="video/mp4"
      ></video>
    </section>
  );
};

export default Blog;
