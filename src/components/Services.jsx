import React from "react";
import { FaTruck, FaEgg, FaLeaf, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-[#f87709]" />,
      title: "Fast Delivery",
      description:
        "Get your eggs delivered swiftly and securely, right to your doorstep.",
    },
    {
      icon: <FaEgg className="text-4xl text-[#f87709]" />,
      title: "Quality Eggs",
      description:
        "We provide only the highest quality eggs, ensuring freshness and nutrition.",
    },
    {
      icon: <FaLeaf className="text-4xl text-[#f87709]" />,
      title: "Sustainable Farming",
      description:
        "Our eggs are produced using sustainable practices to protect the environment.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#f87709]" />,
      title: "Guaranteed Safety",
      description:
        "We follow stringent safety measures to ensure the highest standards of hygiene.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
