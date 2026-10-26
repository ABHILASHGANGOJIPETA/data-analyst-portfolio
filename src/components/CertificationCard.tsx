import type { Certification } from "../data/certifications";

const body = (c: Certification) => (
  <>
    <div className="text-[11px] uppercase tracking-[0.16em] text-(--color-accent)">
      {c.issuer}
      {c.date ? ` · ${c.date}` : ""}
    </div>
    <h3 className="font-display mt-2 text-lg font-bold leading-snug">{c.name}</h3>
    {c.achievement && (
      <div className="mt-2 inline-block border border-(--color-accent)/60 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-(--color-accent)">
        {c.achievement}
      </div>
    )}
    <div className="mt-auto pt-5 text-[11px] uppercase tracking-[0.2em]">
      {c.certificateUrl ? (
        <span className="inline-flex items-center gap-1.5 border-b border-(--color-ink)/40 pb-0.5 group-hover:border-(--color-accent) group-hover:text-(--color-accent)">
          View Certificate
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      ) : (
        <span className="text-(--color-ink-dim)">Certificate link coming soon</span>
      )}
    </div>
  </>
);

export default function CertificationCard({ cert }: { cert: Certification }) {
  const base = `flex h-full flex-col rounded border p-5 ${
    cert.featured ? "border-(--color-accent)/70 bg-(--color-canvas)" : "border-(--color-ink)/15 bg-(--color-canvas)"
  }`;
  if (!cert.certificateUrl) return <div className={base}>{body(cert)}</div>;
  return (
    <a
      href={cert.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${cert.name} certificate from ${cert.issuer} (opens in a new tab)`}
      className={`group ${base} transition-colors hover:border-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)`}
    >
      {body(cert)}
    </a>
  );
}
