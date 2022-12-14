import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="cursor-pointer drawer-button lg:hidden"
          >
            <HiBars3CenterLeft className="text-white text-4xl"></HiBars3CenterLeft>
          </label>
        </div>
        <Link
          to="/"
          className="ml-5 text-3xl text-white font-semibold flex"
          href="/"
        >
          N<span className="text-[#EB4A4C]">SR</span>
          <FaReact className="animate-spin"></FaReact>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 text-white">
          <a
            href="https://github.com/NashedShahRoni22"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" p-3 rounded-full bg-[#EB4A4C] hover:bg-white hover:text-[#EB4A4C]">
              <FaGithubAlt className="text-xl"></FaGithubAlt>
            </div>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009916696962"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" p-3 rounded-full bg-[#EB4A4C]  hover:bg-white hover:text-[#EB4A4C]">
              <FaFacebookF className="text-xl"></FaFacebookF>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/nashed-shah-roni-21b341171/"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" p-3 rounded-full bg-[#EB4A4C]  hover:bg-white hover:text-[#EB4A4C]">
              <FaLinkedinIn className="text-xl"></FaLinkedinIn>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
