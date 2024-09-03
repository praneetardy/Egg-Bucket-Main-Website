import React from "react";
import {
  FaTruck,
  FaEgg,
  FaDollarSign,
  FaCogs,
  FaRecycle,
  FaRegHandshake,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaRegHandshake className="text-4xl text-[#f87709]" />,
      title: "Streamlined Supply Chain & Reliable Supply",
      description:
        "We simplify the egg supply chain by acting as the crucial link between farms and businesses. Our scalable supply chain ensures timely deliveries of high-quality eggs, meeting your needs, no matter the order size.",
    },
    {
      icon: <FaEgg className="text-4xl text-[#f87709]" />,
      title: "Consistent Quality Assurance & Sustainable Sourcing",
      description:
        "We maintain the highest standards by selecting the best eggs from trusted farms and ensuring they are produced responsibly. Every egg we deliver is fresh, safe, and ethically sourced.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-[#f87709]" />,
      title: "Competitive Pricing & Customized Solutions",
      description:
        "Leveraging our relationships with multiple farms, we offer competitive pricing while providing customizable solutions tailored to your business’s specific needs, from egg grades to delivery schedules.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#f87709]" />,
      title: "Dedicated Support & Simplified Ordering",
      description:
        "Our dedicated support team ensures smooth operations, while our user-friendly platform makes ordering easy. Track deliveries and manage your egg supply with flexible payment options to suit your business.",
    },
  ];

  return (
    <section className="bg-[#fff5e6] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Egg Bucket?
        </h2>
        <div className="flex flex-col items-center space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={`${index * 10}`}
              className={`flex flex-col items-center p-8 rounded-lg shadow-lg border-2 border-[#f87709] w-full max-w-lg transform transition-transform duration-500 ease-in-out ${
                index % 2 === 0
                  ? "ml-4 mr-2 md:ml-48 md:mr-4"
                  : "mr-4 ml-2 md:mr-48 md:ml-4"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
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
