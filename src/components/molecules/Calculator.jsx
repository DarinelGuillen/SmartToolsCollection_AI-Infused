import React from 'react';

function Calculator() {
  return (
    <div id='Container_Calculator' className="three-d-effect w-[45%] h-[80%] p-1 bg-blue-300 rounded-md flex-col ">
        {/* Header */}
        <div className="flex w-full justify-end p-[.1rem]">
  <div className="flex space-x-1">
    <div className="w-[.5rem] h-[.5rem] bg-red-500 rounded-full"></div>
    <div className="w-[.5rem] h-[.5rem] bg-yellow-500 rounded-full"></div>
    <div className="w-[.5rem] h-[.5rem] bg-green-500 rounded-full"></div>
  </div>
</div>

        {/* Display */}
        <div className="mb-1 px-1 bg-black rounded-xl">
          <p className="text-right text-sm">399,981</p>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', 'C', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x'].map((button) => (
            <button
              key={button}
              className={`p-[.1px]  rounded text-sm font-BB h-auto w-auto ${button === 'C' ? 'bg-red-600' : 'bg-[rgba(27,38,66,255)]'} `}
            >
              {button}
            </button>
          ))}
          <button className="col-span-2 bg-[rgba(27,38,66,255)]  rounded text-sm font-BL">RESET</button>
          <button className="col-span-2 bg-red-600 rounded text-sm font-BL">=</button>
        </div>
    </div>
  );
}

export default Calculator;
