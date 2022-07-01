export const addTask = (task: any, date: any, time: any) => {
  //@ts-ignore
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  }
  tasks.push({ task, date, time });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
