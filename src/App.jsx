import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ScrollToTop from "./components/ScrollToTop";

// Importing Pages
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Time from "./pages/Time";
import Ourfounders from "./pages/OurFounders";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/timeline" element={<Time />} />
          <Route path="/ourfounders" element={<Ourfounders />} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
