import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const sumArray = arr =>
Array.isArray(arr[0]) ? sumArray(arr.flat()) : arr[0] + sumArray(arr.slice(1))

//console.log([1,2,[3,[4]]].flat().flat())

sumArray([1,2,[3,[4]]])



ReactDOM.render(<App />, document.getElementById("root"));
