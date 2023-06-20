import React from 'react';
import Banner from '../components/AboutNetwork/Banner/Banner';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import Network from '../components/AboutNetwork/WhatIsNetwork/Network';
import Utilization from '../components/AboutNetwork/Utilization/Utilization';

const AboutNetwork = () => {
    return (
      <div>
        <Header />
        <div className="jss6 jss7 desk-cl  ">
          <Banner />
          <Network />
          <Utilization />
          
        </div>
        <Footer />
      </div>
    );
}

export default AboutNetwork;
