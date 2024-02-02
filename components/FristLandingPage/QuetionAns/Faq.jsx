"use client"
import Lottie from "lottie-react";
import animation from "../../../assets/Animation/Animation.json";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const accordionData = [
    {
      question: "How does your product work?",
      answer:
        "Our product is designed to simplify your tasks. It utilizes cutting-edge technology to provide a user-friendly experience. For detailed information, you can check our product documentation.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards and online payment gateways. You can find the complete list of accepted payment methods in the billing section of your account.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our product. During the trial period, you'll have full access to all features. If you decide to continue using our product after the trial, you can choose a subscription plan that suits your needs.",
    },
    {
      question: "How can I get customer support?",
      answer:
        "Our customer support team is available 24/7. You can contact us through our support portal on the website or by emailing support@example.com. We are dedicated to assisting you with any issues or queries you may have.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We have a 30-day money-back guarantee. If you're not satisfied with our product within the first 30 days of your subscription, you can request a full refund. Refunds for subscriptions beyond 30 days are considered on a case-by-case basis.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto lg:my-10 my-0">
      
      <div className="container mx-auto flex md:gap-28 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center flex-1">
          <div className="h-[500px]">
            <Lottie className="h-full" animationData={animation} />
          </div>
        </div>
        <div className="max-h-[400px] flex-1 my-auto overflow-y-auto scrollbar-thin	scrollbar-thumb-indigo-400 scrollbar-track-indigo-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth">
          {accordionData.map((data, index) => {
            return (
              <AccordionItem
                toggle={() => toggle(index)}
                open={index === open}
                title={data.question}
                description={data.answer}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
