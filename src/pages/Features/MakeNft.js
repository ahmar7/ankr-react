import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import Banner from "../../components/FeaturePages/MakeNft/Banner/Banner";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import NftMint from "../../components/FeaturePages/MakeNft/NftMint/NftMint";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import Powers from "../../components/FeaturePages/MakeNft/NftPower/Powers";
import Projects from "../../components/FeaturePages/MakeNft/NftProjects/Projects";

const MakeNft = () => {
  return (
    <div>
      <Header />
      <main className="main  ">
        <Breadcrumbs parentlink="/" parent="Ecosystem" child="NFT" />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Banner />
        </div>
        <CasesWhy />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CaseInfo />
        </div>
        <CasesComparison />
        <Powers />
        <div className="main-nft"></div>
        <Projects />
        <NftMint />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CasesMigrate />
          <DappsApps />
          <CasesBenefits />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MakeNft;
