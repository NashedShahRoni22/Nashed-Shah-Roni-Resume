import React from 'react';

const MySkill = () => {
    return (
        <div className="text-white my-20">
        <h1 className="text-3xl tracking-wider">
          MY <span className="text-[#EB4A4C]">SKILLS</span>
        </h1>
        <div className="bg-[#EB4A4C] w-full h-1 mt-4"></div>
        <div className="my-40 grid grid-cols-2 md:grid-cols-4 gap-16">
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">Tailwindcss</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">React</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">Express.js</p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-[#EB4A4C]"
              style={{ "--value": 90, "--size": "8rem" }}
            >
              90%
            </div>
            <p className="text-center mt-2 text-2xl">MongoDB</p>
          </div>
        </div>
      </div>
    );
};

export default MySkill;