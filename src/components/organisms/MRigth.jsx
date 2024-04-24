import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MRCalendar from '../molecules/MRCalendar';
import MRTabata from '../molecules/MRTabata';
import MRMemoryGame from '../molecules/MRMemoryGame';
import MRCalculator from '../molecules/MRCalculator';
import MRClock from '../molecules/MRClock';
import MRColorGenerator from '../molecules/MRColorGenerator';
import MRToDoList from '../molecules/MRToDoList';
import MRTic_Tac_Toe from '../molecules/MRTic_Tac_Toe';
import MRUnitConverter from '../molecules/MRUnitConverter';



function MRigth() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ subtitle: '', title: '' });

  // Configuramos explícitamente las clases de altura para cada artículo en cada columna
  const columnHeights = [
    ['flex-grow', 'h-[10rem]', 'h-[37%]'],  // Columna 1: grow, 10rem, 37%
    ['h-[37%]', 'flex-grow', 'h-[10rem]'],  // Columna 2: 37%, grow, 10rem
    ['flex-grow', 'h-[10rem]', 'h-[37%]'],  // Columna 3: grow, 10rem, 37%
  ];

  const handleSelectItem = (articleIndex, subtitle, title) => {
    setSelectedId(`item-${articleIndex}`);
    setSelectedItem({ subtitle, title });
  };

  // Configuración de la transición
  const transition = {
    type: "spring",
    stiffness: 120,
    damping: 20
  };

  const backdropVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      <main className="flex w-full h-full gap-6">
        {columnHeights.map((heights, sectionIndex) => (
          <section key={sectionIndex} className="flex flex-col flex-1 h-full gap-y-6">
            {heights.map((heightClass, articleIndex) => {
              const subtitle = `Subtitle ${sectionIndex}-${articleIndex}`;
              const title = `Title ${sectionIndex}-${articleIndex}`;
              return (
                <motion.article
                  key={articleIndex}
                  className={`border bg-gray-800 rounded-3xl ${heightClass}`}
                  onClick={() => handleSelectItem(`${sectionIndex}-${articleIndex}`, subtitle, title)}
                  transition={transition}
                >
                  <motion.h5>{subtitle}</motion.h5>
                  <motion.h2>{title}</motion.h2>
                </motion.article>
              );
            })}
          </section>
        ))}
      </main>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-blue-700 border rounded-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={transition}
            onClick={() => setSelectedId(null)}
          >
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button className="mt-4">Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  );
}

export default MRigth;

