export type TeamMember = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  portfolio?: string;
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Baala Ganesh R",
    title: "CEO",
    specialty: "React, Node.js & Modern Web Development",
    bio: "Co-founder leading technical innovation and creating modern web applications with cutting-edge technologies",
    portfolio: "https://baalaganeshr.github.io/new-portfolio/",
  },
  {
    id: 2,
    name: "Madhan Kumar B",
    title: "Founder",
    specialty: "Full-stack Development & Product Strategy",
    bio: "Co-founder driving product vision and building scalable software solutions for complex challenges",
    portfolio: "https://madhan-kumar-b.github.io/portfoliomk.comgit/",
  },
  {
    id: 3,
    name: "Harikrishnan A",
    title: "CPO",
    specialty: "Full-stack development & System Architecture",
    bio: "Building scalable software solutions and architecting robust systems for complex web applications",
    portfolio: "https://baalaganeshr.github.io/Harikrishnan-A/",
  },
  {
    id: 4,
    name: "Aathan J",
    title: "Co-Founder",
    specialty: "Modern Frontend & Interactive Experiences",
    bio: "Specializing in innovative frontend technologies and crafting engaging interactive digital experiences",
    portfolio: "https://aathanj.github.io/AathanJ.github/",
  },
];

export default team;
