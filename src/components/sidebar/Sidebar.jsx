import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { animatedSidebar } from "../../utils/motion.js";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`${open ? "open" : "closed"} sidebar`}
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={animatedSidebar}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
