import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail className="text-primary" size={24} />,
    title: "Email",
    value: "e.zayed1947@su.edu.eg",
    href: "mailto:e.zayed1947@su.edu.eg",
  },
  {
    icon: <Phone className="text-primary" size={24} />,
    title: "Phone",
    value: "+20 100 319 3622",
    href: "tel:+201003193622",
  },
  {
    icon: <MapPin className="text-primary" size={24} />,
    title: "Location",
    value: "Gharbia, Egypt",
    href: "https://maps.app.goo.gl/yDCutyD4y32BUZNN9",
  },
];

const socialLinks = [
  { icon: <FaGithub size={20} />, href: "https://github.com/eslamz11", color: "hover:bg-gray-800" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/eslamz11", color: "hover:bg-blue-700" },
  { icon: <FaWhatsapp size={20} />, href: "https://wa.me/+201003193622", color: "hover:bg-green-600" },
  { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/eslammosalah", color: "hover:bg-blue-600" },
  { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/eslamz11/", color: "hover:bg-pink-600" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss new opportunities?
            I'm always open to connecting!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-primary transition-colors">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-dark border border-white/10 text-gray-400 transition-all hover:text-white hover:-translate-y-1 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="mailto:e.zayed1947@su.edu.eg" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover shadow-lg hover:shadow-primary/25 transition-all">
            <Send size={20} />
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
}
