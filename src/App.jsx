import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/About-Us";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import FAQSection from "./components/Faq";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <Banner />
      <AboutUs />
      <Services />
      <Partners />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
