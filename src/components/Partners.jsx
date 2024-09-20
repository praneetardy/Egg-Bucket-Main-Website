import React from "react";
import ccdLogo from "../assets/Images/cafe-coffee-day.svg";
import goldmanSachsLogo from "../assets/Images/goldman-sachs.png";
import tipsyBullLogo from "../assets/Images/tipsy-bull.png";
import glensBakehouseLogo from "../assets/Images/glen-logo.png";
import sodexoLogo from "../assets/Images/sodexo-logo.png";
import googleLogo from "../assets/Images/google-logo.png";
import zomatoLogo from "../assets/Images/zomato-seeklogo.svg";
import EliorLogo from "../assets/Images/elior-logo.svg";
import sweetChariotLogo from "../assets/Images/sweet-chariot.png";

const Partners = () => {
  const partners = [
    { name: "Cafe Coffee Day", logo: ccdLogo },
    { name: "Goldman Sachs", logo: goldmanSachsLogo },
    { name: "Tipsy Bull", logo: tipsyBullLogo },
    { name: "Glen's Bakehouse", logo: glensBakehouseLogo },
    { name: "Sodexo", logo: sodexoLogo },
    { name: "Google", logo: googleLogo },
    { name: "Zomato", logo: zomatoLogo },
    { name: "Elior", logo: EliorLogo },
    { name: "Sweet Chariot", logo: sweetChariotLogo },
  ];

  return (
    <section className="bg-white py-12 w-full">
      <div className="container mx-auto text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Our Trusted Partners
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:max-h-20 object-contain mr-10 md:mr-20"
                  style={{ width: "auto", maxWidth: "150px", md: "150px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
