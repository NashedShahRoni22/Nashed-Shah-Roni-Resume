import React from "react";

const PersonalInformation = () => {
  return (
    <div className="text-white my-20">
      <h1 className="text-3xl tracking-wider">
        PERSONAL <span className="text-[#EB4A4C]">INFOS</span>
      </h1>
      <div className="bg-[#EB4A4C] w-full h-1 mt-4"></div>
      <div className="my-20 lg:flex items-center gap-8">
        <div className="my-20 text-xl md:flex justify-between gap-6">
          <ul>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                First Name:
              </span>{" "}
              Nashed Shah Roni
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Age:
              </span>{" "}
              24 Years
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Nationality:
              </span>{" "}
              Bangladeshi
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Study:
              </span>{" "}
              Daffodil International University
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Degree:
              </span>{" "}
              B.Sc in CSE
            </li>
          </ul>
          <ul>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Expertise:
              </span>{" "}
              Web Development
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Location:
              </span>
              Dhaka, Bangladesh
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Email:
              </span>{" "}
              nashedshah.2016@gmail.com
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Phone:
              </span>{" "}
              +880-1318214398
            </li>
            <li className="my-2">
              <span className="text-[#EB4A4C] font-semibold text-2xl">
                Language:
              </span>{" "}
              Bangla | English | Hindi
            </li>
          </ul>
        </div>
        <div className="text-white my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border flex items-center gap-4 p-10">
            <h1 className="text-5xl font-semibold text-[#EB4A4C]">2+</h1>
            <p className="text-2xl">
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="rounded-xl border border-[#EB4A4C] flex items-center gap-4 p-10">
            <h1 className="text-5xl font-semibold text-[#EB4A4C]">25+</h1>
            <p className="text-2xl">
              COMPLETED <br /> PROJECTS
            </p>
          </div>
          <div className="rounded-xl border border-[#EB4A4C] flex items-center gap-4 p-10">
            <h1 className="text-5xl font-semibold text-[#EB4A4C]">10+</h1>
            <p className="text-2xl">
              HAPPY <br /> CLIENTS
            </p>
          </div>
          <div className="rounded-xl border flex items-center gap-4 p-10">
            <h1 className="text-5xl font-semibold text-[#EB4A4C]">100%</h1>
            <p className="text-2xl">
              CLIENTS <br /> SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
