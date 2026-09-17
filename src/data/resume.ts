export const profile = {
  name: "Thangamani Raju",
  firstName: "Thangamani",
  lastName: "Raju",
  title: "Cybersecurity Analyst",
  location: "Chennai, India",
  relocation: "Open to relocation — Dubai, UAE",
  availability: "Immediate joiner",
  email: "thangamanir0605@gmail.com",
  phone: "+91 80726 63268",
  phoneHref: "tel:+918072663268",
  linkedin: "https://www.linkedin.com/in/thangamani-raju",
  linkedinLabel: "linkedin.com/in/thangamani-raju",
  resumeHref: "/Thangamani-Raju-Resume.pdf",
  portraitHref: "/portrait.jpg",
  summary:
    "Cybersecurity analyst with 4 years of 24×7 SOC experience — triaging alerts across SIEM, EDR, IDS/IPS, and firewall platforms, then taking confirmed threats through containment, eradication, and recovery. Hands-on with QRadar, Splunk, Google SecOps, and CrowdStrike. Proven record of cutting false-positive alerts by 25% and successful phishing incidents by 30% through tuned correlation rules and structured runbooks.",
};

export const quotes = [
  "If you don't take risks, you can't create a future.",
  "Discipline is choosing between what you want now and what you want most.",
  "Stay ready so you don't have to get ready.",
  "The future belongs to those who show up prepared.",
  "Fortune favors the prepared mind.",
] as const;

export const stats = [
  { value: "4 yrs", label: "24×7 SOC operations", detail: "Tier 1 & Tier 2" },
  { value: "1,000+", label: "Alerts triaged daily", detail: "SIEM · EDR · network" },
  { value: "25%", label: "False positives reduced", detail: "SIEM correlation tuning" },
  { value: "100%", label: "SLA adherence", detail: "TTT · TTQ · full IR lifecycle" },
] as const;

export const skillGroups = [
  {
    id: "siem",
    label: "SIEM",
    items: ["Splunk", "IBM QRadar", "Google SecOps", "Correlation rule tuning", "Real-time alert monitoring"],
  },
  {
    id: "endpoint",
    label: "Endpoint",
    items: [
      "CrowdStrike EDR",
      "Proofpoint",
      "Microsoft Defender",
      "SentinelOne",
      "Trend Micro",
      "Antivirus tooling",
    ],
  },
  {
    id: "ir",
    label: "Incident response",
    items: [
      "Alert triage",
      "Containment & eradication",
      "Root cause analysis",
      "Incident playbooks",
      "Phishing investigation",
      "Malware analysis",
    ],
  },
  {
    id: "intel",
    label: "Threat intel",
    items: [
      "IOC validation",
      "VirusTotal",
      "OSINT",
      "CVE tracking",
      "MITRE ATT&CK mapping",
      "IP / URL / hash reputation",
    ],
  },
  {
    id: "network",
    label: "Network & OS",
    items: [
      "Windows fundamentals",
      "Linux fundamentals",
      "TCP/IP",
      "DNS",
      "HTTP/S",
      "Firewall analysis",
      "Network traffic analysis",
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: ["MITRE ATT&CK", "OWASP Top 10", "Cyber Kill Chain", "Zero Trust"],
  },
  {
    id: "pentest",
    label: "Lab tools",
    items: ["Nmap", "Metasploit", "Burp Suite", "Kali Linux", "ZPhisher"],
  },
] as const;

export const experience = [
  {
    company: "Verizon India Pvt. Ltd.",
    location: "Chennai",
    role: "Security Analyst",
    start: "May 2023",
    end: "Present",
    bullets: [
      "Monitored and triaged 1,000+ security alerts daily across SIEM, EDR, and network platforms (Splunk, IBM QRadar, Google SecOps), distinguishing false positives from actionable incidents per SOC SOPs.",
      "Investigated phishing, malware, and suspicious user behavior end-to-end — detection, triage, containment, eradication, and recovery — with 100% SLA compliance.",
      "Performed EDR-based threat hunting with CrowdStrike, analyzing process execution, file behavior, and lateral movement indicators; validated IOCs via IP, URL, and hash reputation lookups.",
      "Created and maintained incident tickets with accurate timelines and root cause analysis, and escalated confirmed incidents to L2 analysts.",
      "Collaborated with global threat intel teams to tune SIEM correlation rules, cutting false-positive alerts by 25% and contributing to a 30% reduction in successful phishing incidents.",
      "Supported shift handovers in a 24×7 rotating SOC environment, keeping operational continuity intact.",
    ],
  },
  {
    company: "WATI — West Advanced Technologies Inc.",
    location: "",
    role: "Security Analyst",
    start: "Nov 2022",
    end: "Mar 2023",
    bullets: [
      "Conducted phishing analysis including email header inspection, URL reputation checks, and sandbox detonation using Proofpoint and VirusTotal.",
      "Assisted senior SOC analysts with alert triage, case enrichment, severity classification, and escalation via ticketing systems.",
      "Designed phishing simulation campaigns to evaluate employee awareness and SOC detection readiness.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Phishing Simulation and Incident Analysis",
    summary:
      "Built a phishing simulation lab on Kali Linux with ZPhisher to capture artifacts and IOCs, then wrote structured investigation reports mapping attacker techniques and TTPs.",
    tags: ["Kali Linux", "ZPhisher", "IOC analysis", "TTPs"],
  },
  {
    title: "SIEM Detection Engineering",
    summary:
      "Developed and tuned custom correlation rules in Splunk and IBM QRadar for brute-force, privilege escalation, and malware execution, mapped to MITRE ATT&CK for coverage.",
    tags: ["Splunk", "QRadar", "MITRE ATT&CK", "Detection"],
  },
  {
    title: "Incident Response Playbooks",
    summary:
      "Designed standardized playbooks for phishing, malware outbreaks, and insider-threat scenarios — shortening investigation time with predefined, structured workflows.",
    tags: ["Playbooks", "Phishing", "Malware", "Insider threat"],
  },
  {
    title: "Kali Linux Penetration Testing Toolkit",
    summary:
      "Configured and automated Nmap, Metasploit, and Burp Suite in controlled lab environments, then ran simulated adversary attacks to surface defensive gaps.",
    tags: ["Nmap", "Metasploit", "Burp Suite", "Adversary simulation"],
  },
] as const;

export const certifications = [
  "CompTIA Network+",
  "CrowdStrike Fundamentals",
  "Proofpoint Security Awareness Training",
  "CICSA — Certified Information and Cyber Security Analyst",
  "Red Team Hacker Academy | TCM Security Training",
  "TryHackMe and Hack The Box — Hands-on Labs",
] as const;

export const education = {
  degree: "B.Sc. Information Science and Cyber Forensics",
  school: "Dr. M.G.R. Educational and Research Institute, Chennai",
  year: "2022",
  detail: "CGPA 7.31 / 10",
};

export const coverage = [
  {
    id: "T1566",
    name: "Phishing",
    tactic: "Initial Access",
    note: "Header analysis, URL reputation, Proofpoint sandboxing, and simulation campaigns that helped cut successful phishing by 30%.",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tactic: "Credential Access",
    note: "Custom Splunk and QRadar correlation rules for brute-force detection, tuned down to actionable signal.",
  },
  {
    id: "T1068",
    name: "Privilege Escalation",
    tactic: "Privilege Escalation",
    note: "Detection engineering for privilege-escalation patterns, mapped back to ATT&CK for coverage gaps.",
  },
  {
    id: "T1204",
    name: "User Execution",
    tactic: "Execution",
    note: "Malware investigation from alert to recovery, including sandbox detonation and file-behavior analysis.",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tactic: "Lateral Movement",
    note: "CrowdStrike EDR hunting across process execution, file behavior, and lateral-movement indicators.",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tactic: "Command and Control",
    note: "Network traffic analysis over DNS and HTTP/S, plus firewall log review during triage.",
  },
  {
    id: "T1059",
    name: "Command and Scripting",
    tactic: "Execution",
    note: "Malware-execution correlation rules and EDR process trees for scripted payload activity.",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tactic: "Defense Evasion",
    note: "Suspicious-user-behavior investigations and insider-threat playbooks for account abuse.",
  },
  {
    id: "T1589",
    name: "Gather Victim Identity",
    tactic: "Reconnaissance",
    note: "OSINT, VirusTotal, and IP/URL/hash reputation lookups to validate IOCs with threat intel teams.",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing App",
    tactic: "Initial Access",
    note: "CVE tracking, vulnerability prioritization, and OSINT research as part of vuln management.",
  },
  {
    id: "T1498",
    name: "Network DoS",
    tactic: "Impact",
    note: "DDoS awareness in SOC operations — monitoring volumetric and application-layer flood indicators.",
  },
  {
    id: "T1562",
    name: "Impair Defenses",
    tactic: "Defense Evasion",
    note: "EDR and AV telemetry watch for tampering, disabled sensors, and defense bypass attempts.",
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
] as const;
