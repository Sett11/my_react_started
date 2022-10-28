import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/state";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

 let rerenderEntireFree = (state) => {
  root.render(
    <React.StrictMode>
<App state={state} dispath={store.dispath.bind(store)} />
    </React.StrictMode>
  );
};

rerenderEntireFree(store.getState())
store.subcsribe(rerenderEntireFree)
// subcsribe(rerenderEntireFree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default rerenderEntireFree