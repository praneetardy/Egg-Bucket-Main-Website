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
    }
  }, [controls, inView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="bg-white py-12 mt-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="text-center mb-12 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-semibold text-[#f87709] relative z-20"
            style={{ filter: blur, opacity }}
            initial={{ opacity: 10 }}
            animate={controls}
            variants={{
              visible: { opacity: 100, transition: { duration: 1.2 } },
            }}
          >
            Egg Bucket
          </motion.h2>

          <motion.span
            className="absolute -top-8 left-96 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-bold text-[#000000] opacity-20 pointer-events-none z-10"
            style={{ x }}
          >
            Why
          </motion.span>
        </div>

        <div className="flex flex-col mt-36 md:flex-row items-center justify-center md:justify-between space-x-8 md:space-x-10">
          <motion.div className="md:w-1/2 flex justify-center relative z-20">
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
              className="h-80 md:h-[400px] object-cover  relative z-10"
              style={{ y }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </motion.div>

          <div className="md:w-1/2 md:text-left space-y-8 md:pl-8 z-20">
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                },
              }}
            >
              At Egg Bucket, we are committed to delivering the freshest,
              highest quality eggs straight from our farm to your table. Every
              egg is packed with nutrition and flavor, produced under the best
              conditions for both our chickens and the environment.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.4 },
                },
              }}
            >
              With a focus on sustainability and excellence, Egg Bucket has
              become a trusted name in the industry. We believe in transparency,
              quality, and customer satisfaction, ensuring that you always
              receive the best.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
