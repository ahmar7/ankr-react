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
import BuildDapps from "../pages/Features/BuildDapps";
import Faq from "../pages/Faq";
import BuildDefi from "../pages/Features/BuildDefi";
import MakeNft from "../pages/Features/MakeNft";
import CreateDex from "../pages/Features/CreateDex";
import BuildMetaverse from "../pages/Features/BuildMetaverse";
import P2eGames from "../pages/Features/P2eGames";
import DevelopWeb3 from "../pages/Features/DevelopWeb3";

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
        <Route
          path="features/decentralized-applications-dapps-on-trush"
          element={<BuildDapps />}
        />
        <Route path="faq" element={<Faq />} />
        <Route
          path="/features/trush-in-decentralized-finance-defi"
          element={<BuildDefi />}
        />
        <Route
          path="/features/trush-and-non-fungible-tokens-nfts"
          element={<MakeNft />}
        />
        <Route
          path="/features/decentralized-exchanges-dexs-on-trush"
          element={<CreateDex />}
        />
        <Route
          path="/features/trush-and-the-metaverse"
          element={<BuildMetaverse />}
        />
        <Route path="/features/gaming-on-trush" element={<P2eGames />} />
        <Route
          path="/features/cross-chain-interoperability-with-trush"
          element={<DevelopWeb3 />}
        />
      </Routes>
    </BrowserRouter>
  );
}
