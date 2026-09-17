import { Language } from '../context/LanguageContext';

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES_EN: SkillCategory[] = [
  {
    title: "FRONTEND ARCHITECTURE",
    description: "Reactive component design, state predictability, and fluid interfaces.",
    skills: [
      { name: "React.js / Next.js", level: "Production" },
      { name: "TypeScript (Strict)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bilingual EN/AR (RTL/LTR)", level: "Production" },
      { name: "State Machines & Context", level: "Advanced" }
    ]
  },
  {
    title: "BACKEND & MICROSERVICES",
    description: "Robust REST services, data contracts, and domain business rules.",
    skills: [
      { name: "Node.js & Express.js", level: "Production" },
      { name: "ASP.NET Core (C#)", level: "Production" },
      { name: "Python / Django", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "QuestPDF Document Engine", level: "Production" }
    ]
  },
  {
    title: "DATABASE & PERSISTENCE",
    description: "Relational normalization, indexing, and scalable schema models.",
    skills: [
      { name: "MySQL / Relational", level: "Production" },
      { name: "MongoDB / Document", level: "Advanced" },
      { name: "Database Normalization", level: "Advanced" },
      { name: "Query Optimization", level: "Proficient" },
      { name: "Entity Framework Core", level: "Production" }
    ]
  },
  {
    title: "SECURITY & AUTHENTICATION",
    description: "Zero-trust session control, payload sanitization, and access safety.",
    skills: [
      { name: "JWT Token Lifecycle", level: "Production" },
      { name: "RBAC (Multi-Tier Roles)", level: "Production" },
      { name: "Password Hashing (BCrypt)", level: "Production" },
      { name: "CORS & Request Filtering", level: "Advanced" },
      { name: "Audit Trail Logging", level: "Production" }
    ]
  },
  {
    title: "INTERNATIONAL & BILINGUAL",
    description: "Global delivery expertise across GCC markets (UAE, Oman) and bidirectional UX.",
    skills: [
      { name: "RTL / LTR Bi-Directional UI", level: "Production" },
      { name: "Modern Standard Arabic Localization", level: "Production" },
      { name: "UAE / Oman Regional Projects", level: "Delivered" },
      { name: "Multi-Currency & VAT Compliance", level: "Production" },
      { name: "International Client Delivery", level: "Active" }
    ]
  },
  {
    title: "DEVOPS & WORKFLOWS",
    description: "Version tracking, containerized environments, and deterministic builds.",
    skills: [
      { name: "Git & GitHub Workflows", level: "Advanced" },
      { name: "Docker & Containerization", level: "Proficient" },
      { name: "Linux Server Administration", level: "Proficient" },
      { name: "Postman API Documentation", level: "Advanced" },
      { name: "AI-Augmented Engineering", level: "Disciplined" }
    ]
  }
];

export const SKILL_CATEGORIES_AR: SkillCategory[] = [
  {
    title: "معمارية الواجهات وتطوير الفرونت إند",
    description: "تصميم المكونات التفاعلية، وإدارة الحالة المنضبطة، وتجارب الاستخدام السلسة.",
    skills: [
      { name: "React.js / Next.js", level: "مستوى إنتاجي" },
      { name: "TypeScript (Strict)", level: "متقدم" },
      { name: "Tailwind CSS", level: "متقدم" },
      { name: "واجهات ثنائية اللغة (RTL/LTR)", level: "مستوى إنتاجي" },
      { name: "إدارة الحالة وسير البيانات", level: "متقدم" }
    ]
  },
  {
    title: "الواجهات الخلفية والخدمات السحابية",
    description: "بناء واجهات REST موثوقة، وقواعد عمل المنظومة، وتوليد المستندات الآلي.",
    skills: [
      { name: "Node.js & Express.js", level: "مستوى إنتاجي" },
      { name: "ASP.NET Core (C#)", level: "مستوى إنتاجي" },
      { name: "Python / Django", level: "متقدم" },
      { name: "تصميم معماريات REST APIs", level: "متقدم" },
      { name: "محرك المستندات QuestPDF", level: "مستوى إنتاجي" }
    ]
  },
  {
    title: "قواعد البيانات واستقرار البيانات",
    description: "التطبيع العلائقي، وتصميم المخططات المهيكلة، وتحسين استعلامات الأداء.",
    skills: [
      { name: "MySQL / قواعد بيانات علائقية", level: "مستوى إنتاجي" },
      { name: "MongoDB / وثائقية", level: "متقدم" },
      { name: "هيكلة وتطبيع البيانات", level: "متقدم" },
      { name: "تحسين الاستعلامات والفهارس", level: "متقن" },
      { name: "Entity Framework Core", level: "مستوى إنتاجي" }
    ]
  },
  {
    title: "الأمان وإدارة الصلاحيات",
    description: "إدارة جلسات العمل الصارمة، والتحكم بالوصول المبني على الأدوار.",
    skills: [
      { name: "إدارة رموز JWT ودورة حياتها", level: "مستوى إنتاجي" },
      { name: "نظام الصلاحيات المتعدد (RBAC)", level: "مستوى إنتاجي" },
      { name: "تشفير كلمات المرور (BCrypt)", level: "مستوى إنتاجي" },
      { name: "أمان CORS وتصفية الطلبات", level: "متقدم" },
      { name: "سجلات التتبع والتدقيق", level: "مستوى إنتاجي" }
    ]
  },
  {
    title: "الأنظمة الدولية وثنائية اللغة",
    description: "خبرة تسليم حلول برمجية لأسواق الخليج العربي (الإمارات، عُمان) وواجهات متكاملة الاتجاهين.",
    skills: [
      { name: "واجهات ثنائية الاتجاه (RTL / LTR)", level: "مستوى إنتاجي" },
      { name: "تعريب احترافي بالعربية الفصحى", level: "مستوى إنتاجي" },
      { name: "مشاريع لشركات في الإمارات وعُمان", level: "مُسلَّمة تجارياً" },
      { name: "حسابات الضرائب وتعدد العملات", level: "مستوى إنتاجي" },
      { name: "التواصل وإدارة المشاريع الدولية", level: "نشط" }
    ]
  },
  {
    title: "أدوات التشغيل وهندسة البرمجيات",
    description: "إدارة الإصدارات، والبيئات الحاوية، وهندسة الكود المعتمدة على أدوات الذكاء الاصطناعي.",
    skills: [
      { name: "إدارة مستودعات Git & GitHub", level: "متقدم" },
      { name: "حاويات Docker", level: "متقن" },
      { name: "إدارة خوادم Linux", level: "متقن" },
      { name: "توثيق واجهات Postman", level: "متقدم" },
      { name: "تطوير مدعوم بالذكاء الاصطناعي", level: "منضبط" }
    ]
  }
];

export const getSkillCategories = (lang: Language): SkillCategory[] => {
  return lang === 'ar' ? SKILL_CATEGORIES_AR : SKILL_CATEGORIES_EN;
};

export const TECH_MARQUEE_ITEMS_EN: string[] = [
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "EXPRESS.JS",
  "ASP.NET CORE",
  "C#",
  "PYTHON",
  "DJANGO",
  "REST APIs",
  "API INTEGRATIONS",
  "DATABASE SYSTEMS",
  "ERP SYSTEMS",
  "CRM SYSTEMS",
  "BUSINESS AUTOMATION",
  "WORKFLOW SYSTEMS",
  "MYSQL",
  "MONGODB",
  "ENTITY FRAMEWORK CORE",
  "JWT AUTH & RBAC",
  "DOCKER",
  "BILINGUAL EN/AR",
  "RTL / LTR"
];

export const TECH_MARQUEE_ITEMS_AR: string[] = [
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "EXPRESS.JS",
  "ASP.NET CORE",
  "C#",
  "PYTHON",
  "DJANGO",
  "واجهات برمجة التطبيقات (REST APIs)",
  "تكاملات واجهات برمجة التطبيقات",
  "أنظمة قواعد البيانات",
  "أنظمة تخطيط موارد المؤسسات (ERP)",
  "أنظمة إدارة علاقات العملاء (CRM)",
  "أتمتة العمليات التجارية",
  "أنظمة سير العمل",
  "MYSQL",
  "MONGODB",
  "ENTITY FRAMEWORK CORE",
  "المصادقة وإدارة الصلاحيات (JWT / RBAC)",
  "حاويات DOCKER",
  "دعم اللغتين العربية والإنجليزية",
  "دعم الاتجاهين RTL / LTR"
];

export const TECH_MARQUEE_ITEMS = TECH_MARQUEE_ITEMS_EN;
