import Reveal from "../components/Reveal";
import CertificationCard from "../components/CertificationCard";
import { CERTIFICATIONS } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="bg-(--color-canvas-2) pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="border-t border-(--color-ink)/15 pt-8">
          <h2 className="font-display text-4xl italic sm:text-5xl">Certifications</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal
              key={`${c.issuer}-${c.name}`}
              delay={(i % 3) * 0.08}
              className={c.featured ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <CertificationCard cert={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
