import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
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
            <HiBars3CenterLeft className="text-white text-3xl"></HiBars3CenterLeft>
          </label>
        </div>
        <div>
        <Link
          to="/"
          className="ml-5 text-2xl text-white font-semibold flex"
          href="/"
        >
          N<span className="text-sky-500">SR</span>
          <FaReact className="hover:animate-spin"></FaReact>
        </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 text-white">
          <a
            href="https://github.com/NashedShahRoni22"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-3 hover:text-sky-500">
              <FaGithubAlt className="text-2xl"></FaGithubAlt>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nashed-shah-roni-21b341171/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-3  hover:text-sky-500">
              <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
