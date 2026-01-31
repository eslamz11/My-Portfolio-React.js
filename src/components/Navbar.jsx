import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-5">
    <a href="https://github.com/eslamz11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
      <FaGithub size={20} />
    </a>
    <a href="https://www.linkedin.com/in/eslamz11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
      <FaLinkedin size={20} />
    </a>
    <a href="https://www.facebook.com/eslammosalah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
      <FaFacebook size={20} />
    </a>
    <a href="https://wa.me/+201003193622" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
      <FaWhatsapp size={20} />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Glass Container */}
        <div
          className={`flex items-center justify-between w-full max-w-7xl mx-auto rounded-full px-6 transition-all duration-300 ${scrolled ? "bg-dark-lighter/80 backdrop-blur-md border border-white/5 py-3 shadow-lg" : "bg-transparent"
            }`}
        >
          {/* Logo */}
          <a href="#home" className="text-xl font-display font-bold relative z-50">
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
              Dev<span className="text-white">Eslam.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-emerald-500"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-500/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className={`text-2xl font-display font-medium ${activeSection === link.href.replace("#", "")
                  ? "text-emerald-500"
                  : "text-gray-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-8 border-t border-white/5"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
