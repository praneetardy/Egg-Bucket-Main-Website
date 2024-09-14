import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import aboutImage from "../assets/Images/pngwing.com.png";

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { scrollY } = useScroll();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useTransform(scrollY, [0, 750], [0.35, 1.2]); // for image scaling

  // Animation Variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="bg-white py-12 mt-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center mb-12 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-semibold text-[#f87709] relative z-20"
            style={{ filter: blur, opacity }}
            initial={{ opacity: 10 }}
            animate={controls}
            variants={textVariants}
          >
            Egg Bucket
          </motion.h2>

          <motion.span
            className="absolute -top-8 md:left-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-bold text-[#000000] opacity-20 pointer-events-none z-10"
            style={{ x }}
          >
            Why
          </motion.span>
        </div>

        <div className="flex flex-col mt-36  md:flex-row items-center justify-center md:justify-between space-x-8 md:space-x-10">
          <motion.div
            className="md:w-1/2 mb-16 md:mb-0 flex justify-center relative z-20"
            whileHover={{ scale: 1.1 }} // Image hover effect
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <motion.svg
              className="absolute inset-0 w-[150%] h-[150%] z-0 opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
            >
              <path
                d="M300,100C400,150,450,250,400,350C350,450,250,450,150,400C50,350,50,250,100,150C150,50,200,50,300,100Z"
                fill="#f87709"
              />
            </motion.svg>

            <motion.img
              src={aboutImage}
              alt="About Egg Bucket"
              className="h-56 md:h-[400px] object-cover relative z-10"
              style={{ scale }}
            />
          </motion.div>

          {/* Merged Paragraphs in a Single Div with Entry and Exit Animations */}
          <motion.div
            className="md:w-full md:text-left space-y-8 md:pl-8 z-20 relative bg-[#f87709] shadow-xl md:rounded-l-full  p-8 md:p-16 lg:pl-24 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            initial="hidden"
            animate={controls}
            exit="exit"
            variants={textVariants}
            whileHover={{ scale: 1.05 }} // Text container hover effect
          >
            {/* SVG Background Decoration */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-30"></div>

            {/* Expanded Text Content */}
            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed z-10 relative"
              whileHover={{ scale: 1.05 }} // Paragraph hover effect
              transition={{ duration: 0.3 }}
            >
              At Egg Bucket, we are passionate about providing you with the
              freshest, most nutritious eggs. Each egg comes from hens raised in
              open, stress-free environments, ensuring the highest quality and
              flavor in every bite. Whether you're using them in baking,
              breakfast, or cooking gourmet meals, you can trust that our eggs
              are a premium product with the environment and animal welfare in
              mind.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed z-10 relative"
              whileHover={{ scale: 1.05 }} // Paragraph hover effect
              transition={{ duration: 0.3 }}
            >
              But we’re more than just an egg supplier. At Egg Bucket, we stand
              for sustainability and innovation in farming practices. Our
              commitment to eco-friendly solutions helps us minimize waste,
              conserve resources, and ensure that our practices are as green as
              possible. We believe that small changes can make a big impact, and
              we aim to be a leader in the industry by proving that ethical
              farming and high-quality products can go hand-in-hand.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
