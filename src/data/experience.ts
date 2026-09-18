export interface ExperienceItem {
  id: string;
  number: string;
  period: string;
  role: string;
  company: string;
  type: string;
  location: string;
  intlBadge?: string;
  current: boolean;
  overview: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  curriculum?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "magnavolt",
    number: "01",
    period: "Aug 2026 – Present",
    role: "Full Stack Developer",
    company: "MAGNAVOLT Technical Services L.L.C - S.P.C",
    type: "Contract",
    location: "Remote (UAE Engineering Services)",
    intlBadge: "UAE • TECHNICAL ENGINEERING SERVICES",
    current: true,
    overview:
      "Designing and engineering an integrated enterprise operations ecosystem: uniting a public corporate portal with an internal ERP encompassing dedicated Admin and Technician platforms, automated workflows, and document generation.",
    responsibilities: [
      "Architecting end-to-end full-stack systems: connecting corporate website inquiries directly into internal ERP triage queues via secure REST APIs.",
      "Engineering dual-interface applications: an administrative command center for dispatch, inventory, and approvals, and a dedicated field technician execution portal.",
      "Implementing operational workflows: an 8-stage comprehensive service lifecycle (Inquiry → Triage → Dispatch → Execution → Quotation → Approval → Invoicing → Settlement) plus an expedited QuickFix direct-billing engine.",
      "Developing high-throughput REST APIs and normalized relational schemas using ASP.NET Core, C#, Entity Framework Core, and MySQL.",
      "Integrating QuestPDF for deterministic, programmatic compilation of branded quotations and sequential legal invoices.",
      "Implementing stateless JWT authentication, Role-Based Access Control (RBAC), and contextual WhatsApp document dispatch pipelines."
    ],
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework Core",
      "REST APIs",
      "QuestPDF",
      "JWT Auth",
      "Tailwind CSS"
    ]
  },
  {
    id: "freelancing",
    number: "02",
    period: "Independent / Ongoing",
    role: "Full Stack Software Developer",
    company: "Freelancing",
    type: "Freelance",
    location: "Remote",
    intlBadge: "INDEPENDENT CLIENT WORK",
    current: true,
    overview:
      "Independent client engagements focused on designing, developing, integrating, and deploying bespoke web applications, backend APIs, and business systems.",
    responsibilities: [
      "Translating raw business requirements into complete technical specifications, data models, and component architectures.",
      "Engineering full-stack web applications and responsive client interfaces tailored to client operational needs.",
      "Designing robust REST APIs and database-backed systems with MySQL, MongoDB, and relational storage.",
      "Implementing secure token authentication, role-based access control (RBAC), and admin control dashboards.",
      "Handling end-to-end cloud deployment, server configuration, runtime testing, and final client delivery."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "SQL / Databases",
      "Authentication / RBAC",
      "Deployment"
    ]
  }
];

export const EXPERIENCES_AR: ExperienceItem[] = [
  {
    id: "magnavolt",
    number: "01",
    period: "أغسطس 2026 – حتى الآن",
    role: "مطور برمجيات متكامل (Full Stack)",
    company: "ماجنافولت للخدمات الفنية (MAGNAVOLT Technical Services L.L.C - S.P.C)",
    type: "عقد عمل تجاري",
    location: "عن بُعد (خدمات هندسية وتقنية — الإمارات)",
    intlBadge: "الإمارات • خدمات هندسية وتقنية",
    current: true,
    overview:
      "تصميم وهندسة منظومة عمليات مؤسسية متكاملة: تجمع بين بوابة شركات عامة ونظام ERP داخلي يشمل منصات مخصصة للإدارة والفنيين، وأتمتة مسارات العمل، وتوليد المستندات الرسمية.",
    responsibilities: [
      "هندسة وتصميم أنظمة برمجية متكاملة: ربط استفسارات الموقع المؤسسي مباشرة بقوائم فرز التذاكر بنظام ERP عبر واجهات REST API آمنة.",
      "تطوير تطبيقات مزدوجة الواجهة: لوحة تحكم وقيادة إدارية للتوجيه والمخزون والاعتمادات، وبوابة مستقلة لتنفيذ مهام الفنيين الميدانيين.",
      "تنفيذ مسارات العمل التشغيلية: دورة حياة خدمة شاملة من 8 مراحل (الطلب ← الفرز ← التعيين ← التنفيذ ← عرض السعر ← الاعتماد ← إصدار الفاتورة ← التسوية) ومحرك الفوترة السريعة (QuickFix).",
      "تطوير واجهات برمجة تطبيقات (REST APIs) عالية الكفاءة ومخططات علائقية معيارية عبر ASP.NET Core و C# و Entity Framework Core و MySQL.",
      "دمج محرك QuestPDF لإنشاء وطباعة عروض الأسعار وفواتير الشركات الرسمية المتوافقة مع معايير الضرائب بأرقام تسلسلية دقيقة.",
      "تطبيق المصادقة اللامركزية برموز JWT، والتحكم في الوصول المستند إلى الأدوار (RBAC)، وخطوط إرسال المستندات السياقية عبر واتساب."
    ],
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "MySQL",
      "Entity Framework Core",
      "REST APIs",
      "QuestPDF",
      "JWT Auth",
      "Tailwind CSS"
    ]
  },
  {
    id: "freelancing",
    number: "02",
    period: "مشاريع مستقلة / مستمر",
    role: "مطور برمجيات متكامل (Full Stack)",
    company: "العمل الحر والمشاريع المستقلة",
    type: "عمل حر ومشاريع تعاقدية",
    location: "عن بُعد",
    intlBadge: "مشاريع عملاء مستقلة",
    current: true,
    overview:
      "تنفيذ مشاريع برمجية مستقلة للعملاء تركز على تصميم وتطوير ودمج ونشر تطبيقات الويب المخصصة، الواجهات البرمجية الخلفية (APIs)، وأنظمة الأعمال.",
    responsibilities: [
      "تحويل متطلبات الأعمال المبدئية إلى مواصفات فنية متكاملة، ونماذج بيانات، وبنى مكونات واضحة.",
      "هندسة تطبيقات ويب شاملة وواجهات مستخدم متجاوبة ومصممة خصيصاً لتلبية الاحتياجات التشغيلية للعملاء.",
      "تصميم واجهات برمجية قوية (REST APIs) وأنظمة مدعومة بقواعد البيانات عبر MySQL و MongoDB ونماذج التخزين العلائقية.",
      "تطبيق المصادقة الآمنة بالرموز، والتحكم في الوصول المستند إلى الأدوار (RBAC)، ولوحات التحكم الإدارية.",
      "إدارة النشر السحابي الشامل، تهيئة الخوادم، اختبار بيئات التشغيل، والتسليم النهائي الموثوق للعميل."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "SQL / Databases",
      "Authentication / RBAC",
      "Deployment"
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Technology",
  field: "Information Technology",
  institution: "Lovely Professional University",
  period: "Aug 2023 – Jul 2027",
  location: "Jalandhar, Punjab, India",
  curriculum:
    "Core computer science foundation: Data Structures & Algorithms, Database Management Systems, Computer Networks, Software Engineering Principles, and Web Application Architecture."
};

export const EDUCATION_AR: EducationItem = {
  degree: "بكالوريوس التكنولوجيا (B.Tech)",
  field: "تكنولوجيا المعلومات (IT)",
  institution: "جامعة لوفلي بروفيشينال (Lovely Professional University)",
  period: "أغسطس 2023 – يوليو 2027",
  location: "جالاندار، البنجاب، الهند",
  curriculum:
    "أسس علوم وهندسة الحاسوب المعمقة: هياكل البيانات والخوارزميات، أنظمة إدارة قواعد البيانات (DBMS)، شبكات الحاسوب، مبادئ هندسة البرمجيات، وبنى تطبيقات الويب الموزعة."
};

export const getExperiences = (lang: 'en' | 'ar'): ExperienceItem[] => {
  return lang === 'ar' ? EXPERIENCES_AR : EXPERIENCES;
};

export const getEducation = (lang: 'en' | 'ar'): EducationItem => {
  return lang === 'ar' ? EDUCATION_AR : EDUCATION;
};
