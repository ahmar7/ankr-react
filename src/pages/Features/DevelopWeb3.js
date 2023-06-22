import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Breadcrumbs from '../../components/FeaturePages/BreadCrumbs';
import Banner from '../../components/FeaturePages/DevelopWeb3/Banner/Banner';
import Web3What from '../../components/FeaturePages/DevelopWeb3/Web3What/Web3What';
import CaseInfo from '../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo';
import CasesWhy from '../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy';
import CasesComparison from '../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison';
import Web3Projects from "../../components/FeaturePages/DevelopWeb3/Web3Projects/Web3Projects";
import Powers from '../../components/FeaturePages/DevelopWeb3/Web3Power/Powers';
import Projects from '../../components/FeaturePages/DevelopWeb3/Projects/Projects';
import CasesMigrate from '../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate';
import DappsApps from '../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps';
import DappsDevelopers from '../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers';
import CasesBenefits from '../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits';

const DevelopWeb3 = () => {
    return (
      <div>
        <Header />
        <main className="main ">
          <Breadcrumbs parentlink="/" parent="Ecosystem" child="Web 3.0" />
          <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <Banner />
          </div>
          <Web3What />
          <Web3Projects/>
          <CaseInfo />
          <CasesWhy />
          <CasesComparison />
          <Powers />
          <div className="main-nft"></div>
          <Projects/>
          <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CasesMigrate />
            <DappsApps />
            <DappsDevelopers />
            <CasesBenefits/>
          </div> 

      

        </main>
        <Footer />
      </div>
    );
}

export default DevelopWeb3;
