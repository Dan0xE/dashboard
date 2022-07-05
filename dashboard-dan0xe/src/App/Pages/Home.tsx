import React from "react";
import { Clock } from "../Components/Clock";
import { AiOutlinePlus } from "react-icons/ai";
import { TaskTracker, TodoList } from "../Components/TaskTracker/index";
import { toggleForm } from "../Actions";
import { useDispatch } from "react-redux";
import { Weather } from "../Components/Weather";

export const Home = () => {
  const dispatch: any = useDispatch();
  return (
    <div className="relative w-screen h-screen">
      <Clock />
      <div className="flex items-center justify-center bottom-0 h-12 w-12 rounded-full shadow-2xl ml-10 bg-gray-700 absolute z-20 mb-40 hover:-translate-y-1 ease-linear duration-100">
        {/* //@ts-ignore */}
        <button onClick={() => dispatch(toggleForm())}>
          <AiOutlinePlus className="text-white text-4xl shadow-xl cursor-pointer" />
        </button>
      </div>
      <TaskTracker />
      <TodoList />
      <Weather />
    </div>
  );
};
