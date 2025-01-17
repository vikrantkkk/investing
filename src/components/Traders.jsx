import React from "react";
import kislaysingh from "../assets/jpg/kislaysingh.jpg";
import manish from "../assets/jpg/manish.jpg";
import mnn from "../assets/jpg/mnn.jpg";
import shourya from "../assets/jpg/shourya.jpg";
import virat from "../assets/jpg/virat.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../common/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const imageData = [
  { id: 1, src: kislaysingh, alt: "kislaysingh" },
  { id: 2, src: manish, alt: "manish Blur 2" },
  { id: 3, src: mnn, alt: "mnn Middle" },
  { id: 4, src: shourya, alt: "shourya Blur 1" },
  { id: 5, src: virat, alt: "virat Blur 2" },
];

const Traders = () => {
  const sliderRef = React.useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettingsMobile = {
    dots: false,
    arrows: false, // Disable default arrows for mobile slider
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <div className="relative flex flex-col gap-12 bg-[#F1F1F1] dark:bg-darkBackGround px-4 py-16 md:px-0 md:py-8">
      {/* Header Section */}
      <div className="font-poppins dark:text-white text-center text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-bold">
        Ready To Unlock Secrets Of
        <br />
        <span className="text-figmaGreen">Successful Traders?</span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>

      {/* Desktop View: Marquee Effect */}
      <div className="md:flex hidden animate-marquee md:space-x-8 space-x-4">
        {[...imageData, ...imageData].map((image, index) => (
          <div
            key={`${image.id}-${index}`}  // Corrected key syntax
            style={{
              padding: "5px",
              textAlign: "center",
              width: "350px",
              flexShrink: 0,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-lg"
              style={{
                width: "350px",
                height: "auto",
                objectFit: "cover",
                border: "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile View: Slider */}
      <div className="block md:hidden">
        <Slider ref={sliderRef} {...sliderSettingsMobile}>
          {imageData.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  border: "none",
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Custom Arrows Below the Slider */}
        <div className="flex justify-center items-center mt-4">
          <div
            onClick={goToPrev}
            className="bg-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-400 cursor-pointer flex justify-center items-center mx-2"
          >
            <ArrowBackIcon fontSize="large" style={{ color: "#26AD00" }} />
          </div>
          <div
            onClick={goToNext}
            className="bg-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-400 cursor-pointer flex justify-center items-center mx-2"
          >
            <ArrowForwardIcon fontSize="large" style={{ color: "#26AD00" }} />
          </div>
        </div>
      </div>

      {/* Custom Button Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <CustomButton />
      </div>
    </div>
  );
};

export default Traders;
