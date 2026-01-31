import { useEffect, useRef } from "react";
import { SiTailwindcss, SiFlutter, SiDart, SiFirebase, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";

const TechBadge = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-default"
  >
    <Icon className={color} size={20} />
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </motion.div>
);

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = ["Software Developer", "Flutter Developer", "Mobile App Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    const type = () => {
      const currentRole = roles[roleIndex];
      if (textElement) {
        textElement.textContent = currentRole.substring(0, charIndex);
      }

      charIndex += isDeleting ? -1 : 1;

      if (!isDeleting && charIndex === currentRole.length) {
        typeTimeout = setTimeout(() => (isDeleting = true), 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeTimeout = setTimeout(type, 500);
        return;
      }

      typeTimeout = setTimeout(type, isDeleting ? 50 : 100);
    };

    typeTimeout = setTimeout(type, 1000);

    return () => clearTimeout(typeTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-blob" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-6 border border-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance Work
              <motion.span
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Briefcase size={16} />
              </motion.span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">Eslam Zayed</span>
            </h1>

            <div className="h-8 mb-8">
              <span ref={textRef} className="text-2xl md:text-3xl text-gray-400 font-light border-r-2 border-emerald-500 pr-2 animate-pulse"></span>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
              Passionate Flutter Developer crafting beautiful, high-performance mobile experiences.
              Translating ideas into seamless applications with clean code and modern design.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start mb-12">
              <a href="#projects" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 text-center">
                View My Work
              </a>

              <a
                href="https://drive.google.com/file/d/1q1bl4ul0_Q1HIwURM8iUYe3l-s6zOLk1/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400 border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/20 font-semibold transition-all hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Download className="group-hover:translate-y-1 transition-transform" size={20} />
                Download CV
              </a>

              <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold transition-all hover:-translate-y-1 backdrop-blur-sm text-center">
                Contact Me
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Working with</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <TechBadge icon={SiFlutter} name="Flutter" color="text-cyan-400" />
                <TechBadge icon={SiDart} name="Dart" color="text-blue-400" />
                <TechBadge icon={SiFirebase} name="Firebase" color="text-yellow-500" />
                <TechBadge icon={SiReact} name="React" color="text-blue-300" />
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 border-dashed animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-white/10" />

              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl bg-dark-lighter">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 mix-blend-overlay" />
                <img
                  src="/myPhoto-p.png"
                  alt="Eslam Zayed"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-dark-card p-3 rounded-2xl border border-white/10 shadow-xl z-20"
              >
                <SiFlutter className="text-cyan-400 text-3xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-dark-card p-3 rounded-2xl border border-white/10 shadow-xl z-20"
              >
                <SiDart className="text-blue-400 text-3xl" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
