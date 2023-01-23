import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const MySkill = () => {
  return (
    <div className="text-white my-20">
      <h1 className="text-3xl tracking-wider">
        MY <span className="text-[#EB4A4C]">SKILLS</span>
      </h1>
      <div className="bg-[#EB4A4C] w-full h-1 mt-4"></div>
      <div className="my-40 grid grid-cols-2 md:grid-cols-4 gap-16">
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <AiFillHtml5 className="text-5xl text-orange-500"></AiFillHtml5>
          <p className="text-center mt-2 text-2xl">HTML5</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <FaCss3Alt className="text-5xl text-blue-400"></FaCss3Alt>
          <p className="text-center mt-2 text-2xl">CSS3</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <BsFillBootstrapFill className="text-5xl text-purple-500"></BsFillBootstrapFill>
          <p className="text-center mt-2 text-2xl">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiTailwindcss className="text-5xl text-blue-400"></SiTailwindcss>
          <p className="text-center mt-2 text-2xl">Tailwindcss</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiJavascript className="text-5xl text-yellow-400"></SiJavascript>
          <p className="text-center mt-2 text-2xl">Javascript</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiReact className="text-5xl text-blue-400"></SiReact>
          <p className="text-center mt-2 text-2xl">React</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiExpress className="text-5xl text-yellow-400"></SiExpress>
          <p className="text-center mt-2 text-2xl">Express.js</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiNodedotjs className="text-5xl text-green-400"></SiNodedotjs>
          <p className="text-center mt-2 text-2xl ">Node.js</p>
        </div>
        <div className="flex flex-col items-center glass p-2 rounded-xl">
          <SiMongodb className="text-5xl text-green-500"></SiMongodb>
          <p className="text-center mt-2 text-2xl">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
