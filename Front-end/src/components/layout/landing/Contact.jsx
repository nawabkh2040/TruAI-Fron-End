import { motion } from "framer-motion";
import { Mail, Phone, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#F4F5EF] py-16 sm:py-20 md:py-28 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="mb-14 text-center sm:text-left">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Questions? We’re here to help
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
            Curious about media authenticity? Reach out to us — we’re always happy to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Mail />,
              title: "Email us",
              text: "Fast replies, real support.",
              value: "contact@truai.com",
            },
            {
              icon: <Phone />,
              title: "Call us",
              text: "Mon–Fri, 8am–5pm",
              value: "+1 (555) 000-0000",
            },
            {
              icon: <Twitter />,
              title: "Twitter",
              text: "Latest updates & news",
              value: "@truai",
            },
            {
              icon: <Instagram />,
              title: "Instagram",
              text: "Behind the scenes",
              value: "@truai",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.text}</p>
              <p className="text-gray-900 mt-1 font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
