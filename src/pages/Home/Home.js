import React from "react";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../images/Nashed Shah Roni (CV).pdf";
import { Link } from "react-router-dom";
import "./Home.css";
import Lottie from "lottie-react";
import { HiDownload, HiOutlineEye } from "react-icons/hi";
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
          {/* Landing Content */}
          <div>
            <h1 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              I'm
              <br />
              <span className="">Nashed Shah Roni</span>
              <br />
              <span>
                <Typewriter
                  words={["Web Designer", "Web Developer", "MERN Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </h1>
            <div className="mt-10 flex gap-4">
              <a
                className="rounded-lg flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-sky-400 via-sky-500 to-purple-500 text-white"
                href={cv}
                download
              >
                Download Resume
                <span>
                  <HiDownload className="text-xl" />
                </span>
              </a>
              <Link
                to="/projects"
                className="rounded-lg flex items-center gap-4 px-4 py-2 border border-sky-400 text-white hover:bg-gradient-to-r from-sky-400 via-sky-500 to-purple-500"
              >
                My works
                <span>
                  <HiOutlineEye className="text-xl" />
                </span>
              </Link>
            </div>
          </div>
          {/* Landing Animation */}
          <div className="hidden md:block">
            <Lottie animationData={helloAnim} style={style}></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
