import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Power your Metaverse economy";
        let MainText =
          "Discover where and how Velas helps developers and founders to build their projects in the metaverse niche.";
        let BlockTitle1 = "NFTs";
        let BlockText1 =
          "NFT helps to certificate ownership of various art objects through blockchain technology. Using Velas, developers are able to integrate any NFT features, from items to entire marketplaces for creators.";
        let BlockTitle2 = "Governance";
        let BlockText2 =
          "Using Velas blockchain, you can launch your own governance token to allow holders to influence decisions concerning the startup, such as suggesting and choosing new features or modifying the governance system itself.";
        let BlockTitle3 = "Staking";
        let BlockText3 =
          "Allow your users to get maximum ROI by integrating the staking features in your project. Velas is an innovative hybrid blockchain based on a combination of Delegated Proof-of-Stake (DPoS) and Proof-of-History (PoH), which allows developers and founders to introduce any type of such features.";
        let BlockTitle4 = "P2E Games";
        let BlockText4 =
          "More and more metaverse projects require Play-to-Earn gamification components to attract and retain users. Velas is a perfect layer one solution to build minigames and gamification features inside your metaverse.";
        let BlockTitle5 = "Pay, send & receive";
        let BlockText5 =
          "The 50,000+ TPS capacity of Velas makes for the best blockchain base you could choose for a market-defining decentralized exchange";
         

    return (
      <section className=" npower metapower  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
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
