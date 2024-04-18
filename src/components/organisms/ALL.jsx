
import React, { useState } from 'react';
import Logos from '../molecules/Logos';
import Title from '../molecules/Title';
import Fotter from '../atoms/Fotter';
function ALL() {

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <Logos />
      <Title />
      <Fotter />

    </div>

    );
}

export default ALL;