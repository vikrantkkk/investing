// import React from "react";
// import chat from "../assets/svg/chat.svg";
// import support from "../assets/svg/support.svg";
// import call from "../assets/svg/call.svg";

// // Array of card data with random values
// const cardData = [
//   {
//     image: chat, // Replace with actual image URLs if needed
//     title: "Chat to Sales",
//     description: "Speak to our friendly team.",
//     email: "help@stockwiz.in",
//   },
//   {
//     image: support,
//     title: "Chat to Support",
//     description: "We’re here to help.",
//     email: "+91 8949800532",
//   },
//   {
//     image: call,
//     title: "Call us",
//     description: "Mon-Fri from 8am to 5pm.",
//     email: "+91 8949800532",
//   },
// ];

// const Contact = () => {
//   return (
//     <div className="flex flex-col items-start justify-center gap-12 px-36 md:h-[100vh] h-auto bg-[#F1F1F1]">
//       {/* Contact Section */}
//       <div className="flex flex-col gap-2">
//         <div className="text-figmaGreen font-semibold text-base">
//           Contact us
//         </div>
//         <div className="font-poppins font-semibold md:text-[48px] text-[29px] leading-[45px] md:leading-[70px] text-[#101828]">
//           We’d love to hear from you
//         </div>
//       </div>
//       <div className="font-poppins font-normal text-[24px] leading-9 text-[#0E0F19B2]/[0.7]">
//         Our team is always here to chat.
//       </div>

//       {/* Cards Section */}
//       <div className="flex md:flex-row flex-col flex-wrap justify-between w-full">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start h-auto w-[380px] gap-4 p-4 bg-white rounded-md shadow-md"
//           >
//             {/* Image at the top */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="h-[50px] w-[50px] object-contain"
//               />
//             </div>
//             {/* Text content below the image */}
//             <div className="flex flex-col gap-2">
//               <div className="font-poppins font-medium text-md text-[#101828]">
//                 {card.title}
//               </div>
//               <div className="font-light text-sm text-[#475467]">
//                 {card.description}
//               </div>
//               <div className="text-figmaGreen font-semibold text-sm">
//                 {card.email}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-col items-start h-auto w-full gap-4 p-4 bg-white rounded-md shadow-md">
//         <div className="flex flex-col gap-2">
//           <div className="font-poppins font-medium text-md text-[#101828]">
//             Registered Address
//           </div>
//           <div className="font-light text-sm text-[#475467]">
//             979, 3rd Floor Mehta Sonography Building Jodhpur, 342003
//           </div>
//         </div>
//         <div className="text-figmaGreen font-semibold text-sm">
//           979, 3rd Floor Mehta Sonography Building Jodhpur, 342003
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import chat from "../assets/svg/chat.svg";
import support from "../assets/svg/support.svg";
import call from "../assets/svg/call.svg";

// Array of card data with random values
const cardData = [
  {
    image: chat,
    title: "Chat to Sales",
    description: "Speak to our friendly team.",
    email: "help@stockwiz.in",
  },
  {
    image: support,
    title: "Chat to Support",
    description: "We’re here to help.",
    email: "+91 8949800532",
  },
  {
    image: call,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    email: "+91 8949800532",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-start justify-center md:gap-12  px-4 md:px-36 md:h-[100vh] ld:h-[75vh] h-auto  bg-[#F1F1F1]">
      {/* Contact Section */}
      <div className="flex flex-col gap-2 md:my-0 my-4">
        <div className="text-figmaGreen font-semibold text-base">
          Contact us
        </div>
        <div className="font-poppins text-start font-semibold md:text-[48px] text-[29px] leading-[45px] md:leading-[70px] text-[#101828]">
          We’d love to hear from you
        </div>
        <div className="font-poppins text-start font-normal md:text-[24px] text-[20px] leading-8 md:leading-9 text-[#0E0F19B2]/[0.7] ">
          Our team is always here to chat.
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between w-full md:gap-8 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full md:w-[380px] ld:w-[500px] gap-4 p-4 bg-white rounded-md shadow-md"
          >
            {/* Image at the top */}
            <div className="flex justify-center mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-[50px] w-[50px] object-contain"
              />
            </div>
            {/* Text content below the image */}
            <div className="flex flex-col gap-2">
              <div className="font-poppins font-medium text-md text-[#101828]">
                {card.title}
              </div>
              <div className="font-light text-sm text-[#475467]">
                {card.description}
              </div>
              <div className="text-figmaGreen font-semibold text-sm">
                {card.email}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Registered Address Section */}
      <div className="flex flex-col items-start h-auto w-full gap-4 p-4 bg-white rounded-md shadow-md">
        <div className="flex flex-col gap-2">
          <div className="font-poppins font-medium text-md text-[#101828]">
            Registered Address
          </div>
          <div className="font-light text-sm text-[#475467]">
            979, 3rd Floor Mehta Sonography Building Jodhpur, 342003
          </div>
        </div>
        <div className="text-figmaGreen font-semibold text-sm">
          979, 3rd Floor Mehta Sonography Building Jodhpur, 342003
        </div>
      </div>
    </div>
  );
};

export default Contact;
