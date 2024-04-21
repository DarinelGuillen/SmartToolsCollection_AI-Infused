import React from 'react';
import MLCenter from '../molecules/MLCenter';
import MLBottomL from '../molecules/MLBottomL';
import MLBottomR from '../molecules/MLBottomR';

function MLeft() {
  return (
    <div className="flex flex-col gap-y-5 w-full h-full "> {/* Main container with vertical column layout for mobile */}
      <div className=" rounded-2xl  w-full h-[33.33%] md:h-[70%] lg:h-[80%]">
        {/* <MLCenter/> */}
        <MLBottomR/>

      </div>
      <div className="flex flex-col gap-y-5 justify-around   md:min-h-[30%]  lg:min-h-[20%]  md:gap-4 lg:flex-row lg:gap-0 xl:gap-20 w-full md:h-grow "> {/* Wrapper with responsive gap and direction */}
        <div className=" rounded-2xl  w-full  lg:w-[60%] xl:w-4/5 h-full ">
          <MLBottomL/>
        </div>
        <div className=' rounded-2xl w-full lg:w-[60%] lg:w-1/5 xl:w-1/5 h-full '>
        <MLBottomR/>

        </div>
      </div>
    </div>
  );
}

export default MLeft;