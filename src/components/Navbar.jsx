import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-md"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto md:px-6 flex items-center justify-center gap-14 bg-gray-900 w-fit rounded-3xl px-4 py-2">
        {/* Logo / Name */}
        <a href="#home" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-[#6B8E23] to-[#9DB58A] bg-clip-text text-transparent">
            Dev<span className="text-white">Eslam.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link, i) => (
            <div key={i}>
              <a
                href={link.href}
                className={`transition-colors relative group rounded-full px-2 py-1 text-sm
                            ${activeSection === link.href.replace("#", "")
                    ? "bg-[#6B8E23]/10 text-[#6B8E23] shadow-lg"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B8E23] to-[#9DB58A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/eslamz11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6B8E23] transition-all hover:-translate-y-1 duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/eslamz11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6B8E23] transition-all hover:-translate-y-1 duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/eslammosalah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6B8E23] transition-all hover:-translate-y-1 duration-200"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://wa.me/+201003193622"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6B8E23] transition-all hover:-translate-y-1 duration-200"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mt-2 mx-2 rounded-xl md:hidden bg-gray-900 shadow-lg transition-all duration-300 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4 items-center">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`py-2 transition-colors
    ${activeSection === link.href.replace("#", "")
                    ? "text-[#6B8E23]"
                    : "text-gray-300 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              <a
                href="https://github.com/eslamz11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/eslamz11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/eslammosalah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/eslamz11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/+201003193622"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
