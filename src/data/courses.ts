export type Course = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  highlights: string[];
  stack: string[];
  price: string;
};

const courses: Course[] = [
  {
    id: 1,
    slug: "python-essentials",
    title: "Python Essentials",
    tagline: "Automation, data, and AI foundations",
    description:
      "Master Python fundamentals, automation workflows, and data tooling with projects built for real product teams.",
    level: "Beginner",
    duration: "6 weeks",
    highlights: [
      "Modern Python 3.12 features",
      "Automation projects with FastAPI",
      "Data wrangling with Pandas and Polars",
    ],
    stack: ["Python", "FastAPI", "Pandas"],
    price: "$9 USD/mo",
  },
  {
    id: 2,
    slug: "fullstack-javascript",
    title: "Full-Stack JavaScript",
    tagline: "From interactive UIs to scalable APIs",
    description:
      "Ship production-ready applications using React, Node.js, and modern tooling with guided sprints and code reviews.",
    level: "Intermediate",
    duration: "8 weeks",
    highlights: [
      "State management with modern React",
      "API design with Node.js & tRPC",
      "Testing pipelines and CI/CD",
    ],
    stack: ["React", "Node.js", "tRPC", "Vitest"],
    price: "9/mo",
  },
  {
    id: 3,
    slug: "react-pro-lab",
    title: "React Pro Lab",
    tagline: "Animation, performance, and DX",
    description:
      "A build-in-public React lab covering design systems, Framer Motion, performance budgets, and advanced patterns.",
    level: "Advanced",
    duration: "5 weeks",
    highlights: [
      "Design system architecture",
      "Motion-first interfaces",
      "Progressive enhancement techniques",
    ],
    stack: ["React", "Next.js", "Framer Motion"],
    price: "9/mo",
  },
  {
    id: 4,
    slug: "node-ai-engineer",
    title: "Node.js AI Engineer",
    tagline: "Ship chatbots and AI backends",
    description:
      "Blend Node.js, vector databases, and LLM orchestration to build conversational products and AI tooling.",
    level: "Advanced",
    duration: "7 weeks",
    highlights: [
      "LLM prompt design and evaluation",
      "Streaming chat experiences",
      "Vector database search",
    ],
    stack: ["Node.js", "LangChain", "Pinecone", "OpenAI"],
    price: "9/mo",
  },
  {
    id: 5,
    slug: "internship-studio",
    title: "STACKO Internship Studio",
    tagline: "Career acceleration for emerging engineers",
    description:
      "Pair with mentors, work on real client deliverables, and build a portfolio that gets callbacks.",
    level: "Intermediate",
    duration: "12 weeks",
    highlights: [
      "1:1 mentorship from STACKO founders",
      "Client-grade project rotations",
      "Career storytelling & interview prep",
    ],
    stack: ["Product Strategy", "Git", "Agile"],
    price: "9/mo",
  },
];

export default courses;
