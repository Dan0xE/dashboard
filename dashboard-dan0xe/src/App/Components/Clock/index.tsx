import React from "react";
import Draggable from "react-draggable";
import { BsClockHistory } from "react-icons/bs";
import { debugEnviroment } from "src/App/Constants/debugMode";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleClock } from "../../Actions";

export const TheClock = () => {
  let [ctime, setCTime] = React.useState();
  const updateTime = () => {
    // time = new Date().toLocaleTimeString();

    //detect what time format is being used on the user's browser
    let time = new Date().toLocaleTimeString();
    let timeFormat = time.split(":")[2].split(" ")[1];
    if (timeFormat === "PM" || timeFormat === "AM") {
      time = time.split(":")[0] + ":" + time.split(":")[1];
      if (debugEnviroment()) {
        console.log(time);
        console.log(timeFormat);
        console.log("time is in 12 hour format");
      }
    }

    // let timeFormat = new Intl.DateTimeFormat("en-GB", {
    //   hour: "numeric",
    //   minute: "numeric",
    //   second: "numeric",
    //   hour12: false,
    // });

    // let time = timeFormat.format(new Date());
    //@ts-ignore
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  let timeOfDay = new Date().getHours();
  function getNight() {
    if (timeOfDay >= 2 && timeOfDay < 6) {
      return true;
    }
    return false;
  }

  const dispatch = useDispatch();

  // const clockPosition = useSelector((state: any) => state.clockPosition);
  return (
    <Draggable>
      <div className="h-56 w-96 shadow-xl flex justify-center items-center bg-slate-600 rounded-xl">
        <div className="w-full absolute top-0">
          <MdClose
            className="text-white text-2xl cursor-pointer float-right rounded bg-black"
            size={14}
            onClick={() => dispatch(toggleClock())}
          />
        </div>
        {/* //CHANGE ICON ACCORDING TO TIME | Weather */}
        <BsClockHistory className="text-6xl mr-4" />
        <h1 className="text-6xl">{ctime}</h1>
        {getNight() ? (
          <div className="w-full mb-8 absolute bottom-0 ">
            <div className="hover:text-blue-500 hover:underline flex flex-row justify-center cursor-pointer">
              <p className="text-slate-300 text-xs text-center">
                It's late! See how sleep deprivation affects you
              </p>
              <AiOutlineArrowRight className="text-slate-300 text-xs mt-1 ml-2 hover:translate-x-1 ease-linear duration-100 hover:animate-pulse" />
            </div>
          </div>
        ) : null}
      </div>
    </Draggable>
  );
};

export const Clock = () => {
  const showClock = useSelector((state: any) => state.showClock);
  return showClock ? <TheClock /> : null;
};
