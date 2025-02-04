import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import TableExplor from "../../component/support/table";

interface Item {
  first: string;
  secound: string;
  date: Date;
  last: string;
}

interface FeatureItem {
  tableName: string;
  items: Item[];
}

const experienceItems: FeatureItem[] = [
  {
    tableName: "Conversational Services",
    items: [
      {
        first: "Custom Gen AI Chatbot Builder",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Social Listening and Engagement",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Gen AI Website Navigator",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "NLU and Role Based Chatbot",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
    ],
  },
  {
    tableName: "Messaging APIs",
    items: [
      {
        first: "SMS",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "WhatsApp",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Messenger",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Instagram",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "Telegram",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
      {
        first: "BYOC",
        secound: "Operating normally",
        date: new Date("2024-08-22"),
        last: "-",
      },
    ],
  },

  {
    tableName: "Data and Analytics",
    items: [
      {
        first: "CDP (Customer Data Platform)",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Disposition and Fb Management",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Analytical Dashboard",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },

  {
    tableName: "Applications",
    items: [
      {
        first: "BYOC",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Notification Engine",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Omni-Channel Verification",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "Programmable Contact Center",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },
  {
    tableName: "Workflow Orchesteration",
    items: [
      {
        first: "Buisness Initiated WorkFlow",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
      {
        first: "User Initiated WorkFlow",
        secound: "Under Development",
        date: new Date("-"),
        last: "-",
      },
    ],
  },
];

const SecoundSupport: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="my-10 md:my-16 relative">
        <div className="  shadow-custom shadow-gray-400 md:mt-32 lg:mt-40 w-10/12 m-auto text-center my-7 md:my-12  py-7">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold leading-tight">
            Botbat system status
          </h1>
          <p className="mt-5 text-lg md:text-xl lg:text-2xl m-auto w-full ">
            All systems are operating normally
          </p>
          <p className="text-lg md:text-xl lg:text-2xl m-auto w-full ">
            Last Updated: 2024-08-22
          </p>
        </div>
        <div className=" w-10/12 m-auto text-center my-10 md:my-16 ">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight lg:w-1/2 sm:w-3/4 m-auto text-wrap">
            A comprehensive view of our system performance
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl  w-full p-4 lg:w-1/2 sm:w-3/4 m-auto">
            Track the real-time status and health of every critical system in
            our platform
          </p>
        </div>
        <div className="fixed z-50 start-3 bottom-5 md:start-10 md:bottom-10 md:bottom-1/3 md:start-4 lg:bottom-5 space-y-3 py-5 px-3  shadow-md shadow-gray-400 rounded-lg  lg:start-5  bg-white sm:m-auto">
          <ul>
            <li>
              <span className="bg-green-700 rounded-full w-5 h-5 inline-block me-2"></span>
              Operational
            </li>
            <li>
              <span className="bg-yellow-400 rounded-full w-5 h-5 inline-block me-2"></span>
              Minor issues
            </li>
            <li>
              <span className="bg-red-500 rounded-full w-5 h-5 inline-block me-2"></span>
              Major outage
            </li>
            <li>
              <span className="bg-blue-600 rounded-full w-5 h-5 inline-block me-2"></span>
              Development
            </li>
          </ul>
        </div>
      </div>

      <TableExplor experienceItems={experienceItems} />

      <div className="relative overflow-x-auto w-3/4 m-auto bg-zinc-50  my-10 md:my-16 px-5  pt-5 rounded-md  border">
        <div className="mb-5 text-lg md:text-xl  font-semibold text-gray-800 ">
          Scheduled updates and maintenance
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-blue-600 font-bold text-start ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Maintenance history
              </th>
              <th scope="col" className="px-6 py-3">
                Expected time
              </th>
              <th scope="col" className="px-6 py-3">
                Affected service
              </th>
              <th scope="col" className="px-6 py-3">
                Additional Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-t text-md md:text-md  text-black ">
              <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                2024-09-01
              </td>
              <td className="px-6 py-4">02:00 - 04:00 PM</td>
              <td className="px-6 py-4">SMS</td>
              <td className="px-6 py-4">Performance improvements</td>
            </tr>
            <tr className=" border-t text-md md:text-md  text-black">
              <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                2024-09-05
              </td>
              <td className="px-6 py-4">01:00 - 03:00 PM</td>
              <td className="px-6 py-4">WhatsApp API</td>
              <td className="px-6 py-4">Upgrade servers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className=" shadow-custom shadow-gray-400   m-auto text-center my-10 md:my-16  py-3 w-3/4 md:w-2/4 lg:w-1/4  rounded-lg text-2xl md:text-3xl lg:text-4xl text-gray-800 font-extrabold mt-5 leading-tight ">
          Report an Issue
        </div>

        <div className=" shadow-custom shadow-gray-300   md:w-10/12 sm:11/12 m-auto text-start  my-10 md:my-16 space-y-3 px-6 py-10 ">
          <div className="md:w-3/4 m-auto space-y-7">
            <div>
              <label
                htmlFor="selection"
                className="block mb-2 text-xl w-full  text-gray-900 font-bold"
              >
                Affected Service
              </label>
              <select
                id="selection"
                className="bg-gray-50 border w-full border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500  block  p-2.5 m-auto outline-none "
              >
                <option selected>select Service</option>
                <option value="Category">Custom Gen AI Chatbot Builder</option>
                <option value="Support">Social Listening and Engagement</option>
                <option value="Inquiry">Gen AI Website Navigator</option>
                <option value="Inquiry">NLU and Role Based Chatbot</option>
                <option value="Inquiry">SMS</option>
                <option value="Inquiry">WhatsApp</option>
                <option value="Inquiry">Messenger</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xl  w-full text-gray-900 font-bold"
              >
                Description of the Issue
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5  text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500  m-auto outline-none"
                placeholder="Detailed Description of the issue"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-md w-full font-medium text-gray-900 "
              >
                Full Name*
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full  p-2.5 m-auto outline-none"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md w-full font-medium text-gray-900 "
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block  w-full p-2.5 m-auto outline-none"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-md w-full font-medium text-gray-900 "
              >
                Email Address*
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block  p-2.5 m-auto outline-none"
                placeholder="Email Address"
                required
              />
            </div>

            <div className=" w-full text-start space-y-2">
              <h2>Attach Files (Optional)</h2>
              <span>File selection : </span>
              <input
                className=" w-1/4 text-sm text-blue-900 border border-blue-300 rounded-lg cursor-pointer bg-blue-50 inline-block"
                id="file_input"
                type="file"
              />
            </div>
          </div>
          <div className=" w-full text-center ">
            <button className="bg-blue-600 text-white rounded-lg px-4 py-3 mb-2 md:mb-0   m-auto mt-6 sm:w-1/2 ">
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SecoundSupport;

export const Head: HeadFC = () => <title>SecoundSupport</title>;
