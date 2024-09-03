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
      question: "What is Egg Bucket?",
      answer:
        "Egg Bucket is a leading provider of fresh, high-quality eggs delivered straight from our farm to your table. We are committed to sustainability, transparency, and customer satisfaction, ensuring that every egg you receive is packed with nutrition and flavor.",
    },
    {
      question: "Where are your eggs sourced from?",
      answer:
        "Our eggs are sourced from our own farms where we prioritize the well-being of our chickens and adhere to the highest standards of quality and sustainability. This ensures that you receive only the best eggs, produced under optimal conditions.",
    },
    {
      question: "How do you ensure the quality and freshness of your eggs?",
      answer:
        "We have strict quality control measures in place at every stage of production. Our eggs are collected daily, carefully inspected, and immediately packed to preserve their freshness. We also maintain a cold chain during transportation to ensure the eggs reach you in perfect condition.",
    },
    {
      question: "Do you offer organic or free-range eggs?",
      answer:
        "Yes, we offer a variety of eggs, including organic and free-range options. Our organic eggs are produced by hens that are fed an organic diet, and our free-range eggs come from hens that have access to outdoor spaces.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can easily place an order through our website by selecting the eggs you wish to purchase and adding them to your cart. Once you’ve selected your products, proceed to checkout to complete your purchase. We also offer subscription services for regular deliveries.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods including credit/debit cards, UPI, and net banking.",
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
