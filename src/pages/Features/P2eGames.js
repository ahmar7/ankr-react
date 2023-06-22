import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import Banner from "../../components/FeaturePages/P2eGames/Banner/Banner";
import P2eWhat from "../../components/FeaturePages/P2eGames/P2EWhat/P2eWhat";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import Powers from "../../components/FeaturePages/P2eGames/P2EPower/Powers";
import ExchangesVellas from "../../components/FeaturePages/BuildDeFi/ExchangesVellas/ExchangesVellas";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import Projects from "../../components/FeaturePages/P2eGames/P2eProjects/Projects";

const P2eGames = () => {
  return (
    <div>
      <Header />
      <main className="main ">
        <Breadcrumbs parentlink="/" parent="Ecosystem" child="P2E Games" />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Banner />
        </div>
        <P2eWhat />
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />

        <Powers />
        <div className="main-nft"></div>
        <ExchangesVellas />
        <Projects />


        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <CasesMigrate/>
        <DappsApps/>
        <DappsDevelopers/>
        <CasesBenefits/>
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default P2eGames;
