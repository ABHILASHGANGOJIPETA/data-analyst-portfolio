import Reveal from "../components/Reveal";

const SKILLS = [
  {
    num: "01",
    title: "ANALYTICS & REPORTING",
    items: ["KPI reporting", "Operational reporting", "Ad hoc & trend analysis", "Stakeholder reporting", "SLA tracking"],
  },
  {
    num: "02",
    title: "SQL & DATA",
    items: ["MySQL, joins, CTEs", "Window functions & views", "Data cleaning & validation", "Data quality & governance"],
  },
  {
    num: "03",
    title: "EXCEL & AUTOMATION",
    items: ["Advanced Excel, VBA", "Power Query, PivotTables", "XLOOKUP, INDEX-MATCH", "SUMIFS & VLOOKUP"],
  },
  {
    num: "04",
    title: "BI & VISUALIZATION",
    items: ["Power BI, DAX", "Data modeling", "Tableau, Matplotlib", "Data storytelling, PowerPoint"],
  },
  {
    num: "05",
    title: "PYTHON & AI",
    items: ["Python, Pandas, NumPy", "Web scraping", "Sentiment analysis", "Gemini LLM, n8n automation"],
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-(--color-paper) py-14 text-(--color-ink-on-paper)">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl text-(--color-canvas-2)">+</span>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
              WHAT I DO
            </h2>
          </div>
          <p className="max-w-[260px] text-sm leading-[1.7] text-(--color-canvas-2)">
            Reporting, validation and automation across ERP and business
            datasets, from raw records to decision-ready dashboards.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SKILLS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="relative h-full rounded bg-(--color-canvas-2) p-5 pb-6">
                <span className="font-display text-xs text-(--color-accent)">{s.num}</span>
                <h3 className="font-display mt-3 text-base tracking-wide text-(--color-ink)">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-1.5 text-xs leading-[1.6] text-(--color-ink-dim)">
                  {s.items.map((it) => (
                    <li key={it}>
                      <span className="text-(--color-accent)">— </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
