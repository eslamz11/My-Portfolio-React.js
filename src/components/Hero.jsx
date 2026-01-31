import { useEffect, useRef } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiDart, SiFirebase } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = [
      "Software Developer",
      "Flutter Developer",
      "Mobile App Developer",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = currentRole.substring(
        0,
        Math.max(0, charIndex),
      );

      charIndex += isDeleting ? -1 : 1;

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pb-7
      bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14]"
    >
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex justify-between items-center gap-10 z-10 flex-wrap mt-[84px]"
      >
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex-1">
          <span
            className="px-4 py-1 mb-8 rounded-full text-sm font-medium
            bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]
            flex items-center gap-2 w-fit mx-auto md:mx-0"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B8E23]"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6B8E23]"></span>
            </span>
            Available For Freelance Work
          </span>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-[#7A8F5A]">Eslam </span>
            <span className="text-[#6B8E23]">Zayed</span>
          </h1>

          <div className="text-xl md:text-2xl text-[#8b949e] mb-6 h-8">
            <span ref={textRef} className="font-medium text-white"></span>
          </div>

          <p className="max-w-2xl text-[#8b949e] mb-6 text-xl">
            Flutter Developer with a solid foundation in mobile application development using Flutter and Dart.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6B8E23] to-[#7A8F5A]
              text-white hover:scale-105 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-[#6B8E23] border-[#6B8E23] border
              hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-[#8b949e] mb-3">I'm working with:</p>
            <div className="flex gap-3">
              <div
                className="flex gap-2 items-center rounded-lg text-[#8b949e] bg-gray-600/80 border border-gray-500 w-fit px-3 py-2
                              hover:scale-105 transition-all cursor-default will-change-transform"
              >
                <span>
                  <SiFlutter
                    className="text-cyan-400"
                    size={18}
                    aria-label="Flutter logo"
                  />
                </span>
                <p className="text-sm">Flutter</p>
              </div>
              <div
                className="flex gap-2 items-center rounded-lg text-[#8b949e] bg-gray-600/80 border border-gray-500 w-fit px-3 py-2
                              hover:scale-105 transition-all cursor-default will-change-transform"
              >
                <span>
                  <SiDart
                    className="text-blue-400"
                    size={18}
                    aria-label="Dart logo"
                  />
                </span>
                <p className="text-sm">Dart</p>
              </div>
              <div
                className="flex gap-2 items-center rounded-lg text-[#8b949e] bg-gray-600/80 border border-gray-500 w-fit px-3 py-2
                              hover:scale-105 transition-all cursor-default will-change-transform"
              >
                <span>
                  <SiFirebase
                    className="text-yellow-500"
                    size={18}
                    aria-label="Firebase logo"
                  />
                </span>
                <p className="text-sm">Firebase</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center rounded-3xl border-gray-500 border-4 mx-auto md:mx-0">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/myPhoto-p.png"
              alt="Eslam Zayed"
              className="w-64 h-64 md:w-[350px] md:h-[350px] object-cover
            shadow-xl transition-transform duration-700 hover:scale-110 will-change-transform"
            />
          </div>

          <div className="absolute -top-8 -right-4 rounded-3xl -z-10 w-24 h-24 md:w-44 md:h-44 bg-[#7A8F5A]/60 backdrop-blur-md"></div>
          <div className="absolute -bottom-8 -left-4 rounded-3xl -z-10 w-24 h-24 md:w-44 md:h-44 bg-[#7A8F5A]/60 backdrop-blur-md"></div>
        </div>
      </motion.div>
    </section>
  );
}
