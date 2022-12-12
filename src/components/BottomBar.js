import React from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <section className="text-white flex flex-col p-2 rounded-xl gap-6 glass w-fit">
      <div>
        <Link to="/">
          <AiOutlineHome className="text-3xl"></AiOutlineHome>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <AiOutlineUser className="text-3xl"></AiOutlineUser>
        </Link>
      </div>
      <div>
        <AiOutlineFundProjectionScreen className="text-3xl"></AiOutlineFundProjectionScreen>
      </div>
      <div>
        <Link to="/contact">
          <AiOutlineMail className="text-3xl"></AiOutlineMail>
        </Link>
      </div>
    </section>
  );
};

export default BottomBar;
