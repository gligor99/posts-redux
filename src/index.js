// External imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

// Local imports
import App from "./App";
import rootReducer from "./slices";

//Styles
import "./index.css";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
