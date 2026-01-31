import { Zap, Accessibility, FileCode, Focus, Code2, Rocket, Brain, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: <Code2 size={24} />, value: "2+", label: "Years Experience" },
  { icon: <Rocket size={24} />, value: "10+", label: "Projects Built" },
  { icon: <Brain size={24} />, value: "100%", label: "Problem Solving" },
  { icon: <Coffee size={24} />, value: "∞", label: "Coffee Consumed" },
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
    <section id="about" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
              Crafting Digital Experiences with <br />
              <span className="text-emerald-500">Passion & Precision</span>
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Eslam Zayed</span>, a dedicated
                <span className="text-emerald-500 font-medium"> Flutter Developer </span>
                based in Egypt. Use clean code and modern architecture to bring ideas to life on mobile screens.
              </p>
              <p>
                My journey in software development is driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
                I specialize in creating cross-platform applications using <span className="text-white">Flutter</span> and <span className="text-white">Dart</span>,
                focusing on performance, responsiveness, and intuitive user interfaces.
              </p>
              <p>
                Beyond coding, I'm constantly learning—exploring new state management patterns, optimized build methods, and the latest in mobile tech.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-dark-card border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-2 group text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            My Development Philosophy
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-dark border border-white/5 hover:border-emerald-500/50 transition-all text-center group hover:bg-white/[0.02]"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-dark-lighter border border-white/5 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform group-hover:bg-emerald-500/10">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
