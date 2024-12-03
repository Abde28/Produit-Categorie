// import "./bootstrap.js";
// import "./styles/app.css";

// console.log("This log comes from assets/app.js - welcome to AssetMapper! 🎉");

// registerReactControllerComponents(
//   require.context("./react/controllers", true, /\.(j|t)sx?$/)
// );
// registerReactControllerComponents();
// assets/app.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./react/controllers/App";

ReactDOM.render(<App />, document.getElementById("react-root"));
