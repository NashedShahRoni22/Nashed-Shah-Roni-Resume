import React from "react";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../images/Nashed Shah Roni.pdf";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <section className="home h-[100vh] w-full relative">
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

      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-5xl my-3 font-semibold tracking-wide">
            I'm <span className="text-[#EB4A4C]">Nashed Shah Roni</span>
          </h1>
          <h1 className="text-5xl font-semibold tracking-wide">
            <Typewriter
              words={["Web Designer", "Web Developer", "MERN Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
            />
          </h1>
        </div>
        <div className="mt-10">
          <a
            className="btn rounded-full bg-[#EB4A4C] text-white hover:bg-transparent hover:border-white"
            href={cv}
            download
          >
            Download Resume
          </a>
          <Link
            to="/about"
            className="ml-4 btn rounded-full text-white bg-transparent border-white hover:bg-[#EB4A4C]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
