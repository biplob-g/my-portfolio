import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const websiteProjects = [
    {
      title: "Exotel",
      description: "Exotel is a cloud-based communication platform that helps businesses manage customer calls, messages, and WhatsApp interactions using APIs and AI-powered tools. It enables seamless, secure, and scalable customer engagement across multiple channels.",
      image: "/public/exotel.png",
      tags: ["PHP", "Custom Blocks", "jQuery", "CF7"],
      liveLink: "https://exotel.com/"
    },
    {
      title: "Saasboomi",
      description: "SaaSBoomi is India's largest volunteer-driven community of over 6,000 SaaS founders, fostering collaboration and knowledge-sharing to help startups scale globally. It offers events, mentorship programs, and resources to support the growth of B2B SaaS companies in India.​",
      image: "/public/saasboomi.png",
      tags: ["PHP", "ACF", "Custom Blocks", "jQuery"],
      liveLink: "https://saasboomi.org/",
    },
    {
      title: "Travelbound",
      description: "Travelbound is a UK-based educational travel company specializing in tailor-made trips for schools, colleges, and music groups. With over 30 years of experience, they offer curriculum-aligned tours worldwide, including exclusive stays at their Château du Molay in Normandy. ​",
      image: "/public/travelbound.png",
      tags: ["Elementor", "Custom Post Type", "Customizer API", "ACF"],
      liveLink: "https://travelbound.co.uk/",
    },
    {
      title: "The LightBulb ",
      description: "​TheLightbulb.AI is a full-stack Emotion AI platform that leverages facial coding, eye-tracking, and voice analysis to deliver real-time emotion and engagement insights for digital interactions. Its tools are used in market research, sales enablement, and online learning to uncover unstated user responses and enhance decision-making. ​​",
      image: "/public/The-Lightbulb.png",
      tags: ["Wp Bakery", "CPT", "Wp-rocket", "ACF"],
      liveLink: "https://thelightbulb.ai/",
    },
    {
      title: "Zell Education",
      description: "Zell Education is an Indian edtech platform offering globally recognized finance and accounting courses such as ACCA, CFA, CMA, CPA, FRM, and ESG. With interactive online classes and placement support, it aims to make professional upskilling accessible and career-focused for students and working professionals.​",
      image: "/public/zell-education.png",
      tags: ["Divi", "ACF", "CPT", "Wp-rocket",],
      liveLink: "https://zelleducation.com/",
    },
  ];

  const pluginProjects = [
    {
      title: "WordPress SEO Plugin",
      description: "An SEO optimization plugin for WordPress with analytics dashboard and content suggestions.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e",
      tags: ["PHP", "WordPress", "JavaScript", "REST API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "VS Code Theme Extension",
      description: "A custom dark theme for VS Code with color highlighting optimized for long coding sessions.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      tags: ["VS Code API", "JSON", "Design"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Browser Tab Manager",
      description: "A Chrome extension for organizing and managing multiple browser tabs efficiently.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      tags: ["JavaScript", "Chrome API", "HTML/CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Form Builder Plugin",
      description: "A drag-and-drop form builder plugin for WordPress with multiple field types.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6",
      tags: ["PHP", "jQuery", "WordPress"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Code Snippet Manager",
      description: "A VS Code extension for managing and organizing code snippets with categories.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      tags: ["TypeScript", "VS Code API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Image Optimizer",
      description: "A browser extension that automatically optimizes images on websites for faster loading.",
      image: "https://images.unsplash.com/photo-1618777885301-1eef1cb4a8ec",
      tags: ["JavaScript", "Browser API", "Image Processing"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const sideProjects = [
    {
      title: "Weather Dashboard",
      description: "A weather application showing forecasts with interactive maps and location-based data.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Markdown Editor",
      description: "A simple markdown editor with live preview and markdown formatting tools.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2",
      tags: ["JavaScript", "Marked.js", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderProjects = (projects, showLiveDemo = true, showSourceCode = true) => (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group"
        >
          <Card className="overflow-hidden h-full border-none bg-card/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-[#FF5F1F]/90 text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white group-hover:text-[#FF5F1F] transition-colors">{project.title}</h3>
              <p className="text-foreground/70 mb-6">{project.description}</p>
              <div className="flex space-x-6">
                {showLiveDemo && (
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-foreground dark:text-white hover:text-[#FF5F1F] dark:hover:text-[#FF5F1F] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span className="ml-2">Live Demo</span>
                  </a>
                )}
                {showSourceCode && (
                  <a 
                    href={project.githubLink} 
                    className="flex items-center text-foreground dark:text-white hover:text-[#FF5F1F] dark:hover:text-[#FF5F1F] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span className="ml-2">Source Code</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="projects" className="section py-24 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm dark:bg-background/80"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">Projects</h2>
          <div className="h-1 w-20 bg-[#FF5F1F] mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">Check out some of my latest projects and work. Each project is carefully crafted with attention to detail and focus on user experience.</p>
        </motion.div>

        <Tabs defaultValue="websites" className="w-full">
          <div className="flex justify-start mb-12">
            <TabsList className="p-1 rounded-xl border-2 border-primary/20 bg-card/60 backdrop-blur-md">
              <TabsTrigger 
                value="websites" 
                className="px-6 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Themes
              </TabsTrigger>
              <TabsTrigger 
                value="plugins" 
                className="px-6 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Plugins
              </TabsTrigger>
              <TabsTrigger 
                value="sideProjects" 
                className="px-6 py-2.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Side Projects
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="websites" className="mt-0">
            {renderProjects(websiteProjects, true, false)}
          </TabsContent>
          
          <TabsContent value="plugins" className="mt-0">
            {renderProjects(pluginProjects, false, true)}
          </TabsContent>
          
          <TabsContent value="sideProjects" className="mt-0">
            {renderProjects(sideProjects, true, true)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
