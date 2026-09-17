export interface TerritoryCard {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  principles: string[];
}

export const ENGINEERING_TERRITORIES: TerritoryCard[] = [
  {
    id: "frontend-systems",
    number: "01",
    category: "CLIENT ARCHITECTURE",
    title: "Frontend Systems",
    tagline: "Structured state, performant rendering, clean hierarchy",
    description:
      "Building resilient web interfaces that handle complex business state without degrading performance. Prioritizing clear component contracts, keyboard accessibility, and predictable reactive flows.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "React Hooks", "Vite"],
    principles: ["Deterministic state", "Zero UI lag", "Fluid responsiveness", "Accessible inputs"]
  },
  {
    id: "backend-apis",
    number: "02",
    category: "SERVICE ARCHITECTURE",
    title: "Backend & REST APIs",
    tagline: "Deterministic routes, structured contracts, resilient services",
    description:
      "Engineering server-side business layers using ASP.NET Core, Express.js, and Django. Ensuring every route adheres to RESTful semantics, thorough input sanitization, and actionable error telemetry.",
    technologies: ["ASP.NET Core", "Node.js", "Express.js", "C#", "Django", "REST"],
    principles: ["Strict input validation", "Explicit error codes", "Idempotent mutations", "Clear logging"]
  },
  {
    id: "database-modeling",
    number: "03",
    category: "DATA ARCHITECTURE",
    title: "Databases & Schemas",
    tagline: "Normalized relational schemas & high-throughput document stores",
    description:
      "Designing normalized MySQL schemas and MongoDB collections that protect data integrity, prevent duplicate records, and scale gracefully with business transactions.",
    technologies: ["MySQL", "MongoDB", "Entity Framework Core", "SQL", "Mongoose"],
    principles: ["Foreign key integrity", "Schema migrations", "Optimized indices", "Audit traceability"]
  },
  {
    id: "auth-security",
    number: "04",
    category: "SECURITY & ACCESS",
    title: "Authentication & RBAC",
    tagline: "Stateless tokens, role guards, perimeter protection",
    description:
      "Implementing robust identity verification with JWT session tokens and granular Role-Based Access Control (RBAC) so clients, engineers, and administrators only access their authorized endpoints.",
    technologies: ["JWT", "RBAC", "Bcrypt / Password Hashing", "Role Middleware", "CORS"],
    principles: ["Least privilege access", "Stateless verification", "Strict perimeter guards", "Session isolation"]
  },
  {
    id: "business-workflows",
    number: "05",
    category: "BUSINESS SYSTEMS & AUTOMATION",
    title: "ERP, CRM & Business Automation",
    tagline: "End-to-end workflow automation, approval pipelines, and document systems",
    description:
      "Translating manual or repetitive business processes into reliable automated software workflows. Building quote-to-invoice pipelines, approval hierarchies, customer management portals, and programmatic document generation.",
    technologies: ["ERP Architecture", "CRM / Client Systems", "Business Process Automation", "QuestPDF", "Multi-stage Pipelines", "Audit Trails"],
    principles: ["Stepwise progression", "Immutable document snapshots", "Audit history", "Signatory verification"]
  },
  {
    id: "deployment-automation",
    number: "06",
    category: "LIFECYCLE & DEVOPS",
    title: "Deployment & Delivery",
    tagline: "Linux environments, containerization, production rollout",
    description:
      "Treating deployment as a core facet of software engineering rather than an afterthought. Packaging systems into Docker containers and managing reliable cloud and Linux runtime environments.",
    technologies: ["Docker", "Linux", "Git", "GitHub Actions", "Environment Configuration"],
    principles: ["Reproducible builds", "Zero credential leaks", "Graceful shutdown", "Health checks"]
  }
];

export const ENGINEERING_TERRITORIES_AR: TerritoryCard[] = [
  {
    id: "frontend-systems",
    number: "01",
    category: "معمارية الواجهات الأمامية",
    title: "أنظمة الواجهات الأمامية",
    tagline: "إدارة حالة منظمة، أداء سريع، وهيكلية مكونات نظيفة",
    description:
      "بناء واجهات ويب متينة تتعامل مع حالات الأعمال المعقدة دون التأثير على سرعة الأداء، مع التركيز على عقود المكونات الواضحة والتدفقات التفاعلية المتوقعة.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "React Hooks", "Vite"],
    principles: ["حالة متوقعة وحاسمة", "استجابة سريعة خالية من التعليق", "مرونة عبر مختلف الشاشات", "إمكانية وصول شاملة"]
  },
  {
    id: "backend-apis",
    number: "02",
    category: "معمارية الخدمات الخلفية",
    title: "الواجهات الخلفية و APIs",
    tagline: "مسارات دقيقة، عقود بيانات مهيكلة، وخدمات مرنة ومستقرة",
    description:
      "تطوير طبقات الأعمال من جانب الخادم باستخدام ASP.NET Core و Express.js و Django، وضمان التزام كل مسار بمعايير RESTful وتطهير المدخلات ومعالجة الأخطاء.",
    technologies: ["ASP.NET Core", "Node.js", "Express.js", "C#", "Django", "REST"],
    principles: ["تحقق صارم من المدخلات", "رموز أخطاء صريحة وموثقة", "عمليات آمنة للتكرار", "تسجيل وتتبع واضح"]
  },
  {
    id: "database-modeling",
    number: "03",
    category: "معمارية تخزين البيانات",
    title: "قواعد البيانات والمخططات",
    tagline: "مخططات علائقية معيارية ومخازن مستندية عالية السرعة",
    description:
      "تصميم مخططات MySQL معيارية ومجموعات MongoDB تحافظ على سلامة البيانات، وتمنع تكرار السجلات، وتتوسع بسلاسة مع معاملات الأعمال المتزايدة.",
    technologies: ["MySQL", "MongoDB", "Entity Framework Core", "SQL", "Mongoose"],
    principles: ["سلامة المفاتيح الأجنبية", "إدارة ترقيات المخططات", "فهارس استعلام محسنة", "إمكانية تتبع العمليات"]
  },
  {
    id: "auth-security",
    number: "04",
    category: "الأمان وإدارة الوصول",
    title: "المصادقة والتحكم بالأدوار (RBAC)",
    tagline: "رموز لا مركزية، حماية الأدوار، وتأمين حدود النظام",
    description:
      "تطبيق آليات قوية للتحقق من الهوية عبر رموز JWT وصلاحيات الوصول المستندة للأدوار (RBAC) لضمان وصول كل مستخدم وفني وإداري لنطاقه المصرح به فقط.",
    technologies: ["JWT", "RBAC", "Bcrypt / تشفير كلمات المرور", "وسائط حماية الأدوار", "CORS"],
    principles: ["مبدأ الحد الأدنى من الصلاحيات", "مصادقة لا مركزية خفيفة", "حماية صارمة للحدود", "عزل تام للجلسات"]
  },
  {
    id: "business-workflows",
    number: "05",
    category: "أنظمة الأعمال والأتمتة التشغيلية",
    title: "أنظمة ERP و CRM وأتمتة الأعمال",
    tagline: "أتمتة مسارات العمل المتكاملة، سلاسل الموافقات، ومحركات المستندات الرقمية",
    description:
      "تحويل الإجراءات التشغيلية واليدوية المتكررة إلى منظومات برمجية مؤتمتة، تشمل دورات عروض الأسعار والفوترة، وسلاسل الاعتمادات الإدارية، وإدارة حسابات العملاء، ومحركات توليد المستندات الرقمية.",
    technologies: ["هندسة أنظمة ERP", "إدارة العملاء CRM", "أتمتة العمليات التشغيلية", "QuestPDF", "مسارات متعددة المراحل", "سجلات تدقيق العمليات"],
    principles: ["تدرج مرحلي منضبط", "لقطات مستندات غير قابلة للتعديل", "سجل تاريخي للتدقيق", "اعتماد التوقيعات الرسمية"]
  },
  {
    id: "deployment-automation",
    number: "06",
    category: "دورة الحياة والنشر السحابي",
    title: "النشر والتشغيل السحابي",
    tagline: "بيئات Linux، تجهيز الحاويات، والإطلاق الإنتاجي الموثوق",
    description:
      "التعامل مع النشر كجزء أساسي من هندسة البرمجيات. حزم الأنظمة داخل حاويات Docker وإدارة بيئات التشغيل السحابي على خوادم Linux بكفاءة واستقرار.",
    technologies: ["Docker", "Linux", "Git", "GitHub Actions", "تهيئة بيئات التشغيل"],
    principles: ["بناء بيئي قابل للتكرار", "حماية تامة من تسريب الأسرار", "إيقاف تشغيل انسيابي", "فحوصات استمرارية الخدمة"]
  }
];

export const getEngineeringTerritories = (lang: 'en' | 'ar'): TerritoryCard[] => {
  return lang === 'ar' ? ENGINEERING_TERRITORIES_AR : ENGINEERING_TERRITORIES;
};
