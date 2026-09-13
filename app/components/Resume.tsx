import { education, experience, profile, skillGroups } from "../data/resume";
import { SectionEyebrow } from "./About";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow index="04" label="Resume" />
            <h2 className="text-balance mt-6 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
              Where I&apos;ve worked, and what I know.
            </h2>
          </div>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Download full CV
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v8m0 0L4 6m3 3l3-3M2 12h10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Experience timeline */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-2">
              Experience
            </h3>
            <ol className="mt-6 space-y-10 border-l border-line pl-8">
              {experience.map((job) => (
                <li key={job.company + job.period} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-purple bg-ink" />
                  <p className="font-mono text-xs text-gold">{job.period}</p>
                  <h4 className="mt-1.5 font-display text-lg font-semibold text-cream">
                    {job.role}
                  </h4>
                  <p className="text-sm text-muted-2">{job.company}</p>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm leading-6 text-muted"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-2">
                Education
              </h3>
              <h4 className="mt-3 font-display text-lg font-semibold text-cream">
                {education.degree}
              </h4>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-2">
              Skills
            </h3>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-cream"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
