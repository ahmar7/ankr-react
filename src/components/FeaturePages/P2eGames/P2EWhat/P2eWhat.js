import React from 'react';
import DappsWhat from '../../BuildDapps/DappsWhat/DappsWhat';

const P2eWhat = () => {
     let mainTitle = "What are P2E games?";
  let mainText =
    "Play-to-Earn games offer an ability to invest some time and crypto/NFT management efforts in a gamified solution that pays off with real earnings.";
  let featureTitle1 = "Transparent & safe.";
  let featureText1 =
    "Common risks of scam and fraud are minimized due to the nature of games involving cryptocurrency, which run on uncompromisable blockchains.";
  let featureTitle2 = "Constantly tracked by developers.";
  let featureText2 =
    "P2E games, especially NFT-focused ones, are actively supported by the creator community, which means that P2E players get a lot of reaction to their actions and their feedback is really heard and turned into optimizations by developers.";
  let featureTitle3 = "Earning abilities.";
  let featureText3 =
    "P2E players get to obtain non-fungible tokens right in the middle of gameplay that can be sold or traded however they like.";
    return (
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
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
}

export default P2eWhat;
 