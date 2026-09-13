import { services } from "../data/resume";
import { SectionEyebrow } from "./About";

const icons = [
  <path
    key="1"
    d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M10 20h4"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="2"
    d="M9 4 2 12l7 8M15 4l7 8-7 8"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="3"
    d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="4"
    d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    fill="none"
  />,
  <path
    key="5"
    d="M12 2 3 7v6c0 5 3.8 8.7 9 9 5.2-.3 9-4 9-9V7l-9-5Z M9 12l2 2 4-4"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
  <path
    key="6"
    d="M4 4h16v16H4Z M4 9h16 M9 9v11"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />,
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-line bg-ink-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="03" label="Services" />
        <h2 className="text-balance mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
          What I can build for your product.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-purple/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-purple">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {icons[i % icons.length]}
                </svg>
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
