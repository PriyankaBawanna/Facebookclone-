import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

import Header from "../HeaderComp/Header";
import Reel from "../Reel/Reel";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Reel" element={<Reel />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
