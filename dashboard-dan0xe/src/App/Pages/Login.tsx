import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Link to="/">
        <button className="bg-github rounded-lg shadow-lg p-4 font-semibold flex flex-row hover:bg-slate-900 duration-150 ease-linears">
          <BsGithub className="text-4xl mr-2 text-slate-500" size={24} />
          Login with Github
        </button>
      </Link>
      <div className="mt-5 text-center">
        <h1>
          <span className="text-slate-500">OR</span>
        </h1>
        <Link to="/getname">
          <button className="rounded-lg text-slate-400 hover:animate-pulse hover:text-slate-100 hover:scale-110 delay-75  mt-5  p-4 font-semibold flex flex-row  duration-150 ease-linears">
            Continue Locally
          </button>
        </Link>
      </div>
    </div>
  );
};
