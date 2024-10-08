import { Profile } from "@/shared/types";
import { getYearsFromDate } from "@/shared/utils";

const firstJobStartDate = new Date("2019-02-01");

const yearsOfExperience = getYearsFromDate(firstJobStartDate);

const title = "Backend Software Engineer";

const location = "Spain";

export const profile: Profile = {
  name: "Albert Hernández",
  title,
  yearsOfExperience,
  location,
  email: "alberthernandezdev@gmail.com",
  socialPlatformLinks: [
    {
      name: "GitHub",
      url: "https://github.com/AlbertHernandez",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/albert-hernandez-dev",
    },
    {
      name: "X",
      url: "https://x.com/AlbertHernandev",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AlbertHernandez",
    },
  ],
  image: "/albert.webp",
  description: `I'm a passionate <highlight>${title}</highlight> based in ${location}, with over ${yearsOfExperience} years of experience in building scalable and efficient systems. I also <highlight>create content about web programming</highlight> on YouTube. Let's connect!`,
  about: {
    introduction: `More than ${yearsOfExperience} years of experience as a ${title}. Working with product teams focused on the end customer as well as platform teams.`,
    highlights: [
      {
        icon: "Code",
        title: "Backend Developer",
        description:
          "Software Engineer with expertise in backend services, driving efficiency and scalability in complex systems to support millions of users.",
      },
      {
        icon: "Users",
        title: "Cross-functional Collaborator",
        description:
          "With experience in frontend, backend, and SRE teams, I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
      },
      {
        icon: "Lightbulb",
        title: "Value-Driven Solutions",
        description:
          "I am passionate about working in product and platform teams, creating digital solutions that deliver value and impact end users.",
      },
      {
        icon: "YouTube",
        title: "Content Creator",
        description:
          "In my free time, I create programming videos on YouTube, where I combine my passion for teaching with programming.",
      },
    ],
  },
  workExperiences: [
    {
      company: {
        name: "Edpuzzle",
        logo: "/edpuzzle.webp",
        website: "https://edpuzzle.com",
      },
      jobTitle: "Senior Software Engineer",
      duration: {
        start: new Date("2024-05-01"),
      },
      responsibilities: [
        "Developed an education platform used by millions of teachers and students worldwide, incorporating high-performance systems that handle over <highlight>300 million requests per day</highlight>.",
        "Improved code quality and reliability by applying testing strategies and design patterns such as CQRS, <highlight>Event-Driven Architecture</highlight>, and Feature Flags. Utilized Hexagonal Architecture and <highlight>Domain-Driven Design (DDD)</highlight>.",
        "Created search and recommendation systems enabling teachers to discover new materials for their students according to their profiles and preferences.",
      ],
    },
    {
      company: {
        name: "CoverWallet, an Aon company",
        logo: "/coverwallet.webp",
        website: "https://www.coverwallet.com",
      },
      jobTitle: "Senior Software Engineer",
      duration: {
        start: new Date("2019-02-01"),
        end: new Date("2024-05-01"),
      },
      responsibilities: [
        "Improved code reusability and consistency by creating internal libraries, making them independent of any specific framework, so that all <highlight>microservices</highlight> in the platform could utilize them.",
        "Enhanced customer-agent alignment in a scalable, <highlight>multi-tenant platform</highlight> by developing matching systems to allocate the most suitable agent based on customer profiles.",
        "Created <highlight>real-time communication</highlight> by designing and implementing bridges between cloud systems like <highlight>Google Cloud Platform</highlight> and Salesforce, enabling event-based integration between both solutions.",
        "Improved software quality and reliability by integrating Feature Flag systems, Observability, Cloud Native Development, and Trunk-based development practices, enabling teams to deliver software more effectively.",
      ],
    },
  ],
  educationExperiences: [
    {
      institution: {
        name: "Universitat Politècnica de València (UPV)",
        logo: "/upv.webp",
        website: "https://www.upv.es",
      },
      degree: "Bachelor's Degree in Computer Science",
      duration: {
        start: firstJobStartDate,
        end: new Date("2019-06-30"),
      },
    },
  ],
} as const;
