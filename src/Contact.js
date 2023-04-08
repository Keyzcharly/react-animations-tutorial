import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({routeVariants}) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="contact component"
    >
      <h1> Contact Information </h1>
    </motion.div>
  )
}

export default Contact