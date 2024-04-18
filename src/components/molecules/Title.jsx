import React, { useState } from 'react';

function Title() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mt-8 text-3xl font-bold font-gaoel">Vite + React</h1> 
      <div className="card mt-4 p-4 bg-gray-700 rounded-lg shadow-md">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 font-gaoel"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-2 font-gaoel">
          Edit <code className="text-gray-600">src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default Title;
