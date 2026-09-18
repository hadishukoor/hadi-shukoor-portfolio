export interface WorkflowStage {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: "01",
    name: "REQUIREMENTS",
    subtitle: "Understanding the real problem",
    description:
      "Before writing a single line of code, clarify what the software must accomplish, define edge cases, and map operational constraints with stakeholders.",
    deliverables: ["Functional scope", "User stories & roles", "Acceptance criteria"]
  },
  {
    step: "02",
    name: "ARCHITECTURE",
    subtitle: "System design & data contracts",
    description:
      "Design normalized database schemas, define RESTful endpoint contracts, plan state flows, and establish authentication boundaries between tiers.",
    deliverables: ["Relational/document schema", "REST API specifications", "Security & RBAC model"]
  },
  {
    step: "03",
    name: "DEVELOPMENT",
    subtitle: "Building the actual system",
    description:
      "Implement the complete software stack: server-side controllers, database access layers, and responsive client interfaces with clean component composition.",
    deliverables: ["Type-safe frontend code", "Backend API services", "Data validation layers"]
  },
  {
    step: "04",
    name: "INTEGRATION",
    subtitle: "Connecting services & data pipes",
    description:
      "Wire public web portals to internal ticket queues, configure automated document generation (e.g., QuestPDF), and synchronize third-party systems.",
    deliverables: ["Public-to-internal API bridge", "Automated document output", "Service integrations"]
  },
  {
    step: "05",
    name: "DEBUGGING",
    subtitle: "Systematic fault elimination",
    description:
      "Trace anomalies systematically using network telemetry, database queries, and audit logs rather than relying on guesswork or trial-and-error fixes.",
    deliverables: ["Root cause analysis", "Regression prevention", "Edge case hardening"]
  },
  {
    step: "06",
    name: "DEPLOYMENT",
    subtitle: "Production runtime hardening",
    description:
      "Treat deployment as a primary development deliverable: containerize with Docker, configure secure environment secrets, and verify Linux production hosting.",
    deliverables: ["Container builds", "Environment isolation", "Health check verification"]
  },
  {
    step: "07",
    name: "DELIVERY",
    subtitle: "Operational handoff & stability",
    description:
      "Deliver a working, documented, and maintainable software system ready for everyday business operations, administrative workflows, and client usage.",
    deliverables: ["Operational walkthrough", "Administrative onboarding", "System documentation"]
  }
];

export const WORKFLOW_STAGES_AR: WorkflowStage[] = [
  {
    step: "01",
    name: "تحليل المتطلبات",
    subtitle: "فهم التحدي التشغيلي الحقيقي",
    description:
      "قبل كتابة أي سطر برمجي، نحدد ما يجب على النظام إنجازه بدقة، مع دراسة الحالات الاستثنائية والقيود التشغيلية مع أصحاب المصلحة.",
    deliverables: ["نطاق العمل الوظيفي", "أدوار المستخدمين ومساراتهم", "معايير القبول الفني"]
  },
  {
    step: "02",
    name: "هندسة البنية المعمارية",
    subtitle: "تصميم النظام وعقود البيانات",
    description:
      "تصميم مخططات قواعد البيانات المعيارية، صياغة عقود واجهات REST البرمجية، تخطيط تدفقات الحالة، وتحديد حدود الأمان بين طبقات النظام.",
    deliverables: ["مخطط قواعد البيانات العلائقية", "مواصفات واجهات REST APIs", "نموذج الصلاحيات والأمان (RBAC)"]
  },
  {
    step: "03",
    name: "التطوير البرمجي",
    subtitle: "بناء النظام المتكامل",
    description:
      "تطوير الطبقات البرمجية بالكامل: وحدات التحكم من جانب الخادم، طبقات الوصول للبيانات، وواجهات مستخدم متجاوبة مع بنية مكونات نظيفة.",
    deliverables: ["واجهات أمامية محددة الأنواع", "خدمات واجهات REST الخلفية", "طبقات التحقق من صحة البيانات"]
  },
  {
    step: "04",
    name: "التكامل والربط",
    subtitle: "ربط الخدمات وقنوات البيانات",
    description:
      "ربط البوابات الإلكترونية العامة بأنظمة التذاكر والعمليات الداخلية، إعداد توليد المستندات المؤتمت (مثل QuestPDF)، ومزامنة الخدمات الخارجية.",
    deliverables: ["جسر ربط الواجهات العامة بالأنظمة الداخلية", "توليد تلقائي للمستندات والتقارير", "تكامل الخدمات السحابية"]
  },
  {
    step: "05",
    name: "الفحص وتصحيح الأخطاء",
    subtitle: "القضاء المنهجي على المشكلات",
    description:
      "تتبع السلوكيات البرمجية بأسلوب منهجي عبر قياسات الشبكة وسجلات التدقيق واستعلامات قواعد البيانات لضمان أعلى درجات الاستقرار.",
    deliverables: ["تحليل الأسباب الجذرية", "منع تكرار الأخطاء البرمجية", "معالجة الحالات الحدية"]
  },
  {
    step: "06",
    name: "النشر والتهيئة السحابية",
    subtitle: "تجهيز بيئة التشغيل للإنتاج",
    description:
      "التعامل مع النشر كخطوة تطوير رئيسية: تجهيز الحاويات بواسطة Docker، تهيئة متغيرات البيئة والأسرار، والتحقق من بيئة الاستضافة على Linux.",
    deliverables: ["حزم الحاويات السحابية", "عزل البيئات وتأمينها", "التحقق من فحوصات الصحة والتوافر"]
  },
  {
    step: "07",
    name: "التسليم والتشغيل",
    subtitle: "التسليم التشغيلي والمراجعة",
    description:
      "تقديم جولة مراجعة تشغيلية لأصحاب العمل، والتحقق من الجاهزية التامة عبر مختلف الأدوار، وتوثيق إجراءات الإدارة والصيانة.",
    deliverables: ["جولة تدريبية للمشغلين", "دليل الإدارة والتشغيل", "اعتماد التشغيل الإنتاجي النهائي"]
  }
];

export const getWorkflowStages = (lang: 'en' | 'ar'): WorkflowStage[] => {
  return lang === 'ar' ? WORKFLOW_STAGES_AR : WORKFLOW_STAGES;
};
