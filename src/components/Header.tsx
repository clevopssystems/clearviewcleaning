"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { pageServices } from "@/lib/services";
import Logo from "./Logo";
import Button from "./Button";
import { PhoneIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Our Work", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 py-2.5 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent py-4 backdrop-blur-[2px]"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Logo theme="dark" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-coastal"
                      : "text-ice/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800/95 p-2 shadow-card backdrop-blur-lg">
                    {pageServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ice/80 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-coastal transition-colors hover:bg-white/10"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-coastal"
                    : "text-ice/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-coastal/60 hover:text-coastal"
          >
            <PhoneIcon className="h-4 w-4 text-coastal" />
            {site.phoneDisplay}
          </a>
          <Button href="/contact" size="sm">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[var(--mobile-top)] bottom-0 z-40 origin-top overflow-y-auto bg-navy-deep/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        style={{ ["--mobile-top" as string]: scrolled ? "60px" : "72px" }}
      >
        <nav
          className="container-page flex flex-col gap-1 py-6"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3.5 text-lg font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-white/5 text-coastal"
                  : "text-ice/90 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 border-t border-white/10 pt-4">
            <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-widest text-ice/50">
              Our Services
            </p>
            {pageServices.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="block rounded-xl px-4 py-2.5 text-base text-ice/75 hover:bg-white/5 hover:text-white"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Button href="/contact" size="lg" className="w-full">
              Get a Free Quote
            </Button>
            <Button
              href={site.phoneHref}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phoneDisplay}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
