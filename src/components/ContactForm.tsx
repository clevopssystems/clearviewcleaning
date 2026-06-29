"use client";

import { useState, type FormEvent } from "react";
import { pageServices } from "@/lib/services";
import { site } from "@/lib/site";
import { CheckIcon } from "./icons";

const inputBase =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 shadow-sm transition-colors focus:border-coastal focus:outline-none focus:ring-2 focus:ring-coastal/30";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only: no backend wired up. In production, POST to an API route,
    // form service, or CRM here.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-coastal/30 bg-coastal/5 px-6 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coastal-gradient text-white shadow-glow">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-navy">
          Thanks — your request is on its way!
        </h3>
        <p className="mt-3 max-w-md text-ink/70">
          We&apos;ll get back to you shortly with honest, straightforward
          pricing. Need a faster answer? Call or text us directly at{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-coastal hover:underline"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold text-navy underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            Name <span className="text-coastal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone <span className="text-coastal">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(843) 000-0000"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-semibold text-navy">
            Service Needed <span className="text-coastal">*</span>
          </label>
          <select id="service" name="service" required className={inputBase} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {pageServices.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple Services">Multiple Services</option>
            <option value="Something Else">Something Else</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="preferredContact"
            className="text-sm font-semibold text-navy"
          >
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            className={inputBase}
            defaultValue="Call"
          >
            <option value="Call">Call me</option>
            <option value="Text">Text me</option>
            <option value="Email">Email me</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-sm font-semibold text-navy">
            Address / Area
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Neighborhood (e.g. Mount Pleasant)"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about your project, timing, or any questions you have."
            className={`${inputBase} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coastal px-8 py-4 text-base font-semibold text-navy-deep shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-coastal-light sm:w-auto"
      >
        Request My Free Quote
      </button>
      <p className="mt-4 text-xs text-ink/50">
        By submitting, you agree to be contacted about your request. We respect
        your privacy and never share your information.
      </p>
    </form>
  );
}
