import React from "react";

export const ErrorPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {/* <BsWifiOff className="text-4xl mr-2 text-slate-500" size={64} /> */}
      <h1 className="text-center text-red-500 text-3xl">App Crashed</h1>
    </div>
  );
};
