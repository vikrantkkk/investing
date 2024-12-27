import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";

const faqData = [
  {
    id: 1,
    question: "Who is this workshop for?",
    answer:
      "This workshop is for anyone who wants to level up their trading game, whether you’re a beginner looking for a solid foundation or an experienced trader struggling to achieve consistent results.",
  },
  {
    id: 2,
    question: "How do I start trading?",
    answer:
      "To start trading, you need to open a brokerage account, learn the basics of stock markets, and begin with small investments.",
  },
  {
    id: 3,
    question: "What are the risks of trading?",
    answer:
      "Trading involves risks such as market volatility, loss of principal, and unforeseen economic factors.",
  },
  {
    id: 4,
    question: "Can I trade without prior experience?",
    answer:
      "Yes, but it is recommended to gain some basic knowledge or join educational programs before starting.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container border-b-2 flex flex-col h-[90vh] gap-12 py-8 px-4 bg-[#F1F1F1]">
      <div className="flex mt-6">
        {/* Header Section */}
        <div className="w-[40%] flex justify-center">
          <div className="flex flex-col items-start font-poppins text-start text-[40px] leading-[60px] font-bold">
            Frequently Asked
            <br />
            Questions
            <div className="border-2 w-[200px] border-figmaGreen mt-2" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex-1 w-[60%]">
          <div className="flex flex-col items-start w-[80%]">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 py-8 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-figmaGreen flex items-center justify-center font-bold text-white">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="font-poppins text-start font-bold text-[24px] leading-9  text-[#0E0F19]">
                      {item.question}
                    </h3>
                  </div>
                  <button
                    aria-expanded={activeIndex === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    {activeIndex === index ? (
                      <RemoveCircleOutlineIcon/>
                    ) : (
                      <AddCircleOutlineIcon />
                    )}
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="font-poppins text-start w-[90%] font-medium text-[16px] leading-6 text-[#0E0F19B2]/[0.7] ml-12">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <CustomButton1
          sx={{
            width: "276px",
          }}
        >
          Join Now (English) at ₹199
        </CustomButton1>
        <CustomButton2
          sx={{
            width: "276px",
          }}
        >
          Join Now (Hindi) at ₹199
        </CustomButton2>
      </div>
    </div>
  );
};

export default Faq;
