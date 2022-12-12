import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="drawer-content">
          <label htmlFor="my-drawer-2" className="cursor-pointer drawer-button lg:hidden">
            <HiBars3CenterLeft className="text-white text-4xl"></HiBars3CenterLeft>
          </label>
        </div>
        <Link to='/'  className="ml-5 text-3xl text-white font-semibold" href="/">
          NSR <span className="text-[#EB4A4C]">DevZone</span>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex gap-4 text-white">
            <div className=" p-3 rounded-full bg-[#EB4A4C] hover:bg-white hover:text-[#EB4A4C] cursor-pointer">
              <FaGithubAlt className="text-xl"></FaGithubAlt>
            </div>
            <div className=" p-3 rounded-full bg-[#EB4A4C]  hover:bg-white hover:text-[#EB4A4C] cursor-pointer">
              <FaFacebookF className="text-xl"></FaFacebookF>
            </div>
            <div className=" p-3 rounded-full bg-[#EB4A4C]  hover:bg-white hover:text-[#EB4A4C] cursor-pointer">
              <FaLinkedinIn className="text-xl"></FaLinkedinIn>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
