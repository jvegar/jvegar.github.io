import React, { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  DataContextType,
  EducationItem,
  ExperienceItem,
  PersonalInfoItem,
  ServiceItem,
  SkillItem,
  GitHubRepoItem
} from "../types";
import { TechStackItem } from "../types/tech-stack";
import { getCachedData, setCachedData } from "../utils/cache";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const fetchAllData = async () => {
    const cachedData = getCachedData();
    if (cachedData) {
      return cachedData;
    }

    const [personalInfo, techStack, education, experience, skills, services, githubRepos]: [
      PersonalInfoItem,
      TechStackItem[],
      EducationItem[],
      ExperienceItem[],
      SkillItem[],
      ServiceItem[],
      GitHubRepoItem[],
    ] = await Promise.all([
      fetch(
        `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/personal-info/1`
      ).then((res) => res.json()),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/tech-stack`).then(
        (res) => res.json()
      ),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/education`).then(
        (res) => res.json()
      ),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/experience`).then(
        (res) => res.json()
      ),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/skills`).then(
        (res) => res.json()
      ),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/services`).then(
        (res) => res.json()
      ),
      fetch(`${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/github-repos`).then(
        (res) => res.json()
      ),
    ]);

    const allData = {
      personalInfo,
      techStack,
      education,
      experience,
      skills,
      services,
      githubRepos
    };
    setCachedData(allData);
    return allData;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["allData"],
    queryFn: fetchAllData,
  });

  return (
    <DataContext.Provider value={{ data, error, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
