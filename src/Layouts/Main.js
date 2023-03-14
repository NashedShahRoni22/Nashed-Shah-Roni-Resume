import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NsrImage from "../images/nsr-portofolio.png";
import { GiReactor } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import BottomBar from "../components/BottomBar";

const Main = () => {
  const menuIitems = (
    <>
      <div>
        <li>
          <img src={NsrImage} alt=""/>
        </li>
      </div>
      <div>
        <li>
          <Link to="/" className="text-xl font-semibold">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-xl font-semibold">
            <AiOutlineUser /> About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-xl font-semibold">
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-xl font-semibold">
            <FaBlog /> Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-xl font-semibold">
            <AiOutlineMail /> Contact
          </Link>
        </li>
      </div>
      <div>
        <li>
          <GiReactor className="text-8xl animate-spin" />
        </li>
      </div>
    </>
  );
  return (
    <section className="relative">
      {/* Inner Content  */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 text-white flex items-center justify-around">
            {menuIitems}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 md:hidden w-full">
        <div className="flex justify-center">
          <BottomBar></BottomBar>
        </div>
      </div>
    </section>
  );
};

export default Main;
