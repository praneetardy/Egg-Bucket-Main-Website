import React, { useEffect, useRef, useState } from "react";

const Howitworks = () => {
  const steps = [
    { title: "Egg Collection", icon: "🥚" },
    { title: "Quality Inspection", icon: "🔍" },
    { title: "Packaging", icon: "📦" },
    { title: "Transportation", icon: "🚚" },
    { title: "Delivery", icon: "🏠" },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Update based on md breakpoint
    };

    window.addEventListener("resize", handleResize);

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Initially set up the stroke dash array and dash offset for solid line
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 2s ease-out";
          path.style.strokeDashoffset = "0";

          path.addEventListener("transitionend", () => {
            path.style.strokeDasharray = "5,5"; // Switch to dotted after transition
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
      <div className="w-full text-center -mt-64 mb-56">
        <h1 className="text-5xl font-bold">How It Works</h1>
      </div>

      {/* Section Container */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-6xl sm:flex-col"
      >
        {/* Line */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          {/* Horizontal line for larger screens */}
          {isLargeScreen && (
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
                d="
    M 100,150
    C 180,50 240,50 320,150
    C 400,250 460,250 540,150
    C 620,50 680,50 760,150
    C 840,250 900,250 980,150
    C 1060,50 1120,50 1200,150"
                stroke="black"
                strokeWidth="2"
                fill="none"
                markerEnd="url('#arrowhead')"
              />
            </svg>
          )}

          {/* Vertical line for small screens */}
          {!isLargeScreen && (
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
                d="M 50,50 L 50,550" // Vertical line path for small screens
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
            className="absolute z-10 flex flex-col items-center text-center"
            style={{
              left: isLargeScreen ? `${20 * index + 14}%` : "50%",
              top: isLargeScreen
                ? `${index % 2 === 0 ? "calc(50% + 5px)" : "calc(50% + 120px)"}`
                : `${100 * index - 200}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {isLargeScreen && (
              <p className="mb-16 text-sm md:text-base font-medium">
                {step.title}
              </p>
            )}

            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-400 text-white text-2xl">
              {step.icon}
            </div>

            {/* Title for small screens */}
            {!isLargeScreen && (
              <p
                className={`text-sm md:text-base font-medium -mt-16 ${
                  index % 2 === 0 ? "ml-56 " : "mr-48"
                }`}
              >
                {step.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
