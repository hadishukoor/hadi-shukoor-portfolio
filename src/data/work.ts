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
    architectureTitle: string;
    architectureSteps: string[];
    architectureNote: string;
    technologies: string[];
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
    id: "sands-ppf",
    number: "03",
    title: "SANDS PPF",
    headline: "Warranty & Operations Platform",
    category: "FULL STACK • CUSTOM WEB PLATFORM • WARRANTY & AUTOMATION",
    role: "Full Stack Developer",
    status: "PRODUCTION DELIVERED",
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
      "End-to-end delivery of a bilingual (English / Arabic) dual-tier production platform for an Oman-based automotive business: a public self-service warranty verification portal with verified RTL layout coupled with a secured internal admin operations console and automated Google Sheets synchronization.",
    detailedDescription: [
      "Owned complete lifecycle delivery from raw business requirements to production deployment for an Oman-based automotive business.",
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
      "Automated Google Sheets integration eliminating manual back-office data entry",
      "Production deployment configuration and responsive cross-device layout"
    ],
    metrics: [
      { label: "Languages", value: "English + Arabic (RTL)" },
      { label: "System Tiers", value: "2 (Public + Admin)" },
      { label: "Data Pipeline", value: "Sheets Sync" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "Delivered Client Platform — Production In Use (Oman)"
  },
  {
    id: "hera-lux",
    number: "04",
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
    number: "05",
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
    id: "sands-ppf",
    number: "03",
    title: "SANDS PPF",
    headline: "منصة التحقق من الضمان وإدارة العمليات",
    category: "تطوير شامل • منصة ويب مخصصة • إدارة الضمان والأتمتة",
    role: "مطور برمجيات متكامل (Full Stack)",
    status: "مكتمل ومُسلّم للإنتاج",
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
      "بناء وتسليم منصة إنتاجية متكاملة ثنائية اللغة (عربي / إنجليزي) تدعم اتجاه الكتابة من اليمين إلى اليسار (RTL) لشركة خدمات سيارات مقرها سلطنة عُمان: تجمع بين بوابة تحقق ذاتي عامة من الضمان لمالكي المركبات ولوحة تحكم إدارية داخلية مؤمنة، مع مزامنة مؤتمتة ثنائية الاتجاه مع Google Sheets.",
    detailedDescription: [
      "تولي دورة التطوير والتسليم بالكامل من مرحلة المتطلبات التشغيلية الخام حتى النشر الفعلي لشركة في سلطنة عُمان.",
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
      "مزامنة تلقائية مع Google Sheets ألغت الحاجة للإدخال اليدوي للبيانات",
      "تهيئة النشر للإنتاج وتصميم متجاوب بالكامل عبر مختلف أحجام الشاشات والأجهزة"
    ],
    metrics: [
      { label: "اللغات المدعومة", value: "العربية + الإنجليزية (RTL)" },
      { label: "مستويات النظام", value: "2 (بوابة عامة + لوحة إدارة)" },
      { label: "خط مزامنة البيانات", value: "مزامنة آلية مع Sheets" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "منصة عميل تم تسليمها — قيد التشغيل الإنتاجي (سلطنة عُمان)"
  },
  {
    id: "hera-lux",
    number: "04",
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
    number: "05",
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
