import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/img/forest2.webp';
import '../../assets/css/MLCenter.css';

function MLCenter() {
  return (
    <motion.div
      className="imgT rounded-3xl w-full h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="p-4 place-items-start">
        <h1 className="text-white text-3xl font-GA">Prototype 1.0</h1>
        <p className="text-white mt-2 font-BL">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.
        </p>
      </div>
    </motion.div>
  );
}

export default MLCenter;
