import React from "react";
import image from "../../images/doctor2.jpg";
interface CarouselItem {
  heading: string;
  text: string;
  buttonText: string;
  image: string;
}

const Features: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      image: image,
    },
  ];

  return (
    <div>
      {/* Header of the page */}
      <div className='text-center mt-10 md:mt-44'>
        <p className='text-lg md:text-xl lg:text-2xl font-extrabold'>
          FEATURES
        </p>
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
          Streamline Your Workflow with Our Product
        </h1>
        <p className='text-base md:text-lg lg:text-xl mt-5 flex w-3/4 m-auto'>
          Build Event Driven Flows and Bots to automate your communication
          workload. Connect your apps and services with Botbat and automate your
          communication workload.
        </p>
      </div>
 
 
    </div>
  );
};

export default Features;
