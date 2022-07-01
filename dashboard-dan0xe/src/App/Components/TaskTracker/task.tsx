import { task } from "../../@types";
import Draggable from "react-draggable";
import React from "react";

export const Task = ({
  task,
  onDelete,
}: {
  task: task;
  onDelete: (task: task) => void;
}) => {
  return (
    <Draggable>
      <div className="h-56 w-96 shadow-xl flex justify-center items-center bg-slate-600 rounded-xl">
        <h1 className="text-6xl">{task.task}</h1>
        <button onClick={() => onDelete(task)}>X</button>
      </div>
      <p>
        {task.date} | {task.time}
      </p>
    </Draggable>
  );
};
