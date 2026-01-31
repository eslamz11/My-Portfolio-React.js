// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaShare } from "react-icons/fa";

const projects = [
  {
    title: "El-Sahm Real Estate App",
    description:
      "Real estate application to help students find suitable housing in El-Arish. Designed and developed a user-friendly mobile application, implemented BLoC state management, and integrated Firebase for real-time listings.",
    tools: ["Flutter", "Supabase", "Firebase", "BLoC", "Dart"],
    liveDemo: "https://elsahm.netlify.app/", // Placeholder as per image view details
    sourceCode: "https://github.com/eslamz11",
    img: "/real-estate.png",
  },
  {
    title: "Sina Fast Delivery & Store App",
    description:
      "Delivery and store application for El-Arish city. Built a cross-platform mobile app supporting delivery services, managed orders and payments, and designed interactive UI using Flutter and Material Design.",
    tools: ["Flutter", "BLoC", "Firebase", "Dart", "Material Design"],
    liveDemo: "https://github.com/eslamz11/Sinia-Fast/releases/tag/Sinia-Fast",
    sourceCode: "https://github.com/eslamz11/Sinia-Fast",
    img: "/delivery-app.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0F1A14]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="mb-6 text-white font-bold text-3xl relative inline-block">
            Recent Projects
            <span className="absolute w-20 h-1 bg-[#6B8E23] -bottom-3 left-1/2 -translate-x-1/2"></span>
          </h3>

          <p className="text-gray-400 max-w-lg mx-auto">
            Explore my latest work where creativity meets functionality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden
              border border-gray-800 hover:border-[#6B8E23] transition-colors duration-500
              transform-gpu will-change-transform`}
            >
              <div
                className={`relative overflow-hidden flex items-center justify-center
                  `}
              // ${i % 2 !== 0 ? "md:order-2" : "md:order-1"}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover
                              transition-transform duration-700 ease-out
                              group-hover:scale-[1.06]"
                />
              </div>

              <div
                className={`col-span-2 md:col-span-1 p-8 flex flex-col bg-[#16251D]
                  `}
              // ${i % 2 !== 0 ? "md:order-1" : "md:order-2"}
              >
                <span className="text-[#6B8E23] text-sm font-semibold mb-3">
                  FEATURED PROJECT
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6B8E23] transition-colors duration-500">
                  {project.title}
                </h3>

                <p className="text-gray-500 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="bg-[#6B8E23] px-4 py-2 rounded-xl text-white flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105
                                text-sm md:text-base"
                  >
                    <FaShare /> View Live
                  </a>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    className="bg-gray-700 px-4 py-2 rounded-xl text-white flex items-center gap-2 hover:bg-gray-600 transition-all hover:scale-105
                                text-sm md:text-base"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-20 pt-16 border-t border-border relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-[#6B8E23]/10 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-[#6B8E23]/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#6B8E23] rounded-full"></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to <span className="text-[#6B8E23]">Collaborate</span>?
          </h3>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's join forces to create something extraordinary with clean,
            scalable, and modern solutions
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6B8E23] text-white
            rounded-xl hover:bg-primary/90 hover:scale-105 transition-all
            duration-300 group font-medium"
          >
            <span>Start a Project</span>
            <div className="group-hover:translate-x-1 transition-transform">
              <FaShare />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
