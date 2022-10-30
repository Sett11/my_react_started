import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./redux/reduxStore";
import StoreContext from "./storeContext";
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireFree = (state) => {
  root.render(
    <BrowserRouter>
    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </React.StrictMode>
    </StoreContext.Provider>
    </BrowserRouter>
  );
};

rerenderEntireFree(store.getState());

store.subscribe(() => {
  let state = store.getState();

  rerenderEntireFree(state);
});
// subcsribe(rerenderEntireFree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default rerenderEntireFree;
