import React from "react";
import comingSoonAnim from "../../animation/coming-soon.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

const Blog = () => {
  const style = {
    height: 400,
  };
  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <Lottie animationData={comingSoonAnim} style={style} />
      <h1 className="text-3xl font-semibold text-white">
        <Typewriter
          words={["Coming Soon", "Stay Tuned"]}
          loop={0}
          cursor
          cursorStyle="|"
        />
      </h1>
    </section>
  );
};

export default Blog;
