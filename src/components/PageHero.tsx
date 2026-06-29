import type { ReactNode } from "react";
import { site } from "@/lib/site";
import Button from "./Button";
import { PhoneIcon } from "./icons";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  showCtas?: boolean;
  children?: ReactNode;
};

/** Dark, premium hero used at the top of inner pages. */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  showCtas = true,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 sm:pt-36">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-coastal/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-ice/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative pb-16 sm:pb-20">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-ice/60">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="transition-colors hover:text-coastal"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-ice/80">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <span aria-hidden="true">/</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? <span className="eyebrow-dark">{eyebrow}</span> : null}
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ice/80">
              {description}
            </p>
          ) : null}

          {showCtas ? (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href={site.phoneHref} variant="outline" size="lg">
                <PhoneIcon className="h-4 w-4" />
                Call {site.phoneDisplay}
              </Button>
            </div>
          ) : null}

          {children}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative">
        <svg
          className="block h-12 w-full text-white sm:h-16"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 40c180 30 360 40 720 10S1260 10 1440 30v50H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
