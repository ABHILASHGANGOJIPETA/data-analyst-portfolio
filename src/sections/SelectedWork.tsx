import Reveal from "../components/Reveal";

const GH = "https://github.com/ABHILASHGANGOJIPETA/";
const WORK = [
  {
    name: "Investigation of the Indian EdTech Market",
    tools: "Python, Pandas, Web Scraping, AI Sentiment Analysis, Power BI, DAX",
    desc: "Analyzed 150+ records from seven platforms to investigate fraud patterns and misleading placement claims. AI-assisted classification into 10 categories; Power BI dashboard with 10 DAX measures, seven charts and three slicers. Found 56% negative sentiment and 40 scam-flagged posts. Backed by a 25-page LaTeX report with five case studies.",
    href: GH + "Indian-EdTech-Market-Investigation/tree/main",
    featured: true,
  },
  {
    name: "Banking Credit, Debit, Loan & Deposit Analysis",
    tools: "MySQL, SQL, Python, Excel, Power BI, Tableau",
    desc: "Analyzed transaction, credit/debit, branch, loan and deposit trends to surface KPI performance and operational risks. Validated SQL outputs against dashboard metrics and turned findings into recommendations.",
    href: GH + "Banking-Data-Analysis-Credit-Debit-Loan",
  },
  {
    name: "SLA Compliance & Operational Reporting Automation",
    tools: "Excel, Power Query, VBA, PivotTables",
    desc: "Power Query workflow to clean and validate a 10,000-ticket dataset, plus an interactive dashboard for SLA compliance, resolution time, backlog and breaches. VBA handles refresh, export and logging.",
    href: GH + "sla-compliance-reporting",
  },
  {
    name: "Student Engagement Dashboard & Automated Reporting",
    tools: "n8n, Google Sheets, QuickChart, Gemini LLM",
    desc: "Automated workflow combining student data, chart generation, AI-driven insights and email reporting to support academic decisions.",
    href: GH + "n8n-student-engagement-report",
  },
  {
    name: "HR Data Analytics",
    tools: "Power BI, Excel, Data Cleaning, KPI Reporting",
    desc: "Dashboards for attendance, productivity and workforce KPIs; documented potential manual reporting savings of 3–4 hours per day.",
    href: GH + "HRAnalytics",
  },
  {
    name: "Sales Insights Dashboard",
    tools: "Power BI, SQL, DAX, Data Modeling",
    desc: "Interactive dashboard tracking sales trends, regional performance and core business KPIs on a structured data model.",
    href: GH + "SalesInsights",
  },
  {
    name: "Zomato Restaurant Analysis",
    tools: "SQL, Excel, Power BI, Tableau",
    desc: "Cleaned restaurant data, wrote reusable SQL views and built dashboards on ratings, pricing, growth and digital adoption.",
    href: GH + "zomato-restaurant-data-analysis",
  },
  {
    name: "Amazon Sales Analysis",
    tools: "Python, Pandas, Matplotlib, Power BI",
    desc: "Statistical analysis and visual reporting on sales trends, customer behavior and seasonal variation.",
    href: GH + "Amazon-Sales-Analysis",
  },
  {
    name: "IPL Analysis Dashboard (2008–2025)",
    tools: "Power BI, DAX, Data Modeling, KPI Design",
    desc: "Interactive multi-season dashboard on player performance, team statistics and match outcomes.",
    href: GH + "IPL-Analysis-Dashboard-2008-2025",
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-(--color-canvas) py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
            SELECTED WORK
          </h2>
          <p className="max-w-[260px] text-sm leading-[1.7] text-(--color-ink-dim)">
            Nine analytics projects across banking, sales, HR, sports and AI-assisted research.
          </p>
          <a
            href="https://github.com/ABHILASHGANGOJIPETA"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap border-b border-(--color-accent) pb-1 text-[11px] uppercase tracking-[0.2em] text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
          >
            All On GitHub
          </a>
        </Reveal>

        <div id="work" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w, i) => (
            <Reveal
              key={w.name}
              delay={(i % 3) * 0.1}
              className={w.featured ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <div className="flex h-full flex-col rounded border border-(--color-ink)/15 bg-(--color-canvas-2) p-6 transition-colors hover:border-(--color-accent)">
                <div className="font-display text-sm text-(--color-accent)">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold leading-snug">
                  {w.name}
                </h3>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-(--color-accent)">
                  {w.tools}
                </div>
                <p className="mt-4 flex-1 text-[13px] leading-[1.75] text-(--color-ink-dim)">
                  {w.desc}
                </p>
                {w.href && (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 self-start border-b border-(--color-ink)/40 pb-0.5 text-[11px] uppercase tracking-[0.2em] hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                  >
                    View On GitHub ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
