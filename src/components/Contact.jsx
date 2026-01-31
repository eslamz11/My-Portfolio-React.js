// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactBoxs = [
  {
    icon: <FaLocationDot size={24} />,
    title: "Location",
    text: "Egypt",
    href: "https://www.google.com/maps/search/Egypt",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    text: "e.zayed1947@su.edu.eg",
    href: "mailto:e.zayed1947@su.edu.eg",
  },
  {
    icon: <FaPhone size={24} />,
    title: "Phone",
    text: "+201003193622",
    href: "tel:+201003193622",
  },
];
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const icons = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/eslamz11",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/eslamz11/",
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/eslammosalah",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/eslamz11",
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: "https://wa.me/+201003193622",
  },
];

const zoomItem = {
  hidden: { scale: 0.92, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center overflow-hidden
      bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14] py-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="mb-6 text-white font-bold text-3xl text-center relative">
            Let's Connect
            <span className="absolute w-20 h-1 bg-[#6B8E23] -bottom-3 left-1/2 -translate-x-1/2"></span>
          </h3>

          <p className="text-gray-400 leading-6 text-center max-w-lg mx-auto">
            Have a project in your mind or want to discuss opportunities? I'm
            always open to talking about creative ideas and new projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactBoxs.map((item, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              variants={zoomItem}
              href={item.href}
              target={item.title !== "Email" ? "_blank" : ""}
              rel="noopener noreferrer"
              className="p-5 border border-gray-500 rounded-xl hover:border-[#6B8E23] transition-colors duration-300
                          will-change-transform transform-gpu mb-6 md:mb-12"
            >
              <div className="flex items-center justify-center mb-2 text-[#6B8E23]">
                {item.icon}
              </div>
              <h4 className="font-semibold text-white text-center text-xl mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 text-center">{item.text}</p>
            </motion.a>
          ))}
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {icons.map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border text-white hover:border-[#6B8E23] hover:bg-[#6B8E23] transition-colors duration-300"
            >
              {icon.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:e.zayed1947@su.edu.eg"
            className="inline-block px-6 py-3 rounded-lg bg-[#6B8E23] text-white font-medium hover:bg-[#6B8E23]/90 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
