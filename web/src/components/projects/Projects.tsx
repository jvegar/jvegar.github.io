import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import ecommercePreview from "../../assets/ecommerce-preview.jpg";
import weatherAppPreview from "../../assets/weather-app-preview.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: ecommercePreview,
    githubUrl: "https://github.com/yourusername/ecommerce-project",
    liveUrl: "https://your-ecommerce-site.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeatherMap API",
    technologies: ["React Native", "Redux", "API Integration"],
    image: weatherAppPreview,
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  // Add more mock projects as needed
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.projectCard}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
      />
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTechnologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.technologyTag}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveDemoLink}
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
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
