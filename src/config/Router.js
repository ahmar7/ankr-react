import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BrandAssets from "../pages/BrandAssets";
import TrsToken from "../pages/TrsToken";
import BecomeAmbassador from "../pages/BecomeAmbassador";
import NodeProvider from "../pages/NodeProvider";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="brand-assets" element={<BrandAssets />} />
        <Route path="trs-token" element={<TrsToken />} />
        <Route path="become-ambassador" element={<BecomeAmbassador />} />
        <Route path="node-provider" element={<NodeProvider />} />
      </Routes>
    </BrowserRouter>
  );
}
