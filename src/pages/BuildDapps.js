import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Breadcrumbs from '../components/BuildDapps/Breadcrumbs/Breadcrumbs';
import Banner from '../components/BuildDapps/Banner/Banner';
import DappsWhat from '../components/BuildDapps/DappsWhat/DappsWhat';
import CaseInfo from '../components/BuildDapps/CaseInfo/CaseInfo';
import CasesWhy from '../components/BuildDapps/CasesWhy/CasesWhy';
import CasesComparison from '../components/BuildDapps/CasesComparison/CasesComparison';
import DappsPower from '../components/BuildDapps/DappsPower/DappsPower';
import DappsUse from '../components/BuildDapps/Uses/Uses';
import Projects from '../components/BuildDapps/Projects/Projects';
import CasesMigrate from '../components/BuildDapps/CasesMigrate/CasesMigrate';
import DappsApps from '../components/BuildDapps/DappsSpace/DappsApps';
import DappsDevelopers from '../components/BuildDapps/DappsDeveloper/DappsDevelopers';
import CasesBenefits from '../components/BuildDapps/Casesbenefits/CasesBenefits';

const BuildDapps = () => {
    return (
      <div>
        <Header />
        <main className="main  MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Breadcrumbs />
          <Banner  />
          <DappsWhat  />
          <CaseInfo  />
          <CasesWhy  />
          <CasesComparison  />
          <DappsPower  />
          <DappsUse  />
          <Projects  />
          <CasesMigrate  />
          <DappsApps  />
          <DappsDevelopers  />
          <CasesBenefits  />
        </main>
        <Footer />
      </div>
    );
}

export default BuildDapps;
