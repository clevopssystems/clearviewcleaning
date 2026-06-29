import Link from "next/link";
import { site, serviceAreas } from "@/lib/site";
import { pageServices } from "@/lib/services";
import Logo from "./Logo";
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-ice/85">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-coastal/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo theme="dark" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ice/80">
              Owner-operated exterior cleaning and home services in{" "}
              {site.location}. Honest work, reliable communication, and a real
              eye for detail on every property we touch.
            </p>
            <p className="mt-4 font-serif text-lg font-medium text-coastal-light">
              One local owner. One clear quote. One cleaner property.
            </p>
            <div className="mt-6 flex flex-col gap-3.5 text-[15px]">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 font-semibold text-white transition-colors hover:text-coastal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-coastal/20 text-coastal">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="text-base">{site.phoneDisplay}</span>
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-3 text-ice/85 transition-colors hover:text-coastal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <MailIcon className="h-5 w-5" />
                </span>
                {site.email}
              </a>
              <span className="inline-flex items-center gap-3 text-ice/85">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                Charleston &amp; surrounding areas
              </span>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ice/85 transition-colors hover:text-coastal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                @{site.instagram}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-coastal px-6 py-3 text-sm font-semibold text-navy-deep shadow-glow transition-all hover:-translate-y-0.5 hover:bg-coastal-light"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {pageServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="link-underline text-ice/80 transition-colors hover:text-coastal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="link-underline text-ice/80 transition-colors hover:text-coastal"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Service Areas
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-[15px] sm:grid-cols-2 lg:grid-cols-1">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href="/service-areas"
                    className="link-underline text-ice/80 transition-colors hover:text-coastal"
                  >
                    {area}, SC
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link
                  href="/about"
                  className="link-underline text-ice/80 transition-colors hover:text-coastal"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="link-underline text-ice/80 transition-colors hover:text-coastal"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link-underline text-ice/80 transition-colors hover:text-coastal"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link-underline font-semibold text-coastal"
                >
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-ice/65 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Owner-Operated by {site.owner} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
