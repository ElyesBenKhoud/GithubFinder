import React from "react";
import { motion } from "framer-motion";
import "./FramerTest.css";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const FramerTest = () => {
  return (
    <div className="container1">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item1"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 7, ease: "easeInOut" },
            fill: { duration: 7, ease: [3, 0, 0.5, 5] },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default FramerTest;
