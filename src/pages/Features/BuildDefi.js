import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Breadcrumbs from '../../components/FeaturePages/BreadCrumbs';  
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import Powers from '../../components/FeaturePages/BuildDeFi/DappsPower/Powers';
import DefiWhat from '../../components/FeaturePages/BuildDeFi/DefiWhat/DefiWhat';
import Projects from '../../components/FeaturePages/BuildDeFi/DefiProjects/Projects';
import DappsDevelopers from '../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers';
import CasesBenefits from '../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits';
import ExchangesVellas from '../../components/FeaturePages/BuildDeFi/ExchangesVellas/ExchangesVellas';
import Banner from '../../components/FeaturePages/BuildDeFi/Banner/Banner';

const BuildDefi = () => {
    return (
      <div>
        <Header />
        <main className="main ">
          <Breadcrumbs parentlink="/" parent="Ecosystem" child="DeFi" />
          <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Banner />
          </div>
          <DefiWhat />
          <CaseInfo />
          <CasesWhy />
          <CasesComparison />
          <Powers />
          <ExchangesVellas />
          <Projects />
          <DappsDevelopers />
          <CasesBenefits />
        </main>
        <Footer />
      </div>
    );
}

export default BuildDefi;
