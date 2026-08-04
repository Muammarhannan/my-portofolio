export const profile = {
  name: "Mu'Ammar Hannan Najib",
  role: "IT Support | Network Engineer | System Administrator",

  location: "East Jakarta, Indonesia",

  email: "amarnajib4@gmail.com",
  whatsapp: "+6285817729217",

  avatar: "/portfolio/avatar.png",
  cvUrl: "/cv-muammar-hannan-najib.pdf",
  cvFileName: "CV_MuAmmar_Hannan_Najib.pdf",

  available: true,

  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/hannan-najib",
    },
    {
      label: "GitHub",
      href: "https://github.com/Muammarhannan",
    },
  ],
}

export const summary = {
  headline:
    "Fresh Graduate in Information Technology specializing in IT Support, Network Engineering, and System Administration.",

  body:
    "Bachelor's graduate in Information Technology from Telkom University with a GPA of 3.89. Experienced in installing, configuring, maintaining, and troubleshooting computer systems, LAN networks, Windows Server, and Active Directory. Skilled in providing technical support to end users and passionate about building reliable IT infrastructure as an IT Support, System Administrator, or Network Engineer.",

  stats: [
    {
      value: "3.89",
      label: "GPA",
    },
    {
      value: "3.5",
      label: "Years",
    },
    {
      value: "5",
      label: "Intern Experiences",
   },
  ],
}

export type Project = {
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  year: string
  tags: string[]
  href: string
  role: string
  details: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: "Hospital Network Infrastructure",
    category: "Computer Networking",

    description:
      "Enterprise hospital network simulation using Cisco Packet Tracer featuring VLAN segmentation, Inter-VLAN Routing, DHCP, DNS, Wireless Networking, and ACL-based security.",

    longDescription:
      "Designed and implemented a secure hospital network infrastructure using Cisco Packet Tracer. The network is divided into multiple departments including Emergency (IGD), Laboratory, Pharmacy, Administration, Inpatient, Server Room, and Guest WiFi through VLAN segmentation. Layer 3 Switching with Inter-VLAN Routing enables efficient communication between departments, while centralized DHCP, DNS, and HTTP services support daily hospital operations. Access Control Lists (ACLs) were implemented to isolate the Guest WiFi network from internal hospital resources, providing a secure, scalable, and manageable enterprise network.",

    image: "/portfolio/project-hospital-1.png",

    gallery: [
      "/portfolio/project-hospital-1.png",
      "/portfolio/project-hospital-2.png",
      "/portfolio/project-hospital-3.png",
    ],

    year: "2026",

    tags: [
      "Cisco Packet Tracer",
      "VLAN",
      "Layer 3 Switching",
      "ACL",
    ],

    href: "https://github.com/Muammarhannan/Hospital-Network-Infrastructure",

    role: "Network Engineer",

    details: [
      "Designed VLAN segmentation for seven hospital departments.",
      "Configured Layer 3 Switching with Inter-VLAN Routing.",
      "Implemented centralized DHCP, DNS, and HTTP services.",
      "Configured Wireless Guest Network using Access Point.",
      "Applied ACLs to restrict Guest WiFi access to internal resources.",
      "Validated network functionality through connectivity and security testing.",
    ],

    technologies: [
      "Cisco Packet Tracer",
      "Cisco IOS",
      "VLAN",
      "Layer 3 Switching",
      "Inter-VLAN Routing",
      "DHCP",
      "DNS",
      "HTTP",
      "ACL",
      "Wireless Networking",
    ],
  },

]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export type Organization = {
  position: string
  organization: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  
  {
    role: "IT Support Intern",
    company: "PT. Sahabat Mikro Fintek",
    period: "Aug 2026 — Feb 2027",

    description:
      "Supported daily IT operations by assisting with technical support, system maintenance, and operational tasks to ensure smooth business technology services during a six-month internship period.",

    tags: [
      "IT Support",
      "Technical Support",
      "System Maintenance",
      "Internship",
    ],
  },

  {
    role: "IT Support / Web Management Intern",
    company: "PT Telkom Indonesia (SOE Banking)",
    period: "Jul 2025 — Sep 2025",

    description:
      "Performed maintenance and troubleshooting of internal web applications, provided technical support to end users, managed website content, and assisted daily IT operations to ensure system reliability.",

    tags: [
      "IT Support",
      "Technical Support",
      "Troubleshooting",
      "Web Management",
    ],
  },

  {
    role: "Operating Systems Laboratory Assistant",
    company: "Telkom University",
    period: "Feb 2025 — Jun 2025",

    description:
      "Assisted in Operating Systems laboratory sessions, provided technical guidance to students, prepared learning materials, and supported practical assessments.",

    tags: [
      "Operating Systems",
      "Linux",
      "Windows",
      "Teaching",
    ],
  },
  
  {
    role: "Computer Technician Intern",
    company: "CV Jaya Mandiri",
    period: "Aug 2020 — Oct 2020",

    description:
      "Assembled and tested computer systems, installed and configured operating systems, performed hardware and software troubleshooting, installed CCTV systems, and configured internet and modem networks.",

    tags: [
      "Hardware",
      "Troubleshooting",
      "Networking",
      "CCTV",
    ],
  },
]

export const organizations: Organization[] = [
  {
    position: "Head of Operator Division",
    organization: "Google Developer Student Clubs (GDSC) – Telkom University",
    period: "2023 — 2024",
    description:
      "Led the technical operations of technology events and workshops, managed technical requirements, and ensured the successful execution of organizational activities.",
    tags: ["Leadership", "Technical Operations", "Event Management"],
  },

  {
    position: "Co-Founder & Vice Chairman",
    organization: "Mahasiswa Pecinta Alam – Telkom University",
    period: "2023 — 2024",
    description:
      "Co-founded the organization, established its organizational structure, coordinated cross-functional teams, led outdoor activities, and supported member development programs.",
    tags: ["Co-Founder", "Leadership", "Organization", "Teamwork"],
  },

  {
    position: "Treasurer",
    organization: "Mahasiswa Pecinta Alam – Telkom University",
    period: "2023 — 2025",
    description:
      "Managed the organization's finances, prepared financial reports, monitored budgets, and ensured transparent and accountable financial administration.",
    tags: ["Finance", "Administration", "Budget Management"],
  },

  {
    position: "Volunteer",
    organization: "Community Service Program – Telkom University",
    period: "2022",
    description:
      "Supported event operations by coordinating logistics and ensuring the availability of meals and refreshments for participants and committee members.",
    tags: ["Volunteer", "Operations", "Teamwork"],
  },
];
export type Education = {
  degree: string
  school: string
  period: string
  detail: string
}

export const education: Education[] = [
    {
    degree: "Bachelor of Information Technology",
    school: "Telkom University",
    period: "2022 — 2026",
    detail:
      "Graduated in 3.5 years with a GPA of 3.89. Focused on Computer Networks, System Administration, IT Infrastructure, Internet of Things (IoT), and Software Development through academic projects and practical laboratory work.",
  },

  {
    degree: "Computer and Network Engineering",
    school: "SMK Teratai Putih Jakarta",
    period: "2019 — 2022",
    detail:
      "Built a strong foundation in computer hardware, operating systems, LAN networking, network configuration, device maintenance, and technical troubleshooting through classroom learning and hands-on practice.",
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
  image: string
  description: string
}

export const certifications: Certification[] = [
  {
  name: "Best Paper Award",
  issuer: "IEEE AGERS 2025",
  year: "2025",
  image: "/portfolio/best-paper.png",
  description:
    "Awarded for research on an IoT and Machine Learning-based Automatic Irrigation System, recognizing innovation in developing a real-time, sensor-driven solution to improve irrigation efficiency and support data-driven agriculture.",
},
  {
  name: "Certificate of Appreciation – Committee Member",
  issuer: "Telkom University",
  year: "2025",
  image: "/portfolio/siap-sk-certificate.png",
  description:
    "Recognized for contributing as a committee member in the implementation of the SIAP SK (Certificate Request Administration Information System) community service program, supporting the digitalization of public services in Desa Ciasmara.",
},
{
  name: "Teaching Assistant Certificate – Operating Systems",
  issuer: "Faculty of Informatics, Telkom University",
  year: "2025",
  image: "/portfolio/teaching-assistant-certificate.png",
  description:
    "Recognized for serving as an Operating Systems Teaching Assistant with an A performance evaluation, supporting laboratory sessions and mentoring undergraduate students in the Information Technology program.",
},
]

export type SkillItem = {
  name: string
  level: number
}

export type SkillGroup = {
  category: string
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    category: "IT Support",
    items: [
      { name: "Hardware Troubleshooting", level: 92 },
      { name: "Software Troubleshooting", level: 90 },
      { name: "Windows Installation", level: 88 },
      { name: "Windows Server", level: 84 },
      { name: "Active Directory", level: 80 },
      { name: "End-User Support", level: 94 },
      { name: "Basic Linux", level: 76 },
    ],
  },

  {
    category: "Networking",
    items: [
      { name: "LAN", level: 92 },
      { name: "VLAN", level: 90 },
      { name: "Inter-VLAN Routing", level: 86 },
      { name: "IP Addressing", level: 88 },
      { name: "Subnetting", level: 84 },
      { name: "DHCP", level: 82 },
      { name: "DNS", level: 80 },
      { name: "ACL", level: 78 },
      { name: "Basic OSPF", level: 72 },
      { name: "Internet Troubleshooting", level: 90 },
      { name: "CCTV Installation", level: 78 },
    ],
  },

  {
    category: "Languages",
    items: [
      { name: "Indonesian", level: 98 },
      { name: "English", level: 82 },
    ],
  },

  {
    category: "Programming",
    items: [
      { name: "HTML", level: 84 },
      { name: "CSS", level: 82 },
      { name: "JavaScript", level: 78 },
      { name: "PHP", level: 72 },
      { name: "Python (Basic)", level: 70 },
      { name: "Arduino Programming", level: 76 },
    ],
  },

  {
    category: "Tools & Technologies",
    items: [
      { name: "Cisco Packet Tracer", level: 90 },
      { name: "Windows Server", level: 84 },
      { name: "Visual Studio Code", level: 88 },
      { name: "Git & GitHub", level: 82 },
      { name: "Microsoft Office", level: 92 },
      { name: "Google Workspace", level: 88 },
      { name: "Arduino IDE", level: 74 },
    ],
  },
]
export const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Organizations", href: "#organizations" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
]
