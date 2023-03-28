// import React, { useState } from "react";
import Draggable from "react-draggable";
import { debugEnviroment } from "../../Constants/debugMode";
import { MdClose } from "react-icons/md";
// import { useDispatch } from "react-redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWeather } from "src/App/Actions";

export const TheWeather = () => {
  const [temp, setTemp] = React.useState(0);

  const getCity = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            const temp = data.main.temp.toString().slice(0, -1);

            setTemp(temp);
            if (debugEnviroment()) {
              console.log(data);
            }
          });
      },
      //@ts-ignore
      (err) => console.log(err)
    );
  };
  if (debugEnviroment()) {
    console.log("Weather component rendered");
    setTimeout(() => {
      if (temp === 0) {
        console.log(
          "Failed to get weather from api, data is",
          temp + " Check API Key or Permissions"
        );
      }
    }, 5000);
  }

  React.useEffect(() => {
    getCity();
  }, []);
  const dispatch = useDispatch();
  

  return (
    <Draggable>
      <div className="h-56 w-72 shadow-xl flex justify-center items-center bg-slate-600 absolute rounded-3xl">
        <div className="w-full absolute top-0">
          <MdClose
            className="text-white text-2xl cursor-pointer float-right rounded bg-black"
            size={14}
            onClick={() => dispatch(toggleWeather())}
          />
        </div>
        {/* //CHANGE ICON ACCORDING TO TIME | Weather */}
        {/* <BsClockHistory className="text-6xl mr-4" /> */}
        {temp !== 0 ? (
          <h1 className="text-6xl">{temp} °C</h1>
        ) : (
          <h1 className="text-6xl">Loading...</h1>
        )}
      </div>
    </Draggable>
  );
};

export const Weather = () => {
  const showWeather = useSelector((state: any) => state.showWeather);
  return showWeather ? <TheWeather /> : null;
};
