import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PeliculaService from "./PeliculaService";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App PeliculaService={PeliculaService} />
  </React.StrictMode>,
  rootElement
);
