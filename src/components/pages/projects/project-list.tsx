import { FaGlobe, FaCode, FaShoppingCart, FaComments } from 'react-icons/fa';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

const projects = [
  {
    Icon: FaGlobe,
    name: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {['HTML', 'CSS', 'JavaScript', 'React'].map((tech, idx) => (
          <div key={idx} className="mx-2 p-2 bg-gray-200 rounded-md">{tech}</div>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: FaCode,
    name: "Task Management App",
    description: "A full-stack application for managing tasks and projects.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <FaCode size={100} />
      </div>
    ),
  },
  {
    Icon: FaShoppingCart,
    name: "E-commerce Platform",
    description: "A fully functional e-commerce website with product management and checkout.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    ),
  },
  {
    Icon: FaComments,
    name: "Real-time Chat Application",
    description: "A chat application with real-time messaging using WebSockets.",
    href: "#",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    ),
  },
];

export const ProjectList = () => {
  return (
    <BentoGrid>
      {projects.map((project, idx) => (
        <BentoCard key={idx} {...project} />
      ))}
    </BentoGrid>
  );
};

export default ProjectList;
