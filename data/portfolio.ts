export type Locale = "vi" | "en";

export type LocalizedText = Record<Locale, string>;

export function localize(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export const uiText = {
  vi: {
    mainNavigation: "Điều hướng chính",
    mobileNavigation: "Điều hướng trên di động",
    homeLabel: "Trần Quang Vĩnh - Trang chủ",
    switchToDark: "Chuyển sang giao diện tối",
    switchToLight: "Chuyển sang giao diện sáng",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    language: "Chọn ngôn ngữ",
    downloadCv: "Tải CV",
    greeting: "Xin chào, tôi là",
    contactMe: "Liên hệ với tôi",
    viewProjects: "Xem dự án",
    viewCv: "Xem CV",
    viewGithub: "Xem GitHub",
    avatarAlt: "Chân dung Trần Quang Vĩnh",
    statsLabel: "Thống kê nổi bật",
    skillsTitle: "Công nghệ tôi sử dụng",
    skillsAction: "Luôn đón đầu và ứng dụng công nghệ mới",
    skillsMatrixTitle: "Bộ kỹ năng theo nhóm chuyên môn",
    skillsMatrixSubtitle:
      "Tổng hợp năng lực thực chiến từ phát triển Frontend, Backend, AI & CMS.",
    projectsTitle: "Dự án tiêu biểu",
    projectsSubtitle:
      "Các hệ thống thực tế phục vụ hàng ngàn người dùng và doanh nghiệp.",
    projectsAction: "Xem tất cả dự án",
    viewProject: "Xem dự án",
    openProject: "Mở dự án",
    technologies: "Công nghệ sử dụng",
    aboutExperienceLabel: "Giới thiệu và kinh nghiệm",
    aboutTitle: "Về tôi",
    aboutBody:
      "Tôi là Fullstack Developer có kinh nghiệm phát triển frontend từ 06/2022 và trực tiếp xây dựng frontend bằng ReactJS, backend bằng NestJS cho May Academy Exam. Có kinh nghiệm sâu với hệ thống quản trị nội bộ (Boffice), nền tảng biểu quyết thời gian thực hỗ trợ 1.000+ người tham gia đồng thời (Bvote), Zalo Mini App (Neobiotech) và hệ sinh thái WordPress. Tích hợp API, phát triển giao diện responsive, tối ưu hiệu năng (giảm 40% thời gian tải trang, tăng tốc phát triển 30%) và ứng dụng AI (Cursor, Claude Code, MCP, RAG) trong phát triển phần mềm.",
    interests: "Thế mạnh & Đam mê",
    highlightsTitle: "Điểm nổi bật & Tác động",
    experienceTitle: "Kinh nghiệm làm việc",
    responsibilities: "Nhiệm vụ & Thành tựu chính",
    techStack: "Công nghệ sử dụng",
    educationTitle: "Học vấn & Chứng chỉ",
    educationDesc: "FPT Polytechnic (2019 – 2021)",
    contactTitle: "Liên hệ & Kết nối",
    contactSubtitle:
      "Tôi luôn sẵn sàng trao đổi về các dự án tiềm năng, hợp tác kỹ thuật hoặc cơ hội nghề nghiệp phù hợp.",
    callNow: "Gọi điện",
    chatZalo: "Nhắn Zalo",
    copyEmail: "Sao chép Email",
    copied: "Đã sao chép!",
    locationLabel: "Địa điểm làm việc",
    locationDesc:
      "Hà Nội, Việt Nam · Sẵn sàng làm việc Onsite, Hybrid hoặc Remote",
    birthDateLabel: "Ngày sinh",
    phoneLabel: "Điện thoại / Zalo",
    emailLabel: "Email công việc",
    socialNetworks: "Mạng xã hội & Liên kết",
    footerTagline:
      "Tối ưu hiệu năng, kiến trúc mở rộng và ứng dụng AI thực chiến.",
    footerCta: "Bạn có dự án cần phát triển? Hãy kết nối cùng tôi!",
    contactNow: "Liên hệ ngay",
  },
  en: {
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    homeLabel: "Tran Quang Vinh - Home",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Choose language",
    downloadCv: "Download CV",
    greeting: "Hello, I am",
    contactMe: "Contact me",
    viewProjects: "View projects",
    viewCv: "View CV",
    viewGithub: "View GitHub",
    avatarAlt: "Portrait of Tran Quang Vinh",
    statsLabel: "Key statistics",
    skillsTitle: "Technologies I use",
    skillsAction: "Always exploring and adopting new technologies",
    skillsMatrixTitle: "Skill Categories Matrix",
    skillsMatrixSubtitle:
      "Comprehensive technical competence across Frontend, Backend, AI & CMS.",
    projectsTitle: "Featured projects",
    projectsSubtitle:
      "Real-world production systems serving thousands of users and businesses.",
    projectsAction: "View all projects",
    viewProject: "View project",
    openProject: "Open project",
    technologies: "Technologies used",
    aboutExperienceLabel: "About and experience",
    aboutTitle: "About me",
    aboutBody:
      "I am a Full-Stack Developer with frontend development experience since June 2022, directly building frontends with ReactJS and backends with NestJS for May Academy Exam. Experienced in enterprise internal systems (Boffice), real-time voting platforms for 1,000+ concurrent attendees (Bvote), Zalo Mini Apps (Neobiotech), and the WordPress ecosystem. Skilled in API integration, responsive UI development, web performance optimization (40% load time reduction, 30% dev acceleration), and modern AI workflows (Cursor, Claude Code, MCP, RAG).",
    interests: "Strengths & Passions",
    highlightsTitle: "Key Highlights & Impact",
    experienceTitle: "Work experience",
    responsibilities: "Key Responsibilities & Achievements",
    techStack: "Tech Stack",
    educationTitle: "Education & Certifications",
    educationDesc: "FPT Polytechnic (2019 – 2021)",
    contactTitle: "Contact & Connect",
    contactSubtitle:
      "Always open to discussing new high-impact projects, technical collaborations, or career opportunities.",
    callNow: "Call now",
    chatZalo: "Chat on Zalo",
    copyEmail: "Copy Email",
    copied: "Copied!",
    locationLabel: "Work Location",
    locationDesc:
      "Hanoi, Vietnam · Available for Onsite, Hybrid, or Remote roles",
    birthDateLabel: "Date of Birth",
    phoneLabel: "Phone / Zalo",
    emailLabel: "Direct Email",
    socialNetworks: "Social networks & Links",
    footerTagline:
      "Optimizing performance, scalable architecture, and practical AI adoption.",
    footerCta: "Got an exciting project? Let's connect and build it!",
    contactNow: "Contact now",
  },
} as const;

export const profile = {
  firstName: "Trần Quang",
  lastName: "Vĩnh",
  role: {
    vi: "Kỹ sư Full-Stack",
    en: "Full-Stack Engineer",
  },
  tagline: {
    vi: "Web Hiệu Năng Cao · Zalo Mini App · Ứng Dụng AI",
    en: "High-Performance Web · Zalo Mini App · AI Integration",
  },
  introduction: {
    vi: "Tôi là Fullstack Developer có kinh nghiệm phát triển frontend từ 06/2022 và trực tiếp xây dựng frontend bằng ReactJS, backend bằng NestJS cho May Academy Exam. Có kinh nghiệm sâu với hệ thống quản trị nội bộ, Zalo Mini App và website WordPress; tích hợp API, phát triển giao diện responsive, tối ưu hiệu năng và ứng dụng AI trong phát triển phần mềm.",
    en: "Full-Stack Developer with frontend development experience since June 2022, building frontends with ReactJS and backends with NestJS for May Academy Exam. Deep expertise in internal admin systems, Zalo Mini Apps, and WordPress; API integration, responsive UI, web performance optimization, and AI application.",
  },
  location: {
    vi: "Hà Nội, Việt Nam",
    en: "Hanoi, Vietnam",
  },
  birthDate: "03/09/2001",
  email: "vinhtq039@gmail.com",
  phone: "+84 368666407",
  phoneDisplay: "0368 666 407",
  zaloUrl: "https://zalo.me/0368666407",
  github: "https://github.com/vinhtq",
  githubUsername: "@vinhtq",
  educationSchool: "FPT Polytechnic",
  educationPeriod: "2019 – 2021",
  educationMajor: {
    vi: "Công nghệ thông tin",
    en: "Information Technology",
  },
  availability: {
    vi: "Sẵn sàng cho dự án & cơ hội mới",
    en: "Available for projects & opportunities",
  },
  avatar: "/images/alex-profile.png",
  cv: {
    vi: "/CV_TRAN_QUANG_VINH.pdf",
    en: "/CV_TRAN_QUANG_VINH_EN.pdf",
  },
};

export const navigation = [
  { label: { vi: "Trang chủ", en: "Home" }, href: "#home" },
  { label: { vi: "Kỹ năng", en: "Skills" }, href: "#skills" },
  { label: { vi: "Dự án", en: "Projects" }, href: "#projects" },
  { label: { vi: "Về tôi", en: "About" }, href: "#about" },
  { label: { vi: "Kinh nghiệm", en: "Experience" }, href: "#experience" },
  { label: { vi: "Liên hệ", en: "Contact" }, href: "#contact" },
] as const;

export const stats = [
  {
    value: { vi: "4+ năm", en: "4+ Yrs" },
    label: {
      vi: "Kinh nghiệm thực chiến (từ 06/2022)",
      en: "Production experience (since 2022)",
    },
    icon: "users",
  },
  {
    value: { vi: "40%", en: "40%" },
    label: {
      vi: "Giảm tải trang (Code split & Lazy)",
      en: "Page load time reduction",
    },
    icon: "projects",
  },
  {
    value: { vi: "1.000+", en: "1,000+" },
    label: {
      vi: "Người dùng đồng thời (Bvote)",
      en: "Concurrent users supported",
    },
    icon: "clients",
  },
  {
    value: { vi: "Hà Nội", en: "Hanoi" },
    label: {
      vi: "Việt Nam (Sẵn sàng nhận việc)",
      en: "Vietnam (Available for work)",
    },
    icon: "location",
  },
] as const;

export const highlights = [
  {
    metric: "40%",
    badge: "Performance",
    title: {
      vi: "Giảm thời gian tải trang",
      en: "Page load time reduction",
    },
    description: {
      vi: "Áp dụng code splitting, dynamic imports và lazy loading để tối ưu hóa hiệu năng ứng dụng web, giảm tải băng thông và cải thiện Core Web Vitals.",
      en: "Applied code splitting, dynamic imports, and lazy loading to drastically reduce initial bundle size and boost Core Web Vitals.",
    },
  },
  {
    metric: "30%",
    badge: "Productivity",
    title: {
      vi: "Rút ngắn thời gian phát triển tính năng",
      en: "Faster feature delivery time",
    },
    description: {
      vi: "Xây dựng component library tái sử dụng chuẩn hóa, đồng thời ứng dụng bộ công cụ AI (Cursor, Claude Code, MCP) để tự động hóa viết test case và refactor code.",
      en: "Engineered reusable component libraries and leveraged AI workflows (Cursor, Claude Code, MCP) to automate testing and accelerate delivery.",
    },
  },
  {
    metric: "1.000+",
    badge: "Scalability",
    title: {
      vi: "Người tham gia đồng thời (Bvote)",
      en: "Concurrent attendees supported",
    },
    description: {
      vi: "Giao diện đa thiết bị phục vụ các phiên hội nghị cổ đông và biểu quyết trực tuyến real-time, kết nối WebSocket truyền tải dữ liệu mượt mà, không giật lag.",
      en: "Multi-device UI supporting live shareholder meetings & real-time voting via resilient WebSockets with zero lag.",
    },
  },
] as const;

export const skills = [
  { name: "React", logo: "/tech/react.svg", color: "#61dafb" },
  { name: "Next.js", logo: "/tech/nextjs.svg", color: "#94a3b8" },
  { name: "TypeScript", logo: "/tech/typescript.svg", color: "#3178c6" },
  { name: "Tailwind CSS", logo: "/tech/tailwindcss.svg", color: "#06b6d4" },
  { name: "NestJS", logo: "/tech/nestjs.svg", color: "#e0234e" },
  { name: "Node.js", logo: "/tech/nodejs.svg", color: "#5fa04e" },
  { name: "PostgreSQL", logo: "/tech/postgresql.svg", color: "#4169e1" },
  { name: "Zalo Mini App", logo: "/tech/zalo.svg", color: "#0068ff" },
  { name: "WordPress", logo: "/tech/wordpress.svg", color: "#21759b" },
  { name: "AI / LLM / MCP", logo: "/tech/ai.svg", color: "#10a37f" },
  { name: "Git", logo: "/tech/git.svg", color: "#f05032" },
  { name: "Figma", logo: "/tech/figma.svg", color: "#f24e1e" },
];

export const skillCategories = [
  {
    title: {
      vi: "Frontend & Giao diện người dùng",
      en: "Frontend & UI Engineering",
    },
    icon: "Layout",
    color: "#61dafb",
    items: [
      "ReactJS",
      "Next.js",
      "Vue.js",
      "Zalo Mini App SDK",
      "TypeScript",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "Redux / Redux Toolkit",
      "Zustand",
      "Styled Components",
      "Sass / SCSS",
      "HTML5 & CSS3",
      "Responsive Web Design",
    ],
  },
  {
    title: { vi: "Backend & Cơ sở dữ liệu", en: "Backend & Data Services" },
    icon: "Server",
    color: "#e0234e",
    items: [
      "NestJS",
      "Node.js",
      "RESTful API",
      "GraphQL",
      "WebSocket",
      "PostgreSQL",
    ],
  },
  {
    title: {
      vi: "Ứng dụng AI & Quy trình thế hệ mới",
      en: "AI Integration & Modern Workflows",
    },
    icon: "Bot",
    color: "#10a37f",
    items: [
      "OpenAI API",
      "Claude API",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Embeddings & pgvector",
      "LangChain",
      "Model Context Protocol (MCP)",
      "Cursor",
      "Claude Code",
    ],
  },
  {
    title: {
      vi: "WordPress & Công cụ phát triển",
      en: "WordPress & Developer Tools",
    },
    icon: "Wrench",
    color: "#21759b",
    items: [
      "WordPress Theme Development",
      "Plugin Customization",
      "Nâng cấp & Duy trì Website",
      "Git/GitHub",
      "Webpack",
      "Vite",
      "npm / yarn",
    ],
  },
] as const;

export const projects = [
  {
    title: {
      vi: "Zalo Mini App Neobiotech",
      en: "Neobiotech Zalo Mini App",
    },
    badge: "Zalo Mini App Store",
    description: {
      vi: "Ứng dụng Zalo Mini App chuẩn ZaUI: Tích hợp Zalo OAuth đăng nhập, thanh toán Zalo Pay, Zalo Notification, quét mã QR và trực tiếp submit đưa lên Store.",
      en: "Enterprise Zalo Mini App built with ZaUI: Zalo OAuth login, Zalo Pay, push notifications, QR scanner, and Zalo App Store submission.",
    },
    highlights: {
      vi: "Mobile-first UI chuẩn ZaUI · Tích hợp Zalo OAuth, Zalo Pay & QR Scanner · Trực tiếp duyệt lên Store",
      en: "ZaUI mobile-first · Zalo OAuth, Zalo Pay & QR scan · Submitted to Store",
    },
    image: "/images/project-taskflow.png",
    tags: [
      "ReactJS",
      "Zalo SDK",
      "TypeScript",
      "Tailwind CSS",
      "Zalo Pay",
      "REST API",
    ],
    href: "#contact",
  },
  {
    title: {
      vi: "May Academy Exam – Nền tảng thi & AI RAG",
      en: "May Academy Exam – Online Exam & AI RAG",
    },
    badge: "AI & RAG Exam Platform",
    description: {
      vi: "Nền tảng thi trực tuyến & quản trị trường học: Frontend ReactJS, Backend NestJS; tích hợp OpenAI/Claude RAG & pgvector tự động tạo ngân hàng đề thi và hỗ trợ chấm tự luận.",
      en: "Online exam & school management platform: ReactJS frontend, NestJS backend; integrated OpenAI/Claude RAG & pgvector for automated question banks and essay grading.",
    },
    highlights: {
      vi: "Fullstack ReactJS + NestJS · Tự động sinh đề & giải thích đáp án bằng OpenAI/Claude API · pgvector RAG",
      en: "Fullstack ReactJS + NestJS · AI question bank & auto-grading · pgvector RAG",
    },
    image: "/images/project-eduhub.png",
    tags: [
      "ReactJS",
      "NestJS",
      "PostgreSQL",
      "OpenAI API",
      "Claude API",
      "pgvector RAG",
    ],
    href: "#contact",
  },
  {
    title: {
      vi: "Bvote – Hội nghị cổ đông & Bỏ phiếu trực tuyến",
      en: "Bvote – Online Voting & Shareholder Meetings",
    },
    badge: "1.000+ Concurrent Users",
    description: {
      vi: "Giao diện bỏ phiếu real-time phục vụ hơn 1.000 người tham gia đồng thời, tích hợp video conference/chat và dashboard quản trị cổ đông, kết quả biểu quyết.",
      en: "Real-time online voting UI for 1,000+ concurrent attendees, video conferencing, chat, and shareholder voting administration dashboard.",
    },
    highlights: {
      vi: "1.000+ người tham gia đồng thời · WebSocket realtime · Tích hợp video conference & chat",
      en: "1,000+ concurrent attendees · Realtime WebSocket · Video conference & chat",
    },
    image: "/images/project-greenshop.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "REST API"],
    href: "https://bvote.vn",
  },
  {
    title: {
      vi: "Boffice – Hệ thống quản trị nội bộ doanh nghiệp",
      en: "Boffice – Enterprise Internal Management",
    },
    badge: "200+ Enterprise Users",
    description: {
      vi: "Dashboard real-time trực quan hóa dữ liệu, module quản lý dự án với Gantt chart/task tracking, tích hợp quản lý nhân sự, chấm công và KPI cho hơn 200 người dùng.",
      en: "Enterprise internal management for 200+ users: real-time dashboard, Gantt charts, task tracking, HR, attendance, and KPI management.",
    },
    highlights: {
      vi: "Hệ thống quản trị 200+ nhân sự · Gantt chart & Task tracking · Chấm công & KPI realtime",
      en: "200+ enterprise users · Gantt chart & Task tracking · Realtime HR & KPI",
    },
    image: "/images/project-taskflow.png",
    tags: [
      "ReactJS",
      "TypeScript",
      "Styled Components",
      "WebSocket",
      "REST API",
    ],
    href: "#contact",
  },
  {
    title: {
      vi: "Website WordPress – Lideco.vn và các dự án khác",
      en: "WordPress Websites – Lideco.vn & Clients",
    },
    badge: "Production WordPress",
    description: {
      vi: "Phát triển, nâng cấp, duy trì và tùy chỉnh giao diện/theme/plugin cho Lideco.vn cùng nhiều website WordPress khác; tối ưu tốc độ tải trang và SEO.",
      en: "Developed, upgraded, customized, and maintained WordPress themes/plugins for Lideco.vn and other websites.",
    },
    highlights: {
      vi: "Custom Theme & Plugin WordPress · Nâng cấp & Duy trì Website",
      en: "Custom WordPress theme & plugin · Maintenance & Optimization",
    },
    image: "/images/project-greenshop.png",
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "Theme Customization"],
    href: "https://lideco.vn",
  },
] as const;

export type Project = (typeof projects)[number];

export const experiences = [
  {
    period: { vi: "01/2026 – Hiện tại", en: "01/2026 – Present" },
    role: { vi: "Frontend Developer", en: "Frontend Developer" },
    company: "Bvote",
    description: {
      vi: "Phát triển nền tảng bỏ phiếu trực tuyến Bvote và Zalo Mini App Neobiotech với các tiêu chuẩn hiệu năng cao, real-time và ứng dụng AI.",
      en: "Developing real-time voting platform Bvote and Neobiotech Zalo Mini App with high performance standards and AI workflows.",
    },
    bullets: [
      {
        vi: "Phát triển giao diện bỏ phiếu real-time, hiển thị kết quả và tối ưu đa thiết bị cho hơn 1.000 người tham gia đồng thời.",
        en: "Developed real-time voting UI, live result display, and multi-device optimization for 1,000+ concurrent attendees.",
      },
      {
        vi: "Tích hợp video conference/chat và dashboard quản lý cổ đông, kết quả biểu quyết, cấu hình chức năng.",
        en: "Integrated video conferencing/chat and built administrative dashboards for shareholder and voting management.",
      },
      {
        vi: "Trực tiếp phát triển Zalo Mini App (Neobiotech): tích hợp Zalo OAuth (đăng nhập bằng Zalo), Zalo Pay, Zalo Notification, quét QR và trực tiếp quản lý quy trình submit xét duyệt đưa lên Zalo Mini App Store.",
        en: "Directly built Neobiotech Zalo Mini App: integrated Zalo OAuth, Zalo Pay, Notification, QR scan, and managed Zalo Store submission.",
      },
      {
        vi: "Ứng dụng Cursor, Claude Code và MCP trong quy trình phát triển, giúp tối ưu hóa viết test case, refactor code và tăng tốc độ bàn giao tính năng.",
        en: "Leveraged Cursor, Claude Code, and MCP in dev workflows, accelerating feature delivery, refactoring, and test case generation.",
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zalo Mini App SDK",
      "Zalo Pay",
      "Cursor",
      "Claude Code",
      "MCP",
      "REST API",
    ],
  },
  {
    period: { vi: "06/2022 – 12/2025", en: "06/2022 – 12/2025" },
    role: { vi: "Frontend Developer", en: "Frontend Developer" },
    company: "Bytesoft Solutions",
    description: {
      vi: "Chịu trách nhiệm phát triển hệ thống quản trị nội bộ doanh nghiệp Boffice và hệ sinh thái landing page / website WordPress.",
      en: "Responsible for developing internal enterprise ERP systems and landing page / WordPress website ecosystems.",
    },
    bullets: [
      {
        vi: "Phát triển và duy trì hệ thống quản lý nội bộ bằng React.js và TypeScript, phục vụ hơn 200 người dùng.",
        en: "Developed and maintained internal management ERP platform with React.js & TypeScript for 200+ users.",
      },
      {
        vi: "Phát triển landing page và website bằng React.js, Next.js, WordPress; tùy chỉnh theme/plugin WordPress.",
        en: "Built landing pages and websites with React.js, Next.js, and WordPress; customized themes and plugins.",
      },
      {
        vi: "Chuyển thiết kế Figma thành responsive UI; quản lý state bằng Redux/Zustand và xây dựng giao diện với Tailwind CSS, Sass.",
        en: "Converted Figma designs into responsive UI; managed global state with Redux/Zustand and styled with Tailwind CSS, Sass.",
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Sass",
      "WordPress",
    ],
  },
] as const;

export const interests = [
  {
    icon: "Sparkles",
    color: "#10b981",
    label: {
      vi: "AI & LLM (Cursor, Claude, MCP)",
      en: "AI & LLM (Cursor, Claude, MCP)",
    },
  },
  {
    icon: "Zap",
    color: "#f59e0b",
    label: { vi: "Tối ưu hiệu năng Web", en: "Web Performance" },
  },
  {
    icon: "Smartphone",
    color: "#0068ff",
    label: { vi: "Zalo Mini App & Mobile-First", en: "Zalo Mini App & Mobile" },
  },
  {
    icon: "Code2",
    color: "#5b8cff",
    label: { vi: "Clean Code & Architecture", en: "Clean Code & Architecture" },
  },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/vinhtq039", icon: "Github" },
  { label: "Email", href: "mailto:vinhtq039@gmail.com", icon: "Mail" },
  { label: "Zalo", href: "https://zalo.me/0368666407", icon: "Smartphone" },
  // { label: "Bvote", href: "https://bvote.vn", icon: "Globe" },
  // { label: "Lideco", href: "https://lideco.vn", icon: "FileText" },
] as const;
