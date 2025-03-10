import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useData } from "../../context/useData";
import { GitHubRepoItem } from "../../types";
import Markdown from 'react-markdown';

const DEFAULT_README = '# Hello, *World*!';

function ProjectCard({ project }: { project: GitHubRepoItem }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.projectCard}>
      <Markdown>{DEFAULT_README}</Markdown>
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTechnologies}>
          {project.topics.map((topic, index) => (
            <span key={index} className={styles.technologyTag}>
              {topic}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a
            href={project.htmlUrl}
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
  const { data, isLoading, error } = useData();
  const { githubRepos: githubReposData } = data || {};

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{`Failed to fetch services data: ${error.message}`}</p>;
  }

  return (
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {githubReposData?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
