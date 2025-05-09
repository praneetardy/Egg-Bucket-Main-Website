import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

const Account = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
        <Dashboard/>
      <Footer />
      </div>
  
  );
};

export default Account;
