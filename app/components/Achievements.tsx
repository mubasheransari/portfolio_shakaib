import { achievements } from "../data/resume";
import { SectionEyebrow } from "./About";

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="01" label="Achievements" />
        <h2 className="text-balance mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
          Impact & Achievements
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.map((group, i) => (
            <div
              key={group.label}
              className="rounded-2xl border border-line bg-surface p-7"
            >
              <span className="font-mono text-xs text-purple">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-cream">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
