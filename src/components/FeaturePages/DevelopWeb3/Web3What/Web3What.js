import React from 'react';
import DappsWhat from '../../BuildDapps/DappsWhat/DappsWhat';

const Web3What = () => {
     let mainTitle = "What is Web 3.0?";
  let mainText =
    "Web 3.0 defines the next era in the expansion of web/Internet, making a major transforming milestone in the history of traditional Web 2.0. The core ideas behind the Web 3.0 are decentralization, transparency, and maximum usability. A novel version of the Web may be tightly interwoven with the powers of AI, image/language processing, and crypto capabilities. The introduction of smart capacities ultimately helps to grant immediate and to the point data.";
  let featureTitle1 = "Widespread decentralization.";
  let featureText1 =
    "Web 3.0 will be fully decentralized as compared to the initial two versions of the World Wide Web where all solutions and governance principles were primarily centralized.";
  let featureTitle2 = "Blockchain-based.";
  let featureText2 =
    "Blockchain equips Web 3.0 apps with an unchangeable ledger of transactions and activities.";
  let featureTitle3 = "Crypto-enabled.";
  let featureText3 =
    "Crypto support is the most essential and common property of Web 3.0 solutions that replace fiat money management.";
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

export default Web3What;
 