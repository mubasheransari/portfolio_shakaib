import { profile } from "../data/resume";
import { SectionEyebrow } from "./About";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-ink-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="06" label="Contact" />
        <h2 className="text-balance mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
          Have a mobile app to build? Let&apos;s talk.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-6">
            <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />
            <ContactRow label="Location" value={profile.location} />
            <div className="pt-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                Elsewhere
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-xs text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  LinkedIn
                </a>
                <span className="rounded-full border border-line px-4 py-2 text-xs text-muted">
                  GitHub
                </span>
              </div>
            </div>
          </div>

          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="grid gap-5 rounded-2xl border border-line bg-surface p-7 sm:grid-cols-2"
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <div className="sm:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wide text-muted-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project…"
                className="mt-2 w-full resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="sm:col-span-2 inline-flex w-fit items-center justify-center rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-purple-dim"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <p className="mt-1 font-display text-lg font-medium text-cream">
      {value}
    </p>
  );
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
        {label}
      </p>
      {href ? (
        <a href={href} className="transition-colors hover:text-gold">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wide text-muted-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={label}
        className="mt-2 w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
      />
    </div>
  );
}
