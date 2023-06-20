import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Breadcrumbs from '../components/Faq/Breadcrumbs/Breadcrumbs';
import FaqBlock from '../components/Faq/FaqBlock/FaqBlock';
import Help from '../components/Faq/HelpSection/Help';
import FooterChain from '../components/Faq/FooterChain/FooterChain';

const Faq = () => {
       return (
         <div>
           <Header />
           <main className="main  ">
          <Breadcrumbs/>
          <FaqBlock/>
          <Help/>
           </main>
           <footer className="footer">
            <FooterChain/> 
            </footer> 
           <Footer />
         </div>
       );
}

export default Faq;
