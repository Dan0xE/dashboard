import React from "react";
import Draggable from "react-draggable";
import { BsClockHistory } from "react-icons/bs";

export const Clock = () => {
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime] = React.useState();
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    //@ts-ignore
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <Draggable>
      <div className="h-56 w-96 shadow-xl flex justify-center items-center bg-slate-600 rounded-xl">
        {/* //CHANGE ICON ACCORDING TO TIME */}
        <BsClockHistory className="text-6xl mr-4" />
        <h1 className="text-6xl">{ctime}</h1>
      </div>
    </Draggable>
  );
};
