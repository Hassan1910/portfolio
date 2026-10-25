export const profile = {
  name: "Hassan Adan",
  role: "ICT Technician",
  tagline: "Network and helpdesk support, with full-stack project work.",
  location: "Nairobi, Kenya",
  locationLong: "Nairobi / Marsabit, Kenya",
  phoneDisplay: "+254 757 489 214",
  phoneTel: "+254757489214",
  email: "adanhassan1910@gmail.com",
  linkedin: "https://linkedin.com/in/hassan-adan-a40a71254",
  linkedinLabel: "linkedin.com/in/hassan-adan-a40a71254",
  github: "https://github.com/Hassan1910",
  githubLabel: "github.com/Hassan1910",
  cvPath: "/Hassan_Adan_CV.pdf",
  site: "https://www.ahassan.software",
} as const;

export const aboutParagraphs = [
  "ICT technician with a Diploma in ICT Technician (Level 6) from Kenya Methodist University (KeMU) TVET Institute, and nearly two years of hands-on support for internet and Wi-Fi customers at two ISPs.",
  "Currently a Technical Intern in Mawingu’s Technology Operations department: diagnosing connectivity faults on routers, Wi-Fi and customer-premises equipment, and restoring service within SLA targets. Previously Systems & Documentation Lead (Intern) at Savenet Limited in Marsabit, monitoring networks and escalating line faults to field technicians.",
  "Comfortable with TCP/IP, DNS, DHCP, Wi-Fi and LAN/WAN troubleshooting, Windows desktops, remote support, and clear customer communication. Certified in Google IT Support and Cisco Introduction to Cybersecurity.",
  "Alongside support work I build full-stack web and mobile tools. I hold a driving licence. I am based in Nairobi; earlier study and attachments were in Marsabit and Isiolo.",
];

export type Role = {
  period: string;
  title: string;
  org: string;
  context: string;
  points: string[];
};

export const experience: Role[] = [
  {
    period: "Jan 2026 — Present",
    title: "Technical Intern",
    org: "Mawingu",
    context: "Technology Operations · Internet service provider, Kenya",
    points: [
      "Diagnose and resolve subscriber connectivity and CPE faults (routers, modems, Wi-Fi), restoring service within SLA targets.",
      "Install, configure and troubleshoot customer Wi-Fi and routers; verify on-site CPE and cabling before handover.",
      "Guide customers through basic hardware and connectivity checks; escalate complex faults with clear notes.",
      "Install fiber optic cable, perform fusion splicing and terminate drop cables at FATs for new activations and line repairs.",
    ],
  },
  {
    period: "Nov 2024 — Nov 2025",
    title: "Systems & Documentation Lead (Intern)",
    org: "Savenet Limited",
    context: "Internet and Wi-Fi service provider, Marsabit",
    points: [
      "Led network and system monitoring, tracking outages and uptime and escalating line faults to field technicians.",
      "Maintained customer line documentation and incident follow-up records.",
      "Provided technical support to field and office teams, and handled confidential customer data under an NDA.",
      "Supported customer care operations in a fast-paced support environment.",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    title: "ICT Intern",
    org: "Marsabit General Hospital",
    context: "Marsabit, Kenya",
    points: [
      "Delivered first-line IT support to hospital staff, installing software, printers and new desktop computers.",
      "Connected printers to the network, configured PCs and provided remote support via TeamViewer.",
      "Assisted with network troubleshooting and desktop hardware repair.",
    ],
  },
  {
    period: "Jan 2022 — Apr 2022",
    title: "Industrial Attachment",
    org: "NHIF, Isiolo Branch",
    context: "National Hospital Insurance Fund",
    points: [
      "Installed and maintained branch software, hardware and printers.",
      "Handled confidential member records, supporting claims processing, record keeping and file management.",
      "Handled customer care desk enquiries and processed member registrations.",
    ],
  },
];

export type Project = {
  name: string;
  summary: string;
  detail: string;
  stack: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "LMEW-MS",
    summary: "Lakeview Marine Engineering Works",
    detail:
      "Admin and staff web apps plus a mobile app for a boat repair workshop in Kisumu — service requests, work orders, invoices and inventory — with role-based access and audit logging.",
    stack: ["TypeScript", "Supabase", "Expo"],
    live: "https://lmew.vercel.app",
  },
  {
    name: "SmartTicket",
    summary: "Event booking platform",
    detail:
      "Event ticket booking app running on a home server (Coolify), auto-deployed from GitHub Actions.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    live: "https://tickets.hostmyapps.site",
    repo: "https://github.com/Hassan1910/SmartTicket",
  },
  {
    name: "IBSA Homes",
    summary: "Property management",
    detail:
      "Property management app running on a home server (Coolify), with nightly database backups.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    live: "https://homes.hostmyapps.site",
    repo: "https://github.com/Hassan1910/IBSA-HOMES",
  },
  {
    name: "CESUD Kenya",
    summary: "NGO website",
    detail:
      "Site for an NGO in Kakamega County: programmes, partners, news, volunteering and an interactive map.",
    stack: ["Next.js", "TypeScript"],
    live: "https://cesud-kenya.org",
  },
  {
    name: "Service status",
    summary: "Public uptime page",
    detail: "Public uptime page for hosted sites and server services.",
    stack: ["Uptime Kuma", "Docker"],
    live: "https://status.hostmyapps.site",
  },
];

export const moreProjects: { name: string; detail: string; href: string }[] = [
  {
    name: "KINORU",
    detail: "Food ordering — menus, cart and order tracking.",
    href: "https://github.com/Hassan1910/KINORU",
  },
  {
    name: "IBSE",
    detail: "Mobile estate and property operations.",
    href: "https://github.com/Hassan1910/IBSE",
  },
];

export const skillGroups: { title: string; body: string }[] = [
  {
    title: "Network & HSIA troubleshooting",
    body: "Wi-Fi, routers, modems and CPE set-up and testing. TCP/IP, DNS, DHCP, LAN/WAN basics. Connectivity diagnostics (latency and packet loss). Ethernet cabling. Service restoration within SLA targets.",
  },
  {
    title: "Helpdesk & customer support",
    body: "First-line phone and desk support. Clear instructions for users of all skill levels. Remote support with TeamViewer. Escalation to field and higher-tier teams, with documentation.",
  },
  {
    title: "End-user computing",
    body: "Windows (XP, 8, 10, 11) and Linux. Microsoft Office. Installing and configuring desktops, laptops, printers and applications. Network printer set-up.",
  },
  {
    title: "Monitoring & security basics",
    body: "Prometheus, Grafana and Uptime Kuma. Wireshark and Nmap. Cyber security fundamentals from Google IT Security and Cisco Introduction to Cybersecurity.",
  },
  {
    title: "Systems (home lab)",
    body: "Ubuntu Server, Docker (Coolify), Tailscale SSH, Cloudflare Tunnel and Zero Trust, nightly backups.",
  },
  {
    title: "Documentation",
    body: "Line documentation, outage tracking, accurate records and confidential data handling.",
  },
  {
    title: "AI tools",
    body: "AI-assisted troubleshooting and prompt engineering, using AI tools for learning and documentation.",
  },
];

export const alsoBuilds = [
  "React",
  "TypeScript",
  "Next.js",
  "Expo",
  "PostgreSQL",
  "Supabase",
  "Docker",
];

export const homeLab =
  "In October 2026 I set up an Ubuntu home server that hosts two of my own Next.js and PostgreSQL apps on Coolify (Docker). Remote access is Tailscale SSH (approval-based logins) and a Cloudflare Tunnel, so nothing is published with open inbound ports. Prometheus and Grafana run 26 alert rules for CPU, memory, disk, containers and network errors, with email alerts. Nightly database backups go to Cloudflare R2, and a test restore was checked table by table. Admin dashboards sit behind Cloudflare Zero Trust login.";

export const education = [
  {
    period: "Nov 2025",
    title: "Diploma in ICT Technician (Level 6) — Pass",
    place: "Kenya Methodist University (KeMU) TVET Institute",
  },
  {
    period: "2019",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    place: "Saku High School, Marsabit",
  },
];

export const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    detail: "Credential EJEU3SEHHJYM",
    period: "Jan 2023",
  },
  {
    name: "IT Security: Defense against the Digital Dark Arts",
    issuer: "Google / Coursera",
    detail: "",
    period: "Dec 2022",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    detail: "",
    period: "Feb 2025",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
