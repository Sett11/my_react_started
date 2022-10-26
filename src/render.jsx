import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, upDateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireFree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} upDateNewPostText={upDateNewPostText} />
    </React.StrictMode>
  );
};


export default rerenderEntireFree