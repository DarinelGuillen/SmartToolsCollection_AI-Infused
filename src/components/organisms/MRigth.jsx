import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mapping components to their respective modules for dynamic import
const componentsInfo = {
    'MRCalendar': { path: '../molecules/MRCalendar' },
    'MRTabata': { path: '../molecules/MRTabata' },
    'MRMemoryGame': { path: '../molecules/MRMemoryGame' },
    'MRCalculator': { path: '../molecules/MRCalculator' },
    'MRClock': { path: '../molecules/MRClock' },
    'MRColorGenerator': { path: '../molecules/MRColorGenerator' },
    'MRToDoList': { path: '../molecules/MRToDoList' },
    'MRTic_Tac_Toe': { path: '../molecules/MRTic_Tac_Toe' },
    'MRUnitConverter': { path: '../molecules/MRUnitConverter' }
};

function MRigth() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [loadedComponents, setLoadedComponents] = useState({});

  useEffect(() => {
    // Dynamically import all components at once on mount
    const loadAllComponents = async () => {
      const imports = Object.entries(componentsInfo).map(async ([name, info]) => {
        const { default: Component } = await import(`${info.path}`);
        return { name, Component };
      });
      const loaded = await Promise.all(imports);
      const componentsMap = loaded.reduce((acc, { name, Component }) => {
        acc[name] = Component;
        return acc;
      }, {});
      setLoadedComponents(componentsMap);
    };
    loadAllComponents();
  }, []);
  const columnComponents = [
    ['MRTabata', 'MRMemoryGame', 'MRCalculator'], // Column 1
    ['MRTic_Tac_Toe', 'MRToDoList', 'MRColorGenerator'], // Column 2
    ['MRClock', 'MRUnitConverter', 'MRCalendar'] // Column 3
  ];

  const columnHeights = [
    ['flex-grow', 'h-[10rem]', 'h-[37%]'], // Column 1
    ['h-[37%]', 'flex-grow', 'h-[10rem]'], // Column 2
    ['flex-grow', 'h-[10rem]', 'h-[37%]']  // Column 3
  ];

  const handleSelectItem = async (componentName) => {
    if (loadedComponents[componentName]) {
      setSelectedComponent(React.createElement(loadedComponents[componentName]));
    }
  };

  const handleClose = () => {
    setSelectedComponent(null); // Function to close the modal
  };

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
      <main className="flex w-full h-full gap-6 flex-col md:flex-row lg:flex-row xl:flex-row">
        {columnComponents.map((components, sectionIndex) => (
          <section key={sectionIndex} className="flex flex-col  md:flex-col lg:flex-col flex-1 h-auto gap-y-6">
            {components.map((componentName, index) => (
              <motion.article
                key={index}
                className={` ${columnHeights[sectionIndex][index]}`}
                onClick={() => handleSelectItem(componentName)}
                transition={transition}
              >
                {loadedComponents[componentName] ? React.createElement(loadedComponents[componentName]) :
                <div className="border border-blue-300 shadow three-d-effect rounded-3xl p-5 max-w-sm w-full mx-auto h-full">
                <div className="animate-pulse flex flex-col h-full">
                  <div className="bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30   rounded-xl w-full h-[60%]"></div>
                  <div className="flex-1 py-4">
                    <div className="h-9  bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30   rounded-xl w-[80%] mx-auto"></div>
                  </div>
                </div>
              </div>


                }
              </motion.article>
            ))}
          </section>
        ))}
      </main>

      <AnimatePresence>
        {selectedComponent && (
          <motion.div
            className="fixed inset-0 z-10 flex items-center justify-center p-6 bg-blue-700 border rounded-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={transition}
            onClick={(e) => e.stopPropagation()} // Prevents click from propagating to the backdrop
          >
            <button onClick={handleClose} className="absolute skew-y-6 h-10 w-10 flex top-3 right-3 text-white hover:backdrop-blur-3xl hover:bg-opacity-30 font-bold py-2 px-2 rounded-full font-BB
             bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border
            ">X</button>

            {selectedComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MRigth;
