import { Frontend_skill } from "../../constants/index";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import "./skills.scss";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills"
      /* style={{ transform: "scale(0.9" }} */
    >
      <h2>Frontend</h2>
      <div className="skills_data">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <h2>Backend</h2>
      <div className="skills_data">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <h2>Others</h2>
      <div className="skills_data">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Skills;
