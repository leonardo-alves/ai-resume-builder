import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default RoutesConfig;
