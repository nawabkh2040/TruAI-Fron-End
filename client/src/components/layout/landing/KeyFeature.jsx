import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../../../assets/5.avif";
import image2 from "../../../assets/6.avif";
import image3 from "../../../assets/7.avif";

const cards = [
  {
    title: "Uncover hidden patterns",
    desc: "Analyze metadata, timestamps, and device information.",
    img: image1,
  },
  {
    title: "Detect frame manipulation",
    desc: "Spot tampering frame-by-frame with precision.",
    img: image2,
  },
  {
    title: "Reveal AI-generated content",
    desc: "Identify synthetic visuals using deep neural analysis.",
    img: image3,
  },
];

const FeatureCard = ({ title, desc, img }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter: blur }}
      className="sticky top-24 mb-32"
      id="feature"
    >
      <div className="bg-[#e9eae3] rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt={title}
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Feature
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const KeyFeature = () => {
  return (
    <section className="bg-[#ECEDE7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-20 text-center">
          See the truth in every pixel
        </h2>

        <div className="space-y-[40vh]">
          {cards.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
