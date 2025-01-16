import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDarkMode } from "../hooks/DarkModeContext";
import { useLocation } from "react-router-dom";

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
      "The webinar will be delivered in both Hindi and English. You can choose your preferred language, and doubts can be asked in either language.",
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
  const { darkMode } = useDarkMode();
  const location = useLocation();

  // Check if the current route is the contact page
  const isContactPage = location.pathname === "/contact";

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // <div className="flex flex-col  h-auto w-screen gap-8 md:py-8 py-16 px-4 dark:bg-darkBackGround bg-[#F1F1F1]">
    <div
    className={`flex flex-col h-auto w-screen gap-8 px-4 dark:bg-darkBackGround bg-[#F1F1F1] ${
      isContactPage ? "md:py-8 py-8" : "md:py-8 py-16"
    }`}
  >
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[40%] w-full flex justify-center md:mt-4">
          <div className="flex dark:text-white flex-col md:items-start items-center font-poppins md:text-start text-center md:text-[40px] text-[32px] leading-[45px] md:leading-[60px] font-bold">
            Frequently Asked
            <br />
            Questions
            <div className="border-2 w-[200px] border-figmaGreen mt-2" />
          </div>
        </div>

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
                  <div className="flex-shrink-0 dark:text-[#FFFFFFB2]/[0.7] text-[#0E0F19B2]/[0.7] font-bold text-[calc(10px+2vmin)] leading-none">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col flex-grow">
                    {/* Question */}
                    <h3 className="font-poppins dark:text-[#FFFFFF] text-left font-bold text-[clamp(20px,2vw,24px)] leading-[1.2] text-[#0E0F19]">
                      {item.question}
                    </h3>

                    {/* Answer */}
                    {activeIndex === index && (
                      <p className="font-poppins dark:text-[#FFFFFFB2]/[0.7] text-justify font-medium text-[clamp(14px,1.5vw,16px)] leading-[1.6] text-[#0E0F19B2]/[0.7] mt-4">
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
                        style={{ color: darkMode ? "white" : "#26AD00",fontSize: "30px" }}
                      />
                    ) : (
                      <AddCircleOutlineIcon
                        style={{
                          fontSize: "30px",
                          color: darkMode ? "gray" : "inherit",
                        }}
                      />
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
