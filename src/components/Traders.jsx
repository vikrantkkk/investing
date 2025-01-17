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

const imageData = [
  { id: 1, src: kislaysingh, alt: "kislaysingh" },
  { id: 2, src: manish, alt: "manish Blur 2" },
  { id: 3, src: mnn, alt: "mnn Middle" },
  { id: 4, src: shourya, alt: "shourya Blur 1" },
  { id: 5, src: virat, alt: "virat Blur 2" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 10000,
  swipe: true,
  touchMove: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  swipeToSlide: true,
  arrows: true, // Ensure arrows are enabled
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
  ],
};

const Traders = () => {
  return (
    <div className="relative flex flex-col gap-12 bg-[#F1F1F1] dark:bg-darkBackGround px-4 py-16 md:px-0 md:py-8">
      <div className="font-poppins dark:text-white text-center text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-bold">
        Ready To Unlock Secrets Of
        <br />
        <span className="text-figmaGreen">Successful Traders?</span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <Slider {...sliderSettings}>
          {[...imageData, ...imageData].map((image) => (
            <div
              key={image.id}
              style={{
                padding: "5px",
                textAlign: "center",
                width: "350px",
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
        </Slider>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <CustomButton />
      </div>
    </div>
  );
};

export default Traders;
