import React from "react";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../images/Nashed Shah Roni (CV).pdf";
import { Link } from "react-router-dom";
import "./Home.css";
import Lottie from "lottie-react";
import helloAnim from "../../animation/hello.json";
const Home = () => {
  const style = {
    height: 400,
  };
  return (
    <section className="home h-[80vh] w-full relative">
      <div className="home-anim">
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </div>

      <div className="absolute h-full w-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-around w-full">
        <div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl my-3 font-semibold tracking-wide">
            I'm
            <br />
            <span className="text-sky-500">Nashed Shah Roni</span>
          </h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wide">
            <Typewriter
              words={["Web Designer", "Web Developer", "MERN Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
            />
          </h1>
          <div className="mt-10 flex">
            <a
              className="btn bg-sky-500 text-white hover:bg-transparent hover:border-white"
              href={cv}
              download
            >
              Download Resume
            </a>
            <Link
              to="/about"
              className="ml-4 btn text-white bg-transparent border-white hover:bg-sky-500"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Lottie animationData={helloAnim} style={style}></Lottie>
        </div>
        </div>
      </div>
      {/* <div>
      <Lottie animationData={helloAnim} style={style}></Lottie>
      </div> */}
    </section>
  );
};

export default Home;
