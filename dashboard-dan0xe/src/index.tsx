import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "@reduxjs/toolkit";
import allReducers from "./App/Reducers";
import { Provider } from "react-redux";

import { appWindow } from "@tauri-apps/api/window";
document
  .getElementById("titlebar-minimize")!
  .addEventListener("click", () => appWindow.minimize());
document
  .getElementById("titlebar-maximize")!
  .addEventListener("click", () => appWindow.toggleMaximize());
document
  .getElementById("titlebar-close")!
  .addEventListener("click", () => appWindow.close());

const store = createStore(allReducers);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
