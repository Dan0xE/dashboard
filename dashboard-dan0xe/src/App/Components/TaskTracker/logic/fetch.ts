export const fetchTasks = async (id: number) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")!);
  if (tasks === null) {
    tasks = [];
  }
  return tasks;
};
