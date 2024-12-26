import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";

const CustomButton2 = ({
  children,
  className,
  sx = {},
  style = {},
  ...props
}) => {
  const isShadowNone = className?.includes("shadow-none");

  return (
    <Button
      {...props}
      sx={{
        background:
          "linear-gradient(263.67deg, #007AFF 51.67%, #1064BF 96.05%)",
        borderRadius: "6px",
        padding: "10px",
        color: "white",
        boxShadow: isShadowNone
          ? "none"
          : "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "20.06px",
        letterSpacing: "0.25px",
        textTransform: "none",
        "&:hover": {
          background: "linear-gradient(180deg, #007AFF 0%, #1064BF 50%)",
        },
        ...sx,
      }}
      style={{
        ...style,
      }}
      className={clsx("w-[118px] h-[41px]", className)}
    >
      {children}
    </Button>
  );
};

export default CustomButton2;
