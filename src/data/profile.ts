export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  whatsappPrefillText: string;
  emailSubject: string;
  emailBody: string;
  linkedinHandle: string;
  linkedinUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookHandle: string;
  facebookUrl: string;
  website: string;
}

export const CONTACT_INFO: ContactInfo = {
  name: "Mohammad Hadi Shukoor",
  role: "Full Stack Software Engineer",
  email: "hadishukoor111@gmail.com",
  phone: "+919656165141",
  phoneFormatted: "+91 9656165141",
  phoneDisplay: "+91 9656165141",
  phoneRaw: "+919656165141",
  whatsappNumber: "919656165141",
  whatsappUrl: "https://wa.me/919656165141",
  whatsappPrefillText: "Hi Hadi, I came across your portfolio and would like to discuss a project.",
  emailSubject: "Project Inquiry — Mohammad Hadi Shukoor",
  emailBody: `Hi Hadi,

I came across your portfolio and would like to discuss a project.

Project details:

Thanks.`,
  linkedinHandle: "hadishukoor111",
  linkedinUrl: "https://www.linkedin.com/in/hadishukoor111/",
  instagramHandle: "hadi.shukoor",
  instagramUrl: "https://www.instagram.com/hadi.shukoor/",
  facebookHandle: "hadi.shukoor",
  facebookUrl: "https://www.facebook.com/hadi.shukoor",
  website: "https://hadishukoor.com"
};

export interface ProfileInfo {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  tagline: string;
  brandLogo: string; // Centralized brand mark asset reference
  profilePhoto: string | null; // Set to image URL / asset path when photo is provided
  summary: string[];
  bio: {
    heading: string;
    paragraphs: string[];
  };
}

export const PROFILE: ProfileInfo = {
  name: "MOHAMMAD HADI SHUKOOR",
  shortName: "HADI SHUKOOR",
  role: "Full Stack Software Engineer",
  location: "Kannur, Kerala, India",
  email: "hadishukoor111@gmail.com",
  phone: "+91 9656165141",
  linkedin: "https://www.linkedin.com/in/hadishukoor111/",
  website: "https://hadishukoor.com",
  tagline: "Building production web applications, APIs, business systems, and workflow automation from idea to deployment.",
  // Centralized asset reference for personal monogram logo mark
  brandLogo: "/images/logo.png",
  // Centralized asset reference for personal portrait photograph
  // Modifying this single property updates the profile image across all components
  profilePhoto: "/images/profile-portrait.png",
  summary: [
    "Full Stack Software Engineer with hands-on experience engineering complete digital systems around real business requirements.",
    "Specialized in end-to-end software delivery: taking manual or operational business processes and turning them into automated software workflows, REST API architectures, and normalized relational persistence.",
    "Proven delivery across enterprise ERP workflows and dual-interface platforms (MAGNAVOLT), bilingual RTL customer verification portals (SANDS PPF), and document intelligence systems."
  ],
  bio: {
    heading: "A SOFTWARE ENGINEER WHO BUILDS SYSTEMS.",
    paragraphs: [
      "I am Mohammad Hadi Shukoor, a Full Stack Software Engineer based in Kannur, Kerala, India.",
      "I build web applications, APIs, database-backed systems, and business workflows.",
      "I enjoy taking a requirement, understanding the underlying problem, designing the system, building it, debugging it, and getting it deployed."
    ]
  }
};

export interface FloatingTag {
  label: string;
  sub?: string;
}

export const HERO_TAGS: FloatingTag[] = [
  { label: "FULL STACK", sub: "ENGINEER" },
  { label: "BUSINESS AUTOMATION" },
  { label: "ERP / CRM SYSTEMS" },
  { label: "APIs & INTEGRATIONS" },
  { label: "DATABASES & RBAC" },
  { label: "AI-POWERED SYSTEMS" }
];
