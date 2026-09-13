import { focusAreas } from "../data/resume";

const accentClasses = ["text-purple", "text-gold", "text-teal", "text-purple"];

export default function FocusAreas() {
  return (
    <section className="border-t border-line bg-ink-soft py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span
                className={`font-mono text-xs ${accentClasses[i % accentClasses.length]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-cream">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {area.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] text-muted-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
