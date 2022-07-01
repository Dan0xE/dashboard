import React from "react";
import { SidebarData } from "./SidebarData";
import Draggable from "react-draggable";

export const Sidebar = () => {
  const [pressing, setIsPressing] = React.useState(false);

  const handlePress = () => {
    setIsPressing(true);
  };
  return (
    <div className="flex items-center h-full absolute z-10">
      <Draggable>
        <div
          className={`full-hd-plus:h-2/6 h-3/6 rounded-lg shadow-xl ml-4 items-center w-60 bg-gray-700 flex flex-col ${
            pressing ? "cursor-move" : ""
          }`}
          onDragCapture={() => handlePress()}
          onDropCapture={() => setIsPressing(false)}
        >
          <ul className="w-11/12 h-full space-y-4 mt-10">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className={`${
                    window.location.pathname === val.path
                      ? "bg-gray-400 translate-x-1"
                      : "bg-gray-500"
                  } hover:shadow-xl text-lg rounded-lg hover:translate-x-1 shadow-2xl duration-150 transition-all ease-linear first-letter:uppercase h-16 hover:bg-gray-400 m-0  list-none flex flex-row cursor-pointer justify-center items-center font-semibold `}
                  onClick={() => {
                    window.location.pathname = val.path;
                  }}
                >
                  <div className="grid place-items-center basis-4/12 ">
                    {React.createElement(val.icon)}
                  </div>
                  <div className="flex basis-8/12">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </Draggable>
    </div>
  );
};
