import React from "react";
import { Clock } from "../Components/Clock";
import { AiOutlinePlus, AiOutlineClockCircle } from "react-icons/ai";
import { TaskTracker, TodoList } from "../Components/TaskTracker/index";
import { toggleForm, toggleWeather, toggleClock } from "../Actions";
import { useDispatch } from "react-redux";
import { Weather } from "../Components/Weather";
import { TiWeatherCloudy } from "react-icons/ti";

export const Home = () => {
  const dispatch: any = useDispatch();
  return (
    <div className="relative w-screen h-screen">
      <Clock />
      <div className="flex  flex-row space-x-4 items-center justify-center bottom-0 h-12 w-12 rounded-full shadow-2xl ml-10 bg-gray-700 absolute z-20 mb-20 hover:-translate-y-1 ease-linear duration-100">
        {/* //@ts-ignore */}
        <button onClick={() => dispatch(toggleForm())}>
          <AiOutlinePlus className="text-white text-4xl shadow-xl cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center bottom-0 h-12 w-12 rounded-full shadow-2xl ml-24 bg-gray-700 absolute z-20 mb-20 hover:-translate-y-1 ease-linear duration-100">
        {/* //@ts-ignore */}
        <button onClick={() => dispatch(toggleClock())}>
          <AiOutlineClockCircle className="text-white text-4xl shadow-xl cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center bottom-0 h-12 w-12 rounded-full shadow-2xl ml-40   bg-gray-700 absolute z-20 mb-20 hover:-translate-y-1 ease-linear duration-100">
        {/* //@ts-ignore */}
        <button onClick={() => dispatch(toggleWeather())}>
          <TiWeatherCloudy className="text-white text-4xl shadow-xl cursor-pointer" />
        </button>
      </div>
      <TaskTracker />
      <TodoList />
      <Weather />
    </div>
  );
};
