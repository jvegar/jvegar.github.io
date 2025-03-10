import {
  EducationItem,
  ExperienceItem,
  GitHubRepoItem,
  PersonalInfoItem,
  ServiceItem,
  SkillItem,
} from ".";
import { TechStackItem } from "./tech-stack";

export interface DataContextType {
  data:
    | {
        personalInfo: PersonalInfoItem;
        techStack: TechStackItem[];
        education: EducationItem[];
        experience: ExperienceItem[];
        skills: SkillItem[];
        services: ServiceItem[];
        githubRepos: GitHubRepoItem[];
      }
    | undefined;
  error: Error | null;
  isLoading: boolean;
}
