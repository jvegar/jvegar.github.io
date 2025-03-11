import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useData } from "../../context/useData";
import { GitHubRepoItem } from "../../types";
import Markdown from 'react-markdown';
import { useState, useEffect } from 'react';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const DEFAULT_README = '# Hello, *World*!';

const checkRateLimit = (response: Response) => {
  const remaining = response.headers.get('x-ratelimit-remaining');
  const reset = response.headers.get('x-ratelimit-reset');
  
  if (remaining && parseInt(remaining) < 10) {
    const resetDate = reset ? new Date(parseInt(reset) * 1000) : new Date();
    console.warn(`GitHub API rate limit low: ${remaining} requests remaining. Resets at ${resetDate.toLocaleString()}`);
  }
};

const getDefaultBranch = async (owner: string, repo: string): Promise<string> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    checkRateLimit(response);
    
    if (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') {
      throw new Error('GitHub API rate limit exceeded');
    }
    
    if (!response.ok) {
      throw new Error(`Repository not found: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.default_branch;
  } catch (error) {
    console.warn(`Failed to fetch repository info for ${repo}:`, error);
    return 'main'; // Fallback to 'main' if we can't get the default branch
  }
};

const fetchReadme = async (owner: string, repo: string): Promise<string> => {
  try {
    const defaultBranch = await getDefaultBranch(owner, repo);
    const response = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/README.md`);
    if (!response.ok) {
      throw new Error('README not found');
    }
    return await response.text();
  } catch (error) {
    console.warn(`Failed to fetch README for ${repo}:`, error);
    return DEFAULT_README;
  }
};

function ProjectCard({ project }: { project: GitHubRepoItem }) {
  const [readme, setReadme] = useState<string>(DEFAULT_README);

  useEffect(() => {
    const loadReadme = async () => {
      const [owner, repo] = project.htmlUrl.replace('https://github.com/', '').split('/');
      const readmeContent = await fetchReadme(owner, repo);
      setReadme(readmeContent);
    };
    loadReadme();
  }, [project.htmlUrl]);

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.projectCard}>
      <div className={styles.readmeContent}>
        <Markdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >{readme}</Markdown>
      </div>
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
