
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/biplob-g", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/biplob-ghatak/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary/50 py-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">GhatakBits</a>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
