import React from "react";
import PersonalInformation from "../About/PersonalInformation";
import MySkill from "../About/MySkill";
import MyServices from "../About/MyServices";

const About = () => {
  return (
    <section className="mx-10">
      <h1 className="text-white text-4xl text-center font-bold tracking-widest">
        ABOUT <span className="text-[#EB4A4C]">ME</span>
      </h1>
      {/* Personal Information  */}
      <PersonalInformation></PersonalInformation>
      {/* My Skills  */}
      <MySkill></MySkill>
      {/* My Services  */}
      <MyServices></MyServices>
    </section>
  );
};

export default About;
