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
  highscores,
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
    id: "portfolio",
    title: "Portfolio",
    dropdown: [
      {
        id: "project",
        title: "My work",
      },
      {
        id: "client-projects",
        title: "Web Services",
      },
      {
        id: "automation",
        title: "Automation Solutions",
      },
    ],
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
    url: "https://vluxai.com/",
    icon: vlux_ai_icon,
    iconBg: "#E6DEDD",
    date: "August 2025 - February 2026", 
    points: [
      "Develop and deploy cutting-edge Automation & AI solutions for SMEs in Australia, Canada, and Vietnam, aligning with VLUX AI's core service offerings.",
      "Design and implement complex automation workflows using n8n to integrate disparate systems, streamline business operations, and enhance data flow efficiency.",
      "Collaborate with cross-functional teams (Design, Web Development, Marketing) to deliver integrated solutions, including modern websites/apps, smart management software, and booking systems.",
      "Support the execution of multi-channel marketing strategies by leveraging AI for customer personalization and campaign automation.",
      "Continuously monitor, maintain, and optimize automated processes to ensure maximum stability, performance, and value for clients."
    ],
  },
  {
    title: "Front-End Developer (Remote)",
    company_name: "HighScores.ai",
    url: "https://highscores.ai/",
    icon: highscores,
    iconBg: "#E6DEDD",
    date: "July 2025 - November 2025",
    points: [
      "Successfully migrated web platform from Angular to Next.js, boosting performance, rendering, and SEO.",
      "Converted Figma UI/UX mockups into clean, responsive, and reusable React/Next.js components.",
      "Integrated backend RESTful APIs and managed daily tasks in an Agile scrum flow using Jira.",
    ],
  },
  {
    title: "Automation & Workflow Assistant (N8N)",
    company_name: "COWI Autobiz",
    url: "https://cowiautobiz.com/",
    icon: cowi,
    iconBg: "#E6DEDD",
    date: "June 2025 - September 2025",
    points: [
      "Built and maintained 15+ automation workflows using n8n to support daily business operations.",
      "Integrated multiple systems (Google Sheets, APIs, Email, Webhooks) to reduce manual processing time by ~40%.",
      "Collaborated with team members to analyze workflows and identify automation opportunities.",
      "Monitored and optimized workflows to ensure stable performance and data accuracy.",
    ],
  },
  {
    title: "Freelance Web/Mobile Developer",
    company_name: "Independent Contractor",
    icon: Upwork,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Delivered multiple web and mobile projects for international clients, focusing on responsive UI and stable functionality.",
      "Built applications using React, Nestjs, Nextjs and Flutter based on real-world client requirements.",
      "Translated client requirements into scalable and maintainable applications with clean UI/UX.",
      "Collaborated remotely with clients to manage timelines, handle feedback, and ensure on-time delivery.",
    ],
  },
  {
    title: "Intern Full Stack Developer",
    company_name: "ICT Đông Á",
    icon: ICT,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Participated in building a production-ready souvenir e-commerce website using React, Node.js, MongoDB, and WebSocket.",
      "Implemented shopping cart, payment gateway integration, promotions, and real-time chat features.",
      "Designed and consumed RESTful APIs to support core business logic and data flow.",
      "Enhanced front-end responsiveness and usability to improve the customer shopping experience.",
      "Worked collaboratively in a team to deliver features on schedule and resolve technical challenges.",
    ],
  },
  {
    title: "IT Support",
    company_name: "IT Support + Chinh Nguyen Computer",
    icon: CN,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Nov 2024",
    points: [
      "2+ years of hands-on experience in IT support, system setup, troubleshooting, and basic development environment configuration.",
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
    live_demo_link: "https://nhanng-3dporfolio.vercel.app/",
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
    name: "Karimi Dry Food | Vegetarian Landing Page",
    description:
      "A premium, highly responsive landing page showcasing healthy vegetarian and organic dry foods. Features clean layout designs, smooth performance, and optimized search engine visibility.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/karimidryfood.png",
    source_code_link: "",
    live_demo_link: "https://karimidryfood.vluxai.com/",
  },
  {
    name: "AlgoBattle | 1v1 Coding Platform",
    description:
      "A real-time competitive programming arena. Features automated secure code execution sandbox (judge node), dynamic Elo matchmaking pool via Redis, real-time WebSocket communication, and Elo calculations with rank protection shields.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "nestjs", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "socketio", color: "blue-text-gradient" },
    ],
    image: "/algobattle.png",
    source_code_link: "",
    live_demo_link: "https://www.algobattle.site/",
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
];

export { services, technologies, experiences, testimonials, projects };

// Thêm mới automationProjects section
export const automationProjects = [
  {
    id: "crm-auto-lead-capture",
    name: "CRM Auto-Lead Capture",
    description:
      "Transform your website forms into a powerful lead generation machine. Every submission is instantly captured, categorized, and routed to your team with intelligent tagging and real-time notifications.",
    tools: ["n8n", "Webhooks", "Google Sheets", "Slack"],
    impact: "Saves 4 hours weekly, ensures 100% accurate group assignment.",
    type: "SME Client",
    image: "/automation/n81.png",
    longDescription:
      "Say goodbye to manual lead entry and missed opportunities. This intelligent workflow seamlessly connects your website contact forms to a Google Sheets CRM system, automatically tagging each lead by source (organic search, paid ads, referrals, etc.), enriching data with validation, and delivering instant Slack notifications to your sales team. Leads are never lost, always categorized, and ready for follow-up within seconds. Perfect for growing businesses that want to scale their sales operations without hiring additional staff.",
    howToSetup: [
      "Step 1: Set up Webhook Trigger - In n8n, create a new workflow and add a 'Webhook' trigger node. Copy the webhook URL and integrate it with your website's form submission endpoint (using platforms like Typeform, Google Forms, or custom forms).",
      "Step 2: Data Transformation - Add a 'Function' or 'Code' node to validate and clean incoming data (remove duplicates, format phone numbers, normalize email addresses). Include logic to detect lead source from form parameters or referrer data.",
      "Step 3: Google Sheets Integration - Connect a 'Google Sheets' node configured to append rows to your CRM spreadsheet. Map form fields to columns (Name, Email, Phone, Source, Timestamp, Status). Enable auto-tagging by adding a 'Source' column that categorizes leads (e.g., 'Website Organic', 'Facebook Ad', 'LinkedIn').",
      "Step 4: Slack Notifications - Add a 'Slack' node to send formatted messages to your sales channel when a new lead arrives. Include lead details, source tag, and a direct link to the spreadsheet row for quick access.",
      "Step 5: Error Handling & Scheduling - Wrap critical nodes with error handling (Set node with 'Continue on Error'). Optionally add a 'Schedule Trigger' to generate daily lead summary reports. Test the workflow end-to-end with sample data before going live."
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
      "Turn chaos into clarity. Automatically pull sales data from all your channels, create beautiful dashboards, and deliver executive summaries right to your phone every morning—before you even open your laptop.",
    tools: ["n8n", "Google Sheets", "Telegram", "REST API"],
    impact: "Boosts reporting 1.5x; reduces copy-paste mistakes.",
    type: "Internal Project",
    image: "/automation/n82.png",
    longDescription:
      "Never waste another morning manually copying numbers from different platforms. This powerful automation connects to your Shopify, WooCommerce, Stripe, PayPal, and custom APIs to gather all sales metrics in one place. It calculates totals, compares daily/weekly/monthly performance, identifies top-selling products, and generates beautiful formatted reports in Google Sheets. Management receives instant Telegram alerts with key metrics, trends, and actionable insights—perfect for making data-driven decisions on the go. Built-in error handling ensures data never gets missed, with automatic retries and detailed logs.",
    howToSetup: [
      "Step 1: Configure API Credentials - In n8n, set up credentials for all your sales platforms (Shopify API key, WooCommerce Consumer Key/Secret, Stripe API key, etc.). Store these securely in n8n's credential manager for easy reuse.",
      "Step 2: Schedule Daily Execution - Add a 'Schedule Trigger' node set to run daily at 6:00 AM (or your preferred time). Configure timezone and recurrence pattern. This ensures reports are ready when your team starts the day.",
      "Step 3: Fetch & Aggregate Data - Create HTTP Request nodes for each sales channel API. Use 'Set' nodes to normalize data formats across platforms. Add a 'Merge' node to combine all sales data into a unified dataset. Include calculations for totals, averages, and growth percentages.",
      "Step 4: Google Sheets Dashboard - Configure a 'Google Sheets' node to either create a new row in a daily report sheet or update an existing dashboard. Include columns for Date, Total Sales, Orders Count, Average Order Value, Top Product, and Growth vs. Previous Day.",
      "Step 5: Telegram Alerts - Add a 'Telegram' node to send formatted messages to management group. Include emojis, charts summary, and key highlights. Use Telegram's formatting (bold, italics) for better readability. Add error handling with fallback notifications if data fetch fails."
    ],
    video: "https://www.youtube.com/watch?v=Zq9o_rq2WWo",
    docsLink: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.cron/",
    codeSnippet: `curl -X POST https://domain/api/sync \n  -d '{"task":"sync sales", "date":"{{now}}"}'`
  },
  {
    id: "email-invoice-bot",
    name: "Email Invoice Bot",
    description:
      "Your accounting team's new best friend. This intelligent bot watches your inbox 24/7, extracts every invoice detail automatically, and keeps your financial records perfect—no human eyes needed.",
    tools: ["n8n", "IMAP", "Airtable", "Telegram"],
    impact: "Reduces 90% of manual work, zero missing invoices, full automation.",
    type: "Real Client Project",
    image: "/automation/n83.png",
    longDescription:
      "Accounting departments spend hours every week manually entering invoice data from emails into spreadsheets—until now. This sophisticated automation monitors your designated accounting inbox using IMAP, intelligently identifies invoice emails (by sender, subject patterns, or attachment types), extracts key information using advanced parsing (Order ID, invoice number, date, vendor name, amount, tax, payment terms), and automatically creates structured records in Airtable. The accounting team gets instant Telegram notifications with invoice summaries and links to view full details. Never miss an invoice, never make a data entry error, and never waste time on repetitive tasks again. Perfect for companies processing dozens or hundreds of invoices monthly.",
    howToSetup: [
      "Step 1: IMAP Email Configuration - Add an 'IMAP Email Trigger' node in n8n, connecting to your accounting email inbox (e.g., accounting@company.com). Configure authentication with app-specific password if needed. Set filters to only process emails from known vendors or with specific subject patterns like 'Invoice' or 'Bill'.",
      "Step 2: Intelligent Parsing - Use a 'Function' or 'Code' node to extract invoice details from email body and attachments. Implement regex patterns or natural language processing to identify OrderID, Invoice Number, Date, Vendor, Amount, Tax, Payment Terms. For PDF attachments, consider using a PDF parsing service or OCR if needed.",
      "Step 3: Airtable Database Setup - Create an Airtable base with columns: Invoice ID, Vendor, Date, Amount, Tax, Total, Status, Email Link, Attachments. Configure the 'Airtable' node in n8n to create new records with extracted data. Add validation to prevent duplicate entries using Invoice ID as unique identifier.",
      "Step 4: Telegram Notifications - Set up a 'Telegram' bot and add a 'Telegram' node to send formatted alerts to your accounting team channel. Include invoice summary (Vendor, Amount, Due Date) and a direct link to the Airtable record. Use rich formatting for quick scanning.",
      "Step 5: Testing & Error Handling - Test the workflow with sample invoice emails. Add error handling nodes to catch parsing failures, missing attachments, or API errors. Set up email alerts for critical failures. Optionally add a 'Wait' node to batch process multiple invoices before sending a summary notification."
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
      "Your social media manager that never sleeps. Schedule weeks of content in a spreadsheet, and watch it automatically publish to Instagram and Facebook at the perfect times—complete with hashtag research and image optimization.",
    tools: ["n8n", "Google Sheets", "Instagram API", "Facebook Graph API", "Cron"],
    impact: "Saves 6+ hours per week on social media management, ensures consistent posting schedule.",
    type: "SME Client",
    image: "/automation/n84.png",
    longDescription:
      "Content creators and marketing teams can finally plan their social media strategy without the daily grind. This workflow turns Google Sheets into a powerful content calendar. Simply add your posts with scheduled dates and times, and the automation handles the rest: downloading images from URLs, resizing them to platform-specific dimensions (Instagram: 1080x1080, Facebook: 1200x630), optimizing hashtags based on content analysis, and publishing at your specified times. Each platform gets customized content—different captions, hashtag strategies, and image formats. Post status and engagement metrics are automatically tracked back in your spreadsheet, giving you a complete view of your social media performance without leaving your workflow. Never miss a post, never worry about time zones, and never spend hours scheduling manually again.",
    howToSetup: [
      "Step 1: Google Sheets Content Calendar - Create a spreadsheet with columns: Date, Time (in your timezone), Platform (Instagram/Facebook/Both), Image URL (or Google Drive link), Caption, Hashtags (comma-separated), Status (Pending/Posted), Post URL. Fill in your content plan for weeks or months ahead.",
      "Step 2: Schedule Automation Trigger - Add a 'Schedule Trigger' node in n8n, configured to run every hour (or every 30 minutes for more precision). This ensures posts go live at the exact scheduled time.",
      "Step 3: Filter & Process Posts - Add a 'Google Sheets' node to read rows where Status is 'Pending' and current time matches the scheduled Time (within a 5-minute window). Use 'IF' or 'Filter' nodes to process only relevant posts.",
      "Step 4: Image Processing - Add an 'HTTP Request' node to download images from URLs. Use a 'Function' node with image manipulation library (or external service) to resize images to platform requirements. Store processed images temporarily or upload to cloud storage (S3, Google Drive) for Instagram/Facebook API requirements.",
      "Step 5: Platform-Specific Publishing - Configure separate 'HTTP Request' nodes for Instagram Graph API and Facebook Graph API. For Instagram, use the Media Creation API to upload image first, then publish container. Include caption with hashtags and mentions. For Facebook, use Page Posts API with image attachment.",
      "Step 6: Status Updates & Tracking - After successful posting, use another 'Google Sheets' node to update the row: set Status to 'Posted', record Post URL, and add Timestamp. Optionally add engagement tracking by fetching post metrics after 24 hours and updating the spreadsheet."
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
      "Stop losing sales to stockouts. This smart system watches your inventory across all channels, syncs everything in real-time, and screams at you (politely) when it's time to reorder—before your customers even notice.",
    tools: ["n8n", "Shopify API", "WooCommerce API", "PostgreSQL", "Telegram", "Email"],
    impact: "Prevents stockouts, reduces manual inventory checks by 80%, alerts team instantly.",
    type: "Real Client Project",
    image: "/automation/n85.png",
    longDescription:
      "Running a multi-channel e-commerce business means inventory chaos: products sell on Shopify, Amazon, WooCommerce, and your physical store simultaneously, but tracking stock levels manually is impossible. This automation solves that forever. Every 30 minutes, it syncs inventory counts from all your sales channels into a central PostgreSQL database, calculates total available stock, identifies discrepancies between platforms, and instantly alerts your team when any product drops below its reorder threshold. The system even suggests optimal reorder quantities based on historical sales velocity and calculates estimated time until stockout. Procurement gets formatted email reports with product names, current stock, reorder quantities, supplier information, and direct links to purchase orders. Never run out of your bestsellers again, and never waste time manually checking spreadsheets.",
    howToSetup: [
      "Step 1: API Credentials & Database Setup - Configure API credentials in n8n for Shopify (Admin API), WooCommerce (REST API), and any other platforms. Set up a PostgreSQL database with tables: products (SKU, name, current_stock, threshold, last_sync), inventory_history (timestamp, SKU, platform, quantity), and alerts_log (timestamp, SKU, message).",
      "Step 2: Scheduled Sync Trigger - Add a 'Schedule Trigger' set to run every 30 minutes (adjust frequency based on your sales volume). For high-volume stores, consider 15-minute intervals.",
      "Step 3: Multi-Platform Inventory Fetch - Create separate 'HTTP Request' nodes for each platform: Shopify Products API (get inventory_levels), WooCommerce Products API (get stock_quantity), Amazon Seller API (if applicable). Fetch all products and their current stock levels. Use 'Merge' nodes to combine data by SKU.",
      "Step 4: Database Sync & Comparison - Add a 'PostgreSQL' node to update current_stock for each product. Use SQL queries to calculate total inventory across platforms and compare against reorder thresholds. Identify products where (current_stock <= threshold) AND (status != 'alerted_recently').",
      "Step 5: Smart Alerting - For low-stock products, create formatted alerts with product name, current stock, days-until-stockout estimate (based on sales velocity), and suggested reorder quantity. Send to Telegram channel for instant visibility and email to procurement team with full details and supplier contact info.",
      "Step 6: Audit Trail & Reconciliation - Log all sync operations to inventory_history table. Add error handling for API failures. Optionally add weekly reconciliation reports to identify inventory discrepancies between platforms."
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
      "AI-powered ticket intelligence that reads, understands, and routes every customer issue to the perfect specialist in seconds—while VIP customers get the red carpet treatment automatically.",
    tools: ["n8n", "Zendesk API", "OpenAI API", "Slack", "Airtable"],
    impact: "Reduces ticket response time by 40%, ensures tickets reach correct specialist immediately.",
    type: "Internal Project",
    image: "/automation/n86.png",
      longDescription:
        "Customer support teams waste hours manually reading tickets, guessing categories, and routing them to the wrong people—while frustrated customers wait. This AI-powered automation changes everything. When a new ticket arrives in Zendesk, it instantly analyzes the content using OpenAI's GPT-4 to understand intent, sentiment, urgency, and category (billing questions, technical bugs, feature requests, account issues, etc.). The system checks customer tier (VIP customers get automatic escalation to senior agents), identifies keywords indicating high priority (like 'urgent', 'down', 'broke'), and intelligently routes the ticket to the right Slack channel with a beautifully formatted summary. Technical tickets go to engineering, billing questions to finance, feature requests to product, and critical issues immediately notify on-call teams. Every routing decision is logged in Airtable with reasoning, enabling continuous improvement. Customers get faster responses from the right experts, and your team spends less time triaging and more time solving.",
    howToSetup: [
      "Step 1: Zendesk Webhook Integration - In Zendesk, create a webhook trigger for 'ticket.created' events. Configure the webhook URL to point to your n8n workflow's webhook node. Include ticket ID, subject, description, customer email, priority, and tags in the payload.",
      "Step 2: Data Extraction & Enrichment - Add nodes to extract ticket content, customer information, and ticket metadata. Enrich customer data by looking up their tier/plan from your CRM or database. Combine all information into a structured payload for AI analysis.",
      "Step 3: AI-Powered Analysis - Configure an 'OpenAI' node with GPT-4 model. Create a system prompt that instructs the AI to analyze the ticket and return: category (technical/billing/sales/support), sentiment (positive/neutral/negative/urgent), priority (low/medium/high/critical), suggested assignment, and reasoning. Use function calling or structured output for consistent JSON responses.",
      "Step 4: Intelligent Routing Logic - Add conditional logic (IF/Switch nodes) based on AI analysis and customer tier. Route technical tickets to #engineering-support, billing to #finance-support, VIP customers to #vip-support, critical issues to #oncall-alerts. Include customer tier checks to auto-escalate VIP tickets regardless of category.",
      "Step 5: Slack Notifications - Configure 'Slack' nodes for each channel. Format messages with ticket subject, customer name, AI-detected category and priority, ticket link, and key excerpt. Use Slack's rich formatting (threads, emojis, buttons) for better visibility. Include @mentions for high-priority tickets.",
      "Step 6: Airtable Logging - Add an 'Airtable' node to log routing decisions with columns: Ticket ID, Timestamp, Category, Priority, Customer Tier, Routing Decision, AI Reasoning, Status. This creates an audit trail and enables analytics on routing accuracy.",
      "Step 7: Customer Confirmation - Optionally add a node to send automated email to customer confirming ticket received and providing expected response time based on priority and category."
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
      "Your digital safety net. Every night while you sleep, this system backs up everything important to multiple cloud locations, keeps decades of history organized, and ensures you never lose critical data—ever.",
    tools: ["n8n", "Cron", "PostgreSQL", "AWS S3", "Google Drive API", "Email"],
    impact: "Ensures 99.9% data safety, automates compliance requirements, saves storage costs via smart archiving.",
    type: "Real Client Project",
    image: "/automation/n87.png",
    longDescription:
      "Data loss can destroy a business in minutes, but proper backup strategies are complex, expensive, and often forgotten. This enterprise-grade automation runs silently in the background, performing full database backups every night and incremental backups throughout the day. It creates compressed, encrypted backups with timestamps, uploads them simultaneously to AWS S3 (for durability) and Google Drive (for accessibility), and automatically moves older backups to cheaper cold storage (S3 Glacier) based on retention policies (e.g., keep 30 days in hot storage, 1 year in warm, 7 years in cold). The system verifies backup integrity, sends daily status reports to IT teams, and alerts immediately if any backup fails. Perfect for compliance requirements (GDPR, HIPAA), disaster recovery planning, and businesses that can't afford to lose a single byte of data.",
    howToSetup: [
      "Step 1: Infrastructure Setup - Configure database connection credentials in n8n for PostgreSQL (and any other databases). Set up AWS S3 bucket with appropriate IAM policy (read/write access, lifecycle policies for archiving). Create Google Drive folder structure for backups. Set up email credentials for notifications.",
      "Step 2: Backup Schedule Configuration - Add a 'Schedule Trigger' node set to run daily at 2:00 AM (low-traffic window). Optionally add additional triggers for incremental backups (every 6 hours) using separate workflows.",
      "Step 3: Database Backup Execution - Add an 'Execute Command' or 'HTTP Request' node to run pg_dump command: 'pg_dump -h $HOST -U $USER -d $DB_NAME -F c -f backup_$(date +%Y%m%d_%H%M%S).dump'. For incremental backups, use pg_basebackup or WAL archiving. Capture output and verify dump file size > 0.",
      "Step 4: File Compression & Encryption - Add a 'Function' node to compress backup files using gzip (or 7zip for better compression). Optionally encrypt backups using GPG or AES-256 before uploading. Add timestamp and metadata to filename.",
      "Step 5: Multi-Cloud Upload - Configure parallel 'HTTP Request' nodes for AWS S3 (using S3 API with multipart upload for large files) and Google Drive API (using resumable upload). Upload simultaneously for redundancy. Include retry logic for failed uploads.",
      "Step 6: Lifecycle & Archiving - Add logic to check backup age. If backup is older than 30 days, move from S3 Standard to S3 Glacier using AWS API. If older than 1 year, move to S3 Glacier Deep Archive. Update Google Drive folder structure accordingly. Maintain index of all backups with metadata in a tracking database.",
      "Step 7: Verification & Reporting - After upload, verify file integrity (checksums). Query backup status from both S3 and Google Drive. Generate daily email report with: backup size, upload status, storage locations, any errors, retention policy actions. Include weekly summary with storage costs."
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
      "From 'Order Placed' to 'Out for Delivery' in minutes—not hours. This end-to-end automation handles everything: inventory checks, label printing, customer updates, and analytics, so your team can focus on growing the business instead of packing boxes.",
    tools: ["n8n", "Shopify", "WooCommerce", "ShipStation API", "Email", "SMS"],
    impact: "Reduces order processing time from 2 hours to 15 minutes, eliminates human errors, improves customer satisfaction.",
    type: "SME Client",
    image: "/automation/n88.png",
    longDescription:
      "E-commerce fulfillment is a complex dance: orders come from Shopify, your website, Amazon, and marketplaces simultaneously. Each order needs inventory validation (is it in stock?), allocation (reserve it before someone else buys it), shipping label generation (which carrier? what service level?), status updates across platforms, customer notifications (email + SMS), and inventory reconciliation. Do this manually and you'll have errors, delays, and unhappy customers. This automation orchestrates the entire process flawlessly. When an order arrives, it instantly checks real-time inventory across all channels, reserves items to prevent overselling, calculates shipping costs, generates professional shipping labels via ShipStation (with automatic carrier selection based on weight and destination), updates order status everywhere (Shopify, WooCommerce, your ERP), sends beautiful confirmation emails with order details and estimated delivery, dispatches SMS tracking notifications when items ship, and logs everything to your analytics database for performance insights. Your fulfillment team just needs to pack and ship—the automation handles everything else.",
    howToSetup: [
      "Step 1: Webhook Configuration - Set up webhooks in Shopify (Order Created event) and WooCommerce (Order Status Changed to Processing). Configure webhook URLs to point to your n8n workflow's webhook trigger nodes. Include order details, customer info, line items, and shipping address in payload.",
      "Step 2: Inventory Validation - Add nodes to check real-time inventory for each line item. Query your inventory management system (database, ERP, or multi-channel sync service). If any item is out of stock, automatically update order status to 'On Hold' and notify customer. If in stock, proceed to reservation.",
      "Step 3: Inventory Reservation - Before generating shipping label, reserve items in your inventory system to prevent overselling during fulfillment window (typically 2-4 hours). Use atomic operations or locks to ensure thread safety across concurrent orders. Update available stock immediately.",
      "Step 4: Shipping Label Generation - Configure 'HTTP Request' node for ShipStation API. Prepare label request with: order weight, dimensions, origin/destination addresses, service level (ground/express), carrier preferences. Call ShipStation 'Create Label' endpoint. Retrieve tracking number and label image URL.",
      "Step 5: Multi-Platform Status Updates - Update order status in source platform (Shopify: 'Fulfilled', WooCommerce: 'Completed') using respective APIs. Include tracking number, carrier name, and estimated delivery date. If order exists in multiple channels, update all simultaneously.",
      "Step 6: Customer Communications - Send beautifully formatted confirmation email with order summary, item details, shipping address, tracking number, and expected delivery date. Use email template service (SendGrid, Mailgun) or HTML templates. Then send SMS notification with tracking link using Twilio or similar service.",
      "Step 7: Inventory Reconciliation - After label generation, update inventory levels across all sales channels. Decrease stock count in Shopify, WooCommerce, and central database. If using multi-channel inventory sync, trigger sync process.",
      "Step 8: Analytics & Logging - Log order details to analytics database with columns: Order ID, Channel, Items, Customer, Revenue, Shipping Cost, Fulfillment Time, Tracking Number, Status, Timestamp. Enable reporting on fulfillment speed, error rates, and customer satisfaction."
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

// Tool colors for automation project badges
export const toolColors = {
  n8n: "#dc7407",
  "Google Sheets": "#20c35b",
  Slack: "#4a154b",
  "REST API": "#2b7bb9",
  Webhooks: "#7a6ffb",
  Telegram: "#2597d8",
  IMAP: "#1083c8",
  Airtable: "#f26b3a",
  "Shopify API": "#96bf48",
  "WooCommerce API": "#96588a",
  PostgreSQL: "#336791",
  "Instagram API": "#e4405f",
  "Facebook Graph API": "#1877f2",
  Cron: "#f9d71c",
  "Zendesk API": "#03363d",
  "OpenAI API": "#10a37f",
  "AWS S3": "#ff9900",
  "Google Drive API": "#4285f4",
  Email: "#ea4335",
  SMS: "#34c759",
  "ShipStation API": "#00a8e8",
};

// Type badge colors for automation projects
export const typeBadgeColors = {
  "SME Client": "bg-green-100 text-green-800 border-green-400",
  "Internal Project": "bg-blue-100 text-blue-800 border-blue-400",
  "Real Client Project": "bg-orange-100 text-orange-800 border-orange-300",
};

// EmailJS configuration
export const emailjsConfig = {
  serviceId: "service_na7idoi",
  templateId: "template_76pkajm",
  publicKey: "r1dk6_F-NXVzxgnWX",
  toEmail: "nhanhateku1@gmail.com",
};

// Client Projects - Web & App
export const clientWebProjects = [
  {
    id: "ht-nails",
    name: "HT Nails",
    url: "https://soho.vluxai.com/",
    domain: "soho.vluxai.com",
    image: "https://vluxai.com/wp-content/uploads/2025/12/soho.vluxai.com_-1-scaled.png",
    transform: "perspective(1200px) rotateY(-12deg) translateZ(0)",
    shadow: "0 30px 80px rgba(102, 126, 234, 0.4), 0 0 40px rgba(79, 172, 254, 0.3)",
    height: 600,
  },
  {
    id: "soho-nails",
    name: "Soho Nails",
    url: "https://sohonails.com.au/",
    domain: "sohonails.com.au",
    image: "https://vluxai.com/wp-content/uploads/2025/12/sohonails.com_.au_-scaled.png",
    transform: "perspective(1200px) rotateY(-5deg) translateZ(20px) scale(1.05)",
    shadow: "0 40px 100px rgba(240, 147, 251, 0.5), 0 0 60px rgba(79, 172, 254, 0.4)",
    height: 650,
    zIndex: 2,
  },
  {
    id: "restaurant-booking",
    name: "Restaurant Booking",
    url: "https://restauntbooking.vluxai.com/",
    domain: "restauntbooking.vluxai.com",
    image: "https://vluxai.com/wp-content/uploads/2025/12/restauntbooking.vluxai.com_-1-scaled.png",
    transform: "perspective(1200px) rotateY(5deg) translateZ(20px) scale(1.05)",
    shadow: "0 40px 100px rgba(79, 172, 254, 0.5), 0 0 60px rgba(67, 233, 123, 0.4)",
    height: 650,
    zIndex: 2,
  },
  {
    id: "austrix",
    name: "Austrix",
    url: "https://austrix.vluxai.com/",
    domain: "austrix.vluxai.com",
    image: "https://vluxai.com/wp-content/uploads/2025/12/austrix.vluxai.com_-scaled.png",
    transform: "perspective(1200px) rotateY(12deg) translateZ(0)",
    shadow: "0 30px 80px rgba(250, 112, 154, 0.4), 0 0 40px rgba(254, 225, 64, 0.3)",
    height: 600,
  },
];

// Client Projects - QR Landing
export const clientQRProjects = [
  {
    id: "dr-ngoc-hoang-le",
    name: "DR NGOC HOANG LE",
    url: "https://vluxai.com/vi/card_doctor_1/",
    description: "Digital business card with QR code. Scan to view contact information, book appointments and get directions.",
    images: [
      "https://vluxai.com/wp-content/uploads/2025/12/z7293664615460_4f42376a510a534030de6ff1144b084b-scaled.jpg",
    ],
    layout: "single",
  },
  {
    id: "dr-dzung-le",
    name: "DR DZUNG LE",
    url: "https://vluxai.com/dr-dzungleqr/",
    description: "QR landing for pediatrician. Display specialty information, work schedule and online appointment booking.",
    images: [
      "https://vluxai.com/wp-content/uploads/2025/12/z7293671852415_bad361c4d6a4f5b406015885833a7cba.jpg",
      "https://vluxai.com/wp-content/uploads/2025/12/Bsinhi.png",
    ],
    layout: "double",
  },
  {
    id: "ht-nails-qr",
    name: "HT Nails",
    url: "https://soho.vluxai.com/ht-nails-qr/",
    description: "QR landing for nail salon. Customers scan QR to view services, pricing and book nail appointments.",
    images: [
      "https://vluxai.com/wp-content/uploads/2025/12/z7316681200897_43f226deca7b6d51eef88241291d8dbd.jpg",
      "https://vluxai.com/wp-content/uploads/2025/12/z7308574569918_f268e6e6e6386222480c6861d7890f48.jpg",
    ],
    layout: "double",
  },
];
