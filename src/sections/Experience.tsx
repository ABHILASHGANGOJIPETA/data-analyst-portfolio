import Reveal from "../components/Reveal";

const JOBS = [
  {
    role: "Data Analyst",
    org: "Genesys Tech Systems, Hyderabad",
    when: "Apr 2026 – Present",
    points: [
      "Prepare daily, weekly and monthly operational reports, track KPIs and validate data accuracy before stakeholder delivery.",
      "Deliver ad hoc analysis for department heads and cross-functional teams; resolve reporting discrepancies.",
      "Audit datasets across departments to support data governance, consistent ownership and reliable reporting.",
      "Automate manual reporting steps with Excel VBA macros to cut processing time and errors in high-volume record checks.",
      "Develop KPI reports presented in PowerPoint; document SQL queries, validation procedures and workflows.",
    ],
  },
  {
    role: "Data Analytics Intern",
    org: "AIvariant",
    when: "Jul 2025 – Jan 2026",
    points: [
      "Analyzed 65K+ banking and delivery records with SQL and Advanced Excel to find KPI, operational and pricing trends.",
      "Ran data cleaning, validation and automated quality checks, reducing discrepancies by 40% across 15 departments.",
      "Built Tableau dashboards covering 10+ operational KPIs for non-technical stakeholders.",
      "Automated recurring Excel reports with VBA and Power Query, reducing manual effort by 70%.",
      "Documented dashboard definitions and reporting workflows for consistency across departments.",
    ],
  },
];


export default function Experience() {
  return (
    <section className="bg-(--color-canvas-2) pt-14 pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl italic sm:text-5xl">Experience</h2>
        </Reveal>
        <div className="mt-9 grid gap-10 lg:grid-cols-2">
          {JOBS.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.1} className="border-t border-(--color-ink)/15 pt-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">{j.when}</div>
              <h3 className="font-display mt-2 text-2xl font-bold">{j.role}</h3>
              <div className="text-sm text-(--color-ink-dim)">{j.org}</div>
              <ul className="mt-4 space-y-2.5 text-[13px] leading-[1.7] text-(--color-ink-dim)">
                {j.points.map((p) => (
                  <li key={p}>
                    <span className="text-(--color-accent)">— </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10">
          <Reveal className="border-t border-(--color-ink)/15 pt-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">Education</div>
            <h3 className="font-display mt-2 text-2xl font-bold">B.Tech, Computer Science (AI)</h3>
            <div className="text-sm text-(--color-ink-dim)">Parul University, Vadodara</div>
            <div className="mt-2 text-[13px] text-(--color-ink-dim)">Aug 2021 – May 2025 · CGPA 7.22/10</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
