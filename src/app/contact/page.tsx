import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, serviceAreas } from "@/lib/site";
import { services } from "@/lib/services";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  CheckIcon,
  ClockIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Request a Free Quote in Charleston, SC",
  description:
    "Request your free quote from Clear View Cleaning Company in Charleston, SC. Call or text (843) 212-7116 for the fastest response on exterior home services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request Your Free Quote"
        description="Tell us a little about your home and what you need. We'll get back to you quickly with honest, straightforward pricing — no pressure, ever."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        showCtas={false}
      />

      <section className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
        <div className="container-page">
          <Reveal>
            <p className="mb-8 flex flex-col items-start gap-1.5 rounded-2xl border border-coastal/25 bg-coastal/5 px-5 py-4 text-navy sm:flex-row sm:items-center sm:gap-3">
              <span className="font-serif text-lg font-semibold">
                Fastest response: call or text
              </span>
              <a
                href={site.phoneHref}
                className="text-lg font-bold text-coastal hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
        <div className="container-page grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <div className="space-y-6">
                {/* Fast response card */}
                <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-7 text-white shadow-card">
                  <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
                  <div className="relative">
                    <span className="eyebrow-dark">Fastest Response</span>
                    <p className="mt-4 font-serif text-2xl font-semibold leading-snug">
                      Call or text {site.phoneDisplay}
                    </p>
                    <p className="mt-2 text-sm text-ice/80">
                      Prefer to talk it through? Reach the owner directly — the
                      quickest way to get answers and a quote.
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-coastal px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-coastal-light"
                      >
                        <PhoneIcon className="h-4 w-4" />
                        Call {site.phoneDisplay}
                      </a>
                      <a
                        href={site.smsHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                      >
                        Text Us
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact details */}
                <div className="rounded-2xl border border-ink/10 bg-mist p-7">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    Contact Details
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-coastal shadow-sm">
                        <PhoneIcon className="h-5 w-5" />
                      </span>
                      <a
                        href={site.phoneHref}
                        className="font-medium text-navy hover:text-coastal"
                      >
                        {site.phoneDisplay}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-coastal shadow-sm">
                        <MailIcon className="h-5 w-5" />
                      </span>
                      <a
                        href={site.emailHref}
                        className="font-medium text-navy hover:text-coastal"
                      >
                        {site.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-coastal shadow-sm">
                        <MapPinIcon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-navy">
                        {site.location}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-coastal shadow-sm">
                        <InstagramIcon className="h-5 w-5" />
                      </span>
                      <a
                        href={site.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy hover:text-coastal"
                      >
                        @{site.instagram}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-coastal shadow-sm">
                        <ClockIcon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-navy">
                        Mon–Sat · Flexible scheduling
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Services checklist */}
                <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-soft">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    What Can We Help With?
                  </h3>
                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {services.map((s) => (
                      <li
                        key={s.slug}
                        className="flex items-center gap-2 text-sm text-ink/75"
                      >
                        <CheckIcon className="h-4 w-4 shrink-0 text-coastal" />
                        {s.shortName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Areas footer strip */}
      <section className="border-t border-ink/10 bg-mist py-12">
        <div className="container-page text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
            Proudly Serving the Lowcountry
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-ink/65">
            {serviceAreas.join(" · ")}
          </p>
        </div>
      </section>
    </>
  );
}
