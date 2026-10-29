"use client";

import { ArrowLeft, Download, Globe, Printer } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/data/portfolio";

// Dữ liệu CV đồng bộ 100% với file CV_TRAN_QUANG_VINH.pdf trong thư mục public
const cvData = {
  name: {
    vi: "Trần Quang Vĩnh",
    en: "Tran Quang Vinh",
  },
  role: {
    vi: "Kỹ sư Full-Stack · Hà Nội, Việt Nam",
    en: "Full-Stack Engineer · Hanoi, Vietnam",
  },
  contacts: {
    phone: {
      label: { vi: "điện thoại", en: "phone" },
      value: "+84 368666407",
      href: "tel:+84368666407",
    },
    email: {
      label: { vi: "email", en: "email" },
      value: "vinhtq039@gmail.com",
      href: "mailto:vinhtq039@gmail.com",
    },
    github: {
      label: { vi: "github", en: "github" },
      value: "@vinhtq",
      href: "https://github.com/vinhtq",
    },
    location: {
      label: { vi: "địa chỉ", en: "location" },
      value: { vi: "Hà Nội, Việt Nam", en: "Hanoi, Vietnam" },
    },
  },
  summary: {
    title: { vi: "GIỚI THIỆU", en: "PROFESSIONAL SUMMARY" },
    content: {
      vi: "Tôi là Fullstack Developer có kinh nghiệm phát triển frontend từ 06/2022 và trực tiếp xây dựng frontend bằng ReactJS, backend bằng NestJS cho May Academy Exam. Có kinh nghiệm sâu với hệ thống quản trị nội bộ, Zalo Mini App và website WordPress; tích hợp API, phát triển giao diện responsive, tối ưu hiệu năng và ứng dụng AI trong phát triển phần mềm.",
      en: "Full-Stack Developer with frontend development experience since June 2022, directly building frontends with ReactJS and backends with NestJS for May Academy Exam. Deep production experience with internal management systems, Zalo Mini Apps, and WordPress; API integration, responsive UI development, performance optimization, and practical AI adoption.",
    },
  },
  highlights: {
    title: { vi: "ĐIỂM NỔI BẬT", en: "KEY HIGHLIGHTS" },
    items: [
      {
        metric: "40%:",
        text: {
          vi: "Giảm thời gian tải trang bằng code splitting và lazy loading.",
          en: "Page load time reduction achieved through code splitting and lazy loading.",
        },
      },
      {
        metric: "30%:",
        text: {
          vi: "Rút ngắn thời gian phát triển tính năng nhờ component library tái sử dụng.",
          en: "Faster feature delivery cycles via standardized reusable component libraries.",
        },
      },
      {
        metric: "Bvote:",
        text: {
          vi: "Giao diện đa thiết bị hỗ trợ hơn 1.000 người tham gia đồng thời.",
          en: "Multi-device UI supporting 1,000+ concurrent attendees in real time.",
        },
      },
    ],
  },
  experience: {
    title: { vi: "KINH NGHIỆM LÀM VIỆC", en: "WORK EXPERIENCE" },
    items: [
      {
        role: "Frontend Developer · Bvote",
        period: { vi: "01/2026 – Hiện tại", en: "01/2026 – Present" },
        bullets: [
          {
            vi: "Phát triển giao diện bỏ phiếu real-time, hiển thị kết quả và tối ưu đa thiết bị cho hơn 1.000 người tham gia đồng thời.",
            en: "Developed real-time voting interface, live result tally, and multi-device optimization for 1,000+ concurrent attendees.",
          },
          {
            vi: "Tích hợp video conference/chat và dashboard quản lý cổ đông, kết quả biểu quyết, cấu hình chức năng.",
            en: "Integrated video conference/chat and shareholder administrative dashboards for voting result management.",
          },
          {
            vi: "Trực tiếp phát triển Zalo Mini App (Neobiotech): tích hợp Zalo OAuth (đăng nhập bằng Zalo), Zalo Pay, Zalo Notification, quét QR và trực tiếp quản lý quy trình submit xét duyệt đưa lên Zalo Mini App Store.",
            en: "Directly built Neobiotech Zalo Mini App: integrated Zalo OAuth, Zalo Pay, Zalo Notification, QR scan, and managed store submission.",
          },
          {
            vi: "Ứng dụng Cursor, Claude Code và MCP trong quy trình phát triển, giúp tối ưu hóa viết test case, refactor code và tăng tốc độ bàn giao tính năng.",
            en: "Leveraged Cursor, Claude Code, and MCP in dev workflows, accelerating feature delivery, refactoring, and test generation.",
          },
        ],
        tags: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Zalo Mini App SDK",
          "Zalo Pay",
          "Cursor",
          "Claude Code",
          "REST API",
        ],
      },
      {
        role: "Frontend Developer · Bytesoft Solutions",
        period: { vi: "06/2022 – 12/2025", en: "06/2022 – 12/2025" },
        bullets: [
          {
            vi: "Phát triển và duy trì hệ thống quản lý nội bộ bằng React.js và TypeScript, phục vụ hơn 200 người dùng.",
            en: "Developed and maintained internal enterprise ERP management platform using React.js and TypeScript for 200+ users.",
          },
          {
            vi: "Phát triển landing page và website bằng React.js, Next.js, WordPress; tùy chỉnh theme/plugin WordPress.",
            en: "Engineered high-converting landing pages and websites with React.js, Next.js, and WordPress; customized themes and plugins.",
          },
          {
            vi: "Chuyển thiết kế Figma thành responsive UI; quản lý state bằng Redux/Zustand và xây dựng giao diện với Tailwind CSS, Sass.",
            en: "Converted Figma designs into pixel-perfect responsive UI; managed global state with Redux/Zustand and styled with Tailwind CSS, Sass.",
          },
        ],
        tags: [
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
    ],
  },
  projects: {
    title: { vi: "DỰ ÁN", en: "PROJECTS" },
    items: [
      {
        title: {
          vi: "Zalo Mini App Neobiotech · Ứng dụng Zalo Mini App doanh nghiệp",
          en: "Neobiotech Zalo Mini App · Enterprise Mini App",
        },
        period: { vi: "01/2026 – Hiện tại", en: "01/2026 – Present" },
        bullets: [
          {
            vi: "Phát triển giao diện Zalo Mini App Neobiotech tối ưu trải nghiệm mobile-first, mượt mà và thân thiện với người dùng theo tiêu chuẩn ZaUI.",
            en: "Built mobile-first, responsive ZaUI interface for Neobiotech dental catalog and client booking.",
          },
          {
            vi: "Tích hợp các tính năng của Zalo: Zalo OAuth (đăng nhập bằng tài khoản Zalo), Zalo Pay, Zalo Notification, quét QR.",
            en: "Integrated Zalo ecosystem features: Zalo OAuth login, Zalo Pay, notifications, and QR scanning.",
          },
          {
            vi: "Quản lý quy trình build, test (Development/Testing) và submit hồ sơ xét duyệt đưa lên Zalo Mini App Store.",
            en: "Managed build and test environments, successfully submitting the app for review on Zalo Mini App Store.",
          },
        ],
        tags: [
          "ReactJS",
          "Zalo Mini App SDK",
          "TypeScript",
          "Tailwind CSS",
          "Zalo Pay",
          "Zalo OAuth",
          "REST API",
        ],
      },
      {
        title: {
          vi: "May Academy Exam · Nền tảng thi trực tuyến & quản lý trường học",
          en: "May Academy Exam · Online Exam & School Management",
        },
        period: null,
        bullets: [
          {
            vi: "Tổng quan: Nền tảng thi trực tuyến kết hợp quản lý trường học.",
            en: "Overview: Online testing platform integrated with comprehensive school management.",
            isBoldPrefix: true,
          },
          {
            vi: "Frontend: Trực tiếp phát triển toàn bộ giao diện và luồng nghiệp vụ bài thi bằng ReactJS.",
            en: "Frontend: Directly developed complete examination UI and test execution flow with ReactJS.",
            isBoldPrefix: true,
          },
          {
            vi: "Backend: Xây dựng hệ thống API NestJS, xử lý logic chấm điểm, nghiệp vụ dữ liệu và kết nối cơ sở dữ liệu.",
            en: "Backend: Built scalable NestJS API services, automated grading logic, and data layer.",
            isBoldPrefix: true,
          },
          {
            vi: "Tích hợp OpenAI/Claude API kết hợp RAG & pgvector để tự động tạo ngân hàng đề thi, giải thích đáp án thông minh và hỗ trợ chấm bài tự luận cho giáo viên.",
            en: "Integrated OpenAI/Claude API with RAG & pgvector to generate question banks, intelligent answer explanations, and essay grading support.",
            isBoldPrefix: false,
          },
        ],
        tags: [
          "ReactJS",
          "NestJS",
          "OpenAI API",
          "Claude API",
          "RAG",
          "pgvector",
          "PostgreSQL",
        ],
      },
      {
        title: {
          vi: "Bvote · Hội nghị cổ đông & Nền tảng bỏ phiếu trực tuyến",
          en: "Bvote · Online Voting & Shareholder Meetings",
        },
        period: { vi: "01/2026 – Hiện tại", en: "01/2026 – Present" },
        link: "bvote.vn",
        bullets: [
          {
            vi: "Phát triển giao diện bỏ phiếu real-time, hiển thị kết quả và tối ưu đa thiết bị cho hơn 1.000 người tham gia đồng thời.",
            en: "Built high-throughput real-time voting interface and live tally display for 1,000+ simultaneous attendees.",
          },
          {
            vi: "Tích hợp video conference/chat và dashboard quản lý cổ đông, kết quả biểu quyết, cấu hình chức năng.",
            en: "Integrated real-time video conferencing, chat, and shareholder administration consoles.",
          },
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "WebSocket",
          "REST API",
        ],
      },
      {
        title: {
          vi: "Boffice · Hệ thống quản trị nội bộ doanh nghiệp",
          en: "Boffice · Enterprise Internal Operations ERP",
        },
        period: { vi: "2023", en: "2023" },
        bullets: [
          {
            vi: "Phát triển dashboard real-time, trực quan hóa dữ liệu và module quản lý dự án với Gantt chart/task tracking.",
            en: "Engineered real-time analytics dashboard and project management module with Gantt charts and task tracking.",
          },
          {
            vi: "Tích hợp quản lý nhân sự, chấm công, KPI và tối ưu cho hơn 200 người dùng đồng thời.",
            en: "Integrated human resource, attendance, and KPI tracking optimized for 200+ concurrent enterprise users.",
          },
        ],
        tags: [
          "ReactJS",
          "TypeScript",
          "Styled Components",
          "WebSocket",
          "REST API",
        ],
      },
      {
        title: {
          vi: "Website WordPress · Lideco.vn và các dự án khác",
          en: "WordPress Websites · Lideco.vn & Client Projects",
        },
        period: null,
        link: "lideco.vn",
        bullets: [
          {
            vi: "Phát triển, nâng cấp, duy trì và tùy chỉnh giao diện/theme/plugin cho Lideco.vn cùng nhiều website WordPress khác.",
            en: "Developed, customized, and maintained WordPress themes and plugins for Lideco.vn and high-traffic corporate portals.",
          },
        ],
        tags: ["WordPress", "PHP", "HTML5", "CSS3", "Theme Customization"],
      },
    ],
  },
  skills: {
    title: { vi: "KỸ NĂNG", en: "TECHNICAL SKILLS" },
    categories: [
      {
        name: "Frontend",
        tags: [
          "ReactJS",
          "Next.js",
          "Vue.js",
          "Zalo Mini App",
          "TypeScript",
          "JavaScript (ES6)",
          "HTML5",
          "CSS3",
          "Sass",
          "Tailwind CSS",
          "Redux",
          "Zustand",
          "Styled Components",
        ],
      },
      {
        name: "Backend",
        tags: ["Node.js", "NestJS", "RESTful API", "GraphQL", "WebSocket"],
      },
      {
        name: "WordPress",
        tags: [
          "Theme Development",
          "Plugin Customization",
          "Nâng cấp & Duy trì Website",
        ],
      },
      {
        name: "AI / RAG",
        tags: [
          "OpenAI API",
          "Claude API",
          "Prompt Engineering",
          "RAG",
          "MCP",
          "Claude Code",
          "Cursor",
        ],
      },
      {
        name: { vi: "Công cụ", en: "Tools" },
        tags: ["Git/GitHub", "Webpack", "Vite", "npm", "yarn"],
      },
    ],
  },
  education: {
    title: { vi: "HỌC VẤN VÀ CHỨNG CHỈ", en: "EDUCATION & CERTIFICATIONS" },
    items: [
      {
        school: "FPT Polytechnic",
        period: "(2019 – 2021)",
        detail: {
          vi: "Chuyên ngành Thiết kế Website / Công nghệ thông tin",
          en: "Web Design & Information Technology",
        },
      },
    ],
  },
};

export function CvViewer() {
  const [locale, setLocale] = useState<Locale>("vi");
  const isVi = locale === "vi";

  const toggleLocale = () => {
    setLocale((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3f5] dark:bg-[#0c0d0e] text-[#1e293b] antialiased">
      {/* Top Floating App Bar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/90 bg-white/95 dark:border-zinc-800 dark:bg-zinc-950/90 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>{isVi ? "← Portfolio" : "← Back to Portfolio"}</span>
          </Link>

          {/* Document Name matching PDF exact title */}
          <div className="hidden sm:block font-mono text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-[280px] md:max-w-none">
            {isVi
              ? "sơ yếu lý lịch — tran-quang-vinh.pdf"
              : "resume — tran-quang-vinh.pdf"}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 sm:px-2.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
              title={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
            >
              <Globe size={13} />
              <span>{isVi ? "EN" : "VI"}</span>
            </button>

            <a
              href={
                isVi ? "/CV_TRAN_QUANG_VINH.pdf" : "/CV_TRAN_QUANG_VINH_EN.pdf"
              }
              download={
                isVi ? "CV_TRAN_QUANG_VINH.pdf" : "CV_TRAN_QUANG_VINH_EN.pdf"
              }
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 sm:px-3 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors shadow-2xs whitespace-nowrap shrink-0"
              title={isVi ? "Tải PDF" : "Download PDF"}
            >
              <Download size={13} className="shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">
                {isVi ? "Tải PDF" : "Download PDF"}
              </span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex h-8 items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 sm:px-3.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors shadow-2xs whitespace-nowrap shrink-0"
              title={isVi ? "In" : "Print"}
            >
              <Printer size={13} className="shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">
                {isVi ? "In" : "Print"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* CV Paper Workspace */}
      <main className="py-4 sm:py-8 px-2.5 sm:px-6 print:p-0">
        <article className="mx-auto max-w-[820px] bg-white text-[#1e293b] shadow-xl border border-zinc-200/90 rounded-[2px] p-5 sm:p-10 md:p-14 font-sans print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none">
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b-[1.5px] border-[#111827]">
            <div>
              <h1 className="text-2xl sm:text-[1.85rem] font-bold tracking-tight text-[#111827] leading-none">
                {isVi ? cvData.name.vi : cvData.name.en}
              </h1>
              <p className="mt-2 text-[.88rem] sm:text-[.92rem] font-normal text-[#6b7280]">
                {isVi ? cvData.role.vi : cvData.role.en}
              </p>
            </div>

            {/* Contacts Table in Consolas Monospace - Perfectly aligned two columns like reference */}
            <div className="font-mono text-xs sm:text-[.82rem] leading-[1.65] grid grid-cols-[auto_auto] gap-x-3.5 sm:gap-x-5 gap-y-1 sm:ml-auto w-fit text-left">
              <span className="text-[#64748b]">
                {isVi
                  ? cvData.contacts.phone.label.vi
                  : cvData.contacts.phone.label.en}
              </span>
              <a
                href={cvData.contacts.phone.href}
                className="text-[#111827] hover:underline hover:text-blue-600 break-all"
              >
                {cvData.contacts.phone.value}
              </a>

              <span className="text-[#64748b]">
                {isVi
                  ? cvData.contacts.email.label.vi
                  : cvData.contacts.email.label.en}
              </span>
              <a
                href={cvData.contacts.email.href}
                className="text-[#111827] hover:underline hover:text-blue-600 break-all"
              >
                {cvData.contacts.email.value}
              </a>

              <span className="text-[#64748b]">
                {isVi
                  ? cvData.contacts.github.label.vi
                  : cvData.contacts.github.label.en}
              </span>
              <a
                href={cvData.contacts.github.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#111827] hover:underline hover:text-blue-600 break-all"
              >
                {cvData.contacts.github.value}
              </a>

              <span className="text-[#64748b]">
                {isVi
                  ? cvData.contacts.location.label.vi
                  : cvData.contacts.location.label.en}
              </span>
              <span className="text-[#111827]">
                {isVi
                  ? cvData.contacts.location.value.vi
                  : cvData.contacts.location.value.en}
              </span>
            </div>
          </header>

          {/* Section: GIỚI THIỆU */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-2.5 font-sans">
              {isVi ? cvData.summary.title.vi : cvData.summary.title.en}
            </h2>
            <p className="text-[.86rem] leading-[1.62] text-[#374151] text-justify">
              {isVi ? cvData.summary.content.vi : cvData.summary.content.en}
            </p>
          </section>

          {/* Section: ĐIỂM NỔI BẬT */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-2.5 font-sans">
              {isVi ? cvData.highlights.title.vi : cvData.highlights.title.en}
            </h2>
            <ul className="space-y-1 text-[.86rem] leading-[1.58] text-[#374151]">
              {cvData.highlights.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#9ca3af] select-none">–</span>
                  <span>
                    <strong className="font-semibold text-[#111827] mr-1">
                      {item.metric}
                    </strong>
                    {isVi ? item.text.vi : item.text.en}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: KINH NGHIỆM LÀM VIỆC */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-3.5 font-sans">
              {isVi ? cvData.experience.title.vi : cvData.experience.title.en}
            </h2>

            {cvData.experience.items.map((job, idx) => (
              <div key={idx} className="mb-4.5 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-[.88rem] font-bold text-[#111827]">
                    {job.role}
                  </div>
                  <div className="text-xs font-mono text-[#6b7280]">
                    {isVi ? job.period.vi : job.period.en}
                  </div>
                </div>

                <ul className="mt-1.5 space-y-1 text-[.84rem] sm:text-[.85rem] leading-[1.56] text-[#374151]">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#9ca3af] select-none">–</span>
                      <span>{isVi ? bullet.vi : bullet.en}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-[3px] border border-[#e2e8f0] bg-[#f8fafc] px-2 py-0.5 font-mono text-[.7rem] text-[#1e293b] leading-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section: DỰ ÁN */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-3.5 font-sans">
              {isVi ? cvData.projects.title.vi : cvData.projects.title.en}
            </h2>

            {cvData.projects.items.map((proj, idx) => (
              <div key={idx} className="mb-4.5 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-[.88rem] font-bold text-[#111827]">
                      {isVi ? proj.title.vi : proj.title.en}
                    </span>
                    {proj.link && (
                      <a
                        href={`https://${proj.link}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block sm:inline sm:ml-2 text-xs font-mono text-blue-600 hover:underline"
                      >
                        {proj.link}
                      </a>
                    )}
                  </div>
                  {proj.period && (
                    <div className="text-xs font-mono text-[#6b7280]">
                      {isVi ? proj.period.vi : proj.period.en}
                    </div>
                  )}
                </div>

                <ul className="mt-1.5 space-y-1 text-[.84rem] sm:text-[.85rem] leading-[1.56] text-[#374151]">
                  {proj.bullets.map((bullet, bIdx) => {
                    const text = isVi ? bullet.vi : bullet.en;
                    if (bullet.isBoldPrefix && text.includes(":")) {
                      const [prefix, ...rest] = text.split(":");
                      return (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#9ca3af] select-none">–</span>
                          <span>
                            <strong className="font-semibold text-[#111827] mr-1">
                              {prefix}:
                            </strong>
                            {rest.join(":")}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#9ca3af] select-none">–</span>
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Tech Pills */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-[3px] border border-[#e2e8f0] bg-[#f8fafc] px-2 py-0.5 font-mono text-[.7rem] text-[#1e293b] leading-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section: KỸ NĂNG */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-2.5 font-sans">
              {isVi ? cvData.skills.title.vi : cvData.skills.title.en}
            </h2>
            <div className="space-y-2.5">
              {cvData.skills.categories.map((cat, idx) => {
                const catName =
                  typeof cat.name === "string"
                    ? cat.name
                    : isVi
                      ? cat.name.vi
                      : cat.name.en;
                return (
                  <div key={idx}>
                    <div className="text-[.82rem] font-bold text-[#111827] mb-1 font-sans">
                      {catName}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-[3px] border border-[#e2e8f0] bg-[#f8fafc] px-2 py-0.5 font-mono text-[.7rem] text-[#1e293b] leading-tight"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: HỌC VẤN VÀ CHỨNG CHỈ */}
          <section className="mt-5">
            <h2 className="text-[.76rem] font-bold uppercase tracking-wider text-[#111827] border-b border-[#cbd5e1] pb-1 mb-2.5 font-sans">
              {isVi ? cvData.education.title.vi : cvData.education.title.en}
            </h2>
            <ul className="space-y-1 text-[.86rem] leading-[1.58] text-[#374151]">
              {cvData.education.items.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#9ca3af] select-none">–</span>
                  <span className="italic">
                    <strong className="font-semibold text-[#111827] not-italic mr-1">
                      {edu.school}
                    </strong>
                    {edu.period}
                    <span className="not-italic text-[#6b7280] ml-2 font-normal">
                      · {isVi ? edu.detail.vi : edu.detail.en}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
