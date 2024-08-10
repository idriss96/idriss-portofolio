import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { animatedLinks } from "../../../utils/motion.js";

const Links = ({ setOpen }) => {
  const { t } = useTranslation();

  const items = [
    t("Parallax-homePage"),
    t("Parallax-skills"),
    t("Parallax-contact"),
  ];

  return (
    <motion.div className="links" variants={animatedLinks.variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={animatedLinks.itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
