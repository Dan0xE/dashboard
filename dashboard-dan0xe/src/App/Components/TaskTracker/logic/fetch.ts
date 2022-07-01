export const fetchTasks = async (id: number) => {
  //@ts-ignore
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  }
  return tasks;
};
