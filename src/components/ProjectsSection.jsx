import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all images
import exotelImg from "../assets/images/exotel.png";
import saasboomiImg from "../assets/images/saasboomi.png";
import travelboundImg from "../assets/images/travelbound.png";
import lightbulbImg from "../assets/images/The-Lightbulb.png"; 
import zellEducationImg from "../assets/images/zell-education.png";
import wpLoginOtpImg from "../assets/images/wp-login-otp.png";
import wooBiddingImg from "../assets/images/woo-bidding.png";
import imgAltTagImg from "../assets/images/img-alt-tag.png";
import aiTitleMetaImg from "../assets/images/AI-title-meta.png";
import notrrImg from "../assets/images/notrr.png";

const ProjectsSection = () => {
  const websiteProjects = [
    {
      title: "Exotel",
      description: "Exotel is a cloud-based communication platform that helps businesses manage customer calls, messages, and WhatsApp interactions using APIs and AI-powered tools. It enables seamless, secure, and scalable customer engagement across multiple channels.",
      image: exotelImg,
      tags: ["PHP", "Custom Blocks", "jQuery", "CF7"],
      liveLink: "https://exotel.com/"
    },
    {
      title: "Saasboomi",
      description: "SaaSBoomi is India's largest volunteer-driven community of over 6,000 SaaS founders, fostering collaboration and knowledge-sharing to help startups scale globally. It offers events, mentorship programs, and resources to support the growth of B2B SaaS companies in India.​",
      image: saasboomiImg,
      tags: ["PHP", "ACF", "Custom Blocks", "jQuery"],
      liveLink: "https://saasboomi.org/",
    },
    {
      title: "Travelbound",
      description: "Travelbound is a UK-based educational travel company specializing in tailor-made trips for schools, colleges, and music groups. With over 30 years of experience, they offer curriculum-aligned tours worldwide, including exclusive stays at their Château du Molay in Normandy. ​",
      image: travelboundImg,
      tags: ["Elementor", "Custom Post Type", "Customizer API", "ACF"],
      liveLink: "https://travelbound.co.uk/",
    },
    {
      title: "The LightBulb ",
      description: "​TheLightbulb.AI is a full-stack Emotion AI platform that leverages facial coding, eye-tracking, and voice analysis to deliver real-time emotion and engagement insights for digital interactions. Its tools are used in market research, sales enablement, and online learning to and enhance decision-making. ​​",
      image: lightbulbImg,
      tags: ["Wp Bakery", "CPT", "Wp-rocket", "ACF"],
      liveLink: "https://thelightbulb.ai/",
    },
    {
      title: "Zell Education",
      description: "Zell Education is an Indian edtech platform offering globally recognized finance and accounting courses such as ACCA, CFA, CMA, CPA, FRM, and ESG. With interactive online classes and placement support, it aims to make professional upskilling accessible and career-focused for students and working professionals.​",
      image: zellEducationImg,
      tags: ["Divi", "ACF", "CPT", "Wp-rocket",],
      liveLink: "https://zelleducation.com/",
    },
  ];

  const pluginProjects = [
    {
      title: "WhatsApp Login OTP",
      description: "A WordPress plugin that allows users to login to their website using their WhatsApp number and a one-time password (OTP). It provides a secure and convenient way to authenticate users and enhance user experience.",
      image: wpLoginOtpImg,
      tags: ["PHP", "WhatsAPP Business API", "JavaScript", "REST API"],
      githubLink: "https://github.com/biplob-g/wp-whatsapp-login-otp",
    },
    {
      title: "Woocomerce Bidding Plugin",
      description: "This plugin enhances WooCommerce with a robust car bidding system, providing a seamless experience for both users and administrators in online car auctions.",
      image: wooBiddingImg,
      tags: ["Woocomerce Rest API", "PHP", "Design"],
      githubLink: "https://github.com/biplob-g/Woocomerce-Bidding-plugin",
    },
    {
      title: "AI Image Alt Tag Generator",
      description: "The AI Alt Text Generator is a powerful WordPress plugin that automatically generates high-quality, descriptive alt text for images using OpenAI’s advanced GPT-4 Vision technology. This plugin streamlines the process of making your website’s images more accessible and SEO-friendly.",
      image: imgAltTagImg,
      tags: ["Open AI", "PHP", "jQuery"],
      githubLink: "https://thrivemattic.com/ai-tools/image-alt-text-generator/",
    },
    {
      title: "AI Title and Meta Description",
      description: "AI Title Meta Generator is a tool that automates SEO title and meta description generation using AI. It ensures every page on your site is optimized for search engines and user engagement—without manual effort.",
      image: aiTitleMetaImg,
      tags: ["Open AI", "PHP", "jQuery"],
      githubLink: "https://thrivemattic.com/ai-tools/ai-title-and-meta-description-generator/",
    },
    
  ];

  const sideProjects = [
    {
      title: "AI Note Taking Chrome Extension",
      description: "Notrr is a powerful Chrome extension that leverages Google's Gemini AI to help users create intelligent summaries and notes from web content.",
      image: notrrImg,
      tags: ["Typescript", "Gemini API", "React JS", "Radix UI"],
      // liveLink: "#",
      githubLink: "https://github.com/biplob-g/Notrr-browser-extension",
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
            {renderProjects(sideProjects, false, true)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
