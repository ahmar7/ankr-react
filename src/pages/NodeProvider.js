import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/NodeProvider/Banner/Banner";
import HowItWorks from "../components/NodeProvider/HowItWorks/HowItWorks";
import Benefits from "../components/NodeProvider/Benefits/Benefits";
import Rewards from "../components/NodeProvider/Rewards/Rewards";
import Servers from "../components/NodeProvider/Servers/Servers";
import Hardware from "../components/NodeProvider/Hardware/Hardware";
import GetStarted from "../components/NodeProvider/GetStarted/GetStarted";
import ComingSoon from "../components/NodeProvider/ComingSoon/ComingSoon";
import Faq from "../components/TrsToken/Faq/Faq";

const NodeProvider = () => {
  return (
    <div>
      <Header />
      <div className="jss6 jss7 desk-cl node-pg">
        <Banner />
        <HowItWorks />
        <Benefits />
        <Rewards />
        <Servers />
        <Hardware />
        <GetStarted />
        <ComingSoon />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default NodeProvider;
