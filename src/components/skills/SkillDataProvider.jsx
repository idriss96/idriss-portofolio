"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ src, title, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="data"
    >
      <p className="data-title">{title}</p>
      <img
        className="data-icon"
        src={src}
        alt={title}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default SkillDataProvider;
