import React from 'react';
import { motion } from 'framer-motion';
import forestFlip from '../../assets/img/forestFlip.png';

function MLBottomL() {
  return (
    <motion.div
      className="imgBL rounded-3xl w-full h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${forestFlip})` }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    />
  );
}

export default MLBottomL;
