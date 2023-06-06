import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Banner from '../components/BrandAssets/Banner/Banner';

const BrandAssets = () => {
    return (
      <div>
        <Header />
        <div className="jss6 jss7">
            <Banner/>
        </div>
        <Footer />
      </div>
    );
}

export default BrandAssets;
