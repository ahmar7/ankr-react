import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/BecomeAmbassador/Banner/Banner";
import Program from "../components/BecomeAmbassador/JoinProgram/Program";
import Become from "../components/BecomeAmbassador/HowBecome/Become";
import AmbassadorWork from "../components/BecomeAmbassador/AmbassadorWork/AmbassadorWork";
import Apply from "../components/BecomeAmbassador/Apply/Apply";

const BecomeAmbassador = () => {
  return (
    <div>
      <Header />
      <div className="jss6 jss7 desk-cl">
        <Banner />
        <Program />
        <Become />
        <AmbassadorWork />
        <Apply />
      </div>
      <Footer />
    </div>
  );
};

export default BecomeAmbassador;
