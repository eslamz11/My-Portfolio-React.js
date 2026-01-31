import { Code, Database, Globe, Layers, Layout, Server, Settings, Smartphone, Terminal, Wrench } from "lucide-react";
import { SiFlutter, SiDart, SiFirebase, SiGit, SiPostman, SiFigma, SiSupabase, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Mobile & Frontend",
    icon: <Smartphone className="text-cyan-400" size={32} />,
    items: [
      { name: "Flutter", icon: <SiFlutter className="text-cyan-400" size={20} /> },
      { name: "Dart", icon: <SiDart className="text-blue-500" size={20} /> },
      { name: "React", icon: <SiReact className="text-blue-400" size={20} /> },
      { name: "Responsive UI", icon: <Layout className="text-purple-400" size={20} /> },
    ],
  },
  {
    category: "Backend & Services",
    icon: <Server className="text-emerald-400" size={32} />,
    items: [
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={20} /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-500" size={20} /> },
      { name: "REST APIs", icon: <Globe className="text-blue-500" size={20} /> },
      { name: "Cloud Functions", icon: <Settings className="text-gray-400" size={20} /> },
    ],
  },
  {
    category: "Architecture & State",
    icon: <Layers className="text-amber-400" size={32} />,
    items: [
      { name: "BLoC", icon: <Code className="text-blue-500" size={20} /> },
      { name: "Riverpod", icon: <Layers className="text-indigo-400" size={20} /> },
      { name: "Clean Arch", icon: <Wrench className="text-gray-400" size={20} /> },
      { name: "MVVM", icon: <Layout className="text-teal-400" size={20} /> },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="text-gray-400" size={32} />,
    items: [
      { name: "Git & GitHub", icon: <SiGit className="text-orange-500" size={20} /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" size={20} /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" size={20} /> },
      { name: "CI/CD", icon: <Settings className="text-gray-300" size={20} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building robust and scalable mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-6">{skill.category}</h3>

              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className="p-1.5 bg-white/5 rounded-lg">{item.icon}</span>
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
