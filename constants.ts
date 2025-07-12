
import { Experience, Project, Certification } from './types';

export const SKILLS: string[] = [
  "Python", "Bash", "SQL", "Docker", "Splunk",
  "Nmap", "Wireshark", "Metasploit", "Burp Suite",
  "Hydra", "Hashcat", "Ghidra", "Volatility",
  "Incident Response", "Vulnerability Assessment",
  "Malware Analysis", "Penetration Testing", "Digital Forensics",
  "Microsoft Azure", "GitHub", "OWASP Top 10"
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Cybersecurity Analyst (Part-Time, Former Intern)",
    company: "Cybertron - Bangkok, Thailand",
    period: "May 2024 - April 2025",
    description: [
      "> Investigated and responded to security incidents including brute-force, DDoS, and malware.",
      "> Utilized Splunk and SQL for log analysis and root cause identification.",
      "> Supported SOC visibility and proactive threat detection for enterprise clients.",
      "> Gained hands-on experience in Tier-1 SOC operations and incident escalation."
    ]
  },
  {
    role: "Microsoft Learn Student Ambassador",
    company: "Microsoft - Remote",
    period: "Dec 2023 - April 2025",
    description: [
      "> Hosted interactive sessions on GitHub, Microsoft Azure, and secure software deployment.",
      "> Acted as a community mentor, promoting cybersecurity awareness.",
      "> Organized events and delivered technical content to encourage peer engagement."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "CVE-2024-7074 Research",
    description: "Built a Docker-based lab to analyze a critical vulnerability in WSO2 API Manager. Successfully bypassed token revocation, documented a PoC, and wrote an internal technical report following responsible disclosure practices.",
    tags: ["Vulnerability Research", "Docker", "PoC", "WSO2", "Security Analysis"],
  }
];

// ==================================================================
//   VVV   แก้ไข Path รูปภาพใบรับรองของคุณที่นี่   VVV
// ==================================================================
// 1. นำไฟล์รูปภาพไปไว้ในโฟลเดอร์ 'public'
// 2. ตรวจสอบให้แน่ใจว่าชื่อไฟล์ของคุณตรงกับค่า `imageUrl` ด้านล่าง
// 3. Path ต้องขึ้นต้นด้วย "/" และใช้ "/" คั่นเสมอ (ห้ามใช้ "\")
// 4. แนะนำว่าชื่อไฟล์ไม่ควรมีช่องว่าง
// ==================================================================

export const CERTIFICATIONS: Certification[] = [
    // --- VVV เพิ่มใบรับรองใหม่ของคุณที่นี่ VVV ---
  // {
  //   name: "ชื่่อใบรับรองใหม่", // <-- ใส่ชื่อใบรับรอง
  //   issuer: "หน่วยงานที่ออกให้", // <-- ใส่ชื่อหน่วยงาน
  //   detail: "รายละเอียดเพิ่มเติม เช่น วันที่ได้รับ", // <-- ใส่รายละเอียด
  //   imageUrl: "/new-cert-image.jpg" // <-- ใส่ Path รูปภาพ (ต้องอยู่ใน /public)
  // },
  // ------------------------------------------
  {
    name: "มาแก้ในไฟล์ constants.ts",
    issuer: "ACS & KISA",
    detail: "Web Exploitation | Issued: 2025-06-22",
    imageUrl: "/cert-acs-web-exploit.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "System Exploitation | Issued: 2025-06-22",
    imageUrl: "/cert-acs-system-exploit.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "Real-world Web Exploitation | Issued: 2025-06-22",
    imageUrl: "/cert-acs-web-exploit.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "Real-world System Exploitation | Issued: 2025-06-22",
    imageUrl: "/cert-acs-system-exploit.jpg"
  },
    {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "Malware Dev/Analysis | Issued: 2025-06-22",
    imageUrl: "/cert-acs-malware.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "Incident Response | Issued: 2025-06-22",
    imageUrl: "/cert-acs-ir.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Advanced Course",
    issuer: "ACS & KISA",
    detail: "Digital Forensic | Issued: 2025-06-22",
    imageUrl: "/cert-acs-df.jpg"
  },
  {
    name: "ASEAN Cyber Shield - Basic Course",
    issuer: "ACS & KISA",
    detail: "Completed: 2024.09 - 2024.10 | Issued: 2025-04-13",
    imageUrl: "/cert-acs-basic.jpg"
  },
  {
    name: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    detail: "Beta Phase | Dec 2023 - Apr 2025",
    imageUrl: "/cert-ms-ambassador.png"
  },
  {
    name: "Basic Cybersecurity",
    issuer: "NCSA Thailand (MOOC Platform)",
    detail: "Issued: 15 Dec 2023 | ID: SPG-9UA69FVUGXXOR",
    imageUrl: "/cert-ncsa-basic.jpg"
  },
];
