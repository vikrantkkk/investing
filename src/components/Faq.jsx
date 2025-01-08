import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const faqData = [
  {
    id: 1,
    question: " What will be the duration of the webinar?",
    answer: "The duration of the webinar will be 120 minutes (2 hours).",
  },
  {
    id: 2,
    question: "What will be the language of the webinar?",
    answer:
      "The webinar will be delivered in simple English. Doubts can be asked in Hindi.",
  },
  {
    id: 3,
    question: "Will we get the recordings of this webinar?",
    answer:
      "Yes, by attending the webinar, you will gain access to a replay option, allowing you to watch the content as many times as you wish.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col  h-auto w-screen gap-8 py-8 px-4 bg-[#F1F1F1]">
      <div className="flex md:flex-row flex-col">
        {/* Header Section */}
        <div className="md:w-[40%] w-full flex justify-center md:mt-4">
          <div className="flex flex-col md:items-start items-center font-poppins md:text-start text-center md:text-[40px] text-[32px] leading-[45px] md:leading-[60px] font-bold">
            Frequently Asked
            <br />
            Questions
            <div className="border-2 w-[200px] border-figmaGreen mt-2" />
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="flex-1">
          <div className="flex flex-col items-start md:w-[80%] w-full">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 py-8 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center  gap-4">
                    <span
                      className="text-start font-bold text-[#0E0F19B2]/[0.7]"
                      style={{
                        fontSize: "calc(10px + 2vmin)",
                        lineHeight: "1",
                      }}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    <h3 className="font-poppins text-start font-bold md:text-[24px] text-[20px] leading-8 md:leading-9  text-[#0E0F19]">
                      {item.question}
                    </h3>
                  </div>
                  <button
                    aria-expanded={activeIndex === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    {activeIndex === index ? (
                      <RemoveCircleIcon
                        style={{ color: "#26AD00", fontSize: "30px" }}
                      />
                    ) : (
                      <AddCircleOutlineIcon style={{ fontSize: "30px" }} />
                    )}
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="font-poppins text-start flex  md:w-[90%] w-[90%] font-medium md:text-[16px] text-[14px] leading-5 md:leading-6 text-[#0E0F19B2]/[0.7]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex-1">
          <div className="flex flex-col items-start w-full md:w-[80%] mx-auto">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 py-8 transition-all"
              >
                {/* Question and Answer Container */}
                <div className="flex w-full gap-4 items-start">
                  {/* Number Section */}
                  <div className="flex-shrink-0 text-[#0E0F19B2]/[0.7] font-bold text-[calc(10px+2vmin)] leading-none">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col flex-grow">
                    {/* Question */}
                    <h3 className="font-poppins text-left font-bold text-[clamp(20px,2vw,24px)] leading-[1.2] text-[#0E0F19]">
                      {item.question}
                    </h3>

                    {/* Answer */}
                    {activeIndex === index && (
                      <p className="font-poppins text-justify font-medium text-[clamp(14px,1.5vw,16px)] leading-[1.6] text-[#0E0F19B2]/[0.7] mt-4">
                        {item.answer}
                      </p>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <button
                    aria-expanded={activeIndex === index}
                    onClick={() => toggleFAQ(index)}
                    className="flex-shrink-0"
                  >
                    {activeIndex === index ? (
                      <RemoveCircleIcon
                        style={{ color: "#26AD00", fontSize: "30px" }}
                      />
                    ) : (
                      <AddCircleOutlineIcon style={{ fontSize: "30px" }} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
