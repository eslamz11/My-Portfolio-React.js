import {
  Code,
  GitBranchIcon,
  Layers,
  Settings,
  TerminalSquare,
  Server,
  Database,
  Smartphone,
  Bug,
  Users,
  Brain,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  SiDart,
  SiFlutter,
  SiFirebase,
  SiPostman,
  SiGit,
} from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const mySkills = [
  {
    icon: <Smartphone size={36} />,
    title: "Mobile Development",
    text: "Building cross-platform mobile applications with high performance and native-like experience.",
    popups: [
      {
        icon: <SiFlutter size={14} />,
        name: "Flutter",
      },
      {
        icon: <SiDart size={14} />,
        name: "Dart",
      },
      {
        icon: <Code size={14} />,
        name: "BLoC Pattern",
      },
      {
        icon: <Layers size={14} />,
        name: "Riverpod",
      },
      {
        icon: <Settings size={14} />,
        name: "Responsive UI",
      },
    ],
  },
  {
    icon: <Code size={36} />,
    title: "Core & Architecture",
    text: "Writing clean, maintainable, and scalable code using best practices and design patterns.",
    popups: [
      {
        icon: <Code size={14} />,
        name: "OOP",
      },
      {
        icon: <Layers size={14} />,
        name: "SOLID Principles",
      },
      {
        icon: <Settings size={14} />,
        name: "Clean Architecture",
      },
      {
        icon: <Code size={14} />,
        name: "MVC/MVVM",
      },
    ],
  },
  {
    icon: <Database size={36} />,
    title: "Backend & Database",
    text: "Integrating robust backend services and managing real-time data efficiently.",
    popups: [
      {
        icon: <SiFirebase size={14} />,
        name: "Firebase",
      },
      {
        icon: <Database size={14} />,
        name: "Supabase",
      },
      {
        icon: <Server size={14} />,
        name: "RESTful APIs",
      },
    ],
  },
  {
    icon: <GitBranchIcon size={36} />,
    title: "Tools & DevOps",
    text: "Using industry-standard tools for version control, testing, and deployment.",
    popups: [
      {
        icon: <SiGit size={14} />,
        name: "Git",
      },
      {
        icon: <FaGithub size={14} />,
        name: "GitHub",
      },
      {
        icon: <TerminalSquare size={14} />,
        name: "CI/CD",
      },
      {
        icon: <SiPostman size={14} />,
        name: "Postman",
      },
    ],
  },
  {
    icon: <Bug size={36} />,
    title: "Testing & Performance",
    text: "Ensuring application reliability through comprehensive testing and performance optimization.",
    popups: [
      {
        icon: <Bug size={14} />,
        name: "Unit Testing",
      },
      {
        icon: <Settings size={14} />,
        name: "Debugging",
      },
      {
        icon: <TerminalSquare size={14} />,
        name: "Integration Test",
      },
      {
        icon: <Code size={14} />,
        name: "Code Review",
      },
    ],
  },
  {
    icon: <Users size={36} />,
    title: "Soft Skills",
    text: "Effective communication, leadership, and problem-solving abilities within technical teams.",
    popups: [
      {
        icon: <Brain size={14} />,
        name: "Problem Solving",
      },
      {
        icon: <Users size={14} />,
        name: "Communication",
      },
      {
        icon: <Layers size={14} />,
        name: "Mentorship",
      },
      {
        icon: <GitBranchIcon size={14} />,
        name: "Teamwork",
      },
    ],
  },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const zoomItem = {
  hidden: { scale: 0.92, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-[90vh] flex items-center overflow-hidden
      bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14] py-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="mb-6 text-white font-bold text-3xl text-center relative">
            My Skills
            <span className="absolute w-20 h-1 bg-[#6B8E23] -bottom-3 left-1/2 -translate-x-1/2"></span>
          </h3>

          <p className="text-gray-400 leading-6 text-center max-w-lg mx-auto">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mySkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              variants={zoomItem}
              className="p-5 border border-gray-500 rounded-xl hover:border-[#6B8E23] transition-colors duration-300
                          will-change-transform transform-gpu"
            >
              <div className="text-[#6B8E23] mb-2">{skill.icon}</div>
              <h4 className="text-white font-bold text-xl text-center mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-400 text-center leading-5 mb-4 text-sm">
                {skill.text}
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                {skill.popups.map((popup, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs
                            bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]
                              flex items-center gap-1 w-fit mx-auto md:mx-0 cursor-pointer"
                  >
                    {popup.icon}
                    {popup.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
