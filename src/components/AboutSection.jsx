import { motion } from "framer-motion";
import { 
  Code, 
  Layout, 
  Database, 
  Globe, 
  Server, 
  PencilRuler,
  Zap,
  FileJson,
  FileCode
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "WordPress", icon: <FileCode className="h-6 w-6 text-primary mb-2" /> },
    { name: "React.js", icon: <Code className="h-6 w-6 text-primary mb-2" /> },
    { name: "Next.js", icon: <Zap className="h-6 w-6 text-primary mb-2" /> },
    { name: "JavaScript", icon: <FileJson className="h-6 w-6 text-primary mb-2" /> },
    { name: "PHP", icon: <Server className="h-6 w-6 text-primary mb-2" /> },
    { name: "jQuery", icon: <PencilRuler className="h-6 w-6 text-primary mb-2" /> },
    { name: "MySQL", icon: <Database className="h-6 w-6 text-primary mb-2" /> },
    { name: "Rest API", icon: <Globe className="h-6 w-6 text-primary mb-2" /> }
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Web Developer based in Gujarat, India
            </h3>
            <p className="mb-4 text-foreground/80 pr-5">
            I’m a WordPress Developer with a knack for crafting pixel-perfect, high-performing websites.
With 4.5 years of hands-on experience, I focus on delivering seamless user experiences and clean design.
From custom themes to dynamic content blocks, I bring ideas to life with precision and creativity.
I’m passionate about building websites that not only look great but also work flawlessly.
            </p>
     
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="neon-border bg-background rounded-lg p-4 text-center shadow-sm card-hover flex flex-col items-center justify-center overflow-hidden"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
