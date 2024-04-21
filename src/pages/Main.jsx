import React from 'react';
import MLeft from '../components/organisms/MLeft';
import MRigth from '../components/organisms/MRigth';

function Main() {
  return (
    <div className="flex flex-col h-screen overflow-hidden w-screen gap-0 md:flex-row md:gap-3 md:px-12 md:py-8 px-0 py-0">
      <div className=" md:max-w-[40%] md:w-[40%] min-h-[50%] w-full">
        <MLeft />
      </div>
      <div className="border border-solid border-white flex-grow">
        <MRigth />
      </div>
    </div>
  );
}

export default Main;
