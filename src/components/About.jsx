import { User, Mail, MapPin, Zap, Accessibility, FileCode, Focus, Phone } from "lucide-react";
import { motion } from "framer-motion";

const personalInfo = [
  { icon: <User size={24} />, title: "Name", value: "Eslam Mohamed Zayed" },
  { icon: <Phone size={24} />, title: "Phone", value: "+201093130120" },
  { icon: <Mail size={24} />, title: "Email", value: "e.zayed1947@su.edu.eg" },
  { icon: <MapPin size={24} />, title: "Location", value: "Gharbia, Egypt" },
];

const philosophies = [
  {
    icon: <Zap size={24} />,
    title: "Performance First",
    text: "Optimized, scalable, and lightning-fast applications.",
  },
  {
    icon: <Accessibility size={24} />,
    title: "Accessibility",
    text: "Building for everyone, regardless of ability.",
  },
  {
    icon: <FileCode size={24} />,
    title: "Clean Code",
    text: "Maintainable, readable, and developer-friendly code.",
  },
  {
    icon: <Focus size={24} />,
    title: "User-Centered",
    text: "Interfaces that delight and solve real problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Hello, I'm <span className="text-primary">Eslam Zayed.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg text-center md:text-left">
              I'm a <span className="text-white font-medium">Flutter Developer</span> with
              a deep passion for creating seamless mobile experiences. My journey involves
              translating complex requirements into user-friendly applications using
              <span className="text-primary"> Flutter</span> and <span className="text-primary">Dart</span>.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg text-center md:text-left">
              I specialize in integrating RESTful APIs, state management with BLoC and Riverpod,
              and ensuring clean architecture principles. I am always eager to learn new
              technologies and tackle challenging problems to deliver high-quality software solutions.
            </p>
          </motion.div>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-sm text-gray-400 mb-1">{item.title}</h4>
                <p className="text-white font-medium break-all">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-dark border border-white/5 hover:border-primary/50 transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-dark-lighter border border-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
