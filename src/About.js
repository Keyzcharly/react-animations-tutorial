import React from 'react';
import { motion } from 'framer-motion';

const About = ({routeVariants}) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about component"
    >
      <h1> About You </h1>
    </motion.div>
  )
}

export default About