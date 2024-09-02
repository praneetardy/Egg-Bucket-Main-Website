import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/About-Us";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FAQSection from "./components/Faq";

const App = () => {
  return (
    <div>
      <Navbar />

      <Banner />

      <AboutUs />

      <Services />

      <FAQSection />

      <Footer />
    </div>
  );
};

export default App;
