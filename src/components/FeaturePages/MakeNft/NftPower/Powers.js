import React from 'react';
import DappsPower from '../../BuildDapps/DappsPower/DappsPower';
import './Power.css'
const Powers = () => {
        let MainTitle = "Power your NFT projects with Velas";
        let MainText =
          "Discover how exactly Velas helps developers and founders to build outstanding projects in the NFT domain.";
        let BlockTitle1 = "Build";
        let BlockText1 =
          "NFT helps to certificate ownership of various art through blockchain technology. Using Velas, developers are able to integrate any NFT features, from items to entire marketplaces for creators.";
        let BlockTitle2 = "Mint";
        let BlockText2 =
          "Velas grants all the crucial features to allow users to mint digital assets (everything from art to music to articles). Measly $0.00001 transaction fees give Velas a huge advantage as compared to other blockchains designed for NFT.";
        let BlockTitle3 = "Stake";
        let BlockText3 =
          "Employ the combination of DPoS (Delegated Proof-of-Stake) and PoH (Proof-of-History) at the core of the Velas blockchain to enable staking features for your users.";
         

    return (
      <section className="nft-power npower  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <DappsPower
          MainTitle={MainTitle}
          MainText={MainText}
          BlockTitle1={BlockTitle1}
          BlockText1={BlockText1}
          BlockTitle2={BlockTitle2}
          BlockText2={BlockText2}
          BlockTitle3={BlockTitle3}
          BlockText3={BlockText3}
        />
      </section>
    );
}

export default Powers;
