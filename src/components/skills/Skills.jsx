import {
  frontend_skill,
  backend_skill,
  others_skill,
} from "../../constants/index";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import SkillDataProvider from "./SkillDataProvider";
import { useInView } from "react-intersection-observer";
import "./skills.scss";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="skills"
      /* style={{ transform: "scale(0.9" }} */
    >
      <motion.h2
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.5)}
      >
        Frontend
      </motion.h2>
      <div className="skills_data">
        {frontend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            title={skill.skill_name}
          />
        ))}
      </div>
      <motion.h2
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromRight(0.5)}
      >
        Backend
      </motion.h2>
      <div className="skills_data">
        {backend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            title={skill.skill_name}
          />
        ))}
      </div>
      <motion.h2
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromLeft(0.5)}
      >
        Others
      </motion.h2>
      <div className="skills_data">
        {others_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            title={skill.skill_name}
          />
        ))}
      </div>

      <div className="skills-background">
        <div className="skills-background_container">
          <video
            className="skills-background_video"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
