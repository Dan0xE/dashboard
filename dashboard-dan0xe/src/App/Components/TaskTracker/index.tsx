import React from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineDateRange, MdClose } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../Actions";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

const askForPermission = async () => {
  if (!isPermissionGranted()) {
    await requestPermission();
  }
  return isPermissionGranted();
};

const sendNotificationTest = async () => {
  if (await askForPermission()) {
    console.log("Permission granted");
    sendNotification({ title: "Hello", body: "World" });
  }
};
sendNotificationTest();

askForPermission();

const TodoForm = () => {
  const [task, setTask] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  //add id to task

  //get the last id from the tasks array and add 1 to it
  //fetch the tasks from local storrag
  //@ts-ignore
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  }




  //get the last id from the tasks array and add 1 to it
  // let lastId = tasks[tasks.length - 1].id;
  // let id = lastId + 1;

  // const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  console.log(lastId);

  //still broken
  const [id, setId] = React.useState(lastId + 1);

  const addTask = (task: any, date: any, time: any, id: number) => {
    //@ts-ignore
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) {
      tasks = [];
    }
    tasks.push({ task, date, time, id });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!task) {
      alert("Please enter a task");
      return;
    }

    (function onAdd() {
      //@ts-ignore
      addTask(task, date, time, id);
    })();
    setTask("");
    setDate("");
    setTime("");
    setId(id + 1);
  };

  //ADD FEATURE TO SEPERATE TASKS BY COMMA SEPARATED

  const dispatch: any = useDispatch();
  return (
    <Draggable>
      <form onSubmit={onSubmit}>
        <div className="w-64 h-96 bg-black bg-opacity-50 ml-10 rounded-lg shadow-xl flex flex-col z-20 absolute">
          <div className="w-full">
            <MdClose
              className="text-white text-2xl cursor-pointer float-right rounded bg-black"
              size={14}
              onClick={() => dispatch(toggleForm())}
            />
          </div>
          <h1 className="text-center text-slate-400 text-2xl pt-4">New Task</h1>
          <div className="mt-10 flex justify-center items-center flex-col space-y-8">
            <input
              className="w-3/4 h-12 bg-slate-600 text-white text-center text-2xl rounded-md "
              type="text"
              placeholder="Enter Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              minLength={3}
              required={true}
              maxLength={24}
            />
            <input
              className="w-3/4 h-12 bg-slate-600 text-white text-center text-2xl rounded-md"
              type="Date"
              //current date as placeholder
              value={date}
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              required={false}
            />
            <input
              className="w-3/4 h-12 bg-slate-600 text-white text-center text-2xl rounded-md"
              type="Time"
              value={time}
              name="time"
              id="time"
              onChange={(e) => setTime(e.target.value)}
              required={false}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="mt-6 w-2/4 h-10 bg-slate-500 hover:bg-blue-400 ease-linear duration-100 text-white text-center text-2xl rounded-md hover:cursor-pointer"
              value="Add Task"
            />
          </div>
        </div>
      </form>
    </Draggable>
  );
};

//loop through the tasks and display them
export const TodoList = () => {
  const [task, setTask] = React.useState([]);

  const getTasks = async () => {
    //@ts-ignore
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) {
      tasks = [];
    }
    setTask(tasks);
  };
  //ONLY A TEMPORARY SOLUTION TO GET THE TASKS
  React.useEffect(() => {
    setTimeout(() => {
      getTasks();
    }, 100);
  }, [task]);

  //refetch tasks if a task is added trough addTask

  //normally you would set "tasks" in the dependency array to getTasks, but since we are causing a re-render every time we add a task, we can just set it to an empty array.

  //initiate update when task is added - FIX MEMORY LEAK LMAO
  // React.useEffect(() => {
  //   getTasks();
  // }, [task]);

  //TODO fix this - broken after adding task

  // delete task from local storage
  const deleteTask = (id: any) => {
    //@ts-ignore
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) {
      tasks = [];
    }
    // tasks.splice(id, 1);
    tasks = tasks.filter((task: any) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
  };

  //TODO - FIx tasks not beeing movable after beeing added

  //trigger rerender when task is added
  // React.useEffect(
  //   () => {
  //     getTasks();
  //   },
  //   [task]
  // );

  //! FIXIT - ADD ELEMENT TASK MIGHT BE BLOCKING EACH TASK ELEMENT FROM BEING MOVED

  return (
    <>
      {task.length > 0 ? (
        <>
          {task.map((task: any, key: number) => {
            return (
              <div key={key}>
                <Draggable>
                  <div
                    className="flex flex-col bg-gray-900 rounded-lg shadow-xl w-64 h-auto absolute z-30"
                    key={key}
                  >
                    <div className="w-full">
                      <MdClose
                        className="text-white text-2xl cursor-pointer float-right rounded bg-black"
                        size={14}
                        onClick={() => deleteTask(task.id)}
                      />
                    </div>
                    <div className="flex justify-center items-center mt-5 w-full">
                      <BiNotepad
                        className="text-white text-4xl shadow-xl cursor-pointer ml-0"
                        size={24}
                      />
                      <h1 className="text-slate-400 text-2xl break-words w-48 text-center first-letter:uppercase">
                        {task.task}
                      </h1>
                    </div>
                    {task.date ? (
                      <div>
                        <div className="flex justify-center items-center w-full">
                          <h1 className="text-slate-500">
                            ----------------------------------
                          </h1>
                        </div>
                        <div className="flex justify-center items-center">
                          <MdOutlineDateRange
                            className="text-white text-4xl shadow-xl cursor-pointer ml-0"
                            size={24}
                          />
                          <h1 className="text-slate-400 text-2xl w-48 text-center">
                            {task.date}
                          </h1>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-5"></div>
                    )}
                    {task.time ? (
                      <div>
                        <div className="flex justify-center items-center">
                          <h1 className="text-slate-500">
                            ----------------------------------
                          </h1>
                        </div>
                        <div className="flex justify-center items-center">
                          <BsClockHistory
                            className="text-white text-4xl shadow-xl cursor-pointer ml-0 mb-5"
                            size={24}
                          />
                          <h1 className="text-slate-400 text-2xl w-48 text-center mb-5">
                            {task.time}
                          </h1>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-5"></div>
                    )}
                  </div>
                </Draggable>
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-slate-400 text-2xl">No Tasks</h1>
        </div>
      )}
    </>
  );
};

export const TaskTracker = () => {
  //@ts-ignore
  const showForm = useSelector((state) => state.showForm);
  return <div className="z-30 absolute">{showForm ? <TodoForm /> : null}</div>;
};
