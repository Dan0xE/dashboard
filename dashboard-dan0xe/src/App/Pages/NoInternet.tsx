import React from "react";
import { BsWifiOff } from "react-icons/bs";

export const NoInternet = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <BsWifiOff className="text-4xl mr-2 text-slate-500" size={64} />
      <h1 className="text-center text-slate-500 text-3xl">
        No Internet Connection
      </h1>
    </div>
  );
};
