export interface CaseStudySection {
  title: string;
  badge?: string;
  points: string[];
}

export interface ProjectItem {
  presentation?: {
    fullTitle: string;
    secondaryStatus?: string;
    detailRole?: string;
    action: string;
    websiteLabel?: string;
    compactSections?: boolean;
    cardPreview?: { src: string; width: number; height: number; alt: string; caption: string };
    brandVisual?: { src: string; width: number; height: number; alt: string; caption: string };
    previews?: { src: string; width: number; height: number; caption: string; alt: string }[];
    architectureTitle?: string;
    architectureSteps?: string[];
    architectureNote?: string;
    technologies?: string[];
    links?: { label: string; url: string; note?: string }[];
  };
  id: string;
  number: string;
  title: string;
  headline: string;
  category: string;
  role: string;
  status: string;
  location: string;
  countryBadge?: string;
  bilingualBadge?: string;
  coverImage?: string;
  coverAlt?: string;
  coverCaption?: string;
  cardStatus?: string;
  stack: string[];
  summary: string;
  detailedDescription: string[];
  workflowStages?: string[];
  quickFixWorkflow?: string[];
  modules?: string[];
  adminCapabilities?: string[];
  technicianCapabilities?: string[];
  engineeringHighlights: string[];
  caseStudySections?: CaseStudySection[];
  metrics?: { label: string; value: string }[];
  isUpcoming?: boolean;
  proposedStack?: { category: string; tech: string }[];
  link: string | null;
  githubUrl: string | null;
  statusNote: string;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    "id": "magnavolt-erp",
    "number": "01",
    "title": "MAGNAVOLT",
    "headline": "Business Website & Service Management Platform",
    "category": "Client Project · Industrial Equipment & Technical Services",
    "role": "Sole Full-Stack Developer",
    "status": "Deployed · Ongoing Maintenance",
    "location": "United Arab Emirates",
    "countryBadge": "UAE · Client Project",
    "stack": [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "MySQL",
      "Docker"
    ],
    "summary": "Designed, developed and deployed a corporate website and service-management platform for a UAE technical-services business, connecting service requests, technician workflows, customer records, quotations, invoicing and payment tracking.",
    "detailedDescription": [
      "I designed, developed and deployed MAGNAVOLT’s public website and service-management platform as the sole full-stack developer, and continue to maintain it."
    ],
    "engineeringHighlights": [],
    "link": "https://magnavoltuae.com/",
    "githubUrl": null,
    "statusNote": "Production deployment with ongoing maintenance.",
    "caseStudySections": [
      {
        "title": "Business problem",
        "points": [
          "MAGNAVOLT Technical Services L.L.C - S.P.C needed to connect service, technician, customer, commercial and administrative records while presenting its industrial equipment and technical services publicly."
        ]
      },
      {
        "title": "My contribution",
        "points": [
          "Created the original application design and codebase as the sole developer, deployed the project and continue to maintain it.",
          "Refined responsive administration and mobile-oriented technician interfaces, customer/company synchronization, staff lifecycle safeguards and authentication sessions.",
          "Improved QuestPDF generation by embedding branding assets, avoiding dependencies on developer-machine file paths."
        ]
      },
      {
        "title": "Main workflows and capabilities",
        "points": [
          "Public website: services, spare parts, refurbished machinery, service requests, company information and contact.",
          "Operations: service requests, diagnosis, assignment, job-status progression and technician workflows.",
          "Commercial records: customers and company accounts, quotations, PDFs, invoices, VAT calculations, partial payments, balances, financial account views and customer statements.",
          "Inventory and administration: spare-parts catalogue, stock tracking, supplier orders, job allocations, staff access, audit history and notifications.",
          "These are documented application capabilities; adoption of every individual module in production has not been established."
        ]
      },
      {
        "title": "Architecture and engineering decisions",
        "points": [
          "React frontend → ASP.NET Core API → MySQL, with QuestPDF for business documents. Docker Compose runs on an Ubuntu VPS with Nginx and HTTPS.",
          "Relational integrity connects service, customer, inventory and financial records. Business rules and financial calculations are enforced by the backend.",
          "Guarded deletion preserves operational history; staff can be deactivated and reactivated. Persistent database storage supports application releases, and transactional document-number allocation protects numbering.",
          "JWT authorization includes refresh-token/session lifecycle handling, expired-token handling and session revocation."
        ]
      },
      {
        "title": "Delivered outcome and verification",
        "points": [
          "A deployed corporate website and operations platform that brings service, commercial and administrative workflows into one connected application.",
          "Recorded checks include frontend/backend builds and static checks, financial workflows, staff lifecycle contract and browser checks, session lifecycle checks, six business-document types, responsive layouts and a backup/restore test with matching row counts.",
          "September 26, 2026 deployment records reported successful HTTP responses and healthy services. These historical checks do not establish current uptime or verification of every production feature.",
          "The owner confirms production deployment and ongoing maintenance. Quantified business impact and a formal support SLA have not been established."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "MAGNAVOLT — Business Website & Service Management Platform",
      "cardPreview": {
        "src": "/projects/magnavolt/website-home.jpg",
        "width": 1440,
        "height": 1000,
        "caption": "Public website — homepage",
        "alt": "MAGNAVOLT public homepage with navigation, technical-services introduction and service request controls."
      },
      "action": "View Case Study",
      "architectureTitle": "System architecture",
      "architectureSteps": [
        "React frontend",
        "ASP.NET Core API",
        "MySQL"
      ],
      "architectureNote": "QuestPDF business documents · Docker Compose · Ubuntu VPS · Nginx · HTTPS",
      "technologies": [
        "React",
        "Vite",
        "TypeScript",
        "ASP.NET Core Web API / .NET 10",
        "Entity Framework Core / Pomelo MySQL provider",
        "MySQL 8",
        "JWT / role-based authorization",
        "QuestPDF",
        "Docker / Docker Compose",
        "Nginx / Ubuntu VPS",
        "DigitalOcean / HTTPS",
        "Git / GitHub"
      ],
      "links": [
        {
          "label": "View Website",
          "url": "https://magnavoltuae.com/"
        },
        {
          "label": "Operations Portal",
          "url": "https://app.magnavoltuae.com/",
          "note": "Requires authorized access; not a public demo."
        }
      ]
    }
  },
  {
    "id": "gem-bid-compliance",
    "number": "02",
    "title": "AI-Assisted Bid Compliance Platform",
    "headline": "",
    "category": "Upcoming Research & Design Project",
    "role": "Research & System Design",
    "status": "Research & Design",
    "location": "GeM procurement context · India",
    "stack": [
      "React",
      "Python/FastAPI",
      "MongoDB"
    ],
    "summary": "Researching and designing an AI-assisted platform for reviewing bidder documents against tender eligibility requirements, combining proposed document extraction, rule-based checks and traceable evidence for human review.",
    "detailedDescription": [
      "An upcoming AI-assisted procurement decision-support platform designed to help evaluators review bidder documents against tender eligibility requirements. The proposed approach combines information extraction, structured validation and deterministic rule-based checks, with evidence traceability and human oversight."
    ],
    "engineeringHighlights": [],
    "isUpcoming": true,
    "link": null,
    "githubUrl": null,
    "statusNote": "Coming Soon · Implementation Not Started",
    "caseStudySections": [
      {
        "title": "Current stage",
        "points": [
          "Research & Design — Pre-Implementation. Currently in research, planning and technical learning. Application implementation has not started; no working prototype or deployed demo is available.",
          "The research paper is being prepared; it has not been submitted, accepted, published or peer-reviewed."
        ]
      },
      {
        "title": "Intended problem and audience",
        "points": [
          "The proposed platform aims to help procurement officers, bid evaluators and organizations compare bidder documents against tender eligibility requirements, initially in contexts such as India’s Government e-Marketplace.",
          "No official GeM affiliation, certification, API integration or government-registry connection is established."
        ]
      },
      {
        "title": "My current contribution",
        "points": [
          "Research, system design, technical learning and preparation, project planning and research paper preparation.",
          "I am listed as first author alongside other student authors and an assistant professor. Neither I nor my teammates have written or run application code."
        ]
      },
      {
        "title": "Proposed workflow — not yet implemented",
        "points": [
          "1. Upload a tender PDF and extract candidate eligibility requirements.",
          "2. Have an administrator review, correct and approve the requirements.",
          "3. Upload bidder documents and extract financial values, dates, certificates and eligibility information.",
          "4. Validate structured data, then apply deterministic Python rules to the approved requirements.",
          "5. Present preliminary findings with source-document and page references, compare bidders and generate a PDF report.",
          "Planned outputs: Compliant · Non-Compliant · Needs Review. These would support human review, not final official procurement decisions."
        ]
      },
      {
        "title": "Proposed architecture and stack",
        "points": [
          "The proposed pipeline combines PDF processing, AI-assisted extraction, structured validation, deterministic rules, traceable evidence, bidder comparison and PDF reporting.",
          "Gemini API is a candidate extraction provider, not a confirmed integration. Local models and hybrid approaches may also be evaluated."
        ]
      },
      {
        "title": "Planned evaluation and next steps",
        "points": [
          "The evaluation plan includes eight tender scenarios and 32 bidder dossiers. Proposed measurements cover extraction and compliance-check accuracy, processing and review time, failures and ambiguous inputs. No experiments or measured results are confirmed.",
          "Research challenges include scanned PDFs, varying layouts, complex financial tables, ambiguous clauses, conflicting or missing information, sensitive-document protection, AI API cost/availability and reliable ground truth.",
          "Next: complete technical preparation; finalize scope, architecture and data contracts; begin implementation; test modules and demonstrate a controlled end-to-end workflow; conduct the planned evaluation; consider deployment after verification.",
          "OCR, multilingual processing, local vision-language models, advanced financial-table handling and authorized government-data integrations are possible later extensions, not committed scope."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "AI-Powered Integrated Bid Compliance Verification Platform for GeM Procurement",
      "secondaryStatus": "Coming Soon · Implementation Not Started",
      "detailRole": "Research, System Design & Technical Preparation",
      "action": "View Project Concept",
      "architectureTitle": "Proposed Workflow — Not Yet Implemented",
      "architectureSteps": [
        "Tender / bidder PDFs",
        "PDF processing & AI-assisted extraction",
        "Structured validation",
        "Deterministic rules",
        "Preliminary findings, evidence & reports"
      ],
      "architectureNote": "Proposed decision support with human review.",
      "technologies": [
        "React",
        "Python / FastAPI",
        "PyMuPDF / pdfplumber",
        "Pydantic",
        "Python rule engine",
        "MongoDB",
        "ReportLab",
        "Docker",
        "Gemini API (candidate provider)"
      ]
    }
  },
  {
    "id": "dh-profiles",
    "number": "03",
    "headline": "",
    "location": "Oman",
    "stack": [],
    "engineeringHighlights": [],
    "link": null,
    "githubUrl": null,
    "title": "DH PROFILES LLC — Corporate Website & Brand Identity",
    "category": "Client Project · Corporate Website, Brand Identity & Digital Presence",
    "role": "Brand Identity, Product Research & Website Development",
    "status": "In Progress",
    "statusNote": "Website deployment and remaining deliverables are in progress.",
    "summary": "Building a professional digital presence for an Oman-based metal products manufacturer, from approved brand identity and product research to corporate website planning and development.",
    "detailedDescription": [
      "DH PROFILES LLC is an ongoing client project for an Oman-based manufacturer of metal roofing, cladding and structural steel products. The aim is a consistent, product-focused digital presence for construction companies, contractors, procurement teams and industrial businesses.",
      "My work spans branding, product research, planning and website development. The logo presentation has been approved; company-profile preparation, social media setup and website planning and implementation remain in progress."
    ],
    "caseStudySections": [
      {
        "title": "Completed — brand identity",
        "points": [
          "Designed 12 logo variations in Inkscape, covering horizontal, stacked and icon-only compositions, primary and reverse variants, and black-and-white monochrome versions. Organized the variations into named groups.",
          "Documented the approved colour system and prepared a six-slide logo presentation, which the client approved.",
          "Brand colours: Navy #072E53 · Gray #595D60 · Reverse Light Gray #B9C0C6 · White #FFFFFF · Black #000000."
        ]
      },
      {
        "title": "Completed — research and planning",
        "points": [
          "Prepared product research and product-master documentation, organized documented categories and available specifications, and reviewed manufacturer and competitor websites to guide the proposed structure and content. Technical resources and unverified capabilities are kept separate from confirmed company information."
        ]
      },
      {
        "title": "Product context",
        "points": [
          "Documented categories include corrugated GI and aluminium profile sheets; C & Z purlins; GI decking / trapezoidal composite floor decking; roofing and cladding accessories; and chequered / hot-rolled structural steel plates."
        ]
      },
      {
        "title": "In progress — business profile and website",
        "points": [
          "Preparing the company profile and official LinkedIn, Facebook and Instagram profile information; finalizing website structure, content requirements and visual direction; and preparing implementation and deployment.",
          "Planned functionality includes a responsive company and product website, product-focused pages, contact and quotation enquiries, basic SEO and performance considerations, and a predefined contact chatbot within the agreed scope. WhatsApp contact is subject to confirmation of the official business number."
        ]
      },
      {
        "title": "Remaining work and launch",
        "points": [
          "Complete the remaining content and deliverables, implement and test the website and enquiry flow, and prepare deployment. Domain registration has been recorded, but website launch remains pending. No live website or tested enquiry delivery is claimed."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "DH PROFILES LLC — Corporate Website & Brand Identity",
      "action": "View Project",
      "compactSections": true,
      "brandVisual": {
        "src": "/projects/dh-profiles/primary-horizontal.svg",
        "width": 1866,
        "height": 843,
        "alt": "DH PROFILES LLC primary horizontal logo in navy and gray.",
        "caption": "Brand identity — primary logo"
      }
    }
  },
  {
    "id": "althaf-mattul",
    "number": "04",
    "headline": "",
    "location": "",
    "stack": [],
    "engineeringHighlights": [],
    "link": "https://althafwebsite-zeta.vercel.app/",
    "githubUrl": null,
    "title": "Althaf Mattul — Personal Brand Website",
    "category": "Client Website · Personal Branding",
    "role": "Website Development",
    "status": "Available Preview",
    "statusNote": "Website preview available.",
    "summary": "Created a personal-brand website for Althaf Mattul, presenting his professional profile, leadership roles, recognitions and expertise through dedicated sections and an inquiry interface.",
    "detailedDescription": [
      "A personal-brand website created for my client, Althaf Mattul. The supplied link is available as a website preview."
    ],
    "caseStudySections": [
      {
        "title": "Website purpose",
        "points": [
          "Present Althaf’s professional profile in one place, with dedicated sections for his biography, recognitions, leadership and expertise."
        ]
      },
      {
        "title": "My confirmed contribution",
        "points": [
          "I created the website for Althaf Mattul. The professional accomplishments presented on the site belong to the client."
        ]
      },
      {
        "title": "Main website sections",
        "points": [
          "Biography and professional introduction.",
          "Honors and awards presented in the Awards & recognition section.",
          "Leadership roles and areas of expertise.",
          "Inquiry interface for visitors."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "Althaf Mattul — Personal Brand Website",
      "cardPreview": {
        "src": "/projects/althaf-mattul/desktop-preview.jpg",
        "width": 1440,
        "height": 1000,
        "caption": "Personal brand website — homepage",
        "alt": "Althaf Mattul’s homepage with his portrait, professional introduction and section navigation."
      },
      "action": "View Project",
      "websiteLabel": "Visit Website",
      "compactSections": true,
      "previews": [
        {
          "src": "/projects/althaf-mattul/desktop-preview.jpg",
          "width": 1440,
          "height": 1000,
          "caption": "Desktop preview — professional introduction",
          "alt": "Desktop view of Althaf Mattul’s website, with his portrait, professional introduction and section navigation."
        },
        {
          "src": "/projects/althaf-mattul/mobile-preview.jpg",
          "width": 390,
          "height": 844,
          "caption": "Mobile preview — professional introduction",
          "alt": "Mobile view of Althaf Mattul’s website, showing his portrait, introduction and compact navigation."
        }
      ],
      "links": [
        {
          "label": "Visit Website",
          "url": "https://althafwebsite-zeta.vercel.app/",
          "note": "Available website preview; final production domain not confirmed."
        }
      ]
    }
  },
  {
    id: "sands-ppf",
    number: "05",
    title: "SANDS PPF",
    headline: "Warranty & Operations Platform",
    category: "FULL STACK • CUSTOM WEB PLATFORM • WARRANTY & AUTOMATION",
    role: "Full Stack Developer",
    status: "PROJECT SHOWCASE",
    cardStatus: "Project Preview",
    coverImage: "/projects/sands-ppf/arabic-homepage.png",
    coverAlt: "SANDS PPF Arabic homepage with vehicle imagery, navigation and an introduction to car protection services in Oman.",
    coverCaption: "Website preview — Arabic homepage",
    location: "Remote (Oman-based Client)",
    countryBadge: "OMAN • INTERNATIONAL PROJECT",
    bilingualBadge: "BILINGUAL • ENGLISH / ARABIC",
    stack: [
      "React",
      "TypeScript",
      "Bilingual (EN / AR)",
      "RTL Architecture",
      "REST APIs",
      "Node.js / Database",
      "JWT Authentication",
      "Google Sheets API"
    ],
    summary:
      "Developed a bilingual (English / Arabic) web platform for an Oman-based automotive business: a public self-service warranty verification portal with verified RTL layout coupled with a secured internal admin operations console and automated Google Sheets synchronization.",
    detailedDescription: [
      "Developed the website and warranty-management platform for an Oman-based automotive business, translating requirements into public and administrative interfaces.",
      "Engineered a bilingual web experience supporting both English and Arabic with native RTL directionality, localized typography, and responsive validation.",
      "Built public-facing instant warranty lookup allowing vehicle owners to verify authentic installation records in Arabic or English without manual customer-service friction.",
      "Developed an internal administrative management system powered by JWT token-based authentication and role-based permissions.",
      "Engineered automated bidirectional synchronization with Google Sheets to keep operational spreadsheets and database records aligned seamlessly."
    ],
    engineeringHighlights: [
      "Bilingual English/Arabic user experience with verified RTL layout and localization models",
      "Dual-interface architecture: public client lookup and secured admin operations",
      "Centralized warranty data schema and validation models",
      "Stateless JWT-based session security and role-guarded endpoints",
      "Google Sheets integration for synchronizing warranty records",
      "Deployment configuration and responsive cross-device layout"
    ],
    metrics: [
      { label: "Languages", value: "English + Arabic (RTL)" },
      { label: "System Tiers", value: "2 (Public + Admin)" },
      { label: "Data Pipeline", value: "Sheets Sync" }
    ],
    link: "https://sands-ppf-frontend-rbobc56xc-hadishukoor111-8206s-projects.vercel.app/ar",
    githubUrl: null,
    statusNote: "Project showcase — bilingual website and warranty platform"
  },
  {
    id: "hera-lux",
    number: "06",
    title: "HERA-LUX",
    headline: "MERN E-Commerce Platform",
    category: "INDEPENDENT PROJECT • E-COMMERCE • MERN ARCHITECTURE",
    role: "Full Stack Developer",
    status: "PROJECT COMPLETED",
    location: "Self-Directed",
    countryBadge: "INDEPENDENT ENGINEERING",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS"
    ],
    summary:
      "Comprehensive full-stack MERN e-commerce application featuring end-to-end catalogue management, transactional cart workflows, and an administrative store control center.",
    detailedDescription: [
      "Developed custom RESTful APIs in Node/Express for inventory tracking, cart mutations, and checkout calculations.",
      "Engineered MongoDB schema models for products, users, session tokens, and order state transitions.",
      "Implemented a responsive merchant administration dashboard for monitoring catalog additions and order fulfillment."
    ],
    engineeringHighlights: [
      "Custom authentication & password hashing pipeline",
      "Full shopping cart state management with persistent storage",
      "Admin dashboard with CRUD operations for product inventory",
      "REST API error handling middleware and structured JSON contracts"
    ],
    metrics: [
      { label: "Stack", value: "MongoDB + Express + React + Node" },
      { label: "Interface", value: "Storefront + Admin" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "Project Link Coming Soon"
  },
  {
    id: "compost-platform",
    number: "07",
    title: "COMPOST PLATFORM",
    headline: "Service Marketplace Architecture",
    category: "INDEPENDENT PROJECT • SERVICE MARKETPLACE • FULL STACK",
    role: "Full Stack Developer",
    status: "PROJECT COMPLETED",
    location: "Self-Directed",
    countryBadge: "INDEPENDENT ENGINEERING",
    stack: ["HTML5", "Tailwind CSS", "PHP", "MySQL", "Relational Modeling"],
    summary:
      "Two-sided service marketplace architecture facilitating discovery and booking between organic waste providers and local composting initiatives.",
    detailedDescription: [
      "Designed database schema supporting provider profiles, geographic service zones, and inbound collection requests.",
      "Built server-rendered PHP workflows for intake verification, provider discovery, and status tracking.",
      "Crafted responsive interface with Tailwind CSS focusing on fast load times and clean transaction flows."
    ],
    engineeringHighlights: [
      "Two-sided provider and customer relational database models",
      "Service request dispatch and status progression flows",
      "Form validation and server-side sanitation in PHP",
      "Lightweight, responsive mobile-first UI"
    ],
    metrics: [
      { label: "Platform", value: "Two-Sided Marketplace" },
      { label: "Backend", value: "PHP + MySQL" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "Project Link Coming Soon"
  }
];

export const SELECTED_PROJECTS_AR: ProjectItem[] = [
  {
    "id": "magnavolt-erp",
    "number": "01",
    "title": "MAGNAVOLT",
    "headline": "موقع الشركة ومنصة إدارة الخدمات",
    "category": "مشروع عميل · معدات صناعية وخدمات فنية",
    "role": "المطور الوحيد للمشروع (Full Stack)",
    "status": "منشور للإنتاج · صيانة مستمرة",
    "location": "الإمارات العربية المتحدة",
    "countryBadge": "الإمارات · مشروع عميل",
    "stack": [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "MySQL",
      "Docker"
    ],
    "summary": "صممت وطورت ونشرت موقعاً مؤسسياً ومنصة لإدارة الخدمات لشركة خدمات فنية في الإمارات، تربط طلبات الخدمة ومهام الفنيين وسجلات العملاء وعروض الأسعار والفواتير وتتبع الدفعات.",
    "detailedDescription": [
      "صممت وطورت ونشرت موقع MAGNAVOLT العام ومنصة إدارة الخدمات بصفتي المطور الوحيد للمشروع، وأواصل صيانته."
    ],
    "engineeringHighlights": [],
    "link": "https://magnavoltuae.com/",
    "githubUrl": null,
    "statusNote": "منشور للإنتاج مع صيانة مستمرة.",
    "caseStudySections": [
      {
        "title": "احتياج العمل",
        "points": [
          "احتاجت شركة MAGNAVOLT Technical Services L.L.C - S.P.C إلى ربط سجلات الخدمات والفنيين والعملاء والحسابات التجارية والإدارة، مع عرض معداتها الصناعية وخدماتها الفنية للجمهور."
        ]
      },
      {
        "title": "مساهمتي",
        "points": [
          "أنشأت التصميم الأصلي والكود البرمجي للمشروع بالكامل بصفتي المطور الوحيد، وتوليت النشر وأواصل الصيانة.",
          "حسّنت واجهات الإدارة المتجاوبة ومهام الفنيين على الجوال، ومزامنة سجلات العملاء والشركات، وضوابط إدارة الموظفين وجلسات المصادقة.",
          "حسّنت توليد مستندات QuestPDF بتضمين أصول الهوية البصرية، لإزالة الاعتماد على مسارات ملفات جهاز المطور."
        ]
      },
      {
        "title": "مسارات العمل والقدرات الرئيسية",
        "points": [
          "الموقع العام: الخدمات وقطع الغيار والآلات المجددة وطلبات الخدمة ومعلومات الشركة والتواصل.",
          "التشغيل: طلبات الخدمة والتشخيص والتعيين وتحديث حالة العمل ومهام الفنيين.",
          "السجلات التجارية: العملاء والشركات وعروض الأسعار وملفات PDF والفواتير وضريبة القيمة المضافة والدفعات الجزئية والأرصدة والحسابات المالية وكشوف العملاء.",
          "المخزون والإدارة: كتالوج قطع الغيار والمخزون وطلبات الموردين وتخصيص القطع للمهام وصلاحيات الموظفين وسجل التدقيق والإشعارات.",
          "هذه قدرات موثقة للتطبيق؛ لم يُثبت استخدام كل وحدة على حدة في بيئة الإنتاج."
        ]
      },
      {
        "title": "البنية التقنية والقرارات الهندسية",
        "points": [
          "واجهة React تتصل بواجهة ASP.NET Core API وقاعدة MySQL، مع QuestPDF للمستندات. يعمل Docker Compose على خادم Ubuntu VPS مع Nginx وHTTPS.",
          "تربط العلاقات بين البيانات سجلات الخدمات والعملاء والمخزون والماليات. يفرض الخادم قواعد العمل والحسابات المالية.",
          "يحافظ الحذف المقيد على السجل التشغيلي، مع تعطيل الموظفين وإعادة تفعيلهم. يستمر تخزين قاعدة البيانات خلال الإصدارات، وتُخصص أرقام المستندات ضمن معاملات قاعدة البيانات.",
          "تشمل المصادقة JWT والصلاحيات حسب الأدوار وإدارة رموز التجديد والجلسات ومعالجة انتهاء الرموز وإلغاء الجلسات."
        ]
      },
      {
        "title": "المخرجات والتحقق المسجل",
        "points": [
          "موقع مؤسسي ومنصة عمليات منشوران، يجمعان مسارات الخدمات والأعمال والإدارة في تطبيق مترابط.",
          "تشمل الفحوص المسجلة بناء الواجهة والخادم والفحوص الساكنة، والسيناريوهات المالية، وعقود إدارة الموظفين وفحوص المتصفح والجلسات، وستة أنواع من مستندات الأعمال، وأحجام شاشات متعددة، واختبار نسخ احتياطي واستعادة بأعداد صفوف متطابقة.",
          "أفادت سجلات النشر بتاريخ 26 سبتمبر 2026 باستجابات HTTP ناجحة وخدمات سليمة آنذاك. لا تثبت هذه الفحوص التاريخية حالة التشغيل الحالية أو التحقق من كل ميزة في الإنتاج.",
          "يؤكد المالك النشر للإنتاج والصيانة المستمرة. لا تتوفر نتائج كمية لأثر المشروع أو اتفاقية رسمية لمستوى الدعم."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "MAGNAVOLT — موقع الشركة ومنصة إدارة الخدمات",
      "cardPreview": {
        "src": "/projects/magnavolt/website-home.jpg",
        "width": 1440,
        "height": 1000,
        "caption": "الموقع العام — الصفحة الرئيسية",
        "alt": "الصفحة الرئيسية العامة لموقع MAGNAVOLT، مع التنقل ومقدمة الخدمات الفنية وأزرار طلب الخدمة."
      },
      "action": "عرض دراسة الحالة",
      "architectureTitle": "بنية النظام",
      "architectureSteps": [
        "واجهة React",
        "ASP.NET Core API",
        "MySQL"
      ],
      "architectureNote": "مستندات QuestPDF · Docker Compose · Ubuntu VPS · Nginx · HTTPS",
      "technologies": [
        "React",
        "Vite",
        "TypeScript",
        "ASP.NET Core Web API / .NET 10",
        "Entity Framework Core / Pomelo MySQL provider",
        "MySQL 8",
        "JWT / role-based authorization",
        "QuestPDF",
        "Docker / Docker Compose",
        "Nginx / Ubuntu VPS",
        "DigitalOcean / HTTPS",
        "Git / GitHub"
      ],
      "links": [
        {
          "label": "زيارة الموقع",
          "url": "https://magnavoltuae.com/"
        },
        {
          "label": "بوابة العمليات",
          "url": "https://app.magnavoltuae.com/",
          "note": "تتطلب صلاحية دخول؛ ليست عرضاً تجريبياً عاماً."
        }
      ]
    }
  },
  {
    "id": "gem-bid-compliance",
    "number": "02",
    "title": "منصة مساعدة بالذكاء الاصطناعي لمراجعة مطابقة العطاءات",
    "headline": "",
    "category": "مشروع بحث وتصميم قادم",
    "role": "البحث وتصميم النظام",
    "status": "البحث والتصميم",
    "location": "سياق مشتريات GeM · الهند",
    "stack": [
      "React",
      "Python/FastAPI",
      "MongoDB"
    ],
    "summary": "أبحث وأصمم منصة تساعد في مراجعة وثائق المتقدمين للعطاءات مقابل متطلبات الأهلية، من خلال استخراج مقترح للمعلومات وفحوص قائمة على القواعد وأدلة قابلة للتتبع لدعم المراجعة البشرية.",
    "detailedDescription": [
      "منصة قادمة لدعم قرارات المشتريات بمساعدة الذكاء الاصطناعي، تهدف إلى مساعدة المقيمين في مراجعة وثائق المتقدمين مقابل متطلبات أهلية العطاء. يجمع النهج المقترح بين استخراج المعلومات والتحقق من البيانات المنظمة والفحص بقواعد محددة، مع تتبع الأدلة والإشراف البشري."
    ],
    "engineeringHighlights": [],
    "isUpcoming": true,
    "link": null,
    "githubUrl": null,
    "statusNote": "قريباً · لم يبدأ التنفيذ البرمجي",
    "caseStudySections": [
      {
        "title": "المرحلة الحالية",
        "points": [
          "البحث والتصميم — قبل التنفيذ. العمل الحالي يشمل البحث والتخطيط والتعلم التقني. لم يبدأ تنفيذ التطبيق، ولا يتوفر نموذج أولي يعمل أو عرض منشور.",
          "الورقة البحثية قيد الإعداد؛ لم تُقدّم أو تُقبل أو تُنشر أو تخضع للتحكيم العلمي."
        ]
      },
      {
        "title": "المشكلة المستهدفة والجمهور",
        "points": [
          "تهدف المنصة المقترحة إلى مساعدة مسؤولي المشتريات ومقيمي العطاءات والمؤسسات في مقارنة وثائق المتقدمين بمتطلبات الأهلية، مع تركيز أولي على سياقات مثل منصة المشتريات الحكومية الهندية GeM.",
          "لا توجد صلة رسمية أو شهادة اعتماد أو تكامل API مع GeM أو اتصال بسجل حكومي مؤكد."
        ]
      },
      {
        "title": "مساهمتي الحالية",
        "points": [
          "البحث وتصميم النظام والتعلم والتحضير التقني وتخطيط المشروع وإعداد الورقة البحثية.",
          "اسمي مدرج كمؤلف أول إلى جانب طلاب آخرين وأستاذ مساعد. لم أكتب أنا أو زملائي أي كود للتطبيق أو نشغله حتى الآن."
        ]
      },
      {
        "title": "مسار العمل المقترح — لم يُنفذ بعد",
        "points": [
          "1. رفع ملف PDF للعطاء واستخراج متطلبات أهلية أولية.",
          "2. مراجعة المتطلبات وتصحيحها واعتمادها بواسطة مسؤول النظام.",
          "3. رفع وثائق المتقدمين واستخراج القيم المالية والتواريخ والشهادات ومعلومات الأهلية.",
          "4. التحقق من البيانات المنظمة ثم تطبيق قواعد Python محددة على المتطلبات المعتمدة.",
          "5. عرض نتائج أولية مرتبطة بالمستند والصفحة، ومقارنة المتقدمين وتوليد تقرير PDF.",
          "المخرجات المخططة: مطابق · غير مطابق · يحتاج إلى مراجعة. تدعم هذه النتائج المراجعة البشرية ولا تمثل قرارات مشتريات رسمية نهائية."
        ]
      },
      {
        "title": "البنية والتقنيات المقترحة",
        "points": [
          "يجمع المسار المقترح بين معالجة PDF والاستخراج بمساعدة الذكاء الاصطناعي والتحقق من البيانات والقواعد المحددة وتتبع الأدلة والمقارنة والتقارير.",
          "Gemini API خيار مرشح للاستخراج وليس تكاملاً مؤكداً. قد تُقيّم نماذج محلية ونهج هجينة أيضاً."
        ]
      },
      {
        "title": "التقييم المخطط والخطوات التالية",
        "points": [
          "تتضمن خطة التقييم ثمانية سيناريوهات عطاء و32 ملفاً لمتقدمين. تشمل القياسات المقترحة دقة الاستخراج وفحص المطابقة وزمن المعالجة والمراجعة والإخفاقات والتعامل مع المدخلات الغامضة. لا توجد تجارب مكتملة أو نتائج مقاسة مؤكدة.",
          "تشمل التحديات ملفات PDF الممسوحة وتنوع التخطيط والجداول المالية المعقدة وغموض الشروط وتعارض المعلومات أو نقصها وحماية الوثائق الحساسة وتكلفة خدمات الذكاء الاصطناعي وتوفرها ومراجع تقييم موثوقة.",
          "الخطوات التالية: إكمال التحضير التقني؛ تحديد النطاق والبنية وعقود البيانات؛ بدء التنفيذ؛ اختبار الوحدات وعرض مسار كامل في بيئة مضبوطة؛ إجراء التقييم المخطط؛ والنظر في النشر بعد التحقق.",
          "التعرف الضوئي على النصوص ومعالجة لغات متعددة والنماذج البصرية اللغوية المحلية ومعالجة الجداول المالية المتقدمة والتكاملات الحكومية المصرح بها اتجاهات مستقبلية محتملة وليست نطاقاً ملتزماً به."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "منصة متكاملة مدعومة بالذكاء الاصطناعي للتحقق من مطابقة العطاءات لمشتريات GeM",
      "secondaryStatus": "قريباً · لم يبدأ التنفيذ البرمجي",
      "detailRole": "البحث وتصميم النظام والتحضير التقني",
      "action": "استعراض فكرة المشروع",
      "architectureTitle": "مسار العمل المقترح — لم يُنفذ بعد",
      "architectureSteps": [
        "وثائق العطاء والمتقدمين PDF",
        "معالجة PDF والاستخراج بمساعدة الذكاء الاصطناعي",
        "التحقق من البيانات المنظمة",
        "قواعد محددة",
        "نتائج أولية وأدلة وتقارير"
      ],
      "architectureNote": "دعم مقترح للقرار مع مراجعة بشرية.",
      "technologies": [
        "React",
        "Python / FastAPI",
        "PyMuPDF / pdfplumber",
        "Pydantic",
        "Python rule engine",
        "MongoDB",
        "ReportLab",
        "Docker",
        "Gemini API (خيار مرشح)"
      ]
    }
  },
  {
    "id": "dh-profiles",
    "number": "03",
    "headline": "",
    "location": "عُمان",
    "stack": [],
    "engineeringHighlights": [],
    "link": null,
    "githubUrl": null,
    "title": "DH PROFILES LLC — موقع الشركة والهوية البصرية",
    "category": "مشروع عميل · موقع مؤسسي وهوية بصرية وحضور رقمي",
    "role": "الهوية البصرية وبحث المنتجات وتطوير الموقع",
    "status": "قيد التنفيذ",
    "statusNote": "نشر الموقع وبقية المخرجات قيد التنفيذ.",
    "summary": "أعمل على بناء حضور رقمي مهني لشركة تصنيع منتجات معدنية في عُمان، بدءاً من الهوية البصرية المعتمدة وبحث المنتجات، وصولاً إلى تخطيط الموقع المؤسسي وتطويره.",
    "detailedDescription": [
      "مشروع DH PROFILES LLC هو مشروع عميل جارٍ لشركة في عُمان تصنّع منتجات الأسقف والكسوة المعدنية والفولاذ الإنشائي. يهدف إلى حضور رقمي متسق يوضح المنتجات لشركات البناء والمقاولين وفرق المشتريات والجهات الصناعية.",
      "يشمل عملي الهوية البصرية وبحث المنتجات والتخطيط وتطوير الموقع. اعتمد العميل عرض الشعار، فيما يستمر إعداد الملف التعريفي وحسابات التواصل وتخطيط الموقع وتنفيذه."
    ],
    "caseStudySections": [
      {
        "title": "المكتمل — الهوية البصرية",
        "points": [
          "صممت 12 صيغة للشعار باستخدام Inkscape، تشمل التكوين الأفقي والرأسي والرمز المنفرد، والنسخ الأساسية والمعكوسة والأحادية بالأبيض والأسود، ونظمتها في مجموعات واضحة الأسماء.",
          "وثّقت نظام الألوان المعتمد وأعددت عرضاً للشعار من ست شرائح اعتمده العميل.",
          "ألوان الهوية: كحلي #072E53 · رمادي #595D60 · رمادي فاتح للنسخ المعكوسة #B9C0C6 · أبيض #FFFFFF · أسود #000000."
        ]
      },
      {
        "title": "المكتمل — البحث والتخطيط",
        "points": [
          "أعددت بحث المنتجات ووثائقها الرئيسية ونظمت الفئات والمواصفات المتاحة، وراجعت مواقع المصنّعين والمنافسين لتوجيه هيكل الموقع ومحتواه المقترح. تُفصل الموارد التقنية والقدرات غير المتحقق منها عن معلومات الشركة المؤكدة."
        ]
      },
      {
        "title": "سياق المنتجات",
        "points": [
          "تشمل الفئات الموثقة ألواح الصاج المجلفن والألمنيوم المموجة؛ ومدادات C وZ؛ وألواح التغطية المجلفنة للأرضيات المركبة؛ وملحقات الأسقف والكسوة؛ والألواح المعرّجة وألواح الفولاذ الإنشائي المدرفلة على الساخن."
        ]
      },
      {
        "title": "قيد التنفيذ — ملف الشركة والموقع",
        "points": [
          "إعداد الملف التعريفي وبيانات حسابات LinkedIn وFacebook وInstagram الرسمية، واستكمال هيكل الموقع ومتطلبات المحتوى والتوجه البصري، والتحضير للتنفيذ والنشر.",
          "تتضمن الوظائف المخططة موقعاً متجاوباً للشركة والمنتجات وصفحات للمنتجات واستفسارات التواصل وعروض الأسعار واعتبارات أساسية للأداء وتحسين محركات البحث وروبوت تواصل بإجابات محددة ضمن النطاق المتفق عليه. يتوقف التواصل عبر WhatsApp على تأكيد رقم الشركة الرسمي."
        ]
      },
      {
        "title": "المتبقي والإطلاق",
        "points": [
          "استكمال المحتوى والمخرجات، وتنفيذ الموقع ومسار الاستفسارات واختبارهما، والتحضير للنشر. سُجل حجز النطاق في سياق المشروع، لكن إطلاق الموقع ما زال معلقاً. لا يُقدّم الموقع بوصفه منشوراً أو تسليم الاستفسارات بوصفه مختبراً."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "DH PROFILES LLC — موقع الشركة والهوية البصرية",
      "action": "عرض المشروع",
      "compactSections": true,
      "brandVisual": {
        "src": "/projects/dh-profiles/primary-horizontal.svg",
        "width": 1866,
        "height": 843,
        "alt": "الشعار الأفقي الأساسي لشركة DH PROFILES LLC بالكحلي والرمادي.",
        "caption": "الهوية البصرية — الشعار الأساسي"
      }
    }
  },
  {
    "id": "althaf-mattul",
    "number": "04",
    "headline": "",
    "location": "",
    "stack": [],
    "engineeringHighlights": [],
    "link": "https://althafwebsite-zeta.vercel.app/",
    "githubUrl": null,
    "title": "ألطاف ماتول — موقع الهوية المهنية الشخصية",
    "category": "موقع عميل · هوية مهنية شخصية",
    "role": "تطوير الموقع",
    "status": "معاينة متاحة",
    "statusNote": "تتوفر معاينة للموقع.",
    "summary": "أنشأت موقعاً للهوية المهنية الشخصية للعميل ألطاف ماتول، يعرض ملفه المهني وأدواره القيادية وتكريماته وخبراته عبر أقسام مخصصة وواجهة للاستفسارات.",
    "detailedDescription": [
      "موقع للهوية المهنية الشخصية أنشأته لعميلي ألطاف ماتول. الرابط المرفق متاح لمعاينة الموقع."
    ],
    "caseStudySections": [
      {
        "title": "هدف الموقع",
        "points": [
          "عرض الملف المهني لألطاف في مكان واحد، مع أقسام مخصصة لسيرته وتكريماته وأدواره القيادية وخبراته."
        ]
      },
      {
        "title": "مساهمتي المؤكدة",
        "points": [
          "أنشأت الموقع للعميل ألطاف ماتول. الإنجازات المهنية المعروضة في الموقع تخص العميل."
        ]
      },
      {
        "title": "الأقسام الرئيسية للموقع",
        "points": [
          "السيرة والتعريف المهني.",
          "التكريمات والجوائز في قسم «الجوائز والتقدير».",
          "الأدوار القيادية ومجالات الخبرة.",
          "واجهة للاستفسارات من الزوار."
        ]
      }
    ],
    "presentation": {
      "fullTitle": "ألطاف ماتول — موقع الهوية المهنية الشخصية",
      "cardPreview": {
        "src": "/projects/althaf-mattul/desktop-preview.jpg",
        "width": 1440,
        "height": 1000,
        "caption": "موقع الهوية المهنية — الصفحة الرئيسية",
        "alt": "الصفحة الرئيسية لموقع ألطاف ماتول، مع صورته ومقدمته المهنية وروابط الأقسام."
      },
      "action": "عرض المشروع",
      "websiteLabel": "زيارة الموقع",
      "compactSections": true,
      "previews": [
        {
          "src": "/projects/althaf-mattul/desktop-preview.jpg",
          "width": 1440,
          "height": 1000,
          "caption": "معاينة سطح المكتب — التعريف المهني",
          "alt": "موقع ألطاف ماتول على سطح المكتب، ويعرض صورته وتعريفه المهني وروابط التنقل بين الأقسام."
        },
        {
          "src": "/projects/althaf-mattul/mobile-preview.jpg",
          "width": 390,
          "height": 844,
          "caption": "معاينة الجوال — التعريف المهني",
          "alt": "موقع ألطاف ماتول على الجوال، ويعرض صورته وتعريفه وقائمة التنقل المختصرة."
        }
      ],
      "links": [
        {
          "label": "زيارة الموقع",
          "url": "https://althafwebsite-zeta.vercel.app/",
          "note": "معاينة متاحة للموقع؛ لم يُؤكد النطاق النهائي للإنتاج."
        }
      ]
    }
  },
  {
    id: "sands-ppf",
    number: "05",
    title: "SANDS PPF",
    headline: "منصة التحقق من الضمان وإدارة العمليات",
    category: "تطوير شامل • منصة ويب مخصصة • إدارة الضمان والأتمتة",
    role: "مطور برمجيات متكامل (Full Stack)",
    status: "عرض المشروع",
    cardStatus: "معاينة المشروع",
    coverImage: "/projects/sands-ppf/arabic-homepage.png",
    coverAlt: "الصفحة الرئيسية العربية لموقع SANDS PPF، مع صورة سيارة وروابط التنقل والتعريف بخدمات حماية السيارات في عُمان.",
    coverCaption: "معاينة الموقع — الصفحة الرئيسية العربية",
    location: "عن بُعد (مشروع لشركة في سلطنة عُمان)",
    countryBadge: "عُمان • مشروع دولي",
    bilingualBadge: "ثنائي اللغة • عربي / إنجليزي",
    stack: [
      "React",
      "TypeScript",
      "ثنائي اللغة (عربي / إنجليزي)",
      "معمارية RTL",
      "REST APIs",
      "Node.js / Database",
      "JWT Authentication",
      "Google Sheets API"
    ],
    summary:
      "تطوير منصة ويب متكاملة ثنائية اللغة (عربي / إنجليزي) تدعم اتجاه الكتابة من اليمين إلى اليسار (RTL) لشركة خدمات سيارات مقرها سلطنة عُمان: تجمع بين بوابة تحقق ذاتي عامة من الضمان لمالكي المركبات ولوحة تحكم إدارية داخلية مؤمنة، مع مزامنة مؤتمتة ثنائية الاتجاه مع Google Sheets.",
    detailedDescription: [
      "تطوير الموقع ومنصة إدارة الضمان لشركة خدمات سيارات في سلطنة عُمان، وتحويل المتطلبات إلى واجهات عامة وإدارية.",
      "تطوير تجربة ويب ثنائية اللغة (عربي وإنجليزي) تدعم اتجاه RTL بمرونة عالية وأسس خطوط عربية واضحة ومقروءة.",
      "بناء بوابة عامة للاستعلام الفوري عن الضمان تتيح لمالكي المركبات التحقق من سجلات التركيب المعتمدة باللغتين دون الحاجة لتدخل خدمة العملاء اليدوي.",
      "تطوير نظام إدارة وتشغيل داخلي مدعوم بالمصادقة اللامركزية بواسطة رموز JWT وصلاحيات مستندة إلى الأدوار (RBAC).",
      "هندسة مزامنة برمجية مؤتمتة ثنائية الاتجاه عبر Google Sheets API لضمان تطابق جداول البيانات التشغيلية وسجلات قاعدة البيانات بشكل فوري ومستمر."
    ],
    engineeringHighlights: [
      "تجربة مستخدم ثنائية اللغة (عربي / إنجليزي) مع دعم كامل ودقيق لاتجاه RTL",
      "معمارية ثنائية الواجهة: بوابة استعلام عامة للعملاء ولوحة عمليات إدارية آمنة",
      "مخطط ونماذج بيانات معيارية للضمان والتحقق من صحة المدخلات",
      "أمان الجلسات عبر رموز JWT اللامركزية وحماية المسارات حسب الأدوار",
      "تكامل مع Google Sheets لمزامنة سجلات الضمان",
      "تهيئة النشر وتصميم متجاوب بالكامل عبر مختلف أحجام الشاشات والأجهزة"
    ],
    metrics: [
      { label: "اللغات المدعومة", value: "العربية + الإنجليزية (RTL)" },
      { label: "مستويات النظام", value: "2 (بوابة عامة + لوحة إدارة)" },
      { label: "خط مزامنة البيانات", value: "مزامنة آلية مع Sheets" }
    ],
    link: "https://sands-ppf-frontend-rbobc56xc-hadishukoor111-8206s-projects.vercel.app/ar",
    githubUrl: null,
    statusNote: "عرض المشروع — موقع ثنائي اللغة ومنصة لإدارة الضمان"
  },
  {
    id: "hera-lux",
    number: "06",
    title: "HERA-LUX",
    headline: "منصة تجارة إلكترونية متكاملة (MERN)",
    category: "مشروع مستقل • تجارة إلكترونية • بنية MERN",
    role: "مطور برمجيات مستقل",
    status: "مشروع مكتمل",
    location: "مشروع مستقل",
    countryBadge: "مشروع هندسي مستقل",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS"
    ],
    summary:
      "تطبيق تجارة إلكترونية متكامل مبني على بنية MERN Stack، يشمل إدارة شاملة لكتالوج المنتجات، مسارات سلة المشتريات التفاعلية، ولوحة تحكم إدارية للمتجر.",
    detailedDescription: [
      "تطوير واجهات REST برمجة مخصصة في Node/Express لتتبع المخزون، وتعديلات سلة التسوق، وحسابات الدفع.",
      "هندسة نماذج ومخططات MongoDB للمنتجات والمستخدمين ورموز الجلسات وانتقالات حالات الطلبات.",
      "تطوير لوحة تحكم إدارية متجاوبة لمتابعة إضافة المنتجات ومعالجة طلبات الشراء الواردة."
    ],
    engineeringHighlights: [
      "مسار مصادقة مخصص مع تشفير آمن لكلمات المرور",
      "إدارة تفاعلية لحالة سلة التسوق مع تخزين مستمر",
      "لوحة تحكم إدارية مع عمليات CRUD الكاملة للمنتجات",
      "وسائط معالجة الأخطاء لواجهات REST وعقود JSON واضحة"
    ],
    metrics: [
      { label: "المنظومة", value: "MongoDB + Express + React + Node" },
      { label: "الواجهات", value: "واجهة المتجر + لوحة الإدارة" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "رابط المشروع سيتوفر قريباً"
  },
  {
    id: "compost-platform",
    number: "07",
    title: "COMPOST PLATFORM",
    headline: "منصة سوق خدمات ثنائي الأطراف",
    category: "مشروع مستقل • سوق خدمات • تطوير شامل",
    role: "مطور برمجيات مستقل",
    status: "مشروع مكتمل",
    location: "مشروع مستقل",
    countryBadge: "مشروع هندسي مستقل",
    stack: ["HTML5", "Tailwind CSS", "PHP", "MySQL", "Relational Modeling"],
    summary:
      "بنية معمارية لسوق خدمات ثنائي الأطراف يسهل الاستكشاف والحجز بين منتجي النفايات العضوية ومبادرات التسميد وإعادة التدوير المحلية.",
    detailedDescription: [
      "تصميم مخطط قاعدة بيانات يدعم ملفات المزودين، المناطق الجغرافية للخدمة، وطلبات الجمع الواردة.",
      "بناء مسارات عمل عبر PHP من جانب الخادم للتحقق من المدخلات، استكشاف المزودين، ومتابعة الحالات.",
      "تصميم واجهة متجاوبة وخفيفة بواسطة Tailwind CSS تركز على سرعة التحميل وسلاسة المعاملات."
    ],
    engineeringHighlights: [
      "نماذج قاعدة بيانات علائقية ثنائية الأطراف للمزودين والعملاء",
      "مسارات إرسال طلبات الخدمة وتدرج حالات العمليات",
      "التحقق من صحة النماذج وتطهير المدخلات من جانب الخادم في PHP",
      "واجهة مستخدم متجاوبة وسريعة موجهة للهواتف المحمولة أولاً"
    ],
    metrics: [
      { label: "نوع المنصة", value: "سوق خدمات ثنائي الأطراف" },
      { label: "الواجهة الخلفية", value: "PHP + MySQL" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "رابط المشروع سيتوفر قريباً"
  }
];

export const getProjects = (lang: 'en' | 'ar'): ProjectItem[] => {
  return lang === 'ar' ? SELECTED_PROJECTS_AR : SELECTED_PROJECTS;
};
