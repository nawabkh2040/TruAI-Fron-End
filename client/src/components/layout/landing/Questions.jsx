import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can you detect fake media?",
    answer:
      "We analyze metadata, frames, and pixel-level patterns using deep learning to detect even the most subtle AI-generated artifacts."
  },
  {
    question: "What file formats are supported?",
    answer:
      "You can upload images and videos such as JPG, PNG, and MP4 for analysis."
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploaded data is securely processed and automatically deleted after analysis."
  },
  {
    question: "How fast are results generated?",
    answer:
      "Most analyses complete within seconds depending on file size and complexity."
  }
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#ECEDE7] py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Have questions? We have answers
        </h2>
        <p className="text-gray-600 mb-14">
          Learn how our system verifies authenticity with precision.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="bg-[#E6E7DF] rounded-xl overflow-hidden"
              >
                
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown />
                  </motion.span>
                </button>

                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-5 text-gray-700"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
