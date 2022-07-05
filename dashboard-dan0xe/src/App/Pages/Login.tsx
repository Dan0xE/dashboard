import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Link to="/">
        <button className="bg-github rounded-lg shadow-lg p-4 font-semibold flex flex-row hover:bg-slate-900 duration-150 ease-linears">
          <BsGithub className="text-4xl mr-2 text-slate-500" size={24} />
          Login with Github
        </button>
      </Link>
    </div>
  );
};
