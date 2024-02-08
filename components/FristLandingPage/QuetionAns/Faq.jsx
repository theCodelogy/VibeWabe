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
      question: " Can I stream movies and audio content on multiple devices simultaneously with my premium subscription?",
      answer:
        "Yes, premium subscribers can enjoy streaming content on multiple devices simultaneously, depending on the terms of the subscription plan.",
    },
    {
      question: "Are there any restrictions on downloading movies and audio for offline viewing/listening?",
      answer:
        "Premium subscribers may have the option to download select movies and audio content for offline viewing or listening, subject to the terms and conditions of their subscription plan.",
    },
    {
      question: "Do you offer a free trial period for your premium subscription?",
      answer:
        "Yes, we offer a free trial period for new users to experience our premium features. The duration of the trial period may vary depending on promotional offers.",
    },
    {
      question: "How frequently is new content added to the platform?",
      answer:
        "We strive to regularly update our library with new movies, audio tracks, and TV shows to provide our users with fresh and diverse content. The frequency of updates may vary.",
    },
    {
      question: " Can I cancel my premium subscription at any time, and will I be refunded for unused time?",
      answer:
        " Yes, you can cancel your premium subscription at any time through your account settings. Refunds for unused time may be subject to the cancellation policy outlined in our terms of service.",
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
