import { Task } from "./task";
import React from "react";

//TODO add priority to tasks

//delete task from local storage

//add tasks to local storage
export const Tasks = ({ tasks, onDelete }: { tasks: any; onDelete: any }) => {
  return (
    <>
      {tasks.map((task: any, index: number) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};
