import React from 'react';
import MLeft from '../components/organisms/MLeft';
import MRigth from '../components/organisms/MRigth';

function Main() {
  return (
    <div className="flex flex-col h-screen overflow-hidden w-screen gap-0 lg:flex-row md:gap-6 md:px-12 md:py-8 px-0 py-0">
      <div className="   min-h-[50%] lg:max-w-[40%]">
        <MLeft />
      </div>
      <div className="border border-solid border-[red] flex-grow ">
        <MRigth />
      </div>
    </div>
  );
}

export default Main;
