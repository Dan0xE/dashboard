import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "@reduxjs/toolkit";
import allReducers from "./App/Reducers";
import { Provider } from "react-redux";

//@ts-ignore
const store = createStore(
  allReducers,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
