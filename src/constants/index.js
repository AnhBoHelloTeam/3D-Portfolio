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
  self,
  Souvenir,
  elecWeb,
  elecAppP,
  FastfoodWeb,
  APITruyen,
  Logo,
  Nhan,
  nhan2,
  nhanprofolio,
  badnhan,
  Upwork,
  ICT,
  CN,
  cowi,
  thread,
  lamda,
  terms,
  vlux_ai_icon,
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
    title: "AI Automation & Development Specialist",
    company_name: "VLUX AI",
    icon: vlux_ai_icon,
    iconBg: "#E6DEDD",
    date: "August 2025 - Present", 
    points: [
      "Develop and deploy cutting-edge Automation & AI solutions for SMEs in Australia, Canada, and Vietnam, aligning with VLUX AI's core service offerings.",
      "Design and implement complex automation workflows using n8n to integrate disparate systems, streamline business operations, and enhance data flow efficiency.",
      "Collaborate with cross-functional teams (Design, Web Development, Marketing) to deliver integrated solutions, including modern websites/apps, smart management software, and booking systems.",
      "Support the execution of multi-channel marketing strategies by leveraging AI for customer personalization and campaign automation.",
      "Continuously monitor, maintain, and optimize automated processes to ensure maximum stability, performance, and value for clients."
    ],
  },
  {
    title: "Automation & Workflow Assistant (N8N)",
    company_name: "COWI Autobiz",
    icon: cowi,
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
    icon: Upwork,
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
    icon: ICT,
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
    icon: self,
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
    icon: CN,
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
    name: "Anh Bo",
    designation: "Project Manager",
    company: "COWI Autobiz",
    image: Logo,
  },
  {
    testimonial:
      "During the development of our souvenir e-commerce platform, Nhan was responsible for several key features like the chat system and real-time notifications. He was always ready to take feedback and improve the work. His enthusiasm made the project move forward smoothly.",
    name: "NhanNG",
    designation: "Team Leader",
    company: "ICT Đông Á",
    image: Nhan,
  },
  {
    testimonial:
      "We worked with Nhan on a small web application project for our business. He communicated clearly, delivered on time, and was open to suggestions. For a developer at his stage, his attention to detail and willingness to solve problems is impressive.",
    name: "Sarah Williams",
    designation: "Owner",
    company: "Freelance Client (Upwork)",
    image: nhan2,
  },
];

const projects = [
  {
    name: "NhanNG | 3D Portfolio Application",
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
    image: badnhan,
    source_code_link: "https://github.com/AnhBoHelloTeam/3D-Portfolio.git",
    live_demo_link: "https://nhanngfolio.onrender.com/",
  },
  {
    name: "NhanNG | Portfolio Application",
    description:
      "A modern, minimalist yet functional personal profile page using React and static CSS. The site showcases skills, featured projects, and contact information, providing a smooth experience on all devices. Integrated SEO for increased search engine visibility.",
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
    image: nhanprofolio,
    source_code_link: "https://github.com/AnhBoHelloTeam/NhanNGFolio",
    live_demo_link: "https://nhanngfolio.onrender.com/",
  },
  {
    name: "VLUXAI | Business Tech Solutions",
    description:
      "Corporate website showcasing AI, website/app development, management software, and marketing services. Fully responsive with modern layout, service pages, blog, and multilingual support.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/vluxai.com.png",
    source_code_link: "",
    live_demo_link: "https://vluxai.com/",
  },
  {
    name: "Soho Nails | Salon Website",
    description:
      "A salon website with multi-branch pages, service lists, pricing, and booking/contact info. Focused on clean design, readability, and SEO content structure.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/sohonails.com.au_.png",
    source_code_link: "",
    live_demo_link: "https://sohonails.com.au/",
  },
  {
    name: "Austrix | W&D Website",
    description:
      "A construction/windows & doors business site featuring services, portfolios, blog, shop pages and request-a-quote flow. Focus on premium visuals, conversions, and content structure.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/austrix.vluxai.com.png",
    source_code_link: "",
    live_demo_link: "https://austrix.vluxai.com/",
  },
  {
    name: "Souvenir E-commerce Website",
    description:
      "A web application for selling souvenirs, developed using React with Vite, Node.js, and MongoDB. The platform includes features like shopping cart, product search, order tracking, and real-time chat between customers and shop owners. Designed to provide a smooth shopping experience with responsive UI for both desktop and mobile users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Souvenir,
    source_code_link: "https://github.com/AnhBoHelloTeam/FE-NhanShopLuuNiem.git",
    live_demo_link: "https://fe-webdoluuniem.onrender.com/",
  },
  {
    name: "React Web Shop",
    description:
      "An e-commerce web application built with React, Node.js, and MongoDB. Includes admin and user dashboards, product search, secure checkout, and order management. Designed to provide a fast and intuitive online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: elecWeb,
    source_code_link: "https://github.com/AnhBoHelloTeam/Shop_Fontend_REACT.git",
    live_demo_link: "https://shop-frontend-8yko.onrender.com/",
  },
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
    image: thread,
    source_code_link: "https://github.com/AnhBoHelloTeam/Threads-Aplication.git",
    live_demo_link: "https://threads-aplication.onrender.com/",
  },
  {
    name: "LamDa Camera Shop",
    description:
      "Lambda Camera Shop is a modern e-commerce web app built with Next.js, MongoDB, and Vite, offering fast performance and a smooth shopping experience for camera enthusiasts.",
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
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: lamda,
    source_code_link: "https://github.com/AnhBoHelloTeam",
    live_demo_link: "https://github.com/AnhBoHelloTeam",
  },
  
  {
    name: "Flutter Mobile App",
    description:
      "A mobile e-commerce app built with Flutter and connected to a Node.js + MongoDB backend. Supports browsing products, viewing details, managing a shopping cart, and placing orders directly from a mobile device.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: elecAppP,
    source_code_link: "https://github.com/AnhBoHelloTeam/Shop_Fontend_Flutter.git",
    live_demo_link: "https://shop-flutter-1c992.firebaseapp.com/",
  },
  
  {
    name: "React API Read Comics",
    description:
      "A web application for reading comics online using React and an API to fetch data from the server. Supports search, category filters, user login, and an admin panel for content management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: APITruyen,
    source_code_link: "https://github.com/AnhBoHelloTeam/ReactAPIReadTruyenNhanNG.git",
    live_demo_link: "https://reactapireadtruyennhanng.onrender.com/",
  },
  {
    name: "Product Management Software",
    description:
      "All-in-One platform that helps Product Managers turn ideas into successful products. Manage roadmaps, gather user insights, organize backlogs, and collaborate with the entire team - all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: terms,
    source_code_link: "https://github.com/AnhBoHelloTeam/123fakturera_FE.git",
    live_demo_link: "https://one23fakturera-fe.onrender.com",
  },
  {
    name: "Fast Food Web App",
    description:
      "A food ordering platform built with NestJS, React, and MySQL. Includes menu browsing, order placement, price calculation, and order tracking. Designed for restaurants to manage online orders efficiently.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: FastfoodWeb,
    source_code_link: "https://github.com/AnhBoHelloTeam/fastfood-app_NetJS_fontent.git",
    live_demo_link: "https://fastfood-app-netjs-fontent.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

// Thêm mới automationProjects section
export const automationProjects = [
  {
    id: "crm-auto-lead-capture",
    name: "CRM Auto-Lead Capture",
    description:
      "Automatically collect leads from website, push to Google Sheets CRM, auto-tag by source, log and daily summary.",
    tools: ["n8n", "Webhooks", "Google Sheets", "Slack"],
    impact: "Saves 4 hours weekly, ensures 100% accurate group assignment.",
    type: "SME Client",
    image: "/automation/crm-autolead-demo.png",
    longDescription:
      "This workflow automates the entire lead capture process for SMEs by connecting web forms to Google Sheets, tagging leads by source and generating automated summaries sent to Slack. It eliminates manual spreadsheet entry and repeated human error.",
    howToSetup:[
      "Create a webhook trigger in n8n for lead submission form.",
      "Add nodes to transform and validate data.",
      "Connect Google Sheets node to store the lead with tags.",
      "Use Slack node to send summary notifications.",
      "Add error handling and run provisioning schedule."
    ],
    video: "https://www.youtube.com/embed/HU4q1K4EHqM",
    docsLink: "https://docs.google.com/document/d/automation-demo",
    codeSnippet: `POST /api/lead {
  "name": "Nguyen Van A",
  "source": "website",
  "email": "a@gmail.com"
}`
  },
  {
    id: "auto-daily-report-alert",
    name: "Auto Daily Report & Alert",
    description:
      "Aggregate daily sales from APIs, sync to Google Sheets, send Telegram alerts. Automatic retry on errors.",
    tools: ["n8n", "Google Sheets", "Telegram", "REST API"],
    impact: "Boosts reporting 1.5x; reduces copy-paste mistakes.",
    type: "Internal Project",
    image: "/automation/sales-dashboard-demo.png",
    longDescription:
      "Synchronizes and analyzes data from multiple sales channels, creates day-to-day reports in Google Sheets, and pushes instant updates to management via Telegram. Ensures reliability with smart error recovery.",
    howToSetup: [
      "Configure API credentials in n8n.",
      "Create repeating trigger node (every day at set time).",
      "Aggregate and transform sales data.",
      "Insert/update Google Sheets table.",
      "Send Telegram alert with summary."
    ],
    video: "https://www.youtube.com/embed/Gj6E5L3XN2o",
    docsLink: "https://notion.so/automation-report-demo",
    codeSnippet: `curl -X POST https://domain/api/sync \n  -d '{"task":"sync sales", "date":"{{now}}"}'`
  },
  {
    id: "email-invoice-bot",
    name: "Email Invoice Bot",
    description:
      "Parse order details from company email, auto-inserts new records into Airtable, notifies accounting via Telegram.",
    tools: ["n8n", "IMAP", "Airtable", "Telegram"],
    impact: "Reduces 90% of manual work, zero missing invoices, full automation.",
    type: "Real Client Project",
    image: "/automation/email-invoice-demo.png",
    longDescription:
      "Email Invoice Bot helps companies automate invoice collection. It reads emails, parses order details, stores data in Airtable, and immediately notifies the accounting team in Telegram. No order is left behind.",
    howToSetup: [
      "Create IMAP Email trigger in n8n for accounting inbox.",
      "Use parser node to extract OrderID, Date, Amount, Customer.",
      "Connect to Airtable API to add/update record.",
      "Send Telegram alert with new invoice summary.",
      "Test with real incoming mails and setup error notification handling."
    ],
    video: "",
    docsLink: "https://docs.google.com/document/d/email-invoice-guide",
    codeSnippet: `// n8n Function node\nreturn {
  "OrderId": $json["order_id"],
  "Amount": $json["total"]
};`
  },
];
