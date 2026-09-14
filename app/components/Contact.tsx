"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/resume";
import { SectionEyebrow } from "./About";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
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
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-line bg-surface p-7 sm:grid-cols-2"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
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
              <label className="text-xs font-medium uppercase tracking-wide text-muted-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                className="mt-2 w-full resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="sm:col-span-2 inline-flex w-fit items-center justify-center rounded-full bg-purple px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-purple-dim disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="sm:col-span-2 text-sm font-medium text-green-400">
                Thanks — your message has been sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="sm:col-span-2 text-sm font-medium text-red-400">
                Please fill out all fields, or email me directly at{" "}
                {profile.email}.
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
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wide text-muted-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required
        className="mt-2 w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-cream placeholder:text-muted-2 focus:border-purple focus:outline-none"
      />
    </div>
  );
}
