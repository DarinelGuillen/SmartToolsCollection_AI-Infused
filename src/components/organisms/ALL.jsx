
import React, { useState } from 'react';
import Logos from '../molecules/Logos';
import Title from '../molecules/Title';
import Fotter from '../atoms/Fotter';
function ALL() {

  return (
<div className="flex flex-col items-center justify-center  w-full  bg-gray-600">
  <div className='w-1/2 h-full flex-wrap bg-red-800  '>

      <Logos />
      <Title />
      <Fotter />
  </div>

    </div>

    );
}

export default ALL;