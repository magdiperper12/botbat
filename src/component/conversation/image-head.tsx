import React from "react";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
}

const ImageHead: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
}) => {
  return (
    <div>
      <div className='mt-16 md:mt-24 lg:mt-28 '>
        <div className='text-center mt-7 md:mb-3 mb-2 md:mt-12 space-y-3'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl w-7/12 m-auto font-extrabold mt-5 leading-tight'>
            {title}
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-3/4'>
            {paragraph}
          </p>
        </div>
      </div>
      <div className='w-full h-96 sm:mb-10 md:mb-32 overflow-hidden '>
        <img src={image} alt='' className='w-3/4 m-auto bg-cover ' />
      </div>
    </div>
  );
};

export default ImageHead;
