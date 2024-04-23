import React from 'react';
import { motion } from 'framer-motion';
import Calculator from './Calculator';

function MRCenter() {
  return (

    <motion.div
    className="card-background fixed w-full h-full rounded-lg flex flex-col justify-between items-center py-10" // Updated Flexbox settings for space between
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
    <Calculator/>
    <h1 className="font-BB text-sm">Calculator</h1>  {/* Text aligned at the bottom */}
  </motion.div>
  );
}

export default MRCenter;
