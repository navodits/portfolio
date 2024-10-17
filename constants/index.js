import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import experience from "../assets/experience/experience.jpg";
import slide1 from "../assets/caraousel/slide1.jpg";
import slide2 from "../assets/caraousel/slide2.jpg";
import slide3 from "../assets/caraousel/slide3.jpg";

export const TITLE = ["Full Stack Developer", "Adventurer", "Learner"];

export const SLIDES = [slide1, slide2, slide3];

export const HERO_CONTENT = `I am a full stack developer with a passion of learning and growing in my career and in life. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Java,  MySQL, and MongoDB. My aim is to utilize my skills to develop innovative solutions that drive business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I am a committed and versatile full stack developer passionate about building efficient, user-friendly web applications. With 2 years of professional experience, I ve worked with various technologies, including React, Angular, Next.js, Node.js, MySQL, and MongoDB. My journey in web development started from a deep curiosity about how things work and has grown into a career where I constantly seek to learn and embrace new challenges. Outside of coding, I love outdoor adventures and connecting with people. I always give my all,  whether I’m engaging in a fun activity or in a challenging project at work`;

export const EXPERIENCES = [
  {
    year: "2022 May - 2024 April",
    image: experience,
    role: "Application Developer",
    company: "Wawanesa Insurance",
    description: `Planned, worked, and delivered several projects using Angular, React and Java. Implemented, tested and debugged RESTful APIs and frontend production issues. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Angular", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "Online Shopping Platform - ShopSlayer",
    image: project1,
    description:
      "A fully functional online shopping website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Next.js", "GraphQl", "MongoDB"],
  },
  {
    title: "Food Market Place Mobile App - Hungry Wanderer",
    image: project2,
    description:
      "Food Sharing App created with React Native and Node JS that let you give or take food/ingredients before it goes in the bin and hence reduces food wastage.",
    technologies: ["HTML/CSS", "React Native", "NodeJs", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with some basic animation.",
    technologies: ["HTML", "CSS", "React", "framer-motion"],
  },
  {
    title: "Web App - ThingyLife",
    image: project4,
    description:
      "This is a Web App created with React and Django that let you Journal your daily life, add photoghrapic memories and more.",
    technologies: ["Django", "React", "HTML/CSS", "MongoDB"],
  },
];

export const CONTACT = {
  address: "14176 89b Avenue, Surrey, BC, V3V 7Y7 ",
  phoneNo: "+1 (778) 881 - 4961 ",
  email: "navodit1@gmail.com",
};
