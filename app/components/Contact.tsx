"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/resume";
import { SectionEyebrow } from "./About";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      return;
    }

    // Basic client-side email format validation.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error(
        "EmailJS configuration is missing. Check your .env.local file."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      if (response.status !== 200) {
        throw new Error(
          `EmailJS returned status ${response.status}`
        );
      }

      setStatus("success");
      setForm({ ...INITIAL_FORM });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-line bg-ink-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionEyebrow index="06" label="Contact" />

        <h2 className="text-balance mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
          Have an app idea? Let&apos;s bring it to life.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <div className="space-y-6">
            <ContactRow
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />

            <ContactRow
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            />

            <ContactRow
              label="Location"
              value={profile.location}
            />

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
              </div>
            </div>
          </div>

          {/* EmailJS contact form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-line bg-surface p-7 sm:grid-cols-2"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <div className="sm:col-span-2">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium uppercase tracking-wide text-muted-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                required
                maxLength={5000}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-fit items-center justify-center rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-purple-dim disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending"
                ? "Sending…"
                : status === "success"
                  ? "Send Another Message"
                  : "Send Message"}
            </button>

            {status === "success" && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm font-medium text-green-400 sm:col-span-2"
              >
                Thanks! Your message has been sent successfully.
                I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="text-sm font-medium text-red-400 sm:col-span-2"
              >
                {form.name.trim() &&
                form.email.trim() &&
                form.subject.trim() &&
                form.message.trim()
                  ? "Unable to send your message. Please check your email address and try again, or contact me directly at "
                  : "Please fill in all fields with valid information, or contact me directly at "}
                <a
                  href={`mailto:${profile.email}`}
                  className="underline underline-offset-4"
                >
                  {profile.email}
                </a>
                .
              </p>
            )}
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
    <p className="mt-1 break-words font-display text-lg font-medium text-cream">
      {value}
    </p>
  );

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className="transition-colors hover:text-gold"
        >
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
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  name: "name" | "email" | "subject";
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  const id = `contact-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-muted-2"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        autoComplete={autoComplete}
        required
        maxLength={name === "subject" ? 200 : 150}
        className="mt-2 w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
      />
    </div>
  );
}