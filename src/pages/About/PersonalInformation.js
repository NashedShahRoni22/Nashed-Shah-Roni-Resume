import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const PersonalInformation = () => {
  const expYear = 2;
  const projectsN = 25;
  const clientN = 10;
  const satisfaction = 100;
  return (
    <div className="text-white mt-5">
      <h1 className="text-xl md:text-2xl tracking-wider font-bold">
        PERSONAL <span className="text-sky-500">INFOS</span>
      </h1>
      <div className="bg-sky-500 w-full h-1 mt-4"></div>
      <div className="my-10 lg:flex items-center gap-8">
        <div className="my-10 text-xl md:flex justify-between gap-6">
          <ul>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">Name:</span>{" "}
              Nashed Shah Roni
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">Age:</span>{" "}
              24 Years
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Nationality:
              </span>{" "}
              Bangladeshi
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Study:
              </span>{" "}
              Daffodil International University
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Degree:
              </span>{" "}
              B.Sc in CSE
            </li>
          </ul>
          <ul>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Location:
              </span>
              Dhaka, Bangladesh
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Email:
              </span>{" "}
              nashedshah.2016@gmail.com
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Phone:
              </span>{" "}
              +880-1318214398
            </li>
            <li className="my-2">
              <span className="text-sky-500 font-semibold text-2xl">
                Language:
              </span>{" "}
              Bangla | English | Hindi
            </li>
          </ul>
        </div>
        <div className="text-white my-10 grid grid-cols-2 gap-6">
          <div className="hover:glass rounded-xl justify-between border flex flex-col md:flex-row items-center gap-4 p-10">
            <h1 className="text-4xl font-semibold text-sky-500">
              <AnimatedNumbers
                includeComma
                animateToNumber={expYear}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 30, friction: 10 },
                  { mass: 2, tension: 40, friction: 10 },
                  { mass: 3, tension: 30, friction: 10 },
                ]}
              />
            </h1>
            <p className="text-xl text-center">
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>
          <div className="hover:glass rounded-xl justify-between border border-sky-500 flex flex-col md:flex-row items-center gap-4 p-10">
            <h1 className="text-4xl font-semibold text-sky-500">
              <AnimatedNumbers
                includeComma
                animateToNumber={projectsN}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 30, friction: 10 },
                  { mass: 2, tension: 40, friction: 10 },
                  { mass: 3, tension: 30, friction: 10 },
                ]}
              />
            </h1>
            <p className="text-xl text-center">
              COMPLETED <br /> PROJECTS
            </p>
          </div>
          <div className="hover:glass rounded-xl justify-between border border-sky-500 flex flex-col md:flex-row items-center gap-4 p-10">
            <h1 className="text-4xl font-semibold text-sky-500">
              <AnimatedNumbers
                includeComma
                animateToNumber={clientN}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 30, friction: 10 },
                  { mass: 2, tension: 40, friction: 10 },
                  { mass: 3, tension: 30, friction: 10 },
                ]}
              />
            </h1>
            <p className="text-xl text-center">
              HAPPY <br /> CLIENTS
            </p>
          </div>
          <div className="hover:glass rounded-xl justify-between border flex flex-col md:flex-row items-center gap-4 p-10">
            <h1 className="text-4xl font-semibold text-sky-500">
              <AnimatedNumbers
                includeComma
                animateToNumber={satisfaction}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 30, friction: 10 },
                  { mass: 2, tension: 40, friction: 10 },
                  { mass: 3, tension: 30, friction: 10 },
                ]}
              />
            </h1>
            <p className="text-xl text-center">
              CLIENTS <br /> SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
