import React from 'react';
import MLeft from '../components/organisms/MLeft';
import MRigth from '../components/organisms/MRigth';

function Main() {
  return (
    <main className="flex flex-col w-full h-auto  md:h-screen md:w-screen gap-0 md:flex-col lg:flex-row md:gap-6 md:px-12 md:py-8 px-0 py-0 overflow-auto sm:overflow-visible">
      <aside className="min-h-[50%] lg:max-w-[40%] w-full">
        <MLeft />
      </aside>
      <div className="border border-solid border-[red] flex-grow w-full h-auto">
        <MRigth />
      </div>
    </main>
  );
}

export default Main;
