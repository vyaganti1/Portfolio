import { Experience, Project, Skill } from './types';

export const PROFILE = {
  name: "Venkatesh Yagati",
  role: "Senior Java Full Stack Engineer",
  tagline: "Building scalable microservices and robust web applications with 5+ years of experience.",
  summary: "I am a dedicated Software Engineer specializing in Java Enterprise development, Microservices architecture, and modern frontend frameworks like React. With a passion for clean code and cloud-native solutions, I bridge the gap between complex backend logic and intuitive user interfaces.",
  email: "venkateshyagati006@gmail.com",
  location: "San Francisco, CA",
  github: "github.com/venkateshyagati",
  linkedin: "linkedin.com/in/venkateshyagati"
};

export const SKILLS: Skill[] = [
  { name: "Java / Spring Boot", level: 95, category: "Backend" },
  { name: "Microservices", level: 90, category: "Backend" },
  { name: "React / TypeScript", level: 85, category: "Frontend" },
  { name: "AWS (EC2, S3, Lambda)", level: 80, category: "DevOps" },
  { name: "PostgreSQL / MySQL", level: 90, category: "Database" },
  { name: "Docker / K8s", level: 85, category: "DevOps" },
  { name: "Kafka / RabbitMQ", level: 75, category: "Backend" },
  { name: "Redis / Caching", level: 80, category: "Database" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Senior Software Engineer",
    company: "JPMorgan Chase & Co.",
    period: "2025 - Present",
    description: [
      "Led the migration of a monolithic legacy system to a microservices architecture using Spring Boot and Docker, reducing deployment time by 40%.",
      "Designed and implemented high-throughput RESTful APIs handling over 1M requests daily.",
      "Mentored junior developers and established code quality standards using SonarQube.",
      "Integrated OpenAI and Gemini APIs for internal automation tools."
    ],
    techStack: ["Java 17", "Spring Boot", "React", "AWS", "PostgreSQL", "Kubernetes"]
  },
  {
    id: "exp2",
    role: "Software Engineer",
    company: "Walmart Global Tech",
    period: "2023 - 2025",
    description: [
      "Developed secure payment processing modules complying with PCI-DSS standards.",
      "Optimized database queries reducing report generation time by 60%.",
      "Collaborated with product managers to define requirements and deliver features in an Agile environment.",
      "Built a real-time dashboard for transaction monitoring using WebSockets and React."
    ],
    techStack: ["Java 11", "Spring Security", "Angular", "Oracle DB", "Jenkins"]
  },
  {
    id: "exp3",
    role: "Junior Java Developer",
    company: "Accenture",
    period: "2020 - 2021",
    description: [
      "Assisted in the development of the core e-commerce platform.",
      "Wrote unit and integration tests achieving 90% code coverage.",
      "Maintained and debugged existing Java web applications (JSP/Servlets)."
    ],
    techStack: ["Java 8", "JSP", "MySQL", "HTML/CSS", "jQuery"]
  }
];

// UPDATED: Images now point to local assets in /public/img/
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Cloud-Native E-Commerce",
    description: "A scalable e-commerce backend built with Spring Cloud microservices. Features include inventory management, order processing with Kafka, and a React admin dashboard.",
    tags: ["Java", "Spring Cloud", "Kafka", "React", "MongoDB"],
    repo: "https://github.com",
    image: "https://i.pinimg.com/originals/02/a9/38/02a9388ee0ce25c75f75474b29d08bef.jpg" 
  },
  {
    id: "p2",
    title: "Real-Time Task Collaborator",
    description: "A Kanban-style project management tool supporting real-time updates via WebSockets. Uses a reactive backend with Spring WebFlux.",
    tags: ["Spring WebFlux", "TypeScript", "Tailwind", "PostgreSQL", "WebSocket"],
    repo: "https://github.com",
    image: "https://image.tmdb.org/t/p/original/enNubozHn9pXi0ycTVYUWfpHZm.jpg"
  },
  {
    id: "p3",
    title: "AI Resume Analyzer",
    description: "A tool that parses PDF resumes and matches them against job descriptions using Generative AI to provide scoring and improvement suggestions.",
    tags: ["Python", "FastAPI", "React", "Gemini API", "Docker"],
    repo: "https://github.com",
    image: "https://image.tmdb.org/t/p/original/rc1iRerRJIw3iStmlsdQIZUp49J.jpg"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Alex Mitchell's portfolio website.
Alex is a Senior Java Full Stack Engineer with 5+ years of experience.
Use the following context to answer visitor questions professionally and concisely.

Context:
- Name: ${PROFILE.name}
- Role: ${PROFILE.role}
- Summary: ${PROFILE.summary}
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Experience:
${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description[0]}`).join('\n')}
- Projects:
${PROJECTS.map(p => `${p.title}: ${p.description}`).join('\n')}

Instructions:
- Be polite, professional, and helpful.
- If asked about contact info, refer to ${PROFILE.email}.
- If asked about hiring, encourage them to reach out via the contact form or email.
- Keep answers relatively short (under 3 sentences if possible) unless detailed technical explanation is needed.
- Emphasize his expertise in Java, Spring Boot, and Microservices.
`;