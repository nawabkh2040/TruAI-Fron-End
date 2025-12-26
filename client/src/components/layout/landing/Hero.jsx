import { motion } from "framer-motion";
import image1 from "../../../assets/1.avif";
import image2 from "../../../assets/2.avif";
import image3 from "../../../assets/3.avif";
import TextType from "../../TextType";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] bg-[#0B0E1A] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-10">

        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <div className="w-32 h-80 overflow-hidden rounded-xl opacity-80">
            <img
              src={image1}
              alt="img1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-56 h-[360px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={image2}
              alt="img2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-32 h-80 overflow-hidden rounded-xl opacity-80">
            <img
              src={image3}
              alt="img3"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl flex flex-col justify-center"
        >
          <TextType
            text="Discover the truth behind every image and video"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            className="text-white font-bold text-4xl leading-tight"
          />

          <p className="text-gray-400 mt-6 text-lg">
            Instantly reveal the authenticity of any image or video.
            No more uncertainty — just clear, reliable results.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white">
              Get Started
            </button>

            <button className="px-6 py-3 border border-gray-500 text-white rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
