import React from "react";

const CustomButton4 = () => {
  return (
    <div className="flex font-bold">
      {/* Left Button: Gradient Background with Box Shadow */}
      <button
        className="p-4 text-black rounded-l-md w-[300px] transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", // Your desired gradient
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #49E318 0%, #2FBE00 50%, #1F9D00 100%)") // Darker gradient on hover
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(180deg, #58FF29 0%, #31DE00 50%, #26AD00 100%)") // Original gradient
        }
      >
        Join Now (Hindi) at <span className="line-through">₹499</span> ₹199
      </button>

      {/* Right Button: Transparent with Gradient Border */}
      <button
        className="flex items-center justify-center px-4 text-black dark:text-white bg-transparent rounded-r-md w-[300px] transition-all duration-300"
        style={{
          border: "2px solid transparent", // 2px border for the right button
          borderImageSource:
            "linear-gradient(180deg, #58FF29, #31DE00, #26AD00 100%)", // Same gradient for the border
          borderImageSlice: 1, // Ensures the gradient is applied to the border
          borderRadius: "20px", // Border radius for the right button
        }}
      >
        15th January 2025 | 9:00 PM
      </button>
    </div>
  );
};

export default CustomButton4;
