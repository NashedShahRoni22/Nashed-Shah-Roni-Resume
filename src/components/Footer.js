import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <p className="py-5 flex justify-center items-center gap-2">
        Copyright Reserved By NSR_DEVZONE{" "}
        <span>
          <AiOutlineCopyrightCircle className="text-sky-500 text-xl" />
        </span>
        2023
      </p>
    </div>
  );
};

export default Footer;
