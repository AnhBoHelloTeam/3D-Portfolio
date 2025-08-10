import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  nextjs,
  cogent,
  adacell,
  fillip,
  innovovision,
  paypines,
  self,
  threads,
  healthcare,
  portfolio,
  aditya,
  santosh,
  school,
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
    id: "technology",
    title: "Technology",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Fronted Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Automation & Workflow Assistant (N8N)",
    company_name: "COWI Autobiz",
    icon: self,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Assisted in creating automation workflows using n8n to support business operations.",
      "Helped integrate different systems to reduce manual tasks and improve data flow.",
      "Worked with team members to identify possible automation solutions.",
      "Learned to monitor and maintain automation processes for stability.",
    ],
  },
  {
    title: "Freelance Web/Mobile Developer",
    company_name: "Independent Contractor",
    icon: innovovision,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
       "Worked on small - medium projects for international clients, focusing on responsive design and functionality.",
      "Used React, Node.js, MongoDB, and Flutter to create applications based on client needs.",
      "Communicated with clients to understand requirements and provide updates.",
      "Practiced deploying applications to cloud platforms and giving post-delivery support.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company_name: "ICT Đông Á",
    icon: paypines,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Contributed to building a souvenir e-commerce website with features like shopping cart, payments, promotions, and real-time chat/messaging.",
      "Helped implement WebSocket for instant communication between users and shops.",
      "Assisted in developing backend APIs using Node.js and MongoDB.",
      "Supported improvements to the React.js front-end for a smoother shopping experience.",
      "Gained experience in teamwork, task sharing, and solving technical problems in a group project.",
    ],
  },
  {
    title: "IT Support Assistant (Part-time)",
    company_name: "Independent Contractor",
    icon: fillip,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Nov 2024",
    points: [
      "Helped troubleshoot software and hardware issues for students and teachers.",
      "Assisted in installing operating systems and development tools.",
      "Provided basic guidance on fixing and improving system performance.",
    ],
  },
  {
    title: "Sales Consultant & Technical Support",
    company_name: "Chinh Nguyen Computer",
    icon: adacell,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Nov 2024",
    points: [
       "Advised customers on suitable products and solutions.",
      "Assisted in repairing hardware and installing software.",
      "Helped with SEO tasks and posted advertisements on social platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nhan was a great help in our automation project. Even though he is still a student, he quickly learned how to use n8n and contributed to setting up workflows that saved us a lot of time. He is eager to learn and easy to work with.",
    name: "Cong He Thong",
    designation: "Project Manager",
    company: "COWI Autobiz",
    image: santosh,
  },
  {
    testimonial:
      "During the development of our souvenir e-commerce platform, Nhan was responsible for several key features like the chat system and real-time notifications. He was always ready to take feedback and improve the work. His enthusiasm made the project move forward smoothly.",
    name: "Duc Manh",
    designation: "Team Leader",
    company: "ICT Đông Á",
    image: aditya,
  },
  {
    testimonial:
      "We worked with Nhan on a small web application project for our business. He communicated clearly, delivered on time, and was open to suggestions. For a developer at his stage, his attention to detail and willingness to solve problems is impressive.",
    name: "Sarah Williams",
    designation: "Owner",
    company: "Freelance Client (Upwork)",
    image: school,
  },
];

const projects = [
  {
    name: "Threads Application",
    description:
      "Building a full-stack clone of Threads (a social media platform) with Next.js 14+ involves several stages, including user interface design, backend API development, real-time features, user authentication, notifications, and community management. The platform should support various features like nested comments, real-time search, and notifications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Abej-Rijwi/threads",
  },
  {
    name: "Health Application",
    description:
      "Building a healthcare platform that streamlines patient registration, appointment scheduling, medical record management, complex forms, and SMS notifications is a large-scale project that involves both front-end and back-end components, integration with third-party services, and security measures to protect sensitive health data.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/Abej-Rijwi/healthcare",
  },
  {
    name: "Portfolio Application",
    description:
      "Building a personal portfolio website with react.js and three.js involves creating a visually appealing and responsive design that showcases your skills, projects, and experiences. The website should include sections for an introduction, project showcases, testimonials, and contact information. 3D graphics design  for amazing view using threejs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Abej-Rijwi/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
