import React from 'react';
import DappsWhat from '../../BuildDapps/DappsWhat/DappsWhat';

const DexWhat = () => {
     let mainTitle = "What is a DEX?";
  let mainText =
    "A DEX (or decentralized exchange) is a peer-to-peer exchange where transactions happen directly between crypto users, traders, and customers.<br><br>DEXs finalize one of the core possibilities of crypto: enabling financial transactions that are not supported by brokers, banks, or any other intermediary.";
  let featureTitle1 = "Wide variety.";
  let featureText1 =
    "DEXs offer a virtually unlimited range of tokens and coins, from the well-known to the uniquely weird and completely random.";
  let featureTitle2 = "Reduced hacking risks.";
  let featureText2 =
    "All DEX funds are held in the users’ own wallets; as a result, they are less sensitive to hacks.";
  let featureTitle3 = "Privacy.";
  let featureText3 =
    "No personal data and information are needed to use the most popular DEXs.";
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

export default DexWhat;
 