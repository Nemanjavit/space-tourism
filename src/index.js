import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./main.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Router basename="/space-tourism">
    <App />
  </Router>,
  document.getElementById("root")
);
