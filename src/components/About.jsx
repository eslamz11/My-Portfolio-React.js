import {
  User,
  Mail,
  MapPin,
  Zap,
  Accessibility,
  FileCode,
  Focus,
  CheckCircle,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const personalInfo = [
  { icon: <User size={30} />, title: "Name", value: "Eslam Mohamed Zayed" },
  {
    icon: <Phone size={30} />,
    title: "Phone",
    value: "+201093130120",
  },
  {
    icon: <Mail size={30} />,
    title: "Email",
    value: "e.zayed1947@su.edu.eg",
  },
  { icon: <MapPin size={30} />, title: "Location", value: "Gharbia, Egypt" },
];
const developmentPhil = [
  {
    icon: <Zap size={24} />,
    title: "Performance First",
    text: "Optimized, scalable, and lightning-fast applications.",
  },
  {
    icon: <Accessibility size={24} />,
    title: "Accessibility Matters",
    text: "Building for everyone, regardless of ability.",
  },
  {
    icon: <FileCode size={24} />,
    title: "Clean Code",
    text: "Maintainable, readable, and developer-friendly code.",
  },
  {
    icon: <Focus size={24} />,
    title: "User-Centered Design",
    text: "Interfaces that delight and solve real problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F1A14]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`text-center mb-14`}
        >
          <h2 className="text-6xl font-bold mb-2">
            <span className="text-[#fff]">About</span>{" "}
            <span className="text-[#6B8E23]">Me</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Front-End Developer focused on modern web interfaces
          </p>
        </motion.div>

        {/* ABOUT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`rounded-2xl shadow-lg p-8 mb-16
          border border-[#6B8E23]`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* ICON */}
            <div className="w-24 h-24 rounded-xl bg-[#6B8E23]/10 flex items-center justify-center">
              <User className="text-[#6B8E23]" size={48} />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-white">
                Hello, I'm <span className="text-[#6B8E23]">Eslam Mohamed Zayed.</span>
              </h3>

              <p className="text-gray-400 leading-8">
                I'm a{" "}
                <span className="text-[#6B8E23]">Flutter Developer</span>{" "}
                with a solid foundation in mobile application development using Flutter and Dart.
                <br />
                Skilled in building clean, responsive, and user-friendly applications, integrating RESTful APIs, and managing state effectively with BLoC. Passionate about writing maintainable code, solving complex problems, and continuously learning new technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PERSONAL INFO */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">
            Personal Info
          </h3>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
          >
            {personalInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                className="rounded-xl flex flex-col justify-center items-center border border-gray-400 py-4
                              hover:border-[#6B8E23] transition duration-300 hover:scale-105
                              will-change-transform transform-gpu"
              >
                <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-4 rounded-full mb-3">
                  {item.icon}
                </div>
                <p className="text-gray-400 mb-1">{item.title}</p>
                <p className="font-semibold text-white text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Philosophy */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-10 text-center text-white">
            Development Philosophy
          </h3>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}
          >
            {developmentPhil.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                className="rounded-xl flex flex-col items-start border border-gray-400 px-6 py-8 hover:border-[#6B8E23] transition-colors duration-300"
              >
                <div className="flex gap-2 justify-start items-center">
                  <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-2 rounded-xl mb-3">
                    {item.icon}
                  </div>
                  <p className="text-[#6B8E23] font-bold mb-1">{item.title}</p>
                </div>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
