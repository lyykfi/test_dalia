import ReactDom from "react-dom";
import React from "react";
import App from "components/App";

const wrapper = document.getElementById("root");

if (wrapper) {
  ReactDom.render(<App />, wrapper);
}
