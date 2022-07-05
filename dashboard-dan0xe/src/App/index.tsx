import React from "react";
import { Home } from "./Pages/Home";
import { Tasks } from "./Pages/Tasks";
// import { Sidebar } from "./Components/Sidebar/index";
//@ts-ignore
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Settings } from "./Pages/Settings";
import { debugEnviroment } from "./Constants/debugMode";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer/index";
import { checkInternet } from "./Utils/checkInternet";
import { NoInternet } from "./Pages/NoInternet";
import { Splashscreen } from "./Pages/Splashscreen";

debugEnviroment()
  ? console.log("Debug mode enabled")
  : console.log("Debug mode disabled");

//show splash screen for 2 seconds

//TODO save postioning of each component in local storage
//TODO add priority to tasks

function App() {
  //show splash screen for 2 seconds
  const [showSplash, setShowSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <div className="bg-gray-800 h-screen w-screen text-white">
      {showSplash ? <Splashscreen /> : null}
      {checkInternet() ? (
        <>
          {/* <Sidebar /> */}
          <Footer />
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </>
      ) : (
        <NoInternet />
      )}
    </div>
  );
}

export default App;
