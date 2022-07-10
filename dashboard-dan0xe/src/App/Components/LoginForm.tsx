import React from "react";
import { Button } from "./Buttons";

export const LoginForm = () => {
  return (
    <>
      <div className="xl:h-1/2 xl:w-1/4 h-1/2 w-1/2 bg-slate-300 rounded shadow-xl">
        <div className="flex flex-col items-center justify-center h-full">
          <Button Text="Login" typeButton="neutral" size="large" />
        </div>
      </div>
      <div>
        <h1>OR</h1>
      </div>
    </>
  );
};
