import React from 'react';
import { motion } from 'framer-motion';

function MLBottomR() {
  return (
    <motion.div
    className="card-background w-full h-full rounded-lg flex flex-col justify-between items-center py-10" // Updated Flexbox settings for space between
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
  >
    {/* Inner div centered with respect to the vertical layout */}
    <div className="three-d-effect w-[45%] h-[50%] bg-blue-300 rounded-md flex justify-center items-center">
      {/* Placeholder for potential content */}
    </div>
    <h1 className="font-BB text-sm">Calculator</h1>  {/* Text aligned at the bottom */}
  </motion.div>
  );
}

export default MLBottomR;
