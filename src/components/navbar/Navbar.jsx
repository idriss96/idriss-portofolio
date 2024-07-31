import { motion } from "framer-motion";

import Sidebar from "../sidebar/Sidebar";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion.js";

import "./navbar.scss";

const Navbar = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span variants={slideInFromLeft(0.5)}>Idriss Dev</motion.span>
        <motion.div variants={slideInFromRight(0.5)} className="social">
          <a
            href="https://github.com/idriss96"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.svg" alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/idriss-atik-a36248203/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.svg" alt="linkedin icon" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
