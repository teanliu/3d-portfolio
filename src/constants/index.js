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
    title: "Experience",
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

const experiences = [
  {
    title: "Terahertz Research Intern",
    company_name: "UNITS Lab",
    icon: NTNU,
    iconBg: "#E6DEDD",
    date: "January 2020 - February 2021",
    points: [
      "Developed transmission and reflection models in Matlab, accurately predicting electrical conductivity of HEAs' thin film with under 5% error.",
      "Collaborated with system engineers and labs, crafting high-precision sensing systems.",
      "Utilized Terahertz Time-Domain Spectroscopy for non-contact measurement of HEAs properties.",
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Alpha Camp",
    icon: ac,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "Creating and sustaining web apps with HTML, CSS, Javascript, and related technologies.",
      "Collaborating with bootcamp peers to design user-friendly projects.",
      "Engaging in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Master of Science, Electrical and Computer Engineering",
    company_name: "University of California, Los Angeles",
    icon: ucla,
    iconBg: "#E6DEDD",
    date: "September 2021 - June 2023",
    points: [
      "Expanding domain expertise via machine learning, human-computer interaction, and embedded system projects.",
      "Engaging with peers from diverse fields such as computer science, business economics, and other disciplines to craft top-tier projects.",
      "Executing agile methodologies and leveraging git for streamlined version control.",
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
      "User-centric web-based todolist enabling seamless creation, management, and deletion of tasks. Delivering an intuitive interface for enhanced user efficiency and convenience.",
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
    name: "Online Pl",
    description:
      "Interactive web platform empowering students to explore and enroll in diverse online courses, while instructors effortlessly create and publish their own classes.",
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
      "An extensive restaurant search platform offering users diverse search methods, expediting the search process through various approaches.",
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
