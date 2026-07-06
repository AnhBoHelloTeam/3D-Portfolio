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
    title: "AI & Automation Specialist",
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
    live_demo_link: "https://www.lumionix.com/",
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
    id: "ai-media-affiliate",
    name: "AI Media Generator for Affiliate Marketing",
    description:
      "Tạo ảnh và video AI tự động cho các chiến dịch affiliate trên TikTok, YouTube. Tự động viết kịch bản, sinh ảnh và ghép thành video hoàn chỉnh.",
    tools: ["n8n", "OpenAI API", "FFmpeg", "TikTok API", "YouTube API"],
    impact: "Sản xuất hàng loạt 50+ video ngắn mỗi tuần, tăng lượng tiếp cận tự động.",
    type: "Social Media Automation",
    image: "/automation/n81.png",
    longDescription:
      "Hệ thống tự động hóa hoàn toàn quy trình xây dựng nội dung cho các kênh tiếp thị liên kết. Hệ thống sẽ cào các chủ đề hot, dùng OpenAI để tạo kịch bản chi tiết và sinh ảnh minh họa bằng DALL-E, sau đó chuyển văn bản thành giọng nói (TTS) và tự động dùng FFmpeg để render thành video ngắn (Reels/Shorts/TikTok), cuối cùng đăng tải trực tiếp lên các nền tảng mạng xã hội thông qua API.",
    howToSetup: [
      "Bước 1: Thiết lập Cron hoặc Webhook trigger để quét các sản phẩm hot trend trên sàn affiliate.",
      "Bước 2: Sử dụng OpenAI API để tạo tiêu đề, kịch bản video và prompt sinh hình ảnh phù hợp.",
      "Bước 3: Gửi prompt qua DALL-E để tải ảnh về thư mục tạm, kết hợp gọi ElevenLabs/Google TTS để lấy file audio giọng đọc.",
      "Bước 4: Sử dụng FFmpeg để ghép hình ảnh, âm thanh, nhạc nền và tạo hiệu ứng chuyển động/phụ đề tự động.",
      "Bước 5: Gọi TikTok/YouTube API để upload video lên kênh và ghi lại báo cáo link video vào Google Sheets."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Cấu hình sinh video tự động
{
  "voice_model": "vi-VN-Standard-A",
  "fps": 30,
  "resolution": "1080x1920",
  "duration_limit": 60
}`
  },
  {
    id: "competitor-scraper",
    name: "Competitor Scraper & AI Content Analyzer",
    description:
      "Cào dữ liệu, phân tích và sao chép/tối ưu nội dung từ các video, kênh đối thủ cạnh tranh bằng AI để tìm ra công thức video triệu view.",
    tools: ["Python", "Playwright", "n8n", "OpenAI API", "Google Sheets"],
    impact: "Phát hiện nhanh xu hướng nội dung mới, tự động viết lại kịch bản tối ưu hơn đối thủ.",
    type: "Marketing Intelligence",
    image: "/automation/n82.png",
    longDescription:
      "Công cụ tự động theo dõi danh sách các kênh đối thủ. Khi phát hiện đối thủ có video mới tải lên, hệ thống sẽ tự động cào tiêu đề, mô tả và tải transcript (phụ đề giọng nói) của video đó. Nội dung thu được sẽ được chuyển qua GPT-4 để phân tích cấu trúc kịch bản (mở đầu, nội dung chính, kêu gọi hành động), tính điểm tiềm năng và viết lại thành 3 kịch bản mới độc đáo hơn.",
    howToSetup: [
      "Bước 1: Chạy script cào danh sách video mới từ kênh đối thủ định kỳ mỗi ngày bằng Playwright/Python.",
      "Bước 2: Gửi link video mới qua n8n để trích xuất phụ đề tự động (YouTube Transcript API hoặc dùng Whisper).",
      "Bước 3: Thiết lập OpenAI Node với Prompt phân tích chi tiết Hook và nội dung cốt lõi của đối thủ.",
      "Bước 4: Sử dụng AI tạo ra các kịch bản cải tiến tương ứng và lưu trữ kết quả trực tiếp vào Google Sheets để duyệt."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `# Python cào nhanh thông tin video đối thủ
import yt_dlp
def get_video_info(url):
    with yt_dlp.YoutubeDL() as ydl:
        return ydl.extract_info(url, download=False)`
  },
  {
    id: "shopee-video-ads",
    name: "Automated Shopee Product to Video Ads Creator",
    description:
      "Tự động tạo video quảng cáo ngắn từ link sản phẩm Shopee. Quét thông tin, ảnh sản phẩm, viết kịch bản quảng cáo và tự động dựng video.",
    tools: ["Node.js", "Shopee Scraping API", "n8n", "FFmpeg", "ElevenLabs"],
    impact: "Tiết kiệm 95% thời gian làm video quảng cáo, sản xuất hàng trăm video ads từ link sản phẩm chỉ trong vài phút.",
    type: "E-commerce Tool",
    image: "/automation/n83.png",
    longDescription:
      "Giải pháp hoàn hảo cho nhà bán hàng Dropshipping và Affiliate. Chỉ cần dán link sản phẩm Shopee, hệ thống tự động cào tên, giá, mô tả và tất cả các ảnh chất lượng cao của sản phẩm. Sau đó, AI sẽ đóng vai trò Copywriter để viết kịch bản bán hàng ngắn, tạo voice đọc thuyết minh và dùng FFmpeg dựng thành video dạng slideshow giới thiệu sản phẩm cực kỳ bắt mắt với hiệu ứng zoom và chuyển cảnh mượt mà.",
    howToSetup: [
      "Bước 1: Tạo webhook nhận link sản phẩm Shopee từ giao diện quản trị hoặc chatbot chat.",
      "Bước 2: Dùng API cào dữ liệu để trích xuất danh sách ảnh, tên, giá bán và đánh giá nổi bật của sản phẩm.",
      "Bước 3: Đưa thông tin vào OpenAI để sinh kịch bản quảng cáo ngắn trong 15-30 giây.",
      "Bước 4: Chuyển kịch bản thành giọng nói tiếng Việt bằng ElevenLabs hoặc Google TTS.",
      "Bước 5: Chạy FFmpeg tự động ghép hình ảnh sản phẩm chạy trên nền nhạc cùng file audio thuyết minh thành video thành phẩm."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Node.js mock API cào ảnh Shopee
const getShopeeImages = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.item.images; // Trả về mảng link ảnh sản phẩm
}`
  },
  {
    id: "social-media-farmer",
    name: "Multi-Account Social Media Farm Bot",
    description:
      "Hệ thống nuôi tài khoản Instagram, Facebook, TikTok tự động. Tách biệt môi trường trình duyệt và phân chia mỗi tài khoản chạy trên 1 IP riêng biệt để tránh quét.",
    tools: ["Python", "Playwright", "Proxy Rotator", "Docker", "n8n"],
    impact: "Duy trì hàng chục tài khoản mạng xã hội hoạt động tự nhiên như người dùng thật mà không bị khóa (shadowban).",
    type: "Growth Hacking",
    image: "/automation/n84.png",
    longDescription:
      "Hệ thống nuôi nick quy mô lớn. Bot tự động thực hiện các hành vi tương tác thường nhật như cuộn trang (scroll), xem Reels/TikTok ngẫu nhiên, thả tim (like), theo dõi (follow) các kênh cùng chủ đề và bình luận bằng AI. Mỗi luồng trình duyệt chạy biệt lập trong một container Docker và sử dụng proxy IPv4/IPv6 dân cư riêng biệt, mô phỏng hoàn hảo thao tác của con người để tăng độ uy tín cho tài khoản.",
    howToSetup: [
      "Bước 1: Cài đặt và cấu hình hệ thống Docker chạy các trình duyệt headless hoặc dùng công cụ antidetect browser.",
      "Bước 2: Thiết lập proxy riêng cho mỗi trình duyệt thông qua tham số khởi tạo mạng của Playwright.",
      "Bước 3: Lập lịch tương tác ngẫu nhiên qua n8n (ví dụ: nick A hoạt động từ 8h-9h, nick B hoạt động từ 10h-11h).",
      "Bước 4: Tích hợp thư viện di chuyển chuột ngẫu nhiên và dùng OpenAI để sinh bình luận tự nhiên tùy theo nội dung bài đăng tương tác."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Cấu hình khởi tạo Playwright với proxy biệt lập
const browser = await playwright.chromium.launch({
  proxy: {
    server: "http://proxy.rotator-provider.com:8000",
    username: "user123",
    password: "pass123"
  }
});`
  },
  {
    id: "fb-auto-chatbot",
    name: "Auto FB Poster & AI Comment/Message Chatbot",
    description:
      "Tự động đăng bài lên Fanpage/Group Facebook. Tự động phản hồi bình luận bằng AI và nhắn tin trực tiếp (inbox) chốt đơn cho khách hàng 24/7.",
    tools: ["Facebook Graph API", "NestJS", "n8n", "OpenAI API", "Messenger Webhooks"],
    impact: "Tương tác tức thì 100% với khách hàng, tăng tỷ lệ chuyển đổi từ bình luận sang inbox chốt đơn.",
    type: "Customer Support Automation",
    image: "/automation/n85.png",
    longDescription:
      "Giải pháp tự động hóa phễu bán hàng trên Facebook. Hệ thống tự động đăng các bài viết đã lên lịch sẵn. Khi có khách hàng bình luận, Webhook sẽ gửi thông tin về server NestJS, AI tự động phân tích và phản hồi bình luận của khách hàng một cách thân thiện. Đồng thời, bot tự động gửi tin nhắn trực tiếp qua Messenger kèm nút chốt đơn để chuyển đổi khách hàng tiềm năng ngay lập tức.",
    howToSetup: [
      "Bước 1: Đăng ký ứng dụng Meta Developer, liên kết Fanpage và cấu hình Webhook nhận sự kiện comment/message.",
      "Bước 2: Dựng server NestJS nhận payload sự kiện và chuyển tiếp sang n8n để xử lý logic.",
      "Bước 3: Gọi OpenAI API phân tích nội dung câu hỏi của khách hàng dựa trên file tài liệu sản phẩm cung cấp sẵn.",
      "Bước 4: Gọi Facebook Send API để trả lời bình luận công khai và gửi tin nhắn ẩn vào inbox khách hàng."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Trả lời tin nhắn khách hàng tự động
const sendFBMessage = async (recipientId, text) => {
  return await fetch("https://graph.facebook.com/v18.0/me/messages?access_token=" + PAGE_TOKEN, {
    method: "POST",
    body: JSON.stringify({ recipient: { id: recipientId }, message: { text } })
  });
}`
  },
  {
    id: "sub-voice-transcriber",
    name: "AI Speech-to-Text & Subtitle Generator",
    description:
      "Tự động chuyển giọng nói thành văn bản, tự động dịch thuật và làm phụ đề (sub) cho truyện tranh, video và các tệp âm thanh.",
    tools: ["Whisper API", "FFmpeg", "n8n", "Python", "Google Drive"],
    impact: "Sản xuất phụ đề video nhanh gấp 10 lần so với làm thủ công, hỗ trợ dịch thuật đa ngôn ngữ.",
    type: "Content Localization",
    image: "/automation/n86.png",
    longDescription:
      "Hệ thống tự động hóa khâu làm phụ đề. Khi tải video/audio lên thư mục Google Drive, hệ thống sẽ tự động tách âm thanh, gửi file audio qua mô hình Whisper AI để nhận diện giọng nói và xuất ra file văn bản có chứa mốc thời gian (timestamp). Hệ thống tiếp tục dịch file phụ đề sang ngôn ngữ đích và dùng FFmpeg để ép phụ đề cứng trực tiếp vào video thành phẩm.",
    howToSetup: [
      "Bước 1: Cấu hình n8n trigger theo dõi sự kiện thêm mới file video trong thư mục Google Drive chỉ định.",
      "Bước 2: Sử dụng lệnh Python/FFmpeg trên server để chuyển đổi video thành file âm thanh chất lượng nhẹ.",
      "Bước 3: Gửi file âm thanh qua OpenAI Whisper API hoặc API nhận dạng giọng nói cục bộ để lấy dữ liệu text kèm timeline.",
      "Bước 4: Định dạng dữ liệu text thành file .srt hoặc .vtt. Chạy script FFmpeg để ghép phụ đề cứng vào video gốc."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `# Command FFmpeg ghép cứng phụ đề vào video
ffmpeg -i video_goc.mp4 -vf subtitles=phude.srt video_output.mp4`
  },
  {
    id: "wp-seo-poster",
    name: "Auto WordPress Poster & SEO Optimizer",
    description:
      "Tự động tạo nội dung (bài viết) chuẩn SEO dựa trên từ khóa hạt giống và tự động đăng bài lên website WordPress, tối ưu hóa thẻ heading, mô tả và alt ảnh.",
    tools: ["n8n", "WordPress REST API", "OpenAI API", "Yoast SEO API", "Cron"],
    impact: "Duy trì tần suất đăng bài chuẩn SEO đều đặn, tiết kiệm chi phí thuê biên tập viên nội dung.",
    type: "SEO & CMS Automation",
    image: "/automation/n87.png",
    longDescription:
      "Hệ thống tự động phát triển nội dung SEO cho website. Từ khóa mục tiêu được lập lịch định kỳ để chuyển tới OpenAI tạo bài viết hoàn chỉnh với cấu trúc chuẩn SEO (H1, H2, H3, mật độ từ khóa hợp lý). Hệ thống tự động liên kết ảnh minh họa, tối ưu thẻ alt ảnh và thẻ meta description thông qua tích hợp Yoast SEO trước khi gọi API WordPress để đăng trực tiếp lên web.",
    howToSetup: [
      "Bước 1: Thiết lập một Google Sheet chứa danh sách từ khóa cần viết bài và lịch đăng cụ thể.",
      "Bước 2: Sử dụng n8n để đọc từ khóa cần đăng của ngày hôm đó, gửi yêu cầu tới OpenAI để viết bài chuẩn SEO.",
      "Bước 3: Phân tích cấu trúc HTML của bài viết bằng node Code trong n8n để chèn thẻ meta, alt ảnh tự động.",
      "Bước 4: Gọi API WordPress REST để tạo bài viết mới ở trạng thái 'Publish' hoặc 'Draft' tùy cấu hình."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Tạo bài viết mới lên WordPress qua REST API
const createWPost = async (title, content) => {
  return await fetch("https://mywebsite.com/wp-json/wp/v2/posts", {
    method: "POST",
    headers: { "Authorization": "Basic " + WP_APPLICATION_PASSWORD },
    body: JSON.stringify({ title, content, status: "publish" })
  });
}`
  },
  {
    id: "bulk-email-sender",
    name: "Bulk Smart Email Campaign Sender",
    description:
      "Hệ thống gửi email tự động và đồng loạt. Tự động kiểm tra tính hợp lệ của email nhận, cấu hình xoay tua máy chủ gửi (SMTP) và theo dõi phản hồi.",
    tools: ["n8n", "SMTP/IMAP", "Google Sheets", "Telegram", "Cron"],
    impact: "Gửi hàng ngàn email cá nhân hóa mỗi ngày mà không bị đánh dấu spam, kiểm soát tỷ lệ bounce rate dưới 2%.",
    type: "Lead Generation",
    image: "/automation/n88.png",
    longDescription:
      "Hệ thống quản lý chiến dịch email marketing thông minh. Hệ thống tự động đọc danh sách khách hàng từ Google Sheets, chạy qua bộ lọc làm sạch email để loại bỏ email ảo. Khi gửi bài, hệ thống tự động xoay tua giữa nhiều tài khoản SMTP gửi khác nhau để phân phối tải và tăng độ uy tín. Đồng thời, bot IMAP liên tục lắng nghe hòm thư đến để phát hiện phản hồi của khách hàng và báo về Telegram.",
    howToSetup: [
      "Bước 1: Chuẩn bị tệp data khách hàng và các mẫu nội dung email cá nhân hóa trong Google Sheets.",
      "Bước 2: Tạo n8n workflow gửi email theo từng lô (batch) để hạn chế spam, thiết lập thời gian trễ ngẫu nhiên.",
      "Bước 3: Cấu hình các tài khoản SMTP gửi khác nhau trong node Send Email để xoay tua luân phiên.",
      "Bước 4: Thêm node IMAP Trigger theo dõi email phản hồi từ khách hàng để gửi cảnh báo trực tiếp về Telegram nhóm chăm sóc khách hàng."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Gửi mail cá nhân hoá với n8n node
{
  "to": "{{$json.LeadEmail}}",
  "subject": "Chào {{$json.LeadName}}, giải pháp tự động hoá cho {{$json.CompanyName}}",
  "html": "<p>Chào bạn, chúng tôi có giải pháp...</p>"
}`
  },
  {
    id: "ocr-invoice-scanner",
    name: "OCR Invoice to Excel Centralized Scanner",
    description:
      "Quét thông tin hóa đơn tự động từ ảnh chụp hoặc file PDF bằng công nghệ AI OCR, tự động bóc tách các trường thông tin và xuất ra file Excel tổng.",
    tools: ["n8n", "IMAP", "OpenAI API", "Telegram", "Google Sheets"],
    impact: "Tiết kiệm 90% thời gian nhập liệu hóa đơn thủ công cho kế toán, giảm thiểu sai sót sai số xuống 0%.",
    type: "Financial Automation",
    image: "/automation/n81.png",
    longDescription:
      "Trợ lý kế toán ảo hoạt động 24/7. Hệ thống tự động giám sát hòm thư kế toán thông qua IMAP. Khi nhận được email đính kèm hóa đơn dạng hình ảnh hoặc file PDF, hệ thống sẽ tải file về và chuyển tiếp qua API AI OCR (GPT-4 Vision hoặc Google Vision) để phân tích văn bản, bóc tách các chỉ số cốt lõi như tên nhà cung cấp, mã số thuế, ngày hóa đơn, tổng tiền, thuế suất và tự động lưu vào file Excel quản lý chung.",
    howToSetup: [
      "Bước 1: Thiết lập IMAP email trigger theo dõi hòm thư nhận hóa đơn đầu vào.",
      "Bước 2: Tách lấy file đính kèm (PDF/Ảnh) chuyển thành định dạng nhị phân (binary data).",
      "Bước 3: Gửi file qua OpenAI API (sử dụng GPT-4o vision) với prompt yêu cầu bóc tách dữ liệu hóa đơn thành JSON chuẩn.",
      "Bước 4: Nhận kết quả JSON, ghi dữ liệu vào Google Sheets/Excel và bắn tin nhắn tổng hợp doanh số hóa đơn về Telegram."
    ],
    video: "",
    docsLink: "https://docs.n8n.io/",
    codeSnippet: `// Schema kết quả bóc tách hóa đơn JSON
{
  "mst_nha_ban": "0102030405",
  "ngay_hoa_don": "2026-07-06",
  "tong_tien_chua_thue": 5000000,
  "thue_suat": 0.1,
  "tong_tien_thanh_toan": 5500000
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
  Python: "#3572A5",
  Playwright: "#2e8555",
  FFmpeg: "#0078d7",
  ElevenLabs: "#f97316",
  Docker: "#2496ed",
  "SMTP/IMAP": "#1083c8",
  "Shopee Scraping API": "#ee4d2d",
  "Proxy Rotator": "#ff9900",
};

// Type badge colors for automation projects
export const typeBadgeColors = {
  "Social Media Automation": "bg-pink-100 text-pink-800 border-pink-400",
  "Marketing Intelligence": "bg-purple-100 text-purple-800 border-purple-400",
  "E-commerce Tool": "bg-yellow-100 text-yellow-800 border-yellow-400",
  "Growth Hacking": "bg-red-100 text-red-800 border-red-400",
  "Customer Support Automation": "bg-blue-100 text-blue-800 border-blue-400",
  "Content Localization": "bg-teal-100 text-teal-800 border-teal-400",
  "SEO & CMS Automation": "bg-indigo-100 text-indigo-800 border-indigo-400",
  "Lead Generation": "bg-cyan-100 text-cyan-800 border-cyan-400",
  "Financial Automation": "bg-emerald-100 text-emerald-800 border-emerald-400",
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
