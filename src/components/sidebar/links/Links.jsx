import { motion } from "framer-motion";

import { animatedLinks } from "../../../utils/motion.js";

const Links = () => {
  const items = ["Homepage", "Skills", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={animatedLinks.variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={animatedLinks.itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
