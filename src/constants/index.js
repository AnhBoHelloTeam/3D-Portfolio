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
    image: "/automation/n81.png",
    longDescription:
      "This workflow automates the entire lead capture process for SMEs by connecting web forms to Google Sheets, tagging leads by source and generating automated summaries sent to Slack. It eliminates manual spreadsheet entry and repeated human error.",
    howToSetup: [
      "Create a webhook trigger in n8n for lead submission form.",
      "Add nodes to transform and validate data.",
      "Connect Google Sheets node to store the lead with tags.",
      "Use Slack node to send summary notifications.",
      "Add error handling and run provisioning schedule."
    ],
    video: "https://www.youtube.com/watch?v=fWtXJswvUcA",
    docsLink: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
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
    image: "/automation/n82.png",
    longDescription:
      "Synchronizes and analyzes data from multiple sales channels, creates day-to-day reports in Google Sheets, and pushes instant updates to management via Telegram. Ensures reliability with smart error recovery.",
    howToSetup: [
      "Configure API credentials in n8n.",
      "Create repeating trigger node (every day at set time).",
      "Aggregate and transform sales data.",
      "Insert/update Google Sheets table.",
      "Send Telegram alert with summary."
    ],
    video: "https://www.youtube.com/watch?v=Zq9o_rq2WWo",
    docsLink: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.cron/",
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
    image: "/automation/n83.png",
    longDescription:
      "Email Invoice Bot helps companies automate invoice collection. It reads emails, parses order details, stores data in Airtable, and immediately notifies the accounting team in Telegram. No order is left behind.",
    howToSetup: [
      "Create IMAP Email trigger in n8n for accounting inbox.",
      "Use parser node to extract OrderID, Date, Amount, Customer.",
      "Connect to Airtable API to add/update record.",
      "Send Telegram alert with new invoice summary.",
      "Test with real incoming mails and setup error notification handling."
    ],
    video: "https://www.youtube.com/watch?v=nEJ3lYGaq70",
    docsLink: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailtrigger/",
    codeSnippet: `// n8n Function node
return {
  "OrderId": $json["order_id"],
  "Amount": $json["total"]
};`
  },
  {
    id: "social-media-auto-posting",
    name: "Social Media Auto-Posting",
    description:
      "Automatically schedule and post content to Instagram and Facebook from Google Sheets. Supports images, captions, and hashtags.",
    tools: ["n8n", "Google Sheets", "Instagram API", "Facebook Graph API", "Cron"],
    impact: "Saves 6+ hours per week on social media management, ensures consistent posting schedule.",
    type: "SME Client",
    image: "/automation/n84.png",
    longDescription:
      "This workflow reads scheduled posts from Google Sheets, processes images and text, then publishes to Instagram and Facebook at optimal times. Includes hashtag optimization, image resizing, and engagement tracking.",
    howToSetup: [
      "Set up Google Sheets with columns: Date, Time, Image URL, Caption, Hashtags.",
      "Create a Cron trigger in n8n (runs every hour).",
      "Filter posts scheduled for current time window.",
      "Download and resize images if needed.",
      "Post to Instagram API with caption.",
      "Post to Facebook Graph API.",
      "Update Google Sheets with post status and link."
    ],
    video: "https://www.youtube.com/watch?v=-Oc_HfreJJE",
    docsLink: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/",
    codeSnippet: `// Instagram post payload
{
  "image_url": "{{$json.image}}",
  "caption": "{{$json.caption}} #{{$json.hashtags}}",
  "access_token": "{{$env.IG_TOKEN}}"
}`
  },
  {
    id: "inventory-sync-alert",
    name: "Inventory Sync & Low Stock Alert",
    description:
      "Sync inventory levels from multiple sources (Shopify, WooCommerce) to central database. Send alerts when stock drops below threshold.",
    tools: ["n8n", "Shopify API", "WooCommerce API", "PostgreSQL", "Telegram", "Email"],
    impact: "Prevents stockouts, reduces manual inventory checks by 80%, alerts team instantly.",
    type: "Real Client Project",
    image: "/automation/n85.png",
    longDescription:
      "This system continuously monitors inventory across multiple e-commerce platforms, syncs data to a central PostgreSQL database, and sends instant alerts via Telegram and Email when products fall below reorder levels. Includes automated reorder suggestions.",
    howToSetup: [
      "Configure API credentials for Shopify and WooCommerce.",
      "Create scheduled trigger (runs every 30 minutes).",
      "Fetch current inventory levels from all sources.",
      "Compare with thresholds stored in PostgreSQL.",
      "Send Telegram alert if low stock detected.",
      "Send email to procurement team with reorder list.",
      "Log all sync operations for audit trail."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.shopify/",
    codeSnippet: `// Check stock threshold
const lowStock = items.filter(item => 
  item.quantity < item.threshold
);
if (lowStock.length > 0) {
  return { lowStock, action: 'alert' };
}`
  },
  {
    id: "support-ticket-router",
    name: "Customer Support Ticket Router",
    description:
      "Automatically categorize and route customer support tickets to the right team based on keywords, priority, and customer tier.",
    tools: ["n8n", "Zendesk API", "OpenAI API", "Slack", "Airtable"],
    impact: "Reduces ticket response time by 40%, ensures tickets reach correct specialist immediately.",
    type: "Internal Project",
    image: "/automation/n86.png",
      longDescription:
        "Uses AI (OpenAI) to analyze ticket content, automatically tags by category (billing, technical, sales), assigns priority, and routes to appropriate team in Slack. VIP customers get escalated automatically. All routing decisions logged in Airtable.",
    howToSetup: [
      "Connect Zendesk webhook for new ticket events.",
      "Extract ticket content and customer data.",
      "Send to OpenAI API for sentiment and category analysis.",
      "Determine priority based on customer tier and keywords.",
      "Route to appropriate Slack channel with formatted message.",
      "Update Airtable with ticket ID, category, and assignment.",
      "Send confirmation email to customer."
    ],
    video: "https://www.youtube.com/watch?v=5Q2eSTudxS4",
    docsLink: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openai/",
    codeSnippet: `// OpenAI analysis
const analysis = await openai.chat({
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content: "Categorize support ticket..."
    }
  ]
});`
  },
  {
    id: "data-backup-archive",
    name: "Automated Data Backup & Archive",
    description:
      "Daily backup of critical databases and files to cloud storage (S3, Google Drive). Automatically archives old data based on retention policy.",
    tools: ["n8n", "Cron", "PostgreSQL", "AWS S3", "Google Drive API", "Email"],
    impact: "Ensures 99.9% data safety, automates compliance requirements, saves storage costs via smart archiving.",
    type: "Real Client Project",
    image: "/automation/n87.png",
    longDescription:
      "Performs scheduled full and incremental backups of databases and file systems. Backs up to AWS S3 and Google Drive simultaneously for redundancy. Automatically archives data older than retention period to cold storage, and sends daily backup status reports.",
    howToSetup: [
      "Configure database connection credentials.",
      "Set up AWS S3 bucket and IAM permissions.",
      "Create Google Drive folder for backups.",
      "Create Cron trigger for daily backup (2 AM).",
      "Execute pg_dump for PostgreSQL backup.",
      "Compress backup files with timestamp.",
      "Upload to S3 and Google Drive in parallel.",
      "Check retention policy and archive old backups.",
      "Send email report with backup status and size."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/",
    codeSnippet: `# Backup script
pg_dump -h $DB_HOST -U $DB_USER $DB_NAME | \\
  gzip > backup_$(date +%Y%m%d).sql.gz

# Upload to S3
aws s3 cp backup_*.sql.gz s3://backup-bucket/`
  },
  {
    id: "order-fulfillment-workflow",
    name: "E-commerce Order Fulfillment Workflow",
    description:
      "Automatically process orders from multiple channels, update inventory, generate shipping labels, and send tracking updates to customers.",
    tools: ["n8n", "Shopify", "WooCommerce", "ShipStation API", "Email", "SMS"],
    impact: "Reduces order processing time from 2 hours to 15 minutes, eliminates human errors, improves customer satisfaction.",
    type: "SME Client",
    image: "/automation/n88.png",
    longDescription:
      "When an order is placed, this workflow automatically validates inventory, reserves items, generates shipping label via ShipStation, updates order status across all platforms, sends tracking information via email and SMS, and logs everything for analytics.",
    howToSetup: [
      "Connect webhooks from Shopify and WooCommerce for new orders.",
      "Validate inventory availability in real-time.",
      "Reserve items to prevent overselling.",
      "Generate shipping label using ShipStation API.",
      "Update order status to 'Processing' in source platform.",
      "Send confirmation email with order details.",
      "Send SMS with tracking number when shipped.",
      "Update inventory levels across all channels.",
      "Log order details to analytics database."
    ],
    video: "https://www.youtube.com/watch?v=VcFbPT4H0bs",
    docsLink: "https://docs.n8n.io/workflows/best-practices/",
    codeSnippet: `// ShipStation label request
{
  "orderId": "{{$json.order_id}}",
  "carrierCode": "fedex",
  "serviceCode": "fedex_ground",
  "shipDate": "{{$now}}"
}`
  }
];
