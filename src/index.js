import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// reducers
const feedbackInput = (state = {}, action) => {
  if (action.type === "FEELING") {
    return { ...state, feeling: action.payload };
  }
  if (action.type === "UNDERSTANDING") {
    return { ...state, understanding: action.payload };
  }
  if (action.type === "SUPPORT") {
    return { ...state, support: action.payload };
  }
  if (action.type === "COMMENTS") {
    return { ...state, comments: action.payload };
  }
  if (action.type === "CLEAR_INPUTS") {
    return {};
  }
  return state;
};

const feedbackData = (state = [], action) => {
  if (action.type === "SET_FEEDBACK_DATA") {
    return action.payload;
  }

  return state;
};

// store
const store = createStore(combineReducers({ feedbackInput, feedbackData }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
