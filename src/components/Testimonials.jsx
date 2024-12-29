import React from "react";
import Ellipse1 from "../assets/svg/Ellipse1.svg";
import Ellipse2 from "../assets/svg/Ellipse2.svg";
import Ellipse3 from "../assets/svg/Ellipse3.svg";
import Ellipse4 from "../assets/svg/Ellipse4.svg";

const cardData1 = [
  {
    icon: Ellipse2,
    name: "Abhishek",
    designation: "IIT KANPUR",
    text1:
      "“Mind blowing! This was the best trading webinar I have ever attended...”",
    text2:
      "Well I was blown with the way you explained things. What a perspective about trading and investing. The way you explain things shows the kind of time and energy you have spent in trading. I really was vibing with you man! Absolutely loved the webinar. Kudos!",
  },
  {
    icon: Ellipse1,
    name: "Chelsi",
    designation: "MBA STUDENT",
    text1:
      "“Absolutely brilliant! I’m super confident to use smart money concepts now.”",
    text2:
      "I had no idea of stock trading, but this webinar helped me understand everything from the absolute basics and now I’m super confident to apply these in the markets. The best thing I liked about this webinar is the live examples that Parang showed us, which shows transparency and high skill level. Highly recommended!",
  },
];

const cardData2 = [
  {
    icon: Ellipse4,
    name: "Prashi",
    designation: "INFOSYS",
    text1: "“This workshop transformed my approach to trading...”",
    text2:
      "I cannot express enough gratitude to Parang & the incredible team at StockWiz. Before joining their program my understanding of the markets was based on fragmented knowledge from YouTube videos. However, StockWiz provided me with a monumental reality check that completely transformed my approach to trading.",
  },
  {
    icon: Ellipse3,
    name: "Madhav",
    designation: "LAWYER",
    text1:
      "“Truly game changing! I will never use retail trading concepts, ever...”",
    text2:
      "I got such a big reality check. Parang explained us how the markets really work as opposed to the half baked knowledge I had after watching  YouTube videos. Such an eye opener, I am now able to trade like the  professionals. Thank you so much team StockWiz!",
  },
];

const Testimonials = () => {
  return (
    <div className="flex w-screen  gap-4 h-[160vh] bg-[#F1F1F1]">
      <div className="w-[45%] flex items-center justify-center">
        <div className="mt-6 font-poppins text-center text-[40px] leading-[60px] font-bold ">
          <span className="text-figmaGreen">Testimonials</span> in the From
          <br />
          Past Attendees
          <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
        </div>
      </div>
      <div className="flex-1 flex gap-8 items-center">
        <div className="flex flex-col gap-8">
          {cardData1.map((item, index) => (
            <div
              key={index}
              style={{ width: 300, height: "auto" }}
              className={`bg-white p-6 rounded-2xl ${
                index === 0 &&
                "shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
              } flex flex-col transition-all duration-300 ease-in-out hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]`}
            >
              <div className="flex gap-4">
                <img
                  src={item.icon}
                  className="w-16 h-16 rounded-full"
                  alt={`card-${item.id}`}
                />
                <div className="flex flex-col">
                  <div className="font-poppins font-semibold text-[20px] leading-8">
                    {item.name}
                  </div>
                  <div className="font-poppins font-normal text-[16px] leading-6 text-[#0E0F19B2]/[0.7]">
                    {item.designation}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 items-start gap-2">
                <div className="font-poppins font-semibold text-[16px] leading-6 text-[#0E0F19]">
                  {item.text1}
                </div>
                <div className="font-poppins text-[16px] font-normal leading-6 text-[#0E0F19B2]/[0.7]">
                  {item.text2}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-8">
          {cardData2.map((item,index) => (
            <div
              key={index}
              style={{ width: 300, height: "auto" }}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-md flex flex-col transition-all duration-300 ease-in-out hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
            >
              <div className="flex gap-4">
                <img
                  src={item.icon}
                  className="w-16 h-16 rounded-full"
                  alt={`card-${item.id}`}
                />
                <div className="flex flex-col">
                  <div className="font-poppins font-semibold text-[20px] leading-8">
                    {item.name}
                  </div>
                  <div className="font-poppins font-normal text-[16px] leading-6 text-[#0E0F19B2]/[0.7]">
                    {item.designation}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 items-start gap-2">
                <div className="font-poppins font-semibold text-[16px] leading-6 text-[#0E0F19]">
                  {item.text1}
                </div>
                <div className="font-poppins text-[16px] font-normal leading-6 text-[#0E0F19B2]/[0.7]">
                  {item.text2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
