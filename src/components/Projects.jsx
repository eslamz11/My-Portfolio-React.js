import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "El-Sahm Real Estate",
    description: "A comprehensive real estate platform helping students find housing. Features BLoC state management and real-time Firebase listings.",
    tools: ["Flutter", "Supabase", "Firebase", "BLoC"],
    liveDemo: "https://elsahm.netlify.app/",
    sourceCode: "https://github.com/eslamz11",
    img: "/real-estate.png",
  },
  {
    title: "Sinia Fast Delivery",
    description: "Cross-platform delivery application with order management and real-time tracking using Material Design principles.",
    tools: ["Flutter", "BLoC", "Firebase", "Dart"],
    liveDemo: "https://github.com/eslamz11/Sinia-Fast/releases/tag/Sinia-Fast",
    sourceCode: "https://github.com/eslamz11/Sinia-Fast",
    img: "/delivery-app.png",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
  >
    {/* Image Section */}
    <div className="relative h-64 md:h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <a
          href={project.sourceCode}
          target="_blank"
          className="p-3 bg-dark-card/90 backdrop-blur-md rounded-full text-white hover:text-emerald-500 hover:bg-white transition-all shadow-lg"
          title="View Source"
        >
          <FaCode size={18} />
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          className="p-3 bg-primary/90 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all shadow-lg"
          title="View Live"
        >
          <FaExternalLinkAlt size={18} />
        </a>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8 relative z-20 -mt-6 bg-gradient-to-b from-transparent to-dark-card">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.map((tool, i) => (
          <span
            key={i}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
        <a
          href={project.liveDemo}
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-500 transition-colors"
        >
          View Project <FaExternalLinkAlt size={12} />
        </a>
        <a
          href={project.sourceCode}
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
        >
          Source Code <FaGithub size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing real-world applications built with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start your next project?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I'm available for freelance work and collaborations. Let's discuss how we can turn your ideas into reality.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
