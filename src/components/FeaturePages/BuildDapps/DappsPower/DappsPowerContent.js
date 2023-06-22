import React from 'react';
import DappsPower from './DappsPower';

const DappsPowerContent = () => {
    let MainTitle = "Power your dApps with Velas";
    let MainText= "Discover how Velas helps software engineers and founders create decentralized solutions (dApps).";
    let BlockTitle1 = "Build";
    let BlockText1 = "Get access to a single ecosystem that collects the powers and capacities of the fastest EVM blockchain, and start building DeFi solutions based on Velas instantly.";
    let BlockTitle2 = "Hodl";
    let BlockText2= "Readily provide token hodling abilities, including wallet creation, user balance management, and stats integration in terms of your DeFi solutions.";
    let BlockTitle3 = "Staking";
    let BlockText3= "Employ the combination of DPoS (Delegated Proof-of-Stake) and PoH (Proof-of-History) at the core of the Velas blockchain to enable staking features for your users.";
    let BlockTitle4 = "Swap";
    let BlockText4 = "Thanks to Velas blockchain, developers can build new exchanges or release the ability to swap tokens within their existing DeFi project. The cheapest transaction cost makes Velas one of the most influential blockchains on the market.";
    let BlockTitle5 = "Pay, send & receive";
    let BlockText5 =
      "Enable your DeFi users to employ the most rapid transactions out there, with the 50,000+ TPS throughput.";

    return (
     <section className='dapps-power'><DappsPower
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
      /></section> 
    );
}

export default DappsPowerContent;
