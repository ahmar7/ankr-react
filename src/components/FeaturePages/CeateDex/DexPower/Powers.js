import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Power your DEXs with Velas";
        let MainText =
          "Discover how Velas helps developers and founders to build DEXs";
        let BlockTitle1 = "Build";
        let BlockText1 =
          "Velas grants a full-on ecosystem with all the required tools and elements to build competitive decentralized exchanges. Join the Velas community to get them now.";
        let BlockTitle2 = "Hodl";
        let BlockText2 =
          "Enable token secure hodling right on a newly-built decentralized exchange to provide a versatile crypto exchange experience for users.";
        let BlockTitle3 = "Staking";
        let BlockText3 =
          "With a unique hybrid blockchain at the core of your DEX solution, you may enable highly profitable staking opportunities to gain even more user attention.";
        let BlockTitle4 = "Swap";
        let BlockText4 =
          "Build decentralized exchanges where tokens from across other dApps may be easily traded at the lowest service fees.";
        let BlockTitle5 = "Pay, send & receive";
        let BlockText5 =
          "The 50,000+ TPS capacity of Velas makes for the best blockchain base you could choose for a market-defining decentralized exchange";
         

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
