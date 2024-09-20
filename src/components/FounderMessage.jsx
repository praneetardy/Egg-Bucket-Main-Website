import React, { useState, useEffect } from "react";
import founderPhoto from "../assets/Images/male-avatar.png";
import cofounderPhoto from "../assets/Images/male-avatar.png";
import backgroundImage from "../assets/Images/orange.jpeg";

const FounderMessage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      text: `"At EggBucket, our mission began with a simple idea: to deliver the freshest, highest-quality eggs directly to your doorstep. As the founder, I envisioned a service that would connect people to farm-fresh eggs without the hassle of grocery shopping or compromising on quality."`,
      name: "ROHAN WANI",
      title: "Founder , EggBucket",
      photo: founderPhoto,
    },
    {
      text: `"Our goal is not just about convenience; it’s about supporting local farmers, promoting sustainable farming practices, and ensuring that every egg we deliver meets the highest standards of freshness. Through EggBucket, we aim to build a stronger connection between communities and their food sources."`,
      name: "ROHIT WANI",
      title: "Co-Founder , EggBucket",
      photo: cofounderPhoto,
    },
  ];

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 250);
  }, [currentSlide]);

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold text-black py-10 text-center mb-6 transition-opacity duration-1000 ease-in-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      >
        Founders' Message
      </h2>
      <div className="relative max-w-6xl w-full mx-auto p-8 bg-transparent shadow-none founder-message-container flex flex-col md:flex-row items-center gap-8">
        {/* Photo Box (Moves above text on smaller screens) */}
        <div className="flex-1 relative w-full max-w-md mx-auto p-2 order-2 md:order-1">
          <img
            className={`w-full h-auto object-cover rounded-lg border-4 transition-transform duration-1000 ease-in-out ${
              isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            style={{
              height: "280px",
              width: "400px",
              borderColor: "#3A3A3A",
            }}
            src={slides[currentSlide].photo}
            alt={slides[currentSlide].name}
          />
        </div>

        {/* Text Box */}
        <div
          className={`flex-1 p-10 rounded-xl transition-transform duration-1000 ease-in-out order-1 md:order-2 ${
            isAnimating
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{ backgroundColor: "#F5F5DC" }} // Beige background
        >
          <blockquote className="mb-4 text-lg font-normal text-gray-800">
            {slides[currentSlide].text}
          </blockquote>
          <p
            className={`font-bold text-right md:text-left transition-transform duration-1000 ease-in-out ${
              isAnimating
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ color: "#FA824C" }}
          >
            {slides[currentSlide].name}
            <br />
            {slides[currentSlide].title}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
        onClick={() => moveSlide(-1)}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
        onClick={() => moveSlide(1)}
      >
        &#10095;
      </button>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .founder-message-container {
            flex-direction: column;
          }
          .text-right {
            text-align: center;
          }
          .order-1 {
            order: 2;
          }
          .order-2 {
            order: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FounderMessage;
