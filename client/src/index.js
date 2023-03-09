import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import { ResumeProvider } from "./store/resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <RoutesConfig />
      </ResumeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
