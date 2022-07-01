import { task } from "src/App/@types";

export const deleteTask = (task: task) => {
  //@ts-ignore
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  }
  tasks = tasks.filter((t: task) => t.task !== task.task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
