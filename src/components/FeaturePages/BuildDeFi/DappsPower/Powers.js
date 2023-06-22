import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Power your DeFi with Velas";
        let MainText =
          "Discover how Velas helps developers and founders to build DeFi projects.";
        let BlockTitle1 = "Build";
        let BlockText1 =
          "Get access to a single ecosystem that collects the powers and capacities of the fastest EVM blockchain, and start building DeFi solutions based on Velas instantly.";
        let BlockTitle2 = "";
        let BlockText2 =
          "";
        let BlockTitle3 = "";
        let BlockText3 =""
        let BlockTitle4 = "Swap";
        let BlockText4 =
          "Thanks to Velas blockchain, developers can build new exchanges or release the ability to swap tokens within their existing DeFi project. The cheapest transaction cost makes Velas one of the most influential blockchains on the market.";
        let BlockTitle5 = "Pay, send & receive";
        let BlockText5 =
          "Enable your DeFi users to employ the most rapid transactions out there, with the 50,000+ TPS throughput.";

    return (
      <section className="d-power dapps-power  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <DappsPower
          MainTitle={MainTitle}
          MainText={MainText}
          BlockTitle1={BlockTitle1}
          BlockText1={BlockText1}
          BlockTitle4={BlockTitle4}
          BlockText4={BlockText4}
          BlockTitle5={BlockTitle5}
          BlockText5={BlockText5}
        />
      </section>
    );
}

export default Powers;
