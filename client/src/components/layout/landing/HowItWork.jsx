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
import { useNavigate } from "react-router-dom";

const HowItWork = () => {
  const navigate = useNavigate();

  return (
    <section  className="bg-[#ECEDE7] py-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-600 mb-3">
          How it works
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-14">
          Spot fakes in a flash
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <RefreshCw size={26} />,
              title: "Metadata deep dive",
              desc: "We scan file details—timestamps, device info, and hidden metadata."
            },
            {
              icon: <MessageSquare size={26} />,
              title: "Frame-by-frame scan",
              desc: "Every frame is analyzed to catch subtle visual inconsistencies."
            },
            {
              icon: <Mail size={26} />,
              title: "Pixel-level analysis",
              desc: "We inspect texture, lighting, and noise patterns deeply."
            },
            {
              icon: <CheckCircle size={26} />,
              title: "AI-powered detection",
              desc: "Advanced models identify manipulation with high precision."
            },
            {
              icon: <Heart size={26} />,
              title: "Trusted results",
              desc: "Clear confidence scoring you can rely on."
            },
            {
              icon: <Sparkles size={26} />,
              title: "Easy integration",
              desc: "Simple workflow that fits any use case."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-24 bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-14">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Quickly verify media authenticity
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Upload your media and get instant, reliable verification—no technical
              expertise required.
            </p>

            <button
              onClick={() => navigate("/upload")}
              className="px-7 py-3 bg-lime-400 hover:bg-lime-500 transition rounded-full font-medium"
            >
              Try it now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <img
              src={image4}
              alt="Media authenticity preview"
              className="rounded-3xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
