import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import Breadcrumbs from '../../components/FeaturePages/BreadCrumbs';
import Banner from '../../components/FeaturePages/CeateDex/Banner/Banner';
import DexWhat from '../../components/FeaturePages/CeateDex/DexWhat/DexWhat';
import CaseInfo from '../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo';
import CasesWhy from '../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy';
import CasesComparison from '../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison';
import Powers from '../../components/FeaturePages/CeateDex/DexPower/Powers';
import ExchangesVellas from '../../components/FeaturePages/BuildDeFi/ExchangesVellas/ExchangesVellas';
import Projects from '../../components/FeaturePages/CeateDex/DexProjects/Projects';
import DappsDevelopers from '../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers';
import CasesBenefits from '../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits';

const CreateDex = () => {
    return (
      <div>
        <Header />
        <main className="main  ">
          <Breadcrumbs parentlink="/" parent="Ecosystem" child="DEX" />
          <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <Banner />
          </div>
          <DexWhat />
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CaseInfo />
            <CasesWhy />
            <CasesComparison />
          </div>
          <Powers />
          <div className="main-nft"></div>

          <ExchangesVellas />
          <Projects />
          <DappsDevelopers />
          <CasesBenefits/>


          {/* 
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CaseInfo />
          </div>

          <NftMint />
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CasesMigrate />
            <DappsApps />
            <CasesBenefits />
          </div> */}
        </main>
        <Footer />
      </div>
    );
}

export default CreateDex;
