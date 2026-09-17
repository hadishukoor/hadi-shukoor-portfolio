export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface StatItem {
  end: number;
  suffix: string;
  label: string;
}

export interface ReelVideo {
  id: string;
  title: string;
  url: string;
}
