import React from "react";

function Digitalexpfooter() {
  return (
    <div className='bg-gray-100 py-12 md:py-24 mt-8 md:mt-24'>
      <div className='container mx-auto text-center'>
        <div className='sm:rounded-0 text-center'>
          {/* Header of the page */}
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5   '>
              It's time to transform your organization into an integrated
              digital entity
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 mx-auto max-w-5xl'>
              Start your journey towards digital transformation with us and
              achieve the growth you deserve
            </p>
          </div>
          {/* Buttons */}
          <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5'>
            <button className='bg-blue-700 text-white rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto'>
              Start for free
            </button>
            <button className='bg-white text-blue-900 border border-blue-600 rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto'>
              see price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digitalexpfooter;
