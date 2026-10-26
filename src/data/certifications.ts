export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  achievement?: string;
  certificateUrl?: string;
  featured?: boolean;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Professional Certification in Data Analyst",
    issuer: "NASSCOM FutureSkills Prime",
    date: "December 2025",
    achievement: "Gold, 79%",
    certificateUrl: "https://drive.google.com/file/d/1e8tkJGDy85SeiYHKgq9ZW65cQEVYlt9K/view",
    featured: true,
  },
  {
    name: "SQL Certification",
    issuer: "HackerRank",
    date: "2025",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/85d8fa0e4c6e",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    certificateUrl: "https://drive.google.com/file/d/17KymC2ClWrXsMHqGWaCkGt9blaaGfcS0/view",
  },
  {
    name: "Python Coder",
    issuer: "Kaggle",
    certificateUrl: "https://drive.google.com/file/d/1s0cLZ7mavtkmjcj4csoHZ8hx0IUbVVuN/view",
  },
  {
    name: "Data Visualization",
    issuer: "Tata / Forage",
    certificateUrl: "https://drive.google.com/file/d/1-XqOzJyLVEcrrKKQnBWcxyUDKYCJ5ZLu/view",
  },
  {
    name: "Data Analysis",
    issuer: "Deloitte / Forage",
    certificateUrl: "https://drive.google.com/file/d/1Uy184idy42BFKZ_oYzUpa5UkaTAG56EI/view",
  },
  {
    name: "Data Analysis",
    issuer: "Microsoft / Simplilearn",
    certificateUrl:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODczNTUyNl84ODkzMTkzMTc1NDMyMDY4NjI0Mi5wbmciLCJ1c2VybmFtZSI6IkdBTkdPSklQRVRBIEFCSElMQVNIIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
  },
  {
    name: "Data Analyst",
    issuer: "ExcelR",
    date: "July 2025",
    certificateUrl: "https://drive.google.com/file/d/1ZPUwws7FFqJU-aw7fUL74Hn0hk75L0T4/view",
  },
  {
    name: "Data Analysis",
    issuer: "Unified Mentor",
  },
];
