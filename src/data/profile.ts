export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};
export const profile: Profile = {
  name: "Nuran Nalci",
  role: "Data Analyst",
  summary:
    "Data Analyst with hands-on experience in SQL, Python, and analytics workflows. Experienced in building aggregated metrics, supporting data pipelines, and documenting analytical logic. Passionate about turning data into clear, actionable insights and continuously learning in real-world data environments.",
  location: "Germany (Remote)",
  email: "nurannalci26@gmail.com",
  lookingFor: "Junior / Entry-Level Data Analyst roles",
  avatar: "/images/avatar.svg",
  resumeUrl: "https://www.linkedin.com/in/nurannalci/",
  skills: [
    "SQL",
    "Python",
    "Data Analysis",
    "Airflow",
    "Data Pipelines",
    "Metrics & KPIs",
    "Business Intelligence",
    "Data Documentation",
    "Analytics Reporting"
  ],
  links: [
    { label: "GitHub", href: "https://github.com/NuranNalcii" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nurannalci/" },
    { label: "Email", href: "mailto:nurannalci26@gmail.com" }
  ],
};
