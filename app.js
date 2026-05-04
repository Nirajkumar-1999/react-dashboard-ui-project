import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", {id:"parent"}, [
    React.createElement(
       "div", {id:"child1", key: "child1"},[
        React.createElement("h1", {key: "h1-1"}, "Hello Niraj"),
        React.createElement("h2", {key: "h2-1"}, "Hello Niraj kaise ho"),
        ]
    ),
    React.createElement(        
        "div", {id:"child2", key: "child2"},[
        React.createElement("h1", {key: "h1-2"}, "Hello Niraj"),
        React.createElement("h2", {key: "h2-2"}, "Hello Niraj kaise ho"),
    ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);