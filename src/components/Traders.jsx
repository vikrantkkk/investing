import React from "react";
import imageblur1 from "../assets/svg/imageblur1.svg";
import imageblur2 from "../assets/svg/imageblur2.svg";
import imagemiddle from "../assets/svg/imagemiddle.svg";
import Rectangle9 from "../assets/svg/Rectangle9.svg";
import Rectangle10 from "../assets/svg/Rectangle10.svg";
import polldark from "../assets/svg/polldark.svg";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import { height } from "@mui/system";
import CustomButton from "../common/CustomButton";
import CustomButtonForMobile from "../common/CustomButtonForMobile";

const imageData = [
  {
    id: 1,
    src: imageblur1,
    alt: "Image Blur 1",
    height: "200px",
    width: "200px",
  },
  {
    id: 2,
    src: imageblur2,
    alt: "Image Blur 2",
    height: "242px",
    width: "242px",
  },
  {
    id: 3,
    src: imagemiddle,
    alt: "Image Middle",
    height: "200px",
    width: "200px",
  },
];
const Traders = () => {
  return (
    <div className="relative flex md:border-b-2 flex-col gap-12 dark:border-none  h-auto w-screen  md:px-0 md:py-8 py-16  px-4 dark:bg-darkBackGround bg-[#F1F1F1]">
      <div className="font-poppins dark:text-white text-center md:text-[40px] text-[32px] leading-[48px] md:leading-[60px] font-bold">
        Ready To Unlock Secrets Of
        <br />
        <span className="text-figmaGreen">Successful Traders?</span>
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="md:flex hidden justify-center items-center md:gap-4 ld:gap-44">
        {imageData.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="md:hidden flex justify-center items-center gap-4">
        {imageData.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{
              width: image.width,
              height: image.height,
            }}
          />
        ))}
      </div>
      <div className="flex md:flex-row w-full flex-col justify-center md:items-start items-center md:gap-8 ld:gap-12 gap-4">
        <CustomButton />
      </div>
      <img
        src={Rectangle9}
        alt={Rectangle9}
        className="z-10 md:block hidden dark:hidden absolute right-0 top-0 h-[95%]"
      />
      <img
        src={Rectangle10}
        alt={Rectangle10}
        className="z-10 md:block hidden dark:hidden absolute left-0 top-0 h-[95%]"
      />
      <img
        src={Rectangle9}
        alt={Rectangle9}
        className="absolute -right-10 dark:hidden top-52 h-[45%]"
      />
      <img
        src={Rectangle10}
        alt={Rectangle10}
        className="absolute dark:hidden -left-10 top-52 h-[45%]"
      />
      <img
        src={polldark}
        alt={polldark}
        className="absolute dark:block hidden top-20 w-[120px] left-0"
      />
    </div>
  );
};
export default Traders;
