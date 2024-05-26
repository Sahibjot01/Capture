import React, { useState } from "react";
//framer motion
import { motion } from "framer-motion";
const Toggle = ({ children, title, layoutId }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      layoutId={layoutId}
      className="question"
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
