import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BuildDapps/Breadcrumbs/Breadcrumbs";
import Banner from "../../components/FeaturePages/BuildDapps/Banner/Banner";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison"; 
import DappsUse from "../../components/FeaturePages/BuildDapps/Uses/Uses";
import Projects from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import WhatPropsData from "../../components/FeaturePages/BuildDapps/DappsWhat/WhatPropsData";
import DappsPowerContent from "../../components/FeaturePages/BuildDapps/DappsPower/DappsPowerContent";

const BuildDapps = () => {
  return (
    <div>
      <Header />
      <main className="main  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
        <Breadcrumbs />
        <Banner />
        <WhatPropsData />
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />
        <DappsPowerContent />
        <DappsUse />
        <Projects />
        <CasesMigrate />
        <DappsApps />
        <DappsDevelopers />
        <CasesBenefits />
      </main>
      <Footer />
    </div>
  );
};

export default BuildDapps;
