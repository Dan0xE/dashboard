import React from "react";

//check if we have a name, if yes say "welcome back name", if not say "welcome"

//add width to the

export const Splashscreen = () => {
  const [width, setWidth] = React.useState("0%");
  React.useEffect(() => {
    setTimeout(() => {
      setWidth("100%");
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      {/* <BsWifiOff className="text-4xl mr-2 text-slate-500" size={64} /> */}
      <h1 className="text-center text-slate-500 text-3xl">Dashboard</h1>
      {/* Progress bar */}
      <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-10">
        <div
          className={`bg-blue-600 h-2.5 rounded-full transition-width transition-slowest ease  `}
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};
