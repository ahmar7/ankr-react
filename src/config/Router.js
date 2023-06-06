import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BrandAssets from "../pages/BrandAssets";
 
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route   path="brand-assets" element={<BrandAssets />} />
      </Routes>
    </BrowserRouter>
  );
}
