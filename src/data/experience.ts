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
    role: "Sole Full-Stack Developer",
    company: "MAGNAVOLT Technical Services L.L.C - S.P.C",
    type: "Contract",
    location: "Remote (UAE Engineering Services)",
    intlBadge: "UAE • TECHNICAL ENGINEERING SERVICES",
    current: true,
    overview: "I designed, developed and deployed MAGNAVOLT’s public website and service-management platform as the sole full-stack developer, and continue to maintain it.",
    responsibilities: [
      "Created the original application design and codebase as the sole developer, deployed the project and continue to maintain it.",
      "Refined responsive administration and mobile-oriented technician interfaces, customer/company synchronization, staff lifecycle safeguards and authentication sessions.",
      "Improved QuestPDF generation by embedding branding assets, avoiding dependencies on developer-machine file paths.",
      "Enforced server-side business rules and financial calculations, preserved operational history and improved session lifecycle handling."
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
      "Docker"
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
    role: "المطور الوحيد للمشروع (Full Stack)",
    company: "ماجنافولت للخدمات الفنية (MAGNAVOLT Technical Services L.L.C - S.P.C)",
    type: "عقد عمل تجاري",
    location: "عن بُعد (خدمات هندسية وتقنية — الإمارات)",
    intlBadge: "الإمارات • خدمات هندسية وتقنية",
    current: true,
    overview: "صممت وطورت ونشرت موقع MAGNAVOLT العام ومنصة إدارة الخدمات بصفتي المطور الوحيد للمشروع، وأواصل صيانته.",
    responsibilities: [
      "أنشأت التصميم الأصلي والكود البرمجي للمشروع بالكامل بصفتي المطور الوحيد، وتوليت النشر وأواصل الصيانة.",
      "حسّنت واجهات الإدارة المتجاوبة ومهام الفنيين على الجوال، ومزامنة سجلات العملاء والشركات، وضوابط إدارة الموظفين وجلسات المصادقة.",
      "حسّنت توليد مستندات QuestPDF بتضمين أصول الهوية البصرية، لإزالة الاعتماد على مسارات ملفات جهاز المطور.",
      "فرض قواعد العمل والحسابات المالية في الخادم، وحماية السجل التشغيلي، وإدارة دورة حياة الجلسات."
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
      "Docker"
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
