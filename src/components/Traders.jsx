import React from "react";
import imageblur1 from "../assets/svg/imageblur1.svg";
import imageblur2 from "../assets/svg/imageblur2.svg";
import imagemiddle from "../assets/svg/imagemiddle.svg";
import Rectangle9 from "../assets/svg/Rectangle9.svg";
import Rectangle10 from "../assets/svg/Rectangle10.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";

const imageData = [
  { id: 1, src: imageblur1, alt: "Image Blur 1" },
  { id: 2, src: imageblur2, alt: "Image Blur 2" },
  { id: 3, src: imagemiddle, alt: "Image Middle" },
];
const Traders = () => {
  return (
    <div className="container relative flex border-b-2 flex-col gap-20  h-[120vh] bg-[#F1F1F1]">
      <div className="mt-6 font-poppins text-center text-[40px] leading-[60px] font-bold ">
        Ready To Unlock Secrets Of
        <br />
        <span className="text-figmaGreen">Successful Traders?</span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="flex justify-center gap-4">
        {imageData.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} className="" />
        ))}
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
      <img
        src={Rectangle9}
        alt={Rectangle9}
        className="z-10 absolute right-0"
      />
      <img
        src={Rectangle10}
        alt={Rectangle10}
        className="z-10 absolute left-0"
      />
    </div>
  );
};
export default Traders;
