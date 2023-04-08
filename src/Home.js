import React from 'react'
import { motion } from 'framer-motion';

const Home = ({routeVariants}) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home component"
    >
      <h1> Featured Products and Services </h1>
    </motion.div>
  )
}

export default Home