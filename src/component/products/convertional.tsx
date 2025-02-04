import React from "react";
import { FaRobot } from "react-icons/fa";
import { TiFlowMerge } from "react-icons/ti";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Link } from "gatsby";

interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
  list: string[];
  url: string;
}

const items: FeatureItem[] = [
  {
    icon: FaRobot,
    heading: "Custom Gen Ai Chatbot Builder",
    url: "/product-details/custom-gen-ai",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking",
    ],
  },
  {
    icon: TiFlowMerge,
    heading: "Social Listening and Engagement",
    url: "/product-details/social",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking",
    ],
  },
  {
    icon: HiOutlineChatAlt2,
    heading: "Gen AI Website Navigator",
    url: "/product-details/navigator-gen-ai",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking",
    ],
  },
  {
    icon: IoAnalyticsSharp,
    heading: "NLU and Role Based Chatbot",
    url: "/product-details/role-gen-ai",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking",
    ],
  },
];

function Convertional() {
  return (
    <section className="bg-gray-100 py-20 mt-20">
      <div className="container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 ">
        <div className="text-center pb-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight">
            Conversational
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto">
            Experience nature and seamless interaction AI system ansurge build
            && surge or software that responds and understand human
            conversetions almost like a human
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 lg:gap-5 items-start w-11/12 m-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="text-7xl lg:text-8xl text-blue-600 mb-7 mx-auto shadow-lg shadow-blue-200 rounded-full p-5 hover:-rotate-45  duration-500 " />
              <Link
                className="text-3xl font-bold text-blue-950 hover:text-blue-800 duration"
                to={item.url}
              >
                {item.heading}
              </Link>
              <p className="text-lg mt-5 text-gray-600">{item.paragraph}</p>
              <ul className="text-lg text-gray-600 list-disc text-start px-8 md:px-4 lg:px-2  list-inside my-5  marker:text-blue-700">
                {item.list.map((listItem, idx) => (
                  <li
                    key={idx}
                    className="hover:translate-x-3 duration-300 hover:text-blue-800"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Convertional;
