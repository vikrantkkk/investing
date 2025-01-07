import React from "react";
import Ellipse1 from "../assets/svg/Ellipse1.svg";
import Ellipse2 from "../assets/svg/Ellipse2.svg";
import Ellipse3 from "../assets/svg/Ellipse3.svg";
import Ellipse4 from "../assets/svg/Ellipse4.svg";
import rocket from "../assets/svg/rocket.svg";

const cardData1 = [
  {
    icon: Ellipse2,
    name: "Abhishek",
    designation: "IIT KANPUR",
    text1: "“Mind blowing! This was the best trading webinar I have ever attended...”",
    text2:
      "Well I was blown with the way you explained things. What a perspective about trading and investing. The way you explain things shows the kind of time and energy you have spent in trading. I really was vibing with you man! Absolutely loved the webinar. Kudos!",
  },
  {
    icon: Ellipse4,
    name: "Prashi",
    designation: "INFOSYS",
    text1: "“This workshop transformed my approach to trading...”",
    text2:
      "I cannot express enough gratitude to Parang & the incredible team at StockWiz. Before joining their program my understanding of the markets was based on fragmented knowledge from YouTube videos. However, StockWiz provided me with a monumental reality check that completely transformed my approach to trading.",
  },
  {
    icon: Ellipse1,
    name: "Chelsi",
    designation: "MBA STUDENT",
    text1: "“Absolutely brilliant! I'm super confident to use smart money concepts now.”",
    text2:
      "I had no idea of stock trading, but this webinar helped me understand everything from the absolute basics and now I’m super confident to apply these in the markets. The best thing I liked about this webinar is the live examples that Parang showed us,  which shows transparency and high skill level. Highly recommended!",
  },
  {
    icon: Ellipse3,
    name: "Madhav",
    designation: "LAWYER",
    text1: "“Truly game changing! I will never use retail trading concepts, ever...”",
    text2:
      "I got such a big reality check. Parang explained us how the markets really work as opposed to the half baked knowledge I had after watching  YouTube videos. Such an eye opener, I am now able to trade like the  professionals. Thank you so much team StockWiz!",
  },
];

const Testimonials = () => {
  return (
    <div className="flex relative flex-col items-center md:gap-12 gap-8 w-screen h-auto justify-center px-4 pt-8 md:pb-36 bg-[#F1F1F1]">
      <div className="text-center">
        <h2 className="font-poppins text-[32px] md:text-[40px] font-bold leading-[48px] md:leading-[60px]">
          <span className="text-figmaGreen">Testimonials</span> From
          <br />
          Past Attendees
        </h2>
        <div className="border-2 border-figmaGreen w-[200px] mx-auto mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {cardData1.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg md:w-[300px] w-full"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                className="w-16 h-16 rounded-full"
                alt={`${item.name}-icon`}
              />
              <div>
                <h3 className="font-poppins font-semibold text-[18px]">
                  {item.name}
                </h3>
                <p className="font-poppins text-[14px] text-gray-600">
                  {item.designation}
                </p>
              </div>
            </div>
            <p className="font-poppins text-[16px] font-semibold mt-4">
              {item.text1}
            </p>
            <p className="font-poppins text-[14px] text-gray-600 mt-2">
              {item.text2}
            </p>
          </div>
        ))}
      </div>
      <img
        src={rocket}
        alt="rocket"
        className="md:w-[100px] w-[60px] absolute top-20 md:top-24 md:left-52 left-2"
      />
    </div>
  );
};

export default Testimonials;
