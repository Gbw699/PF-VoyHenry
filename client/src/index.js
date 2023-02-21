import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

let previousTitle = document.title;
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "¡Vuelve que tenemos que viajar!";
});

window.addEventListener("focus", () => {
  document.title = previousTitle;
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
