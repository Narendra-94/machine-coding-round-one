import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./context/BookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookProvider>
      <Router>
        <App />
      </Router>
    </BookProvider>
  </React.StrictMode>
);
