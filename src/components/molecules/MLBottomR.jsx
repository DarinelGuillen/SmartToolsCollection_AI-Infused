import React from 'react';
import { motion } from 'framer-motion';

function MLBottomR() {
  return (
    <motion.div
      className="bg-red-300 fle-grow h-full rounded-3xlbg-center"
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

export default MLBottomR;
