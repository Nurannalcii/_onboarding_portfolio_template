export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Webeet Internship – Data Analytics",
    description:
      "Worked as a Data Analyst intern on real-world data analytics workflows. Analyzed and transformed datasets using SQL, built aggregated metrics and performance indicators, and supported Airflow-based data pipelines. Documented analytical assumptions and data limitations, and collaborated closely with the data team through reviews and feedback loops.",
    tags: [
      "SQL",
      "Python",
      "Data Analysis",
      "Airflow",
      "Data Pipelines",
      "Metrics & KPIs",
      "Business Intelligence"
    ],
    image: "/images/project-placeholder.svg",
    link: "https://www.linkedin.com/in/nurannalci/",
    repo: "https://github.com/NuranNalcii"
  }
];
