import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/TrsToken/Banner/Banner";
import Uses from "../components/TrsToken/Uses/Uses";
import About from "../components/TrsToken/About/About";
import Protocol from "../components/TrsToken/Protocol/Protocol";
import Rewards from "../components/TrsToken/StakingRewards/Rewards";

const TrsToken = () => {
  return (
    <div>
      <Header />
      <div className="jss6 jss7">
        <Banner />
        <Uses />
        <About />
        <Protocol />
        <Rewards />
      </div>
      <Footer />
    </div>
  );
};

export default TrsToken;
