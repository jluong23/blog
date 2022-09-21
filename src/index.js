// Index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {ModalContextProvider} from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);