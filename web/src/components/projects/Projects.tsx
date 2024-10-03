import { motion } from "framer-motion";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "https://example.com/ecommerce-preview.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-project",
    liveUrl: "https://your-ecommerce-site.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeatherMap API",
    technologies: ["React Native", "Redux", "API Integration"],
    imageUrl: "https://example.com/weather-app-preview.jpg",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  // Add more mock projects as needed
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
