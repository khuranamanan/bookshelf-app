import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BooksStatusProvider } from "./context/booksStatusContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksStatusProvider>
      <App />
    </BooksStatusProvider>
  </React.StrictMode>
);
