export interface TranslationContent {
  nav: {
    brandSubtitle: string;
    philosophy: string;
    about: string;
    experience: string;
    workflow: string;
    work: string;
    stack: string;
    contact: string;
    letsBuild: string;
    switchLang: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    name: string[];
    subtitle: {
      building: string;
      production: string;
      web: string;
      systems: string;
      and: string;
      apis: string;
    };
    description: string;
    tags: { label: string; sub?: string }[];
    exploreWork: string;
    letsBuild: string;
    scrollExplore: string;
  };
  kinetic: {
    sectionLabel: string;
    sectionSub: string;
    row1: { build: string; debug: string; deploy: string };
    row2: { systems: string; and: string; apis: string };
    row3: { requirements: string; to: string; workingSoftware: string };
    row4: { fullStack: string; engineering: string; architecture: string };
  };
  philosophy: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    coreFocusLabel: string;
    coreFocusValue: string;
    principles: { title: string; text: string }[];
  };
  workflow: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    deliverablesLabel: string;
    stages: {
      step: string;
      name: string;
      subtitle: string;
      description: string;
      deliverables: string[];
    }[];
  };
  about: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    portraitLabel: string;
    roleTag: string;
    quickFacts: { label: string; value: string }[];
    bioHeading: string;
    bioParagraphs: string[];
    viewExperience: string;
    getInTouch: string;
  };
  experience: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    activeContract: string;
    independentEngagements: string;
    coreResponsibilities: string;
    educationTitle: string;
    degree: string;
    field: string;
    institution: string;
    period: string;
    location: string;
    curriculum: string;
    intlBadgeUAE: string;
  };
  work: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    flagshipBadge: string;
    intlProjectUAE: string;
    intlProjectOman: string;
    bilingualBadgeOman: string;
    dualPortalsBadge: string;
    pipelineLabel: string;
    quickFixLabel: string;
    architectureHeader: string;
    modulesSummary: string;
    viewCaseStudy: string;
    proposedStackLabel: string;
    upcomingBadge: string;
    modal: {
      overviewTab: string;
      modulesTab: string;
      specsTab: string;
      workflowsTab: string;
      proposedStackTab: string;
      caseStudyTab: string;
      systemOverview: string;
      keyArchitecturalHighlights: string;
      dualInterfacePortals: string;
      adminCommandConsole: string;
      technicianMobilePortal: string;
      operationalPipelineTitle: string;
      quickFixTitle: string;
      technicalSpecifications: string;
      modulesBreakdown: string;
      close: string;
    };
  };
  territory: {
    sectionLabel: string;
    taglineSubtitle: string;
    principlesLabel: string;
    techLabel: string;
    testedBadge: string;
    activeCapability: string;
    of: string;
    prev: string;
    next: string;
  };
  stack: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    categoryPrefix: string;
    categories: { title: string; subtitle: string }[];
  };
  ai: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    stanceTitle: string;
    quoteLine1: string;
    quoteLine2: string;
    quoteText: string;
    steps: { step: string; name: string; desc: string }[];
  };
  contact: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    chatPrompt: string;
    chatSub: string;
    openWhatsApp: string;
    sendEmail: string;
    callDirect: string;
    clickToCopy: string;
    copied: string;
    detailedPrompt: string;
    openInquiryForm: string;
    channelsLabel: string;
  };
  modal: {
    title: string;
    quickTab: string;
    detailedTab: string;
    connectDirectly: string;
    connectSub: string;
    openWhatsApp: string;
    sendEmailDirect: string;
    callDirect: string;
    clickToCopy: string;
    copied: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectTypeLabel: string;
    projectTypes: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successHeading: string;
    successMessage: string;
    sendAnother: string;
    errors: {
      name: string;
      email: string;
      message: string;
    };
  };
  footer: {
    brandName: string;
    role: string;
    summary: string;
    navTitle: string;
    directTitle: string;
    rights: string;
    builtWith: string;
  };
  floatingChat: {
    label: string;
    aria: string;
  };
}

export const translations: Record<'en' | 'ar', TranslationContent> = {
  en: {
    nav: {
      brandSubtitle: "FULL STACK SOFTWARE ENGINEER",
      philosophy: "PHILOSOPHY",
      about: "ABOUT",
      experience: "EXPERIENCE",
      workflow: "WORKFLOW",
      work: "WORK",
      stack: "STACK",
      contact: "CONTACT",
      letsBuild: "Let's Build",
      switchLang: "العربية",
      langLabel: "EN | العربية",
    },
    hero: {
      eyebrow: "Full Stack Software Engineer",
      role: "Full Stack Software Engineer",
      name: ["MOHAMMAD", "HADI", "SHUKOOR"],
      subtitle: {
        building: "BUILDING",
        production: "PRODUCTION",
        web: "WEB",
        systems: "SYSTEMS",
        and: "&",
        apis: "APIs",
      },
      description:
        "Building production web applications, business systems, APIs, and workflow automation from requirements to deployment. Specializing in enterprise ERP platforms, CRM systems, and secure client-admin portals.",
      tags: [
        { label: "FULL STACK" },
        { label: "BUSINESS AUTOMATION" },
        { label: "ERP / CRM SYSTEMS" },
        { label: "APIs & INTEGRATIONS" },
        { label: "DATABASES & RBAC" },
        { label: "AI-POWERED SYSTEMS" },
      ],
      exploreWork: "Explore Systems",
      letsBuild: "Let's Build",
      scrollExplore: "Explore",
    },
    kinetic: {
      sectionLabel: "Core Engineering Focus",
      sectionSub: "Clarity • Precision • Delivery",
      row1: { build: "BUILD", debug: "DEBUG", deploy: "DEPLOY" },
      row2: { systems: "SYSTEMS", and: "&", apis: "PRODUCTION APIs" },
      row3: { requirements: "REQUIREMENTS", to: "→", workingSoftware: "WORKING SOFTWARE" },
      row4: { fullStack: "FULL STACK", engineering: "ENGINEERING", architecture: "ARCHITECTURE" },
    },
    philosophy: {
      eyebrow: "Engineering Manifesto",
      titleLine1: "FROM REQUIREMENTS",
      titleLine2: "TO RUNNING",
      titleLine3: "SOFTWARE.",
      description:
        "I don't just assemble visual templates. I engineer full-stack software systems that translate complex operational workflows into dependable, maintainable digital products.",
      coreFocusLabel: "Core Focus:",
      coreFocusValue: "Clarity • Robustness • Delivery",
      principles: [
        {
          title: "Understand the real problem",
          text: "Code written without clear requirements is tech debt on day one. I clarify business rules, boundary constraints, and user flows before writing models or components.",
        },
        {
          title: "Design the system, not just the page",
          text: "A UI is only as resilient as the data contracts underneath it. I architect normalized databases, type-safe API boundaries, and clear state lifecycles together.",
        },
        {
          title: "Build real software, not prototypes",
          text: "Enterprise value lives in validation, access controls, edge-case coverage, and reliable transactional handling—not in static mockups.",
        },
        {
          title: "Debug systematically",
          text: "When something breaks, I isolate network payloads, database queries, and audit logs. Systematic diagnostics beat trial-and-error guessing every time.",
        },
        {
          title: "Deployment is part of development",
          text: "Software isn't done when it works on localhost. I treat container packaging, environment secrets, and server runtime health as foundational deliverables.",
        },
        {
          title: "Iterate from actual operations",
          text: "Real business usage reveals what works. I build maintainable, cleanly separated modules designed to evolve as company operations expand.",
        },
      ],
    },
    workflow: {
      eyebrow: "Engineering Lifecycle",
      titlePart1: "HOW I BRING SYSTEMS",
      titlePart2: "TO LIFE",
      description:
        "A methodical 7-stage software development process guaranteeing predictable delivery, traceable engineering, and maintainable software.",
      deliverablesLabel: "Key Engineering Deliverables:",
      stages: [
        {
          step: "01",
          name: "REQUIREMENTS",
          subtitle: "Understanding the real problem",
          description:
            "Before writing a single line of code, clarify what the software must accomplish, define edge cases, and map operational constraints with stakeholders.",
          deliverables: ["Functional scope", "User stories & roles", "Acceptance criteria"],
        },
        {
          step: "02",
          name: "ARCHITECTURE",
          subtitle: "System design & data contracts",
          description:
            "Design normalized database schemas, define RESTful endpoint contracts, plan state flows, and establish authentication boundaries between tiers.",
          deliverables: ["Relational/document schema", "REST API specifications", "Security & RBAC model"],
        },
        {
          step: "03",
          name: "DEVELOPMENT",
          subtitle: "Building the actual system",
          description:
            "Implement the complete software stack: server-side controllers, database access layers, and responsive client interfaces with clean component composition.",
          deliverables: ["Type-safe frontend code", "Backend API services", "Data validation layers"],
        },
        {
          step: "04",
          name: "INTEGRATION",
          subtitle: "Connecting services & data pipes",
          description:
            "Wire public web portals to internal ticket queues, configure automated document generation (e.g., QuestPDF), and synchronize third-party systems.",
          deliverables: ["Public-to-internal API bridge", "Automated document output", "Service integrations"],
        },
        {
          step: "05",
          name: "DEBUGGING",
          subtitle: "Systematic fault elimination",
          description:
            "Trace anomalies systematically using network telemetry, database queries, and audit logs rather than relying on guesswork or trial-and-error fixes.",
          deliverables: ["Root cause analysis", "Regression prevention", "Edge case hardening"],
        },
        {
          step: "06",
          name: "DEPLOYMENT",
          subtitle: "Production runtime hardening",
          description:
            "Treat deployment as a primary development deliverable: containerize with Docker, configure secure environment secrets, and verify Linux production hosting.",
          deliverables: ["Container builds", "Environment isolation", "Health check verification"],
        },
        {
          step: "07",
          name: "DELIVERY",
          subtitle: "Operational handoff & review",
          description:
            "Conduct structured client walkthroughs, verify operational readiness across all roles, and document system administration procedures.",
          deliverables: ["Operator walkthrough", "Admin documentation", "Verified production signoff"],
        },
      ],
    },
    about: {
      eyebrow: "Personal Introduction",
      titlePart1: "WHO I AM &",
      titlePart2: "WHAT I BUILD",
      description:
        "The engineer behind the architecture. Practical problem solving, end-to-end responsibility, and clean production systems.",
      portraitLabel: "Mohammad Hadi Shukoor — Full Stack Software Engineer",
      roleTag: "Software Engineer",
      quickFacts: [
        { label: "Location", value: "Kannur, Kerala, India" },
        { label: "Role", value: "Full Stack Software Engineer" },
        { label: "Core Focus", value: "Web Systems, REST APIs, Databases" },
        { label: "Availability", value: "Contract, Full-Time & Freelance" },
        { label: "Education", value: "B.Tech IT (LPU, 2023–2027)" },
      ],
      bioHeading: "A SOFTWARE ENGINEER WHO BUILDS SYSTEMS.",
      bioParagraphs: [
        "I am Mohammad Hadi Shukoor, a Full Stack Software Engineer based in Kannur, Kerala, India.",
        "I build web applications, APIs, database-backed systems, and business workflows.",
        "I enjoy taking a requirement, understanding the underlying problem, designing the system, building it, debugging it, and getting it deployed.",
      ],
      viewExperience: "View Experience",
      getInTouch: "Get In Touch",
    },
    experience: {
      eyebrow: "Commercial Delivery & Background",
      titlePart1: "EXPERIENCE &",
      titlePart2: "EDUCATION",
      description:
        "Hands-on commercial delivery in production engineering environments alongside formal computer science and software foundations.",
      activeContract: "Active Commercial Contract",
      independentEngagements: "Independent Engagements",
      coreResponsibilities: "Core Engineering Responsibilities:",
      educationTitle: "Formal Academic Foundation",
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Lovely Professional University",
      period: "Aug 2023 – Jul 2027",
      location: "Punjab, India",
      curriculum:
        "Core computer science foundation: Data Structures & Algorithms, Database Management Systems, Computer Networks, Software Engineering Principles, and Web Application Architecture.",
      intlBadgeUAE: "UAE • TECHNICAL ENGINEERING SERVICES",
    },
    work: {
      eyebrow: "Engineered Systems",
      titlePart1: "SELECTED",
      titlePart2: "WORK",
      description:
        "Real production applications and software systems built with clear architecture, normalized schemas, and end-to-end delivery.",
      flagshipBadge: "FEATURED FLAGSHIP SYSTEM",
      intlProjectUAE: "UAE • INTERNATIONAL PROJECT",
      intlProjectOman: "OMAN • INTERNATIONAL PROJECT",
      bilingualBadgeOman: "OMAN • BILINGUAL WEB PLATFORM",
      dualPortalsBadge: "Dual Admin & Technician Portals",
      pipelineLabel: "8-Stage Integrated Operational Pipeline:",
      quickFixLabel: "+ QuickFix Direct Invoice Flow",
      architectureHeader: "Architecture & Capabilities",
      modulesSummary: "13 Modules • Dual Portals",
      viewCaseStudy: "View Full Engineering Case Study",
      proposedStackLabel: "PROPOSED STACK",
      upcomingBadge: "COMING SOON",
      modal: {
        overviewTab: "Overview",
        modulesTab: "13 System Modules",
        specsTab: "Technical Specs",
        workflowsTab: "Planned Workflows",
        proposedStackTab: "Proposed Stack",
        caseStudyTab: "Case Study & Analysis",
        systemOverview: "System Overview",
        keyArchitecturalHighlights: "Key Architectural Highlights",
        dualInterfacePortals: "Dual-Interface Operating Portals",
        adminCommandConsole: "Admin Operations & Command Console",
        technicianMobilePortal: "Field Technician Execution Portal",
        operationalPipelineTitle: "Comprehensive 8-Stage Service Lifecycle",
        quickFixTitle: "Expedited QuickFix Direct Billing Engine",
        technicalSpecifications: "Technical Specifications & Stack Architecture",
        modulesBreakdown: "13 Operational Modules Breakdown",
        close: "Close Case Study",
      },
    },
    territory: {
      sectionLabel: "ENGINEERING TERRITORIES",
      taglineSubtitle: "Core Architecture Domains",
      principlesLabel: "Engineering Principles:",
      techLabel: "Primary Technologies:",
      testedBadge: "Production tested & deployed",
      activeCapability: "Active capability",
      of: "of",
      prev: "Previous domain",
      next: "Next domain",
    },
    stack: {
      eyebrow: "Technical Capabilities",
      titlePart1: "ENGINEERING",
      titlePart2: "STACK",
      description:
        "Organized around practical full-stack capabilities, production frameworks, and reliable runtime architectures.",
      categoryPrefix: "Category 0",
      categories: [
        { title: "FRONTEND", subtitle: "Interfaces, state management & reactive architecture" },
        { title: "BACKEND", subtitle: "APIs, business logic & services" },
        { title: "DATABASE", subtitle: "Relational & document persistence models" },
        { title: "SECURITY", subtitle: "Identity, session & access protection" },
        { title: "DEVOPS & TOOLS", subtitle: "Version control, containers & environments" },
        { title: "LANGUAGES", subtitle: "Core programming fundamentals" },
      ],
    },
    ai: {
      eyebrow: "Modern Engineering Practice",
      titlePart1: "AI-ASSISTED",
      titlePart2: "ENGINEERING",
      description:
        "AI is an accelerator, not the engineer. How I leverage machine intelligence for speed without surrendering software rigor.",
      stanceTitle: "The Realist's Stance on AI in Production",
      quoteLine1: "\"AI ACCELERATES PROTOTYPING.",
      quoteLine2: "ENGINEERING JUDGMENT, ARCHITECTURE & VERIFICATION REMAIN MINE.\"",
      quoteText:
        "I leverage AI tools to rapidly scaffold boilerplate, explore interface variations, and draft API endpoints. However, production viability demands deliberate architectural discipline: every line is verified, security boundaries are hand-audited, and database transactions are designed by human reasoning.",
      steps: [
        { step: "01", name: "GENERATE", desc: "Use AI to draft boilerplate, explore alternative interfaces, and formulate initial data contracts rapidly." },
        { step: "02", name: "REVIEW", desc: "Audit every generated line against performance, edge-case coverage, and strict role boundaries." },
        { step: "03", name: "UNDERSTAND", desc: "Never commit code that isn't fully comprehended down to memory allocation and query efficiency." },
        { step: "04", name: "TEST", desc: "Validate business logic against real network conditions, bad inputs, and authorization perimeter tests." },
        { step: "05", name: "ADAPT", desc: "Refactor to integrate seamlessly into existing codebase patterns, naming conventions, and DB schemas." },
        { step: "06", name: "SHIP", desc: "Deploy verified, human-owned, and production-tested systems with zero opaque hallucinations." },
      ],
    },
    contact: {
      eyebrow: "Initiate Conversation",
      titlePart1: "CONNECT &",
      titlePart2: "LET'S BUILD",
      description:
        "Have an enterprise system, API layer, or bespoke web platform to design and deliver? Reach out directly via WhatsApp, email, or schedule an architectural inquiry.",
      chatPrompt: "Quick Direct Message",
      chatSub: "Fastest response via WhatsApp",
      openWhatsApp: "Open WhatsApp Chat",
      sendEmail: "Send Direct Email",
      callDirect: "Direct Phone Call",
      clickToCopy: "Click to copy",
      copied: "Copied to clipboard!",
      detailedPrompt: "Detailed Project Inquiry",
      openInquiryForm: "Open Project Inquiry Form",
      channelsLabel: "Direct Communication Channels",
    },
    modal: {
      title: "Get In Touch",
      quickTab: "Quick Reach Out",
      detailedTab: "Detailed Project Inquiry",
      connectDirectly: "Direct Communication",
      connectSub: "Select a channel for an immediate response:",
      openWhatsApp: "Open WhatsApp Chat",
      sendEmailDirect: "Send Direct Email",
      callDirect: "Call Direct",
      clickToCopy: "Click to copy",
      copied: "Copied!",
      formTitle: "Project Inquiry Form",
      formSub: "Provide your project requirements for an architectural consultation:",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Email Address",
      emailPlaceholder: "alex@company.com",
      phoneLabel: "Phone / WhatsApp (Optional)",
      phonePlaceholder: "+971 50 123 4567",
      projectTypeLabel: "Project Type",
      projectTypes: [
        "Full Stack Web Application",
        "Enterprise ERP / Operations Platform",
        "REST API & Database Architecture",
        "Customer / Technician Portal",
        "Bilingual Web Platform (EN / AR)",
        "Contract Engineering Engagement",
      ],
      messageLabel: "Project Overview / Requirements",
      messagePlaceholder: "Describe what you need built, key requirements, timeline, or operational problem...",
      submitButton: "Send Inquiry via Email",
      successHeading: "Inquiry Form Prepared",
      successMessage: "Your default email client has been launched with your structured project details pre-filled. If it did not open automatically, you can reach out directly via WhatsApp or email.",
      sendAnother: "Send Another Message",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please describe your project requirements (min 10 characters).",
      },
    },
    footer: {
      brandName: "MOHAMMAD HADI SHUKOOR",
      role: "Full Stack Software Engineer",
      summary:
        "Engineering full-stack web applications, ERP architectures, business automation, and scalable REST APIs. Transforming complex business requirements into resilient, verified running code.",
      navTitle: "Navigation",
      directTitle: "Direct Channels",
      rights: "All rights reserved.",
      builtWith: "Engineered with React, TypeScript & Tailwind CSS",
    },
    floatingChat: {
      label: "Message Hadi",
      aria: "Open contact and connection options for Mohammad Hadi Shukoor",
    },
  },
  ar: {
    nav: {
      brandSubtitle: "مهندس برمجيات وتطوير شامل (FULL STACK)",
      philosophy: "الفلسفة الهندسية",
      about: "عنّي",
      experience: "الخبرة العملية",
      workflow: "منهجية العمل",
      work: "المشاريع",
      stack: "المنظومة التقنية",
      contact: "التواصل",
      letsBuild: "لنبدأ العمل",
      switchLang: "English",
      langLabel: "العربية | EN",
    },
    hero: {
      eyebrow: "مهندس برمجيات وتطوير شامل",
      role: "مهندس برمجيات متكامل (Full Stack)",
      name: ["محمد", "هادي", "شكور"],
      subtitle: {
        building: "بناء",
        production: "أنظمة ويب",
        web: "إنتاجية",
        systems: "وواجهات برمجية",
        and: "متكاملة",
        apis: "APIs",
      },
      description:
        "هندسة وبناء تطبيقات الويب الإنتاجية، أنظمة الأعمال، الواجهات البرمجية، وأتمتة مسارات العمل من مرحلة المتطلبات حتى النشر الفعلي. متخصص في منصات ERP التشغيلية، وأنظمة CRM، وبوابات الإدارة والعملاء الآمنة.",
      tags: [
        { label: "تطوير شامل (FULL STACK)" },
        { label: "أتمتة الأعمال والعمليات" },
        { label: "أنظمة ERP و CRM" },
        { label: "الواجهات والتكامل" },
        { label: "قواعد البيانات والأمان" },
        { label: "أنظمة مدعومة بالذكاء الاصطناعي" },
      ],
      exploreWork: "استكشف الأنظمة",
      letsBuild: "لنبدأ العمل",
      scrollExplore: "استكشف",
    },
    kinetic: {
      sectionLabel: "المحاور الهندسية الأساسية",
      sectionSub: "وضوح • دقة • إنجاز عملي",
      row1: { build: "بناء", debug: "تصحيح", deploy: "نشر فعلي" },
      row2: { systems: "أنظمة برمجية", and: "و", apis: "واجهات برمجية إنتاجية" },
      row3: { requirements: "المتطلبات التشغيلية", to: "←", workingSoftware: "برمجيات تعمل بكفاءة" },
      row4: { fullStack: "تطوير شامل", engineering: "هندسة البرمجيات", architecture: "البنية المعمارية" },
    },
    philosophy: {
      eyebrow: "البيان الهندسي",
      titleLine1: "من المتطلبات",
      titleLine2: "إلى برمجيات",
      titleLine3: "تعمل بكفاءة.",
      description:
        "لا أكتفي بتركيب قوالب واجهات مسبقة الصنع. أقوم بهندسة وبناء أنظمة برمجية متكاملة تترجم مسارات العمل والعمليات التشغيلية المعقدة إلى منتجات رقمية موثوقة وقابلة للتطوير والاستدامة.",
      coreFocusLabel: "التركيز الأساسي:",
      coreFocusValue: "الوضوح • المتانة • الإنجاز",
      principles: [
        {
          title: "فهم المشكلة الحقيقية قبل كتابة الكود",
          text: "أي كود يُكتب دون فهم واضح للمتطلبات يتحول إلى ديون تقنية منذ اليوم الأول. أعمل على تحديد قواعد العمل، القيود التشغيلية، ومسارات المستخدمين بدقة قبل تصميم النماذج أو المكونات.",
        },
        {
          title: "تصميم النظام كاملاً، وليس مجرد الواجهة",
          text: "تعتمد متانة أي واجهة استخدام على قوة عقود البيانات التي تستند إليها. أصمم قواعد بيانات معيارية وواجهات برمجية آمنة ومحددة الأنواع مع دورات حالة متوقعة.",
        },
        {
          title: "بناء برمجيات حقيقية للإنتاج، لا مجرد نماذج أولية",
          text: "تكمن القيمة الفعلية للمؤسسات في التحقق الدقيق من المدخلات، التحكم في الصلاحيات، معالجة الحالات الاستثنائية، وضمان سلامة المعاملات المالية والتشغيلية.",
        },
        {
          title: "التصحيح المنهجي للأخطاء",
          text: "عند حدوث خلل برمجي، أتبع أسلوب العزل المنهجي لحزم الشبكة واستعلامات قواعد البيانات وسجلات التتبع، بعيداً عن أسلوب التخمين أو التجربة والخطأ.",
        },
        {
          title: "النشر الفعلي جزء أصيل من عملية التطوير",
          text: "لا يُعتبر البرنامج مكتملاً لمجرد أنه يعمل على الجهاز المحلي. أتعامل مع حزم الحاويات (Docker)، وإدارة الأسرار، وتهيئة بيئة خادم الإنتاج كمتطلبات أساسية.",
        },
        {
          title: "التطوير المستمر المستند إلى التشغيل الفعلي",
          text: "الاستخدام الحقيقي من قبل الشركات هو المعيار الأصدق لجودة البرمجيات. أبني وحدات نظيفة ومستقلة مصممة لتتطور بسلاسة مع توسع أعمال الشركة.",
        },
      ],
    },
    workflow: {
      eyebrow: "دورة حياة الهندسة البرمجية",
      titlePart1: "كيف أحول الأفكار",
      titlePart2: "إلى أنظمة تشغيلية",
      description:
        "منهجية تطوير منضبطة من 7 مراحل تضمن تسليماً قابلاً للتوقع، وبنية برمجية موثقة، وأنظمة قابلة للصيانة والتوسع.",
      deliverablesLabel: "المخرجات الهندسية الرئيسية:",
      stages: [
        {
          step: "01",
          name: "تحليل المتطلبات",
          subtitle: "فهم التحدي التشغيلي الحقيقي",
          description:
            "قبل كتابة أي سطر برمجي، نحدد ما يجب على النظام إنجازه بدقة، مع استكشاف الحالات الاستثنائية وتخطيط القيود التشغيلية مع أصحاب المصلحة.",
          deliverables: ["نطاق العمل الوظيفي", "قصص وأدوار المستخدمين", "معايير القبول الفني"],
        },
        {
          step: "02",
          name: "هندسة البنية المعمارية",
          subtitle: "تصميم النظام وعقود البيانات",
          description:
            "تصميم مخططات قواعد البيانات المعيارية، صياغة عقود واجهات REST البرمجية، تخطيط تدفقات الحالة، وتحديد حدود المصادقة بين طبقات النظام.",
          deliverables: ["مخطط قواعد البيانات العلائقية", "مواصفات واجهات REST", "نموذج الصلاحيات والأمان (RBAC)"],
        },
        {
          step: "03",
          name: "التطوير البرمجي",
          subtitle: "بناء النظام المتكامل",
          description:
            "تطوير الطبقات البرمجية بالكامل: وحدات التحكم من جانب الخادم، طبقات الوصول إلى البيانات، وواجهات مستخدم متجاوبة مع تكوين نظيف للمكونات.",
          deliverables: ["واجهات أمامية محددة الأنواع", "خدمات واجهات REST الخلفية", "طبقات التحقق من صحة البيانات"],
        },
        {
          step: "04",
          name: "التكامل والربط",
          subtitle: "ربط الخدمات وقنوات البيانات",
          description:
            "ربط البوابات الإلكترونية العامة بأنظمة التذاكر والعمليات الداخلية، إعداد توليد المستندات المؤتمت (مثل QuestPDF)، ومزامنة الخدمات الخارجية.",
          deliverables: ["جسر ربط الواجهات العامة بالأنظمة الداخلية", "توليد تلقائي للمستندات والتقارير", "تكامل الخدمات السحابية"],
        },
        {
          step: "05",
          name: "الفحص وتصحيح الأخطاء",
          subtitle: "القضاء المنهجي على المشكلات",
          description:
            "تتبع السلوكيات البرمجية بأسلوب منهجي عبر قياسات الشبكة وسجلات التدقيق واستعلامات قواعد البيانات لضمان أعلى مستويات الاستقرار.",
          deliverables: ["تحليل الأسباب الجذرية", "منع تكرار الأخطاء", "معالجة الحالات الحدية"],
        },
        {
          step: "06",
          name: "النشر والتهيئة السحابية",
          subtitle: "تجهيز بيئة التشغيل للإنتاج",
          description:
            "التعامل مع النشر كخطوة تطوير رئيسية: تجهيز الحاويات بواسطة Docker، تهيئة متغيرات البيئة والأسرار، والتحقق من بيئة الاستضافة على Linux.",
          deliverables: ["حزم الحاويات السحابية", "عزل البيئات وتأمينها", "التحقق من فحوصات الصحة والتوافر"],
        },
        {
          step: "07",
          name: "التسليم والتشغيل",
          subtitle: "التسليم التشغيلي والمراجعة",
          description:
            "تقديم جولة مراجعة تشغيلية لأصحاب العمل، والتحقق من الجاهزية التامة عبر مختلف الأدوار، وتوثيق إجراءات الإدارة والصيانة.",
          deliverables: ["جولة تدريبية للمشغلين", "دليل الإدارة والتشغيل", "اعتماد التشغيل الإنتاجي النهائي"],
        },
      ],
    },
    about: {
      eyebrow: "نبذة تعريفية",
      titlePart1: "من أنا &",
      titlePart2: "ما الذي أبنيه",
      description:
        "المهندس خلف الأنظمة والحلول البرمجية. حل عملي للمشكلات، تحمل كامل للمسؤولية التقنية، وأنظمة برمجية نظيفة للإنتاج.",
      portraitLabel: "محمد هادي شكور — مهندس برمجيات وتطوير شامل",
      roleTag: "مهندس برمجيات",
      quickFacts: [
        { label: "الموقع", value: "كانور، كيرالا، الهند" },
        { label: "الدور المهني", value: "مهندس برمجيات وتطوير شامل (Full Stack)" },
        { label: "مجال التركيز", value: "أنظمة الويب، الواجهات البرمجية، وقواعد البيانات" },
        { label: "التوافر المهني", value: "عقود مشاريع، دوام كامل، وعمل حر" },
        { label: "المؤهل الأكاديمي", value: "بكالوريوس تكنولوجيا المعلومات (2023–2027)" },
      ],
      bioHeading: "مهندس برمجيات يبني أنظمة تشغيلية حقيقية.",
      bioParagraphs: [
        "أنا محمد هادي شكور، مهندس برمجيات وتطوير شامل (Full Stack Software Engineer) مقيم في كانور، كيرالا، الهند.",
        "أقوم بتصميم وتطوير تطبيقات الويب، واجهات برمجة التطبيقات (APIs)، الأنظمة المعتمدة على قواعد البيانات، ومسارات العمل التشغيلية للشركات.",
        "أستمتع بدراسة المتطلبات التجارية، واستيعاب جوهر المشكلة، ثم هندسة النظام وبنائه وتصحيحه ونشره في بيئة الإنتاج بثقة وكفاءة.",
      ],
      viewExperience: "استعراض الخبرة العملية",
      getInTouch: "تواصل معي مباشرة",
    },
    experience: {
      eyebrow: "الخبرة التجارية والمسار المهني",
      titlePart1: "الخبرة العملية &",
      titlePart2: "التعليم",
      description:
        "مشاريع تجارية حقيقية في بيئات هندسية وإنتاجية، إلى جانب أسس أكاديمية متينة في علوم وهندسة الحاسوب.",
      activeContract: "عقد تجاري نشط",
      independentEngagements: "مشاريع مستقلة",
      coreResponsibilities: "المسؤوليات الهندسية الأساسية:",
      educationTitle: "الأساس الأكاديمي",
      degree: "بكالوريوس التكنولوجيا (B.Tech)",
      field: "تكنولوجيا المعلومات (IT)",
      institution: "جامعة لوفلي بروفيشينال (LPU)",
      period: "أغسطس 2023 – يوليو 2027",
      location: "البنجاب، الهند",
      curriculum:
        "أسس علوم الحاسوب المعمقة: هياكل البيانات والخوارزميات، أنظمة إدارة قواعد البيانات (DBMS)، شبكات الحاسوب، هندسة البرمجيات، وبنى تطبيقات الويب الموزعة.",
      intlBadgeUAE: "الإمارات • خدمات هندسية وتقنية",
    },
    work: {
      eyebrow: "أنظمة برمجية تم بناؤها",
      titlePart1: "أعمال ومشاريع",
      titlePart2: "مختارة",
      description:
        "تطبيقات وأنظمة برمجية حقيقية في الإنتاج، بُنيت وفق بنية واضحة ومخططات بيانات معيارية وتسليم شامل من البداية حتى النهاية.",
      flagshipBadge: "النظام المؤسسي الرئيسي",
      intlProjectUAE: "مشروع دولي • الإمارات",
      intlProjectOman: "مشروع دولي • سلطنة عُمان",
      bilingualBadgeOman: "منصة ويب ثنائية اللغة • عربي / إنجليزي",
      dualPortalsBadge: "بوابتان مستقلتان: للإدارة والفنيين",
      pipelineLabel: "مسار عمل تشغيلي متكامل من 8 مراحل:",
      quickFixLabel: "+ مسار الفوترة السريعة (QuickFix)",
      architectureHeader: "البنية المعمارية والقدرات",
      modulesSummary: "13 وحدة تشغيلية • بوابتان",
      viewCaseStudy: "عرض دراسة الحالة الهندسية كاملة",
      proposedStackLabel: "التقنيات المقترحة",
      upcomingBadge: "قريباً / قيد التطوير",
      modal: {
        overviewTab: "نظرة عامة",
        modulesTab: "13 وحدة تشغيلية",
        specsTab: "المواصفات التقنية",
        workflowsTab: "مسارات العمل المخططة",
        proposedStackTab: "التقنيات المقترحة",
        caseStudyTab: "الدراسة الهندسية والتحليل",
        systemOverview: "نظرة عامة على النظام",
        keyArchitecturalHighlights: "أبرز المعالم المعمارية والهندسية",
        dualInterfacePortals: "بوابات التشغيل مزدوجة الواجهة",
        adminCommandConsole: "لوحة التحكم والعمليات الإدارية",
        technicianMobilePortal: "بوابة التنفيذ الميداني للفنيين",
        operationalPipelineTitle: "دورة حياة الخدمة الشاملة (8 مراحل)",
        quickFixTitle: "محرك الفوترة المباشرة السريع (QuickFix)",
        technicalSpecifications: "المواصفات التقنية والبنية البرمجية",
        modulesBreakdown: "تفصيل 13 وحدة تشغيلية بالنظام",
        close: "إغلاق دراسة الحالة",
      },
    },
    territory: {
      sectionLabel: "مجالات الهندسة البرمجية",
      taglineSubtitle: "محاور البنية المعمارية والأنظمة",
      principlesLabel: "المبادئ الهندسية المتبعة:",
      techLabel: "التقنيات الأساسية:",
      testedBadge: "مختبرة ومنشورة في الإنتاج",
      activeCapability: "قدرة نشطة",
      of: "من",
      prev: "المجال السابق",
      next: "المجال التالي",
    },
    stack: {
      eyebrow: "القدرات التقنية",
      titlePart1: "المنظومة",
      titlePart2: "البرمجية",
      description:
        "منظومة منظمة حول قدرات التطوير الشامل، وأطر العمل الإنتاجية، وبنى التشغيل السحابي الموثوقة.",
      categoryPrefix: "التصنيف 0",
      categories: [
        { title: "الواجهات الأمامية", subtitle: "إدارة الحالة، الأداء السريع، وبنى التفاعل الاستجابية" },
        { title: "الواجهات الخلفية", subtitle: "واجهات REST البرمجية، منطق الأعمال، والخدمات" },
        { title: "قواعد البيانات", subtitle: "نماذج التخزين العلائقية والمستندية المعيارية" },
        { title: "الأمان والصلاحيات", subtitle: "إدارة الهوية، أمان الجلسات، ونموذج التحكم بالوصول" },
        { title: "أدوات التطوير والنشر", subtitle: "إدارة الإصدارات، الحاويات، وبيئات التشغيل السحابي" },
        { title: "لغات البرمجة", subtitle: "الأسس البرمجية والخوارزمية الجوهرية" },
      ],
    },
    ai: {
      eyebrow: "الممارسة الهندسية الحديثة",
      titlePart1: "الهندسة المعززة",
      titlePart2: "بالذكاء الاصطناعي",
      description:
        "الذكاء الاصطناعي أداة لتسريع الإنجاز، وليس بديلاً عن المهندس. كيف أستفيد من الذكاء الآلي للسرعة دون المساس بالدقة الهندسية.",
      stanceTitle: "الموقف الواقعي من الذكاء الاصطناعي في بيئة الإنتاج",
      quoteLine1: "\"الذكاء الاصطناعي يسرع النماذج الأولية.",
      quoteLine2: "لكن الحكم الهندسي، البنية المعمارية، والتحقق الصارم تبقى مسؤوليتي وحدي.\"",
      quoteText:
        "أوظف أدوات الذكاء الاصطناعي لبناء الهياكل البرمجية المبدئية واختبار أفكار الواجهات بسرعة وصياغة مسودات واجهات برمجة التطبيقات. ولكن الجاهزية للإنتاج تتطلب انضباطاً هندسياً صارماً: فكل سطر يُفحص يدوياً، والحدود الأمنية تُدقق بدقة، ومعاملات قواعد البيانات تُهندس بوعي بشري كامل.",
      steps: [
        { step: "01", name: "التوليد", desc: "استخدام الذكاء الاصطناعي لتوليد القوالب البرمجية ومسودات العقود بسرعة." },
        { step: "02", name: "المراجعة", desc: "تدقيق كل سطر ومراجعته لمعايير الأداء والحالات الاستثنائية وحدود الأدوار." },
        { step: "03", name: "الفهم الكامل", desc: "عدم اعتماد أي كود دون استيعاب دقيق لتأثيره على كفاءة الذاكرة والاستعلامات." },
        { step: "04", name: "الاختبار الصارم", desc: "التحقق من منطق الأعمال في ظروف الشبكة الحقيقية وفحوصات اختراق الصلاحيات." },
        { step: "05", name: "الملاءمة والدمج", desc: "إعادة الهيكلة ليتكامل الكود بسلاسة مع أنماط المشروع وتسمياته وقواعد بياناته." },
        { step: "06", name: "النشر والتشغيل", desc: "نشر أنظمة محققة ومملوكة للمهندس وخالية تماماً من الهلوسات أو الأكواد الغامضة." },
      ],
    },
    contact: {
      eyebrow: "بدء التواصل",
      titlePart1: "تواصل معي &",
      titlePart2: "لنبدأ العمل",
      description:
        "هل لديك نظام مؤسسي، واجهة برمجية، أو منصة ويب مخصصة ترغب في تصميمها وبنائها؟ يمكنك التواصل معي مباشرة عبر واتساب، البريد الإلكتروني، أو إرسال استفسار مفصل عن المشروع.",
      chatPrompt: "رسالة مباشرة سريعة",
      chatSub: "الاستجابة الأسرع عبر واتساب",
      openWhatsApp: "مراسلة عبر واتساب",
      sendEmail: "إرسال بريد إلكتروني",
      callDirect: "اتصال هاتفي مباشر",
      clickToCopy: "انقر للنسخ",
      copied: "تم النسخ إلى الحافظة!",
      detailedPrompt: "استفسار مفصل عن مشروع",
      openInquiryForm: "فتح نموذج استفسار المشروع",
      channelsLabel: "قنوات التواصل المباشر",
    },
    modal: {
      title: "تواصل معي",
      quickTab: "تواصل مباشر سريع",
      detailedTab: "استفسار مفصل عن مشروع",
      connectDirectly: "التواصل المباشر",
      connectSub: "اختر القناة المفضلة لديك للحصول على رد فوري:",
      openWhatsApp: "محادثة عبر واتساب",
      sendEmailDirect: "إرسال بريد إلكتروني",
      callDirect: "اتصال مباشر",
      clickToCopy: "انقر للنسخ",
      copied: "تم النسخ!",
      formTitle: "نموذج استفسار عن مشروع",
      formSub: "شارك متطلبات مشروعك للحصول على استشارة واستعراض هندسي دقيق:",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: عبد الله أحمد",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
      phoneLabel: "رقم الهاتف / واتساب (اختياري)",
      phonePlaceholder: "+971 50 123 4567",
      projectTypeLabel: "نوع المشروع المطلوب",
      projectTypes: [
        "تطبيق ويب متكامل (Full Stack Web App)",
        "نظام مؤسسي / منصة عمليات وإدارة (ERP)",
        "بنية واجهات برمجية وقواعد بيانات (APIs & DB)",
        "بوابة عملاء وفنيين مخصصة (Customer/Tech Portal)",
        "منصة ويب ثنائية اللغة (عربي / إنجليزي)",
        "عقد استشارات وتطوير برمجيات (Contract Engagement)",
      ],
      messageLabel: "نظرة عامة على المشروع والمتطلبات",
      messagePlaceholder: "وضح ما ترغب في بنائه، المتطلبات الرئيسية، الإطار الزمني المتوقع، أو التحدي التشغيلي الحالي...",
      submitButton: "إرسال الاستفسار عبر البريد",
      successHeading: "تم إعداد رسالة الاستفسار",
      successMessage: "تم فتح برنامج البريد الإلكتروني الافتراضي مع تضمين تفاصيل مشروعك تلقائياً. في حال لم يفتح تلقائياً، يمكنك مراسلتي مباشرة عبر واتساب أو البريد.",
      sendAnother: "إرسال رسالة أخرى",
      errors: {
        name: "يرجى إدخال اسمك الكريم.",
        email: "يرجى إدخال بريد إلكتروني صالح.",
        message: "يرجى وصف متطلبات المشروع (10 أحرف كحد أدنى).",
      },
    },
    footer: {
      brandName: "محمد هادي شكور",
      role: "مهندس برمجيات وتطوير شامل",
      summary:
        "هندسة وتطوير تطبيقات الويب المتكاملة، أنظمة ERP، أتمتة مسارات العمليات، والواجهات البرمجية القابلة للتوسع. تحويل متطلبات الأعمال المعقدة إلى كود برمجي موثوق وقيد التشغيل الإنتاجي.",
      navTitle: "روابط سريعة",
      directTitle: "قنوات التواصل",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "تم التطوير باستخدام React و TypeScript و Tailwind CSS",
    },
    floatingChat: {
      label: "تواصل مع هادي",
      aria: "فتح خيارات التواصل مع محمد هادي شكور",
    },
  },
};
