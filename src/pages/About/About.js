import React from "react";
import PersonalInformation from "../About/PersonalInformation";
import MySkill from "../About/MySkill";
import MyServices from "../About/MyServices";

const About = () => {
  return (
    <section className="mx-5 mb-20">
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
