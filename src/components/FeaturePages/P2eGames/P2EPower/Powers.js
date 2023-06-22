import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Power your P2E Game with Velas";
        let MainText =
          "Discover how Velas helps developers and founders build P2E Games";
        let BlockTitle1 = "Build";
        let BlockText1 =
          "Get all the tools and capacities to develop outstandingly performing P2E games in one place. Velas gives creators a whole ecosystem to work their ideas.";
        let BlockTitle2 = "Up your game";
        let BlockText2 =
          "Create play-to-earn experiences with cross-game items, decentralized in-game trading, and fully-on-chain components.";
        let BlockTitle3 = "Pay, send & receive";
        let BlockText3 =
          "Enable the smoothest gameplay experience for all users earning and trading NFTs inside your P2E games based on the fastest EVM blockchain out there, handling 50,000+ transactions per second.";
        let BlockTitle4 = "Velas Account";
        let BlockText4 =
          "Easily create a one-click login profile where all the project kick-off opportunities are available in one place, including a Web 3.0-optimized crypto wallet.";
        let BlockTitle5 = "Pay, send & receive";
        let BlockText5 =
          "The 50,000+ TPS capacity of Velas makes for the best blockchain base you could choose for a market-defining decentralized exchange";
         

    return (
      <section className="p2e npower  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
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
