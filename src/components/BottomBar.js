import React from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <section className="text-white flex px-4 py-2 rounded-xl gap-12 glass justify-evenly">
      <div>
        <Link to="/">
          <AiOutlineHome className="text-3xl hover:text-sky-500"></AiOutlineHome>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <AiOutlineUser className="text-3xl hover:text-sky-500"></AiOutlineUser>
        </Link>
      </div>
      <div>
        <Link to="/projects">
          <AiOutlineFundProjectionScreen className="text-3xl hover:text-sky-500"></AiOutlineFundProjectionScreen>
        </Link>
      </div>
      <div>
        <Link to="/blog">
          <FaBlog className="text-3xl hover:text-sky-500"></FaBlog>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <AiOutlineMail className="text-3xl hover:text-sky-500"></AiOutlineMail>
        </Link>
      </div>
    </section>
  );
};

export default BottomBar;
