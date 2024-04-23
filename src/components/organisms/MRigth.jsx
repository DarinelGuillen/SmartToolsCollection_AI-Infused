import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MRigth() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ subtitle: '', title: '' });

  // Generamos un arreglo de 3 secciones, cada una con dos índices aleatorios para las alturas fijas
  const sections = Array.from({ length: 3 }, () => {
    const fixedHeightIndices = new Set();
    while (fixedHeightIndices.size < 2) {
      fixedHeightIndices.add(Math.floor(Math.random() * 3));
    }
    return [...fixedHeightIndices];
  });

  const handleSelectItem = (articleIndex, subtitle, title) => {
    setSelectedId(`item-${articleIndex}`);
    setSelectedItem({ subtitle, title });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <main className="flex w-full h-full gap-6">
        {sections.map((fixedHeights, sectionIndex) => (
          <section key={sectionIndex} className="flex flex-col flex-1 h-full gap-y-6">
            {Array.from({ length: 3 }, (_, articleIndex) => {
              let heightClass = 'flex-grow'; // Default to flex-grow
              if (fixedHeights[0] === articleIndex) {
                heightClass = 'h-[10rem]'; // First fixed height
              } else if (fixedHeights[1] === articleIndex) {
                heightClass = 'h-[37%]'; // Second fixed height
              }
              const subtitle = `Subtitle ${sectionIndex}-${articleIndex}`;
              const title = `Title ${sectionIndex}-${articleIndex}`;
              return (
                <motion.article
                  key={articleIndex}
                  className={`border bg-gray-800 rounded-3xl ${heightClass}`}
                  onClick={() => handleSelectItem(articleIndex, subtitle, title)}
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
              transition={{ duration: 0.2 }}
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
}

export default MRigth;
