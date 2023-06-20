import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BrandAssets from "../pages/BrandAssets";
import TrsToken from "../pages/TrsToken";
import BecomeAmbassador from "../pages/BecomeAmbassador";
import NodeProvider from "../pages/NodeProvider";
import AboutUs from "../pages/AboutUs";
import AboutNetwork from "../pages/AboutNetwork";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import BuildDapps from "../pages/BuildDapps";
import Faq from "../pages/Faq";
import BuildDefi from "../pages/Features/BuildDefi";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="brand-assets" element={<BrandAssets />} />
        <Route path="trs-token" element={<TrsToken />} />
        <Route path="become-ambassador" element={<BecomeAmbassador />} />
        <Route path="node-provider" element={<NodeProvider />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="about-network" element={<AboutNetwork />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="/blog/ankr-s-enterprise-rpc-and-app-chain-solutions-now-available-on-microsoft-azure-marketplace/"
          element={<BlogDetails />}
        />
        <Route path="build-dapps" element={<BuildDapps />} />
        <Route path="faq" element={<Faq />} />
        <Route
          path="/features/trush-in-decentralized-finance-defi"
          element={<BuildDefi />}
        />
      </Routes>
    </BrowserRouter>
  );
}
