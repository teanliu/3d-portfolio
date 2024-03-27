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
  karat,
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
  metaVerse,
  hBuy
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
    title: "Software Development Engineer",
    company_name: "Karat Labs US Inc",
    icon: karat,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Built a blockchain-based web application using Next.js, Mantain UI, Tailwind CSS, Redux, and Figma.",
      "Achieved impressive performance metrics, including a 96.4ms First Input Delay (FID) and a 0.03 Cumulative Layout Shift (CLS).",
      "Ensuring regular updates through agile development methodologies and monitoring the web app transactions through Sentry.",
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Alpha Camp",
    icon: ac,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "Develop an intuitive to-do list with smooth CRUD operations.",
      "Established secure backend connections and implemented login authorization using JWT tokens.",
      "Engaged in proactive participation during code reviews, offering constructive feedback to aid in the improvement of skills and projects for bootcamp participants at all levels.",
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
    name: "H&Buy E-Commerce",
    description:
      "Developed and deployed a feature-rich e-commerce application with robust data management through Sanity. Enhanced user experience via dynamic shopping cart, sorting, advanced filtering, and full-text search. Implemented secure Stripe Checkout and ensured responsive design for optimal usability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: hBuy,
    source_code_link: "https://github.com/teanliu/ecommerce-next13",
    heroku_demo_link: "https://ecommerce-next13-rouge.vercel.app/",
  },
  {
    name: "JoinMetaVerse",
    description:
      "Designed a high-impact Single-page Application (SPA) for an immersive Metaverse web page. Achieved a 20% user experience enhancement through server-side rendering optimization. Seamlessly integrated 3D front-end components for a captivating user interface.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: metaVerse,
    source_code_link: "https://github.com/teanliu/metaversus_next",
    heroku_demo_link: "https://metaversus-next.vercel.app/",
  },
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
