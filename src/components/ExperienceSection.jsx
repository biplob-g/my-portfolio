import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Pixelmattic",
      period: "Jan 2023 - Present",
      logo: 'pixelmattic', // Changed to a string identifier for the logo
      description: [
        "Acquired complete ownership of entire website developments, designing frontend look and backend functionality.",
        "Led a multilingual WordPress project while directing a team of 3 developers, ensuring consistency and high quality.",
        "Maintained focus on maximizing performance to produce fast, responsive websites with silky-smooth user interactions.",
        "Designed bespoke features and user-centric layouts to client requirements and objectives.",
        "Made certain that all websites were simple enough for clients to handle independently — no coding involved."
      ]
    },
    {
      title: "Front-End Developer",
      company: "Freelancer",
      period: "Dec 2020 - Jan 2023",
      logo: "meta",
      description: [
        "Handled both frontend and backend WordPress development to deliver complete, functional websites.",
        "Teamed up with other developers to revamp legacy websites, enhancing structure, user experience, and design.",
        "Created responsive e-commerce platforms with smooth API integrations for payments, inventory, and more.",
        "Converted static PSD and Figma designs into dynamic, mobile-friendly landing pages.",
        "Built tailored Elementor widgets that aligned with client-specific business goals and functionality needs."
      ]
    }
  ];

  return (
    <section id="experience" className="section py-20 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed bg-center">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Work Experience.</h2>
          <div className="h-1 w-20 bg-[#FF5B36] mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 uppercase tracking-wider text-sm font-medium">WHAT I HAVE DONE SO FAR</p>
        </motion.div>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: 'rgba(26, 31, 44, 0.9)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                borderRadius: '12px',
                border: `1px solid ${getBorderColor(experience.logo)}`
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(26, 31, 44, 0.9)' }}
              date={experience.period}
              iconStyle={{ 
                background: getLogoBackground(experience.logo), 
                color: '#fff',
                boxShadow: `0 0 0 4px #fff, inset 0 0 0 1px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.3)`
              }}
              icon={<div className="flex items-center justify-center h-full w-full text-xl font-bold">{getLogoContent(experience.logo)}</div>}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-1 text-white/70 flex items-center">
                <Briefcase size={16} className="text-[#FF5B36] mr-1" />
                {experience.company}
              </h4>
              <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

// Helper function to get the background color for the logo
function getLogoBackground(logo) {
  switch (logo) {
    case 'pixelmattic': // Added case for Pixelmattic
      return '#FF5B36'; // Use the same color as the logo
    case 'starbucks':
      return '#006241';
    default:
      return '#FF5B36';
  }
}

// Helper function to get logo border color
function getBorderColor(logo) {
  switch (logo) {
    case 'pixelmattic': // Added case for Pixelmattic
      return '#FF5B36'; // Use the same color as the logo
    case 'starbucks':
      return '#1877f2';
    default:
      return '#FF5B36';
  }
}

// Helper function to get the logo content
function getLogoContent(logo) {
  switch (logo) {
    case 'pixelmattic': // Added case for Pixelmattic
      return <img src="https://www.pixelmattic.com/wp-content/uploads/2019/04/cropped-Pixelmattic-fav-icon_rounded-180x180.png" alt="Pixelmattic Logo" className="h-8 w-8" />; // Return the logo image
    case 'starbucks':
      return '☕';
    default:
      return '';
  }
}

export default ExperienceSection;
