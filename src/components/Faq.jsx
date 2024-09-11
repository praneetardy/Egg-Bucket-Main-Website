import React, { useState, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState({});
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (answerRefs.current.length) {
      answerRefs.current.forEach((ref, index) => {
        if (ref) {
          setMaxHeight((prevMaxHeight) => ({
            ...prevMaxHeight,
            [index]: activeIndex === index ? ref.scrollHeight : 0,
          }));
        }
      });
    }
  }, [activeIndex]);

  const faqs = [
    {
      question: "What makes our eggs unique?",
      answer:
        "Our eggs are sourced from local, free-range farms committed to sustainable and ethical practices.",
    },
    {
      question: "How do we ensure the safety and quality of our eggs?",
      answer:
        "We adhere to strict quality control standards at every stage of production, from farm to packaging. Our facilities undergo regular inspections and testing to maintain compliance with food safety regulations.",
    },
    {
      question: "Where can I purchase our eggs?",
      answer:
        "Our eggs are available at select grocery stores, farmers' markets, and online platforms. Please refer to our website or contact our customer service team for a list of authorized distributors.",
    },
    {
      question: "Can I recycle the egg cartons?",
      answer:
        "Yes, our egg cartons are made from recyclable materials. We encourage customers to recycle or reuse them whenever possible to minimize waste and promote environmental sustainability.",
    },
    {
      question: "How can I contact customer support for inquiries or feedback?",
      answer:
        "For any questions, concerns, or feedback, please reach out to our customer support team via email at kacklewallsnutrition@gmail.com or visit contact us page. We are committed to providing prompt and personalized assistance to ensure your satisfaction.",
    },
    {
      question:
        "Are there opportunities for partnerships or collaborations with our company?",
      answer:
        "We welcome opportunities for partnerships, collaborations, and wholesale inquiries. Please contact our business development team to discuss potential opportunities for mutual growth and success.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6 max-w-3xl  mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-b border-grey-900 rounded-lg transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800  focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                <FaPlus className="text-[#f87709] "></FaPlus>
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{
                  maxHeight: `${maxHeight[index] || 0}px`,
                }}
              >
                <div className="px-6 pb-4 bg-white rounded-b-lg ">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
