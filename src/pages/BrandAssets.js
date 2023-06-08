import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Banner from '../components/BrandAssets/Banner/Banner';
import Logos from '../components/BrandAssets/Logos/Logos';
import Fonts from '../components/BrandAssets/Fonts/Fonts';
import Colors from '../components/BrandAssets/Colors/Colors';
import Badges from '../components/BrandAssets/Badges/Badges';

const BrandAssets = () => {
    return (
      <div>
        <Header />
        <div className="jss6 jss7">
            <Banner/>
            <Logos/>
            <Fonts/>
            <Colors/>
            <Badges/>
        </div>
        <Footer />
      </div>
    );
}

export default BrandAssets;
