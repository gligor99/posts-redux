// External imports
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// Local imports
import App from "./App";
import rootReducer from "./reducers";

//Styles
import "./index.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
