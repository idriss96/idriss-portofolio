import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  frontend_skill,
  backend_skill,
  others_skill,
} from "../../constants/index";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import SkillDataProvider from "./SkillDataProvider";

import "./skills.scss";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

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
        {t("skills-frontend")}
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
        {t("skills-backend")}
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
        {t("skills-others")}
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
