export interface CaseStudySection {
  title: string;
  badge?: string;
  points: string[];
}

export interface ProjectItem {
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
    id: "magnavolt-erp",
    number: "01",
    title: "MAGNAVOLT",
    headline: "Integrated ERP, Operations Platform & Corporate Portal",
    category: "ENTERPRISE SOFTWARE • DUAL-INTERFACE ERP • BUSINESS WORKFLOWS",
    role: "Full Stack Software Engineer & System Architect",
    status: "CURRENT / ONGOING",
    location: "MAGNAVOLT Technical Services L.L.C - S.P.C (UAE)",
    countryBadge: "UAE • INTERNATIONAL PROJECT",
    stack: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework Core",
      "REST APIs",
      "QuestPDF",
      "JWT Auth",
      "Tailwind CSS",
      "TanStack Query"
    ],
    summary:
      "End-to-end design and engineering of an enterprise operational platform for MAGNAVOLT Technical Services (UAE). Unites a customer-facing corporate website with an internal ERP encompassing dedicated Admin and Technician panels, an 8-stage service lifecycle, rapid QuickFix direct billing, programmatic QuestPDF document generation, and normalized relational persistence.",
    detailedDescription: [
      "Architected and engineered the complete digital operating system from the ground up, connecting public customer inquiries directly to backend triage, dispatch, and billing queues.",
      "Engineered a dual-interface system separating administrative command (dispatch, inventory, quotation/invoice approvals) from field execution (technician job queue, status updates, execution logs).",
      "Built two synchronized operational pipelines: a comprehensive 8-stage lifecycle (Inquiry → Ticket → Dispatch → Execution → Quotation → Approval → Invoicing → Settlement) and an expedited QuickFix direct-invoice workflow for rapid service requests.",
      "Developed a high-performance programmatic document generation engine using QuestPDF, creating deterministic corporate invoices and quotations with dynamic tax (UAE VAT) calculations and signatories.",
      "Designed normalized relational database schemas using Entity Framework Core and MySQL, secured by stateless JWT authentication, Role-Based Access Control (RBAC), and traceable audit logs."
    ],
    workflowStages: [
      "Public Customer Inquiry",
      "Service Request Triage",
      "Ticket Creation & Dispatch",
      "Technician Service Execution",
      "Dynamic Quotation Creation",
      "Client & Admin Approval",
      "Invoice Issuance",
      "Payment Settlement"
    ],
    quickFixWorkflow: [
      "Customer Service Request",
      "Direct Service Confirmation",
      "Direct Invoice Generation",
      "Payment Settlement"
    ],
    modules: [
      "Service Requests (Intake & Triage)",
      "Service Tickets & Operations",
      "Customers Directory & Locations",
      "Companies Management",
      "Staff & Technician Roster",
      "Technician Dispatch & Assignment",
      "Equipment & Machinery Tracking",
      "Spare Parts Inventory",
      "Dynamic Quotations & Approvals",
      "Automated Invoicing",
      "Payments & Financial Settlement",
      "Company & Document Settings",
      "Traceable Audit Event Logs"
    ],
    adminCapabilities: [
      "Central command dashboard for live ticket status, triage, and workload distribution",
      "Technician dispatch assigning jobs based on technical specialization and location",
      "Customer account management with multi-branch company support and service history",
      "Spare parts inventory tracking integrated directly with quotation line items",
      "Quotation review, commercial margin adjustments, and legal terms configuration",
      "Invoice issuance with sequential numbering and automated VAT calculation",
      "Financial settlement reconciliation and real-time payment status tracking",
      "System-wide configuration, company profiles, and traceable audit log inspection"
    ],
    technicianCapabilities: [
      "Role-restricted mobile-first portal with dedicated technician authentication",
      "Real-time queue of assigned service requests and technical work orders",
      "Detailed job briefs with customer contacts, equipment specs, and location coordinates",
      "Job status progression tracking (Assigned → In Progress → Work Completed)",
      "Field documentation: logging technical service notes, part replacements, and hours",
      "Instant handoff of completed technical jobs to the admin quotation and billing pipeline"
    ],
    engineeringHighlights: [
      "Public-to-ERP bridge: secure REST API channels corporate website customer requests into internal ticket queues",
      "Dual-interface architecture: strict Admin vs Technician RBAC enforced at API endpoints and UI routes",
      "Dual workflow engines: full 8-stage service operations pipeline plus expedited QuickFix direct billing",
      "Deterministic PDF generation with QuestPDF: dynamic company letterhead, tax breakdowns, and terms",
      "Normalized relational database: clean EF Core models and MySQL schema covering 13+ operational domains",
      "WhatsApp integration architecture: manual contextual dispatch (completed) and automated Meta Business API (in development)"
    ],
    caseStudySections: [
      {
        title: "Public Corporate Website",
        badge: "Implemented",
        points: [
          "Customer-facing digital presentation for MAGNAVOLT Technical Services L.L.C - S.P.C showcasing industrial services, machinery capabilities, and technical solutions.",
          "Interactive customer request submission with real-time form validation.",
          "Direct REST API integration securely channeling public customer requests into the internal ERP ticket triage queue without manual data entry.",
          "Responsive, high-performance UI styled to establish corporate credibility and technical authority."
        ]
      },
      {
        title: "Admin Command Platform",
        badge: "Implemented",
        points: [
          "Comprehensive administrative interface for operational triage, customer account governance, and technician scheduling.",
          "Dynamic technician dispatch assigning jobs based on availability and location context.",
          "Full spare parts inventory management integrated with quotation line items and service tickets.",
          "Commercial review workflow for quotations, invoice status transitions, and payment settlement confirmation.",
          "Detailed audit log viewer capturing all critical system events with actor attribution."
        ]
      },
      {
        title: "Technician Execution Platform",
        badge: "Implemented",
        points: [
          "Dedicated role-specific interface focused exclusively on field execution without administrative clutter.",
          "Streamlined view of assigned technical jobs with real-time customer and location details.",
          "Step-by-step job status progression from arrival and inspection through completion.",
          "Field documentation: recording technical service notes, part replacements, and completion timestamps.",
          "Automatic state synchronization triggering admin notification upon job sign-off."
        ]
      },
      {
        title: "Backend, Database & Security",
        badge: "Implemented",
        points: [
          "Built with ASP.NET Core and C# adhering to clean separation between API controllers, service logic, and data layers.",
          "Normalized relational database designed with Entity Framework Core and MySQL across 13+ relational models.",
          "Stateless JWT authentication paired with claim-based Role-Based Access Control (RBAC) protecting both endpoints and UI routes.",
          "Structured audit logging capturing timestamps, actor IDs, state deltas, and IP metadata."
        ]
      },
      {
        title: "Brand Foundation & Visual Identity",
        badge: "Implemented",
        points: [
          "Established the digital visual identity for MAGNAVOLT from inception: brand aesthetic, color harmony, and typography.",
          "Designed the corporate website and aligned the internal ERP interface to maintain consistent corporate credibility.",
          "Engineered cohesive document stationery across all generated quotation and invoice PDFs."
        ]
      },
      {
        title: "My Role & Full Ownership",
        badge: "Single Ownership",
        points: [
          "Sole engineer responsible for end-to-end delivery: system architecture, frontend development (React + TypeScript), backend APIs (ASP.NET Core + C#), database schema design (EF Core + MySQL), document generation (QuestPDF), and corporate UI design.",
          "Directly authored all business logic, workflow state transitions, security models, and API contracts."
        ]
      }
    ],
    metrics: [
      { label: "Operational Modules", value: "13" },
      { label: "Workflow Engines", value: "2 (Standard + QuickFix)" },
      { label: "System Portals", value: "3 (Public + Admin + Tech)" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "Active Client System — Private Enterprise Repository (MAGNAVOLT Technical Services L.L.C - S.P.C)"
  },
  {
    id: "sands-ppf",
    number: "02",
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
    id: "gem-bid-compliance",
    number: "03",
    title: "AI-POWERED INTEGRATED BID COMPLIANCE VERIFICATION PLATFORM FOR GEM PROCUREMENT",
    headline: "Intelligent Document Intelligence & Compliance Verification Pipeline for GeM Bids",
    category: "PROJECT • DOCUMENT INTELLIGENCE",
    role: "Lead Engineer",
    status: "COMING SOON / IN DEVELOPMENT",
    location: "System Architecture (In Development)",
    countryBadge: "PROJECT",
    isUpcoming: true,
    stack: [
      "React",
      "Python / FastAPI",
      "MongoDB or SQL Server",
      "Gemini API",
      "Python Doc Intelligence",
      "Automated PDF Generation"
    ],
    proposedStack: [
      { category: "Frontend", tech: "React" },
      { category: "Backend", tech: "Python / FastAPI" },
      { category: "Database", tech: "MongoDB or SQL Server" },
      { category: "AI & Document Processing", tech: "Gemini API + Python document-processing libraries" },
      { category: "Reporting", tech: "Automatic PDF generation" }
    ],
    summary:
      "Upcoming enterprise software project currently in active engineering. Designed to simplify and accelerate tender and bid compliance verification for GeM (Government e-Marketplace) procurement. Features a planned end-to-end pipeline for tender specification upload, vendor bid document ingestion, AI-assisted parameter extraction, rule verification against statutory thresholds, a multi-bidder comparison dashboard, and deterministic compliance reports.",
    detailedDescription: [
      "Enterprise document intelligence platform engineered to streamline the end-to-end compliance review lifecycle.",
      "The planned system addresses the complex, time-intensive evaluation process required for public procurement on the GeM portal.",
      "Proposed workflow: Tender Requirements Upload → Company Bid Documents Upload → AI-assisted document reading & parameter extraction → Automated compliance checking against tender criteria → Qualified / Disqualified / Missing Requirements matrix → Multi-bidder Comparison Dashboard → Final Audit Report.",
      "For example: when a tender requires a minimum turnover of ₹3 Crore, a valid registration certificate, and specific experience credentials, the planned system inspects uploaded balance sheets, certificates, and compliance declarations to identify whether statutory conditions are satisfied, missing, or breached.",
      "Engineered with a planned decoupled architecture pairing a responsive React review dashboard with high-throughput Python/FastAPI microservices, document intelligence models, and automated PDF compliance reports."
    ],
    workflowStages: [
      "Tender Requirements Upload",
      "Company Bid Documents Upload",
      "AI-Assisted Document Reading & Extraction",
      "Compliance Checking Against Tender Rules",
      "Qualified / Disqualified / Missing Matrix",
      "Comparison Dashboard",
      "Final Compliance Report"
    ],
    engineeringHighlights: [
      "AI-assisted document intelligence using Gemini API and specialized Python extraction libraries",
      "Rule verification engine evaluating financial limits (e.g. ₹3 Crore turnover), certifications, and experience",
      "Structured schema transformation from unstructured multi-page bid documents and balance sheets",
      "Comparison dashboard providing transparency across competing bids and tender clauses",
      "Automated deterministic PDF compliance report generation for audit trails",
      "High-performance asynchronous backend architecture using Python and FastAPI"
    ],
    caseStudySections: [
      {
        title: "Project Status & Scope",
        badge: "In Development",
        points: [
          "Engineering platform currently under active development.",
          "Demonstrates enterprise problem-solving across AI document intelligence, compliance verification, backend API engineering, database design, and automated reporting.",
          "All workflows, architecture, and technology choices represent the planned engineering blueprint currently in development."
        ]
      },
      {
        title: "The Core Problem",
        badge: "Procurement Bottleneck",
        points: [
          "Evaluating public procurement bids on portals like GeM requires tedious manual cross-referencing of hundreds of pages of complex bidder documents.",
          "Manual checking of mandatory criteria—such as minimum turnover thresholds (e.g., ₹3 Crore), registration validity dates, and past experience proofs—is vulnerable to fatigue and human oversight.",
          "Procurement committees lack a rapid, automated tool to flag missing documents, verify qualifications, and generate auditable comparative reports."
        ]
      },
      {
        title: "Proposed Solution & Planned Pipeline",
        badge: "Planned Workflow",
        points: [
          "Tender Requirements Upload: Parsing RFP tender specifications to establish dynamic compliance rules and eligibility thresholds.",
          "Company Bid Documents Upload: Ingestion of bidder balance sheets, certificates, CA declarations, and work completion orders.",
          "AI Document Intelligence: Intelligent information extraction extracting figures, validities, and compliance declarations from PDFs.",
          "Rule Verification Engine: Cross-evaluating extracted metrics against tender requirements to classify items as Qualified, Disqualified, or Missing.",
          "Comparison Dashboard & Final Report: Side-by-side bidder analytics with automated PDF report generation."
        ]
      },
      {
        title: "Planned Technology Stack",
        badge: "Proposed Stack",
        points: [
          "Frontend Interface: React (Responsive procurement dashboard and review portal).",
          "Backend Microservices: Python / FastAPI (Asynchronous document handling and evaluation pipelines).",
          "Data Storage: MongoDB or SQL Server (Structured tender rules, bidder profiles, and audit records).",
          "AI & Document Intelligence: Gemini API combined with specialized Python document-processing libraries.",
          "Reporting: Automatic programmatic PDF compliance generation."
        ]
      }
    ],
    metrics: [
      { label: "Project Status", value: "Coming Soon / In Development" },
      { label: "Target Domain", value: "GeM Procurement" },
      { label: "Planned AI Engine", value: "Gemini + Python" },
      { label: "Project Type", value: "Enterprise Software" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "Engineering Project — In Active Development"
  },
  {
    id: "hera-lux",
    number: "04",
    title: "HERA-LUX",
    headline: "MERN E-Commerce Platform",
    category: "INDEPENDENT PROJECT • E-COMMERCE • MERN ARCHITECTURE",
    role: "Independent Engineer",
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
    role: "Independent Engineer",
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
    id: "magnavolt-erp",
    number: "01",
    title: "MAGNAVOLT",
    headline: "نظام ERP متكامل، منصة عمليات وبوابة شركات",
    category: "برمجيات المؤسسات • نظام ERP مزدوج الواجهة • مسارات الأعمال",
    role: "مهندس برمجيات وتطوير شامل وهندسة النظم",
    status: "مشروع نشط / قيد التشغيل والإنتاج",
    location: "ماجنافولت للخدمات الفنية (MAGNAVOLT Technical Services L.L.C - S.P.C - الإمارات)",
    countryBadge: "الإمارات • مشروع دولي",
    stack: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework Core",
      "REST APIs",
      "QuestPDF",
      "JWT Auth",
      "Tailwind CSS",
      "TanStack Query"
    ],
    summary:
      "تصميم وهندسة منصة عمليات مؤسسية متكاملة لشركة ماجنافولت للخدمات الفنية (دولة الإمارات العربية المتحدة). تجمع المنصة بين موقع إلكتروني عام للشركات ونظام ERP داخلي يشمل بوابات مخصصة للإدارة والفنيين، ودورة حياة خدمة من 8 مراحل، ومسار الفوترة السريعة (QuickFix)، وتوليداً برمجياً دقيقاً للمستندات عبر QuestPDF، وقاعدة بيانات علائقية معيارية.",
    detailedDescription: [
      "هندسة وتطوير نظام التشغيل الرقمي المتكامل من البداية، ليربط استفسارات العملاء العامة مباشرة بقوائم الفرز والتوجيه والفوترة الخلفية.",
      "بناء نظام مزدوج الواجهات يفصل تماماً بين لوحة القيادة والعمليات الإدارية (التوجيه، المخزون، واعتمادات الفواتير والعروض) وبوابة التنفيذ الميداني للفنيين.",
      "إنشاء مساري عمل متزامنين: دورة حياة تشغيلية كاملة من 8 مراحل (الطلب ← الفرز ← التعيين ← التنفيذ ← عرض السعر ← الاعتماد ← إصدار الفاتورة ← التسوية) ومسار الفوترة المباشرة السريع (QuickFix).",
      "تطوير محرك برمجي لتوليد المستندات عبر QuestPDF، ينشئ عروض أسعار وفواتير قانونية بأرقام تسلسلية وحسابات ضريبية ديناميكية (ضريبة القيمة المضافة في الإمارات).",
      "تصميم مخططات قواعد بيانات علائقية معيارية عبر Entity Framework Core و MySQL، مؤمنة بمصادقة JWT اللامركزية والتحكم في الوصول حسب الأدوار (RBAC) وسجلات تدقيق كاملة."
    ],
    workflowStages: [
      "استقبال استفسارات العملاء العامة",
      "فرز وتصنيف طلبات الخدمة",
      "إنشاء التذكرة وتعيين الفني",
      "تنفيذ الخدمة الميدانية وتسجيل الملاحظات",
      "إنشاء عروض الأسعار ديناميكياً",
      "اعتماد العميل والإدارة",
      "إصدار الفاتورة الضريبية الرسمية",
      "تسوية الدفعات المالية والأرشفة"
    ],
    quickFixWorkflow: [
      "طلب خدمة العملاء المباشر",
      "تأكيد الخدمة المباشرة",
      "توليد الفاتورة المباشرة",
      "تسوية الدفعات"
    ],
    modules: [
      "طلبات الخدمة (الفرز والتصنيف)",
      "تذاكر الخدمة والعمليات",
      "دليل العملاء والمواقع",
      "إدارة الشركات والفروع",
      "سجل الفنيين والموظفين",
      "جدولة وتوجيه الفنيين",
      "تتبع المعدات والآلات",
      "مخزون قطع الغيار",
      "عروض الأسعار والاعتمادات",
      "الفوترة المؤتمتة وحساب الضرائب",
      "المدفوعات والتسوية المالية",
      "إعدادات الشركة والمستندات",
      "سجلات تدقيق الأحداث المتتبعة"
    ],
    adminCapabilities: [
      "لوحة قيادة مركزية لمتابعة حالات التذاكر والفرز وتوزيع أعباء العمل فورياً",
      "توجيه الفنيين وتعيين المهام بحسب التخصص الفني ونطاق الموقع الجغرافي",
      "إدارة حسابات العملاء والشركات متعددة الفروع مع سجل الخدمات الكامل",
      "تتبع مخزون قطع الغيار وربطه مباشرة ببنود عروض الأسعار وتذاكر الصيانة",
      "مراجعة عروض الأسعار، ضبط هوامش الربح التجارية، وصياغة الشروط القانونية",
      "إصدار الفواتير بأرقام تسلسلية واحتساب آلي لضريبة القيمة المضافة",
      "مطابقة التسويات المالية ومتابعة حالات الدفع في الوقت الفعلي",
      "إعدادات النظام الشاملة، ملفات الشركات، وفحص سجلات التدقيق بدقة"
    ],
    technicianCapabilities: [
      "بوابة مخصصة للهواتف المحمولة محمية بنظام مصادقة خاص بالفنيين الميدانيين",
      "قائمة فورية لطلبات الخدمة وأوامر العمل الفنية المسندة للفني",
      "ملخصات تفصيلية للمهام تشمل بيانات العميل، مواصفات المعدة، وإحداثيات الموقع",
      "تتبع تدرج حالة المهمة خطوة بخطوة (تم التعيين ← قيد التنفيذ ← اكتمل العمل)",
      "التوثيق الميداني: تسجيل الملاحظات الفنية، قطع الغيار المستبدلة، وساعات العمل",
      "تحويل فوري للأعمال المكتملة إلى مسار الإدارة لإعداد عروض الأسعار والفوترة"
    ],
    engineeringHighlights: [
      "جسر الربط بين الموقع ونظام ERP: واجهات REST API آمنة تحول طلبات الموقع مباشرة لتذاكر داخلية",
      "معمارية مزدوجة الواجهة: تطبيق صارم لصلاحيات RBAC على مستوى الواجهات البرمجية والمسارات",
      "محركا عمل متزامنان: دورة تشغيلية كاملة من 8 مراحل بالإضافة لمحرك الفوترة السريعة (QuickFix)",
      "توليد مستندات دقيق عبر QuestPDF: ترويسة الشركة، تفصيل الضرائب، والشروط القانونية المعتمدة",
      "قاعدة بيانات علائقية معيارية: نماذج EF Core ومخطط MySQL يغطي أكثر من 13 مجالاً تشغيلياً",
      "بنية ربط واتساب: إرسال سياقي يدوي للمستندات، وتجهيز للبنية مع Meta Business API"
    ],
    caseStudySections: [
      {
        title: "الموقع الإلكتروني المؤسسي للشركة",
        badge: "مكتمل في الإنتاج",
        points: [
          "واجهة رقمية رسمية لشركة ماجنافولت للخدمات الفنية (ذ.م.م - ش.ش.و) تستعرض الخدمات الهندسية والمعدات والحلول الفنية.",
          "نموذج تفاعلي لتقديم طلبات الصيانة مع تحقق فوري من صحة البيانات والمدخلات.",
          "تكامل مباشر عبر واجهات REST API يحول طلبات العملاء العامة إلى نظام الفرز والتذاكر الداخلي تلقائياً دون إدخال يدوي.",
          "واجهة استخدام سريعة ومتجاوبة تعكس المصداقية المؤسسية للشركة واحترافيتها الهندسية."
        ]
      },
      {
        title: "منصة القيادة والإدارة التشغيلية",
        badge: "مكتمل في الإنتاج",
        points: [
          "واجهة إدارية شاملة لفرز الطلبات، حوكمة حسابات العملاء، وجدولة الفنيين الميدانيين.",
          "نظام توجيه وجدولة ديناميكي يسند المهام وفق توافر الفني وموقعه الجغرافي.",
          "إدارة كاملة لمخزون قطع الغيار مرتبطة تلقائياً ببنود عروض الأسعار وتذاكر العمل.",
          "مسار مراجعة تجاري متكامل للعروض، وانتقال حالات الفواتير، وتأكيد التسويات المالية.",
          "عارض متقدم لسجلات التدقيق يسجل كافة الأحداث الهامة مع توثيق هوية المستخدم والوقت."
        ]
      },
      {
        title: "بوابة التنفيذ الميداني للفنيين",
        badge: "مكتمل في الإنتاج",
        points: [
          "واجهة مخصصة للفنيين تركز حصراً على تنفيذ المهام الميدانية بعيداً عن التعقيد الإداري.",
          "عرض مبسط ومنظم للمهام الفنية المسندة مع تفاصيل العملاء والمواقع وسجلات المعدات.",
          "تحديث متدرج لحالة العمل من لحظة الوصول والمعاينة حتى اكتمال الصيانة بنجاح.",
          "توثيق ميداني فوري: تسجيل الملاحظات الهندسية، القطع المستبدلة، وتوقيت الإنجاز.",
          "مزامنة فورية للحالة تنبه فريق الإدارة فور اعتماد الفني لاكتمال العمل الميداني."
        ]
      },
      {
        title: "الواجهة الخلفية، قواعد البيانات، والأمان",
        badge: "مكتمل في الإنتاج",
        points: [
          "تطوير باستخدام ASP.NET Core و C# مع فصل معماري نظيف بين وحدات التحكم والمنطق والبيانات.",
          "قاعدة بيانات علائقية معيارية مصممة باستخدام Entity Framework Core و MySQL تضم أكثر من 13 نموذجاً علائقياً.",
          "نظام مصادقة لا مركزي عبر JWT مع تحكم بالوصول مستند إلى الأدوار (RBAC) لحماية الواجهات البرمجية والمسارات.",
          "سجلات تدقيق مهيكلة تسجل التوقيت الزمني، هويات المستخدمين، التغيرات في الحالة، وعناوين IP."
        ]
      },
      {
        title: "الهوية البصرية والأسس التصميمية",
        badge: "مكتمل في الإنتاج",
        points: [
          "تأسيس الهوية البصرية الرقمية لشركة ماجنافولت: الألوان المتناسقة والخطوط والمظهر المؤسسي الرصين.",
          "تصميم الموقع المؤسسي وتوحيد مظهر نظام ERP الداخلي لضمان هوية متسقة وموثوقة.",
          "تصميم وتطوير قوالب مستندات متناسقة لجميع عروض الأسعار وفواتير الـ PDF الصادرة."
        ]
      },
      {
        title: "دوري والمسؤولية الهندسية الكاملة",
        badge: "مسؤولية منفردة شاملة",
        points: [
          "المهندس الوحيد المسؤول عن التسليم الشامل: هندسة البنية، تطوير الواجهة الأمامية (React + TypeScript)، واجهات REST الخلفية (ASP.NET Core + C#)، مخطط قاعدة البيانات (EF Core + MySQL)، توليد المستندات (QuestPDF)، وتصميم الواجهات.",
          "كتابة وتطوير كافة منطق الأعمال، انتقالات حالات مسارات العمل، النماذج الأمنية، وعقود الواجهات البرمجية."
        ]
      }
    ],
    metrics: [
      { label: "الوحدات التشغيلية", value: "13 وحدة متكاملة" },
      { label: "محركات مسارات العمل", value: "2 (القياسي + الفوترة السريعة)" },
      { label: "بوابات النظام", value: "3 (العامة + الإدارة + الفنيين)" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "نظام عميل نشط في الإنتاج — مستودع مؤسسي خاص (شركة ماجنافولت للخدمات الفنية)"
  },
  {
    id: "sands-ppf",
    number: "02",
    title: "SANDS PPF",
    headline: "منصة التحقق من الضمان وإدارة العمليات",
    category: "تطوير شامل • منصة ويب مخصصة • إدارة الضمان والأتمتة",
    role: "مطور برمجيات وتطوير شامل (Full Stack)",
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
    id: "gem-bid-compliance",
    number: "03",
    title: "منصة التحقق المتكاملة من مطابقة العطاءات بالذكاء الاصطناعي لمشتريات GeM الحكومية",
    headline: "استخراج ذكي للوثائق ومسار فحص ومطابقة العطاءات لمشتريات GeM الحكومية",
    category: "مشروع • ذكاء معالجة المستندات",
    role: "مهندس رئيسي للنظام",
    status: "قريباً / قيد التطوير الهندسي",
    location: "هندسة وبناء النظم (قيد التطوير)",
    countryBadge: "مشروع",
    isUpcoming: true,
    stack: [
      "React",
      "Python / FastAPI",
      "MongoDB أو SQL Server",
      "Gemini API",
      "Python Doc Intelligence",
      "Automated PDF Generation"
    ],
    proposedStack: [
      { category: "الواجهة الأمامية", tech: "React" },
      { category: "الواجهة الخلفية", tech: "Python / FastAPI" },
      { category: "قواعد البيانات", tech: "MongoDB أو SQL Server" },
      { category: "الذكاء الاصطناعي ومعالجة الوثائق", tech: "Gemini API ومكتبات بايثون المتخصصة" },
      { category: "إصدار التقارير", tech: "توليد تلقائي لملفات PDF" }
    ],
    summary:
      "مشروع برمجي قيد التطوير الهندسي النشط. يهدف النظام إلى تسريع وتبسيط التحقق من مطابقة وثائق العطاءات في منصة المشتريات الحكومية الإلكترونية (GeM) من خلال استخراج ذكي للمتطلبات، وفحص آلي للأهلية والمستندات المطلوبة، وإصدار تقارير المطابقة الرسمية.",
    detailedDescription: [
      "منصة هندسية لمعالجة وذكاء المستندات قيد التطوير لتلبية متطلبات تدقيق العطاءات والمناقصات الحكومية.",
      "يهدف النظام المخطط إلى أتمتة الإجراءات الطويلة واليدوية في فحص كراسات الشروط ووثائق الموردين المرفوعة عبر بوابة GeM.",
      "مسار العمل المقترح: رفع كراسة شروط المناقصة ← رفع وثائق عطاءات الموردين ← استخراج المعايير بالذكاء الاصطناعي ← فحص المطابقة البرمجي ← مصفوفة الأهلية والنواقص والاستبعاد ← لوحة المقارنة والتقييم ← تقرير المطابقة النهائي.",
      "مثال تطبيقي: إذا اشترطت المناقصة حداً أدنى لرأس المال قدره 3 كرور روبية مع رخصة تسجيل سارية وإثبات خبرة، يفحص النظام المخطط القوائم المالية والسجلات المرفوعة لتحديد ما إذا كانت الشروط مستوفاة أو ناقصة أو غير مطابقة.",
      "يعتمد النظام على بنية معمارية منفصلة تجمع بين لوحة تحكم تفاعلية عبر React وخدمات خلفية عالية الأداء عبر Python/FastAPI لمعالجة المستندات وتوليد تقارير التدقيق بصيغة PDF."
    ],
    workflowStages: [
      "رفع متطلبات المناقصة",
      "رفع وثائق عطاءات الشركات",
      "استخراج البيانات بالذكاء الاصطناعي",
      "فحص المطابقة وفق شروط المناقصة",
      "مصفوفة المؤهلين والمستبعدين والنواقص",
      "لوحة المقارنة والتقييم",
      "تقرير المطابقة النهائي"
    ],
    engineeringHighlights: [
      "ذكاء معالجة المستندات عبر Gemini API ومكتبات بايثون المتخصصة في تحليل وتفريغ ملفات PDF",
      "محرك مطابقة منطقي للتحقق من الحدود المالية والتراخيص وتواريخ الصلاحية آلياً",
      "تحويل المستندات غير المهيكلة والقوائم المالية إلى مخططات بيانات منظمة ودقيقة",
      "لوحة مقارنة تفاعلية تتيح تقييماً شفافاً ومتزامناً لعدة موردين على نفس المناقصة",
      "توليد مؤتمت لتقارير المطابقة والتدقيق بصيغة PDF قابلة للأرشفة القانونية",
      "بنية خدمات مصغرة غير متزامنة مبنية على Python و FastAPI"
    ],
    caseStudySections: [
      {
        title: "حالة ونطاق المشروع",
        badge: "قيد التطوير",
        points: [
          "مشروع برمجي قيد التطوير والتنفيذ الهندسي النشط.",
          "يبرهن المشروع على حل المشكلات المؤسسية من خلال ذكاء المستندات، والتحقق من المطابقة، وهندسة واجهات APIs، وتصميم قواعد البيانات، وإصدار التقارير المؤتمتة.",
          "كافة المسارات والبنى المعمارية والتقنيات المعروضة تمثل المخطط الهندسي الجاري تنفيذه حالياً."
        ]
      },
      {
        title: "التحدي والمشكلة الأساسية",
        badge: "عائق الفرز اليدوي",
        points: [
          "يتطلب تقييم العطاءات في منصات المشتريات الحكومية مثل GeM مراجعة يدوية مضنية لمئات الصفحات والمستندات المعقدة لكل مورد.",
          "المراجعة اليدوية للشروط الإلزامية—مثل الحد الأدنى لحجم الأعمال (3 كرور روبية)، وسريان التراخيص، وإثباتات الخبرة—عرضة للإجهاد والسهو البشري.",
          "تفتقر لجان التقييم إلى أداة سريعة ومؤتمتة لرصد المستندات الناقصة، وإقرار الأهلية، وإصدار تقارير تدقيق مقارنة وموثقة."
        ]
      },
      {
        title: "الحل المقترح ومسار العمل المخطط",
        badge: "مسار عمل مخطط",
        points: [
          "رفع متطلبات المناقصة: قراءة ملف كراسة الشروط واستخراج المعايير الإلزامية وحدود الأهلية.",
          "رفع وثائق الموردين: استقبال الميزانيات العمومية والشهادات وتراخيص التسجيل وإقرارات المطابقة.",
          "استخراج البيانات الذكي: قراءة واستخلاص الأرقام والتواريخ والبنود الإلزامية من ملفات PDF بواسطة الذكاء الاصطناعي.",
          "محرك فحص المطابقة: مقارنة بيانات المورد مع اشتراطات المناقصة لتصنيف البنود (مؤهل، مستبعد، مستند ناقص).",
          "لوحة المقارنة والتقرير: تحليل مقارن بين المتنافسين وتوليد تقرير المطابقة والتدقيق النهائي بصيغة PDF."
        ]
      },
      {
        title: "المنظومة التقنية المخططة",
        badge: "التقنيات المقترحة",
        points: [
          "واجهة المستخدم: React (لوحة تحكم متجاوبة لاستعراض المناقصات وفحص العطاءات).",
          "الخدمات الخلفية: Python / FastAPI (واجهات برمجة غير متزامنة عالية الأداء لمعالجة المستندات).",
          "تخزين البيانات: MongoDB أو SQL Server (لتخزين شروط المناقصات، ملفات الموردين، وسجلات التدقيق).",
          "الذكاء الاصطناعي ومعالجة الوثائق: Gemini API ومكتبات بايثون المتخصصة في استخراج النصوص والجداول.",
          "محرك التقارير: توليد برمجي آلي لتقارير المطابقة بصيغة PDF."
        ]
      }
    ],
    metrics: [
      { label: "حالة المشروع", value: "قريباً / قيد التطوير" },
      { label: "المجال المستهدف", value: "مشتريات GeM الحكومية" },
      { label: "محرك الذكاء المخطط", value: "Gemini + Python" },
      { label: "طبيعة المشروع", value: "برمجيات مؤسسية" }
    ],
    link: null,
    githubUrl: null,
    statusNote: "مشروع هندسي — قيد التطوير النشط حالياً"
  },
  {
    id: "hera-lux",
    number: "04",
    title: "HERA-LUX",
    headline: "منصة تجارة إلكترونية متكاملة (MERN)",
    category: "مشروع مستقل • تجارة إلكترونية • بنية MERN",
    role: "مهندس برمجيات مستقل",
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
    role: "مهندس برمجيات مستقل",
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
