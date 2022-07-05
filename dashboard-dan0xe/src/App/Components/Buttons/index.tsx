import React from "react";

type Buttons = "positive" | "negative" | "neutral";

const getButtonType = (type: Buttons) => {
  switch (type) {
    case "positive":
      return "bg-green-500 hover:bg-green-700";
    case "negative":
      return "bg-red-500 hover:bg-red-700";
    case "neutral":
      return "bg-blue-500 hover:bg-blue-700";
    default:
      return "bg-blue-500 hover:bg-blue-700";
  }
};

type sizeButton = "small" | "medium" | "large";

// type ButtonProps = {
//   typeButton: Buttons;
//   Text: string;
//   onClick?: () => void;
//   size?: string;
// };

const getButtonSize = (size: sizeButton) => {
  switch (size) {
    case "small":
      return "py-2 px-4";
    case "medium":
      return "py-3 px-6";
    case "large":
      return "py-4 px-8";
    default:
      return "py-2 px-4";
  }
};

export const Button = ({
  Text,
  typeButton,
  onClick,
  size,
  props,
}: {
  Text: string;
  typeButton: Buttons;
  onClick?: () => void;
  size: sizeButton;
  props?: any;
}) => {
  return (
    <>
      <button
        className={`${getButtonType(typeButton)}
        ${getButtonSize(size)}
        text-slate-200 first-letter:uppercase text-xl font-semibold rounded shadow-xl p-2 duration-150 hover:shadow-xl } ${props}`}
      >
        {Text}
      </button>
    </>
  );
};

export const NavbarButton = ({
  text,
  props,
}: {
  text: string;
  props?: any;
}) => {
  return (
    <>
      <button
        className={`
        text-slate-300 hover:bg-slate-800 hover:bg-opacity-30 first-letter:uppercase hover:cursor-pointer hover:text-white duration-125 ease-linear hover:scale-110  text-xl font-semibold rounded shadow-xl p-2 duration-150 hover:shadow-xl hover:animate-pulse  z-50 } ${props}
        `}
      >
        {text}
      </button>
    </>
  );
};
