//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom/client";
//It should display a h1 heading.
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
//It should display an unordered list (bullet points).
/* //It should contain 3 list elements. */
root.render(
  <div>
    <h1>My food list</h1>
    <ul>
      <li>Milk</li>
      <li>Egg</li>
      <li>Chicken</li>
    </ul>
  </div>
);



