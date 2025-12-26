import React from 'react'
import image1 from "../../../assets/5.avif";
import image2 from "../../../assets/6.avif";
import image3 from "../../../assets/7.avif";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const FeatureCard = ({ index, title, desc, img }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "14px"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter: blur }}
      className="sticky top-24 mb-40"
    >
      <div className="bg-[#e9eae3] rounded-3xl p-10 flex gap-16 items-center">
        
        <div className="w-1/2">
          <img
            src={img}
            className="rounded-2xl shadow-xl"
            alt={title}
          />
        </div>

        
        <div className="w-1/2">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Feature
          </p>
          <h2 className="text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const KeyFeature = () => {
  return (
    <section className="bg-[#ECEDE7] pt-32 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-20">
          See the truth in every pixel
        </h2>

        <div className="space-y-[40vh]">
          {cards.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;