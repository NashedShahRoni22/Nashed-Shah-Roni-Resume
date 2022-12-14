import React from "react";
import { BsCodeSlash, BsBrush } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineAndroid } from "react-icons/ai";

const MyServices = () => {
  return (
    <div className="text-white my-20">
      <h1 className="text-3xl tracking-wider">
        MY <span className="text-[#EB4A4C]">SERVICES</span>
      </h1>
      <div className="bg-[#EB4A4C] w-full h-1 mt-4"></div>
      <div className="my-20 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-10 rounded-xl">
          <BsCodeSlash className="text-5xl"></BsCodeSlash>
          <p className="text-2xl text-[#EB4A4C] my-4 font-semibold">
            Front End Development
          </p>
          <p>
            I am well expert in many front end web technology. I have done many
            projects using MERN approach. I am well versed in HTML | CSS |
            Javascript | ES6 | React | Express.js | MongoDB
          </p>
        </div>
        <div className="border p-10 rounded-xl">
          <BsBrush className="text-5xl"></BsBrush>
          <p className="text-2xl text-[#EB4A4C] my-4 font-semibold">UI/UX</p>
          <p>
            I can design elegent looking and user friendly UI/UX for web and
            android application. Specially I use figma to create those design.
          </p>
        </div>
        <div className="border p-10 rounded-xl">
          <FaReact className="text-5xl"></FaReact>
          <p className="text-2xl text-[#EB4A4C] my-4 font-semibold">
            React Application
          </p>
          <p>
            Looking a developer to make your busiiness application more user
            friendly with the magic of react? I can Help You there.
          </p>
        </div>
        <div className="border p-10 rounded-xl">
          <AiOutlineAndroid className="text-5xl"></AiOutlineAndroid>
          <p className="text-2xl text-[#EB4A4C] my-4 font-semibold">
            Android Application
          </p>
          <p>
            I will develop clean coded android application for your business. I
            and well versed in Android XML | Java | Firebase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
