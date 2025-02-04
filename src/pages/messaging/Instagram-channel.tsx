import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channel-header";
import Dispatch from "../../component/channel/dispach";
import Channelfooter from "../../component/channel/channel-footer";
import Experience from "../../component/channel/experience";

import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";
import ChannelFooter from "../../component/channel/channel-footer";

const dispatchItems = [
  {
    heading: "Cloud Contact Center",
    paragraph:
      "Efficiently manage customer interactions through an integrated system that enhances customer experience",
  },
  {
    heading: "Smart Chatbots",
    paragraph:
      "Provide instant and personalized responses to customers using AI, enabling excellent and rapid service",
  },
  {
    heading: "Superior Customer Experience",
    paragraph:
      "Empower customers to easily initiate conversations via Instagram, enhancing engagement and loyalty",
  },
  {
    heading: "Data Analytics",
    paragraph:
      "Track and analyze conversation performance to improve strategies and make informed decisions",
  },
];

const experienceItems = [
  {
    heading: "An integrated system for managing interactions",
    text: "Elevate your customer service to a new level that combines advanced technology with ease of use to improve customer interactions",
    image: image1,
    list: [
      "Unified integrated management",
      "Advanced AI for improved response",
      "Analytics to enhance service quality",
      "High security for customer data",
    ],
  },
  {
    heading: "Instantly Engage with Smart Chatbots",
    text: "Our smart assistant provides instant and personalized responses to customers using AI-powered, offering quick and efficient customer interactions",
    image: image2,
    list: [
      "Instant response to customer inquiries.",
      "Personalized experience for each customer.",
      "Easy and quick chatbot setup.",
      "Save time and human resources through automation",
    ],
  },
  {
    heading: "Strengthen Connections with Direct Messaging",
    text: "Enable your customers to start conversations with you directly through Instagram messages, enhancing their engagement and loyalty to your brand",
    image: image3,
    list: [
      "Easy conversation initiation from Instagram.",
      "Increased engagement and stronger customer relationships.",
      "Continuous interaction with customers.",
      "Smooth and efficient customer service.",
    ],
  },
  {
    heading: "Elevate Strategies with Insightful Analytics",
    text: "Our analytics tools allow you to track and analyze conversation performance to better understand customer interactions and deliver improved experiences",
    image: image4,
    list: [
      "Monitor and analyze conversation performance",
      "Improve communication strategies",
      "Make data-driven decisions",
      "Provide enhanced customer experiences",
    ],
  },
];

const InstagramPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title="The optimal solution for communication via Instagram"
        paragraph="Our integrated solutions enhance effective communication and increase sales through Instagram by attracting potential customers, boosting sales, and providing instant responses"
        image={image1}
        sbtn="Get a Free Demo"
        fbtn="Contact an Expert"
      />
      <div className="mt-0 md:mt-36"></div>
      <Dispatch
        theheader="Transform Your Instagram Account into an Integrated Marketing and Customer Service Hub"
        thescoundheader="Turn your company's Instagram account into an interactive platform for marketing and customer service. Boost sales and enhance customer experience"
        dispachitems={dispatchItems}
      />
      <Experience experianceitems={experienceItems} />
      <ChannelFooter
        title="Efficiently Manage Instagram Interactions"
        secoundTitle="Centralize all your Instagram interactions in one dashboard to boost agent productivity and offer personalized responses"
        button="Start for free"
        secoundButton="See price"
      />
    </Layout>
  );
};

export default InstagramPage;

export const Head: HeadFC = () => <title>Instagram-channel</title>;
