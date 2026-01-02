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
    <section id="question" className="bg-[#ECEDE7] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Have questions? We have answers
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Learn how our system verifies authenticity with accuracy and confidence.
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
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-5 sm:px-6 pb-5 text-gray-700 text-sm sm:text-base"
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
