import { motion } from "framer-motion";
import image1 from "../../../assets/1.avif";
import image2 from "../../../assets/2.avif";
import image3 from "../../../assets/3.avif";
import TextType from "../../TextType";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="w-full min-h-[90vh] bg-[#0B0E1A] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 pt-40 gap-14">

        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <div className="w-24 sm:w-32 h-64 sm:h-80 overflow-hidden rounded-xl opacity-80">
            <img src={image1} alt="img1" className="w-full h-full object-cover" />
          </div>

          <div className="w-36 sm:w-56 h-80 sm:h-[28rem] overflow-hidden rounded-2xl shadow-xl">
            <img src={image2} alt="img2" className="w-full h-full object-cover" />
          </div>

          <div className="w-24 sm:w-32 h-64 sm:h-80 overflow-hidden rounded-xl opacity-80">
            <img src={image3} alt="img3" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <TextType
            text="Discover the truth behind every image and video"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          />

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Instantly reveal the authenticity of any image or video.
            No more uncertainty — just clear, reliable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => navigate("/upload")}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white"
            >
              Get Started
            </button>

           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
