import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";

function HeroContent() {
  const { t } = useTranslation();
  return (
    <motion.div initial="hidden" animate="visible" className="hero-content">
      <div className="text-content">
        <motion.div variants={slideInFromLeft(0.5)} className="title">
          <p>
            {t("hero-title")} <span>{t("hero-title-span")}</span>{" "}
            {t("hero-title-exp")}
          </p>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text">
          {t("hero-text")}
        </motion.p>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="image-content">
        <img src="/mainIconsdark.svg" alt="work icons" />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
