import React from "react";
import { Home } from "./Pages/Home";
import { Tasks } from "./Pages/Tasks";
import { Sidebar } from "./Components/Sidebar/index";
//@ts-ignore
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

//TODO save postioning of each component in local storage
//TODO add priority to tasks

function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen text-white">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
