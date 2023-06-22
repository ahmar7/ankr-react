import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import Banner from "../../components/FeaturePages/BuildMetaverse/Banner/Banner";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import Powers from "../../components/FeaturePages/BuildMetaverse/MetaversePower/Powers";
import Projects from "../../components/FeaturePages/BuildMetaverse/MetaverseProjects/Projects";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";

const BuildMetaverse = () => {
  return (
    <div>
      <Header />
      <main className="main ">
        <Breadcrumbs parentlink="/" parent="Ecosystem" child="Metaverse" />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Banner />
        </div>
        <CasesWhy />
        <CaseInfo />
        <Powers />
        <div className="main-nft"></div>

        <Projects />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CasesMigrate />
          <DappsApps />
          <DappsDevelopers />
          <CasesBenefits />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuildMetaverse;
