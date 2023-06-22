import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Opportunities that Velas enables";
        let MainText =
          "Discover how Velas helps developers and founders to build their Web 3.0 projects and features.";
        let BlockTitle1 = "Build";
        let BlockText1 =
          "Get access to a wide range of tools and powers to put into the foundation of Web 3.0 solutions of any scale and complexity in terms of a unique Velas ecosystem.";
        let BlockTitle2 = "Hodl";
        let BlockText2 =
          "Equip your Web 3.0 applications with built-in hodling support to allow users to manage tokens in a fast, flexible fashion.";
        let BlockTitle3 = "Staking";
        let BlockText3 =
          "With innovative underlying mechanisms of DPoS (Delegated Proof-of-Stake) and PoH (Proof-of-History), Velas lets you easily integrate convenient staking features.";
        let BlockTitle4 = "Swap";
        let BlockText4 =
          "Enable users to swap tokens between their existing dApps at the lowest blockchain transaction cost using your Web 3.0 solutions.";
        let BlockTitle5 = "Pay, send & receive";
        let BlockText5 =
          "Back your Web 3.0 application with the power of processing 50,000+ transactions per second that Velas ecosystem holds.";
         

    return (
      <section className=" npower  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <DappsPower
          MainTitle={MainTitle}
          MainText={MainText}
          BlockTitle1={BlockTitle1}
          BlockText1={BlockText1}
          BlockTitle2={BlockTitle2}
          BlockText2={BlockText2}
          BlockTitle3={BlockTitle3}
          BlockText3={BlockText3}
          BlockTitle4={BlockTitle4}
          BlockText4={BlockText4}
          BlockTitle5={BlockTitle5}
          BlockText5={BlockText5}
        />
      </section>
    );
}

export default Powers;
