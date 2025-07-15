import { Project1, Project2, Project3, Project4 } from "../assets/index.js";

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Resume",
    href: "resume",
  },
  {
    label: "Play",
    href: "play",
  },
];

export const projectLists = [
  {
    id: 2,
    projectImage: Project4,
    name: "Cineverse",
    label: "Cineverse",
    projectLink: "https://filmpire-teal.vercel.app/",
  },
  {
    id: 3,
    projectImage: Project3,
    name: "Anonymous Message",
    label: "Anonymous Message",
    projectLink: "https://anonymous-message-khaki.vercel.app/",
  },
  {
    id: 1,
    projectImage: Project1,
    name: "CaseCobra",
    label: "CaseCobra",
    projectLink: "https://casecobra-rouge-delta.vercel.app",
  },
  {
    id: 4,
    projectImage: Project2,
    name: "Reel Pro",
    label: "Reel Pro",
    projectLink: "https://github.com/Gaurav-461/reelpro",
  },
];

export const mediaUrls = [
  {
    label: "GitHub",
    href: "https://github.com/Gaurav-461",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/gaurav-maurya-b85704318/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gaurav_maurya461/",
  },
];

export const resumeInfo = {
  name: "Gaurav",
  email: "mauryagaurav1612@gmail.com",
  phone: "+91 7973781018",
  mediaUrls: [
    {
      label: "GitHub",
      href: "https://github.com/Gaurav-461",
      download: false,
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/gaurav-maurya-b85704318/",
      download: false,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/gaurav_maurya461/",
      download: false,
    },
    {
      label: "Download Resume",
      href: "/Gaurav_MERN_Stack_Developer_Resume.pdf",
      download: true,
    }
  ],
  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
      "GSAP"
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL", "JWT"],
    tools: ["Git", "VS Code", "Postman"],
  },
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Govt. Post Graduate College, Sector 1, Panchkula",
      year: "2021–2024",
    },
    {
      qualification: "12th (CBSE)",
      institution: "Govt. Model Sr. Sec. School, Sector-23, Chandigarh",
      year: "2021",
    },
  ],
  projects: [
    {
      name: "Cineverse App",
      techStack: [
        "React",
        "Redux Toolkit",
        "RTK Query",
        "Material-UI",
        "Vite",
        "React Router",
        "Axios",
        "TMDB API",
      ],
      description: [
        "Movie discovery web app using TMDB API.",
        "Implemented search, filtering, and detailed movie/actor info.",
        "Built responsive UI with Material-UI.",
        "Used Redux Toolkit and RTK Query for efficient state management and API handling.",
      ],
      liveLink: "https://filmpire-teal.vercel.app/",
      repoLink: "https://github.com/Gaurav-461/filmpire",
    },
    {
      name: "Anonymous Message App",
      techStack: [
        "Next.js",
        "Next-Auth",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Resend",
        "Shadcn UI",
        "React-Hook-Form",
        "Zod",
      ],
      description: [
        "Anonymous messaging platform with secure auth and email verification.",
        "Username validation and real-time feedback support.",
        "Responsive dashboard with theme support.",
        "MongoDB for storage, Resend for transactional email.",
      ],
      liveLink: "https://anonymous-message-khaki.vercel.app/",
      repoLink: "https://github.com/Gaurav-461/anonymous-feedback",
    },
    {
      name: "AI Ticket Assistant",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Inngest",
        "AI-Agent-Kit",
        "Gemini APIs",
      ],
      description: [
        "Full-stack AI-powered ticketing system for support automation.",
        "Secure authentication and ticket management via Node.js and Express.",
        "Responsive frontend with user/admin dashboards in React.",
        "AI-driven ticket categorization and response suggestions using AI-Agent-Kit.",
        "Event-driven workflows via Inngest for notifications and background jobs.",
      ],
      liveLink: "https://ai-ticket-frontend.onrender.com/",
      frontendRepo: "https://github.com/Gaurav-461/AI-Ticket-Frontend",
      backendRepo: "https://github.com/Gaurav-461/AI-Ticket-Backend",
    }
  ],
};
