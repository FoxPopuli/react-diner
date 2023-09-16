import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./store/ModalContext";
import SidebarModal from "./modals/SidebarModal";
import Sidebar from "./components/Sidebar/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalContextProvider>
    <BrowserRouter>
      <SidebarModal />
      <App />
    </BrowserRouter>
  </ModalContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
