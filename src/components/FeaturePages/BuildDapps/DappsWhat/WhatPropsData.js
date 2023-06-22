import React from "react";
import DappsWhat from "./DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "dApps in a nutshell";
  let mainText =
    "Decentralized apps show but one major difference from a range of usual solutions - you may only run them via a blockchain. Powered by smart contracts, dApps are ultimately protected from anythird-party intrusion.";
    let featureTitle1 = "Open-source."; 
    let featureText1="The open-sourced foundation allows dApps to run autonomously."
    let featureTitle2 = "Transparency.";
    let featureText2="dApp data and records are highly available, since they are public."
    let featureTitle3 = "Safety.";
    let featureText3="dApp creators use a crypto token to help keep the network environment safe."
  return (
    <div>
      <DappsWhat
        mainTitle={mainTitle}
        mainText={mainText}
        featureTitle1={featureTitle1}
        featureText1={featureText1}
        featureTitle2={featureTitle2}
        featureText2={featureText2}
        featureTitle3={featureTitle3}
        featureText3={featureText3}
      />
    </div>
  );
};

export default WhatPropsData;
