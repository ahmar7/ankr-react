import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/TrsToken/Banner/Banner";
import Uses from "../components/TrsToken/Uses/Uses";
import About from "../components/TrsToken/About/About";
import Protocol from "../components/TrsToken/Protocol/Protocol";
import Rewards from "../components/TrsToken/StakingRewards/Rewards";
import Trade from "../components/TrsToken/Trade/Trade";
import Earning from "../components/TrsToken/StartEarning/Earning";
import Faq from "../components/TrsToken/Faq/Faq";

const TrsToken = () => {
  return (
    <div>
      <Header />
      <div className="jss6 jss7 desk-cl">
        <Banner />
        <Uses />
        <About />
        <Protocol />
        <Rewards />
        <Trade />
        <Earning />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default TrsToken;
