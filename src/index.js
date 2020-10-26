import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import "./assets/background.css";
import App from "./App";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
