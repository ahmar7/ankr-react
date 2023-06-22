import React from "react"; 
import DappsWhat from '../../BuildDapps/DappsWhat/DappsWhat'
const DefiWhat = () => {
  let mainTitle = "DeFi: Financial Management With Velas";
  let mainText = "Finances are an integral part of any person’s life. In the niche of finance, a stable place was occupied by centralized banking institutions. But what if Internet users have the ability to lend, borrow and go to the bank without intermediaries thanks to decentralized solutions? Today we will talk about the DeFi blockchain as well as the best blockchain for DeFi - Velas. DeFi is a financial instrument in the form of services and applications built on the blockchain. The main task of decentralized finance is to become an alternative to the banking sector and replace the traditional technologies of the current financial system with open source protocols. That is open access to decentralized lending and new investment platforms for a large number of people. And allow them to receive passive income from cryptocurrency assets, as well as save on fees for transfers, loans, and deposits. DeFi has several key features: First, DeFi is “open”, which means you can use DApps by creating a wallet – often without showing any identifying information like name and address. This is theoretically (if not technologically) easier than having a bank account. Secondly, you can move funds almost instantly using the blockchain, so there is no need to wait for the bank transfer to complete. Finally, DeFi applications work together as one mechanism. This “compositionality” allows any user to create, modify, mix and match, link, or build on top of any existing DeFi product without permission. Now let’s see why Velas is the best blockchain for DeFi development. Velas is a blockchain with a hybrid Proof-of-Stake and Proof-of-History consensus algorithm. It is also eBPF and EVM-compatible, meaning developers can write smart contracts in C, Rust, and Solidity, as well as integrate Ethereum projects with minimal rework. The main advantage of Velas is speed - the number of transactions that the network can process per second (Transactions Per Second, TPS). The blockchain throughput exceeds 50,000 transactions per second. It depends on the infrastructure of ISPs and in theory, can reach 700,000 TPS. And network transaction fees do not exceed $0.000001. This indicator is affected by: Time of creating a new block - the frequency of adding transactions to the blockchain. Finalization - the number of blocks after which the probability of canceling a transaction due to a fork drops to zero. Synchronization - the time during which most nodes receive information about the transaction and recognize it as completed. Velas is a very reliable and fast blockchain that allows you to create DeFi solutions. The decentralization of such financial platforms allows people to manage their finances and still remain anonymous and not worry about security.";
  let featureTitle1 = "Public nature.";
  let featureText1 =
    " DeFi only requires you to create a wallet to start indulging in services.";
  let featureTitle2 = "Pseudonymous.";
  let featureText2 =
    " No name, email, or other personal details are necessary to employ DeFi services.";
  let featureTitle3 = "Versatile.";
  let featureText3 =
    " Manage assets conveniently, moving them to any place at any time without asking for anybody’s permission.";
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
};
export default DefiWhat;
