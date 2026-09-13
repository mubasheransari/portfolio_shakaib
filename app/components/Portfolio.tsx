import { projects } from "../data/resume";
import { SectionEyebrow } from "./About";

const accents: Record<string, string> = {
  purple: "from-purple/30 to-transparent text-purple",
  gold: "from-gold/25 to-transparent text-gold",
  teal: "from-teal/25 to-transparent text-teal",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-t border-line bg-ink-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="05" label="Portfolio" />
        <h2 className="text-balance mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
          A few apps I&apos;ve shipped to production.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-purple/40"
            >
              <div
                className={`flex h-28 items-center justify-center bg-gradient-to-br ${accents[p.accent]}`}
              >
                <span className="font-display text-2xl font-semibold">
                  {p.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-muted-2">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
