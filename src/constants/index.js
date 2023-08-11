import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  NTNU,
  ac,
  ucla,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  todolist,
  onlinePl,
  foodie,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
// "#383E56"
const experiences = [
  {
    title: "Terahertz Research Intern",
    company_name: "UNITS Lab",
    icon: NTNU,
    iconBg: "#E6DEDD",
    date: "January 2020 - February 2021",
    points: [
      "Built transmission and reflection models through numerical modeling on Matlab and predicted the electrical conductivity of High-entropy alloys (HEAs) thin film with an error rate within 5%.",
      "Collaborating with cross-functional teams including system engineers and other labs to create high-accuracy sensing systems.",
      "Employed non-contact Terahertz time-domain spectroscopy (THz-TDS) to measure HEAs",
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Alpha Camp",
    icon: ac,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Javascript and other related technologies.",
      "Collaborating with peers from bootcamp to create user-friendly projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Master of Science, Electrical and Computer Engineering",
    company_name: "University of California, Los Angeles",
    icon: ucla,
    iconBg: "#E6DEDD",
    date: "September 2021 - June 2023",
    points: [
      "Enrich my domain knowledge through machine learning, human computer interation, and embedded system projects",
      "Collaborating with peers from different fields, including computer science, bisness economic, and other majors to create high-quality products.",
      "implementing Agile methodolog and using git for version controls",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ur Todolist",
    description:
      "Web-based todolist that allows users to create, read, update, delete todos. Providing a convenient and efficient interface for users' needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/teanliu/todo-list",
    heroku_demo_link: "https://todo-list-reactapplication.herokuapp.com/login",
  },
  {
    name: "online Pl",
    description:
      "Web application that enables users to search for online courses. students can view and enroll in courses while teacher can create and post online courses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: onlinePl,
    source_code_link: "https://github.com/teanliu/mern-project",
    heroku_demo_link: "https://mern-project-alpha.herokuapp.com/",
  },
  {
    name: "Foodie's Paradise",
    description:
      "A comprehensive restaurants searching platform that allows users to search restaurants, and offers many different searching approachs to accelerate uses' searching process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vanillajs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/teanliu/restaurant_list",
    heroku_demo_link: "https://restaurant-list-express.herokuapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
