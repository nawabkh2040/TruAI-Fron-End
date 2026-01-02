import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0B0E1A] py-36 sm:py-20  md:py-24 px-4 sm:px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 pt-18">
          Uncover the Truth Behind Digital Media
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
          TruAI is an advanced AI-powered media authenticity detection system
          designed to determine whether digital content is real or artificially
          generated. As synthetic media and deepfakes become increasingly
          sophisticated, TruAI helps restore trust by analyzing media at multiple
          levels—metadata, frame-level patterns, and pixel-level signals.
        </p>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-6">
          By combining deep learning models with forensic analysis, TruAI detects
          subtle inconsistencies in images and videos that are often invisible to
          the human eye. This multi-layered approach ensures reliable, accurate,
          and explainable results for journalists, investigators, platforms, and
          organizations fighting misinformation.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
