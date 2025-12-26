import { motion } from "framer-motion";
import {
  RefreshCw,
  MessageSquare,
  Mail,
  CheckCircle,
  Heart,
  Sparkles
} from "lucide-react";
import image4 from "../../../assets/4.avif";

const features = [
  {
    icon: <RefreshCw size={26} />,
    title: "Metadata deep dive",
    desc: "We scan file details—timestamps, device info, and hidden metadata—to detect suspicious patterns."
  },
  {
    icon: <MessageSquare size={26} />,
    title: "Frame-by-frame scan",
    desc: "Every frame is analyzed to catch subtle visual inconsistencies and artifacts."
  },
  {
    icon: <Mail size={26} />,
    title: "Pixel-perfect analysis",
    desc: "We zoom into pixel-level data to identify lighting, texture, and noise anomalies."
  },
  {
    icon: <CheckCircle size={26} />,
    title: "AI-powered detection",
    desc: "Deep learning models identify manipulated or synthetic content with precision."
  },
  {
    icon: <Heart size={26} />,
    title: "Trustworthy results",
    desc: "Clear confidence scores help users make informed decisions."
  },
  {
    icon: <Sparkles size={26} />,
    title: "Easy integration",
    desc: "Plug into your workflow seamlessly with APIs and automation."
  }
];

const HowItWork = () => {
  return (
    <section className="bg-[#ECEDE7] pt-1">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-600 mb-3">
          How it works
        </p>

        <h2 className="text-4xl font-bold mb-16">
          Spot fakes in a flash
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="mt-28 bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-14">

          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-semibold mb-6">
              Quickly verify media authenticity
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Upload your media to receive fast, clear results.  
              No technical jargon — just reliable answers you can trust.
            </p>

            <div className="flex gap-4">
              <button className="bg-lime-300 px-7 py-3 rounded-full font-medium hover:bg-lime-400 transition">
                Try now
              </button>
             
            </div>

           
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[520px]"
          >
            <img
              src={image4}
              alt="Media authenticity visualization"
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
