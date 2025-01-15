export interface EducationItem {
  date: string;
  title: string;
  subtitle: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  lastWeek?: number;
  lastMonth?: number;
}

export const educationData: EducationItem[] = [
  {
    date: "2003-2009",
    title: "Bachelor in Systems Engineering",
    subtitle: "National University of Engineering",
  },
  {
    date: "2014-2016",
    title: "Master in Finance",
    subtitle: "Pacific Business School",
  },
  {
    date: "2010-2011",
    title: "Diploma in Project Management",
    subtitle: "Dharma Consulting",
  },
  {
    date: "2012-2013",
    title: "Investment Analysis",
    subtitle: "Bursen Bolsa de Valores de Lima",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    date: "2021-Today",
    title: "Software Engineer",
    company: "BairesDev",
  },
  {
    date: "2020-2021",
    title: "Technical Lead",
    company: "NTT Data",
  },
  {
    date: "2017-2020",
    title: "Solutions Architect",
    company: "Certero",
  },
  {
    date: "2014-2016",
    title: "Software Developer",
    company: "Evol",
  },
  {
    date: "2011-2013",
    title: "Programmer",
    company: "CGI",
  },
  {
    date: "2011-2011",
    title: "System Analyst",
    company: "Pesquera Diamante",
  },
];

export const skillsData: SkillItem[] = [
  { name: "Node", percentage: 90, lastWeek: 28, lastMonth: 60 },
  { name: "TypeScript", percentage: 80, lastWeek: 28, lastMonth: 60 },
  { name: "Postgres", percentage: 75, lastWeek: 28, lastMonth: 60 },
];

export const additionalSkills: SkillItem[] = [
  { name: "React", percentage: 90 },
  { name: "Docker", percentage: 85 },
  { name: "GraphQL", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "Python", percentage: 70 },
  { name: "Java", percentage: 80 },
];
