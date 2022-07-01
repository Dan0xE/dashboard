import { GoDashboard } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: GoDashboard,
    path: "/",
    element: "Home",
  },
  {
    title: "Tasks",
    icon: BsListTask,
    path: "/tasks",
    element: "Tasks",
  },
  {
    title: "Projects",
    icon: AiOutlineFundProjectionScreen,
    path: "/projects",
    element: "Projects",
  },
  {
    title: "Settings",
    icon: FiSettings,
    path: "/settings",
    element: "Settings",
  },
];
