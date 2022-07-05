import React from "react";
import Draggable from "react-draggable";
import { debugEnviroment } from "../../Constants/debugMode";

export const Weather = () => {
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
            const temp = data.main.temp.toString().slice(0, -2);

            //if temp has a 0 after the decimal, remove it

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
  }, []); //empty array means run once

  return (
    <Draggable>
      <div className="h-56 w-72 shadow-xl flex justify-center items-center bg-slate-600 rounded-3xl">
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
