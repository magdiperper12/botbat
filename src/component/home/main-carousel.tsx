import { useState, useEffect } from "react";
import React from "react";
function MainCarousel() {
  return (
    <div className="mb-16 lg:mb-32 md:mb-28">
      <div className="flex item-center w-full lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto">
        <div className="flex px-3 md:px-0 w-12/12 sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-1 md:rtl:order-1 m-auto">
          <div className="w-full p-2 md:mt-4">
            <p className="text-sm md:text-md lg:text-lg text-slate-300 relative px-8 font-bold">
              <span className="absolute start-0 top-0 w-2 h-4 md:h-6 md:w-3 bg-slate-300"></span>
              Introduct to AI botbat channel
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2 md:mt-10">
              Empower your customer engangement with botbat
            </h1>
            <p className="text-lg md:text-xl mt-3 md:mt-6">
              transforming your commmunicatione expiriance with AI-power
              solution . connect effortlessly across Omni-channel platform
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-3 md:gap-5">
              <a
                className={`bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out text-center md:text-start`}
              >
                join new for free
              </a>
              <a
                className={`"bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-500" rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out text-center md:text-start`}
              >
                contact an expert
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-11/12 sm:w-full md:w-1/2 lg:w-1/2 order-2 md:order-2 md:rtl:order-1 m-auto sm:mb-10 md:mb-0">
          <div className="w-full p-2 md:p-4">
            <iframe
              src="https://www.youtube.com/embed/7e90gBu4pas"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-96 md:h-96 lg:h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
