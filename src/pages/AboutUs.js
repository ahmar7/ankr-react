import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/AboutUs/Banner/Banner";
import Products from "../components/AboutUs/OurProducts/Products";
import Team from "../components/AboutUs/OurTeam/Team";
import Benefits from "../components/AboutUs/Benefits/Benefits";
import JoinTeam from "../components/AboutUs/JoinTeam/JoinTeam";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="jss6 jss7 desk-cl  ">
        <Banner />
        <Products />
        <Team />
        <Benefits />
        <JoinTeam />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
