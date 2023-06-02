import React from "react";
import Header from "../layout/Header/Header";
import Banner from "../components/HomeComponents/Banner/Banner";
import About from "../components/HomeComponents/About/About";
import BlockChain from "../components/HomeComponents/BlockChain/BlockChain";
import BuildingDev from "../components/HomeComponents/BuildingDev/BuildingDev";
import Benefits from "../components/Benefits/Benefits";
import Adoption from "../components/Adoption/Adoption";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main class="jss6 jss7">
        <Banner/>
        <About/>
        <BlockChain/>
        <BuildingDev/>
        <Benefits/>
        <Adoption/>
        <GetStarted/>
      </main>
        <Footer/>
    </div>
  );
};

export default Home;
