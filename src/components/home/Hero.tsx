import { site, trustBadges } from "@/lib/site";
import Button from "@/components/Button";
import {
  PhoneIcon,
  MapPinIcon,
  ShieldIcon,
  SparkleIcon,
  HandshakeIcon,
} from "@/components/icons";

const badgeIcons = [HandshakeIcon, MapPinIcon, SparkleIcon, ShieldIcon];

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-black pb-16 pt-28 sm:pt-32 lg:min-h-[92vh]">
      {/* Background video — full-bleed, plays behind everything */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-100"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        style={{ filter: "brightness(1.15) contrast(1.05) saturate(1.05)" }}
      >
        <source src="/videos/hero-cleaning.mp4" type="video/mp4" />
      </video>

      {/* Light black tint — keeps the video clearly visible */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/25"
        aria-hidden="true"
      />
      {/* Left-weighted readability gradient: dark behind copy, clear video on the right */}
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/45 to-transparent"
        aria-hidden="true"
      />
      {/* Subtle bottom depth */}
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/35 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-page relative z-30">
        <div className="max-w-2xl">
          <span className="eyebrow-dark animate-fade-up">
            Charleston, SC · Owner-Operated
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[3.5rem]">
            Premium Exterior Cleaning Services in{" "}
            <span className="bg-gradient-to-r from-coastal to-ice bg-clip-text text-transparent">
              Charleston, SC
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
            From streak-free windows to freshly washed siding and clear gutters,
            Clear View keeps your Charleston home clean, bright, and protected —
            handled by the owner himself, start to finish.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <Button
              href={site.phoneHref}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phoneDisplay}
            </Button>
          </div>

          {/* Call/text the owner card */}
          <a
            href={site.phoneHref}
            className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-md transition-colors hover:border-coastal/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coastal text-navy-deep">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-widest text-ice/70">
                Call or text the owner
              </span>
              <span className="font-serif text-xl font-semibold text-white">
                {site.phoneDisplay}
              </span>
            </span>
          </a>

          {/* Trust badges */}
          <ul className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge, i) => {
              const Icon = badgeIcons[i] ?? ShieldIcon;
              return (
                <li
                  key={badge}
                  className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md"
                >
                  <Icon className="h-5 w-5 shrink-0 text-coastal" />
                  <span className="text-sm font-medium text-ice/90">
                    {badge}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
