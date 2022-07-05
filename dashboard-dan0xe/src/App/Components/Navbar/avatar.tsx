import React from "react";

export const Avatar = ({ avatar, name }: { avatar: string; name: string }) => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <img className="rounded-full w-12 h-12" src={avatar} alt="avatar" />
      </div>
      <div className="flex items-center">
        <h1 className="ml-5 text-slate-500 text-lg font-semibold cursor-pointer">
          {name}
        </h1>
      </div>
    </div>
  );
};
