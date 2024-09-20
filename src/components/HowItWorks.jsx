import React, { useEffect, useRef, useState } from "react";

const Howitworks = () => {
  const steps = [
    {
      title: "Egg Collection",
      icon: "🥚",
      content:
        "Our fresh eggs are collected every morning with utmost care, ensuring they stay in the best condition from the farm to your table.",
      detailedContent:
        "We prioritize quality by sourcing eggs from our free-range farms where chickens live in a stress-free environment. Each morning, we collect eggs that are handled with care and maintained under optimal conditions to ensure you get the freshest product possible.",
    },
    {
      title: "Quality Inspection",
      icon: "🔍",
      content:
        "Each egg undergoes a thorough quality check to meet our high standards before reaching you.",
      detailedContent:
        "Our skilled inspectors carefully examine every egg for any imperfections or cracks. This meticulous process ensures that only the finest quality eggs are selected for you, maintaining our commitment to excellence.",
    },
    {
      title: "Packaging",
      icon: "📦",
      content:
        "We use eco-friendly packaging to protect your eggs and minimize our environmental footprint.",
      detailedContent:
        "Our cartons are made from 100% recycled materials, reflecting our dedication to sustainability. The packaging is designed to safeguard the eggs during transit while reducing our environmental impact, so you can feel good about your purchase.",
    },
    {
      title: "Transportation",
      icon: "🚚",
      content:
        "Our transport system ensures your eggs stay fresh from farm to your doorstep.",
      detailedContent:
        "Equipped with advanced climate control technology, our delivery vehicles maintain the perfect temperature for your eggs throughout the journey. This ensures that they arrive in pristine condition, ready for you to enjoy.",
    },
    {
      title: "Delivery",
      icon: "🏠",
      content:
        "Experience the convenience of having fresh eggs delivered right to your door.",
      detailedContent:
        "We partner with reliable local couriers to offer fast and dependable delivery services. Your eggs arrive fresh and on time, so you can enjoy them at their best without any hassle.",
    },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [hoveredStep, setHoveredStep] = useState(null);

  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 2s ease-out";
          path.style.strokeDashoffset = "0";

          path.addEventListener("transitionend", () => {
            path.style.strokeDasharray = "5,5";
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      {/* Main Heading */}
      <div className="w-full text-center -mt-64 mb-64">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          How It Works
        </h1>
      </div>

      {/* Section Container */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-6xl sm:flex-col"
      >
        {/* Line */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          {isLargeScreen ? (
            <svg
              width="100%"
              height="300"
              viewBox="0 0 1200 300"
              style={{
                position: "absolute",
                top: "100px",
                left: "0",
                right: "0",
                margin: "0 auto",
                transform: " translateY(-50%)",
              }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
              </defs>
              <path
                ref={pathRef}
                d="M 100,150 C 180,50 240,50 320,150 C 400,250 460,250 540,150 C 620,50 680,50 760,150 C 840,250 900,250 980,150 C 1060,50 1120,50 1200,150"
                stroke="black"
                strokeWidth="2"
                fill="none"
                markerEnd="url('#arrowhead')"
              />
            </svg>
          ) : (
            <svg
              width="100"
              height="1200"
              viewBox="0 0 100 600"
              style={{
                position: "absolute",
                left: "50%",
                top: "20",
                transform: "translateX(-50%) translateY(-50%)",
              }}
            >
              <defs>
                <marker
                  id="arrowhead-vertical"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
              </defs>
              <path
                ref={pathRef}
                d="M 50,50 L 50,550"
                stroke="black"
                strokeWidth="2"
                fill="none"
                markerEnd="url('#arrowhead-vertical')"
              />
            </svg>
          )}
        </div>

        {/* Step layout */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute z-10 flex flex-col items-center text-center cursor-pointer"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
            style={{
              left: isLargeScreen ? `${20 * index + 14}%` : "50%",
              top: isLargeScreen
                ? `${index % 2 === 0 ? "calc(50% + 5px)" : "calc(50% + 120px)"}`
                : `${100 * index - 200}px`,
              transform: "translate(-50%, -50%)",
              zIndex: hoveredStep === index ? 10 : 1,
            }}
          >
            {isLargeScreen && (
              <p className="mb-6 text-sm md:text-base font-medium">
                {step.title}
              </p>
            )}

            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-400 text-white text-2xl">
              {step.icon}
            </div>

            {/* Title for small screens */}
            {!isLargeScreen && (
              <p
                className={`text-sm md:text-base font-medium -mt-16  ${
                  index % 2 === 0 ? "ml-56 " : "mr-48"
                }`}
              >
                {step.title}
              </p>
            )}

            {/* Information card that appears on hover with transition effect */}
            {hoveredStep === index && (
              <div
                className={`mt-6 w-64 bg-white shadow-lg rounded-lg border-2 border-orange-200 p-4 text-left transition-transform transition-opacity duration-500 ease-in-out z-50 ${
                  hoveredStep === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  position: "absolute",
                  top: isLargeScreen ? "100%" : "calc(100% + 20px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 50,
                }}
              >
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}{" "}
                  <span className="text-orange-400">{step.icon}</span>
                </h3>
                <p className="text-sm mb-2">{step.content}</p>
                <p className="text-xs text-gray-500">{step.detailedContent}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
