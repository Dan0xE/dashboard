import React from "react";
import { NavbarButton } from "../Buttons";
import { Avatar } from "./avatar";
import { Link } from "react-router-dom";

//Check if mounted before calling setState

export const Navbar = () => {
  //check if navbar is mounted

  return (
    <div
      data-tauri-drag-region
      className="w-screen h-20 first-letter:uppercase bg-titlebar-color flex flex-row shadow-2xl absolute z-50 "
    >
      <div className="flex justify-betwee justify-center  items-center w-1/2 flex-row">
        <div className="flex flex-row space-x-4 items-center">
          <Link to="/">
            <NavbarButton
              text="Home"
              // type="primary"
              props={`className="text-white text-4xl shadow-xl cursor-pointer ml-0`}
            />
          </Link>
          <Link to="/tasks">
            <NavbarButton
              text="Projects"
              // type="primary"
              props={`className="text-white text-4xl shadow-xl cursor-pointer ml-0`}
            />
          </Link>
          <Link to="/Settings">
            <NavbarButton
              text="Settings"
              // type="primary"
              props={`className="text-white text-4xl shadow-xl cursor-pointer ml-0`}
            />
          </Link>
        </div>
      </div>
      <div className="float-right mt-4 mr-4 ml-auto">
        {/* <div className=" absolute"> */}
        <Avatar avatar="https://i.pravatar.cc/300" name="Dan" />
        {/* </div> */}
      </div>
    </div>
  );
};
