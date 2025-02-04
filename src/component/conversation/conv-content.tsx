import React from "react";

interface FeatureItem {
  icon: React.ElementType; // Use React.ElementType to type the icon component
  heading: string;
  paragraph: string;
}
interface DispatchProps {
  theheader: string;
  thescoundheader: string;
  dispachitems: FeatureItem[];
}

const ConvContent: React.FC<DispatchProps> = ({
  theheader,
  thescoundheader,
  dispachitems,
}) => {
  return (
    <div className="mb-10 md:mb-16 md:-mt-28">
      <section className=" ">
        <div className="container mx-auto px-0 lg:px-4 md:px-4 sm:px-0">
          <div className="text-center pb-10">
            <h1 className="text-xl md:text-3xl lg:text-4xl w-10/12 md:w-9/12 lg:w-8/12 m-auto font-extrabold mt-5 leading-tight ">
              {theheader}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-3 md:mt-5 flex w-10/12 lg:w-3/4 m-auto ">
              {thescoundheader}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 items-start lg:w-11/12 m-auto px-4 md:~px-6/60 lg:~px-16/60 ">
            {dispachitems.map((item, index) => {
              const Icon = item.icon; // Dynamically render the icon component
              return (
                <div
                  key={index}
                  className="hover:shadow-lg hover:shadow-blue-100 duration-200 text-center bg-zinc-100 p-2 rounded-lg md:min-h-64 lg:min-h-80"
                >
                  <Icon className="text-5xl md:text-5xl lg:text-8xl text-blue-600 mx-auto mt-1 mb-8 hover:scale-105 duration-300 hover:drop-shadow-lg" />
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 pt-4 pb-2 text-start border-t-2 border-zinc-200 px-3 hover:text-blue-800">
                    {item.heading}
                  </h2>
                  <p className="text-sm md:text-lg  text-gray-600 text-start px-3 pb-5">
                    {item.paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConvContent;
