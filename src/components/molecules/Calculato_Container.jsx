import React from 'react';
import Calculator from './Calculator';

function Calculato_Container() {
  return (

    <div
    className="card-background  w-auto h-auto rounded-lg flex flex-col justify-between items-center py-10" // Updated Flexbox settings for space between
  >
    <Calculator/>
    <h1 className="font-BB text-sm">Calculator</h1>
  </div>
  );
}

export default Calculato_Container;
