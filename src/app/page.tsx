import Link from "next/link";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import StatsBand from "@/components/StatsBand";
import Testimonials from "@/components/Testimonials";
import VisualCard from "@/components/VisualCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import { services } from "@/lib/services";
import { site, serviceAreas } from "@/lib/site";
import { images } from "@/lib/images";
import {
  HandshakeIcon,
  SparkleIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/icons";

const whyCards = [
  {
    icon: HandshakeIcon,
    title: "Owner-Operated Accountability",
    body: "You deal directly with the owner — not a rotating crew. That means the person who answers your call is the one who stands behind the work.",
  },
  {
    icon: SparkleIcon,
    title: "Multiple Services in One Place",
    body: "Windows, washing, gutters, and detailing — one trusted local team for the whole outside of your home.",
  },
  {
    icon: PhoneIcon,
    title: "Clear Communication",
    body: "Straightforward quotes, honest recommendations, and reliable follow-through from first call to finished job.",
  },
  {
    icon: ShieldIcon,
    title: "Careful Work Around Your Property",
    body: "We treat your home, landscaping, and surfaces with respect — using the right method for every surface, every time.",
  },
  {
    icon: MapPinIcon,
    title: "Local Charleston Service",
    body: "We know the Lowcountry's climate and what it does to homes — and we live and work right here in the community we serve.",
  },
  {
    icon: ClockIcon,
    title: "Free & Simple Quote Process",
    body: "No pressure, no runaround. Call, text, or fill out a quick form and get clear pricing fast.",
  },
];

const trustProof = [
  {
    title: "Owner-Operated",
    body: "The owner answers your call and works the job — full accountability.",
  },
  {
    title: "Local Charleston Service",
    body: "We live and work in the Lowcountry and know what its climate does to homes.",
  },
  {
    title: "Clear Communication",
    body: "Straightforward quotes and honest recommendations from first call to finish.",
  },
  {
    title: "Careful Around Your Home",
    body: "The right method for every surface, and respect for your landscaping.",
  },
  {
    title: "Free, No-Pressure Quotes",
    body: "Clear pricing with zero sales pressure — call, text, or request online.",
  },
  {
    title: "Multiple Services, One Visit",
    body: "Bundle windows, washing, gutters, and detailing in a single trip.",
  },
];

const galleryItems = [
  { label: "Fresh Home Exterior", caption: "Soft wash siding refresh", icon: "wash" as const, image: images.softWashing, badge: "Soft Wash" },
  { label: "Streak-Free Windows", caption: "Interior & exterior glass", icon: "window" as const, image: images.windowCleaning, badge: "Windows" },
  { label: "Clean Driveway & Patio", caption: "Pressure washed concrete", icon: "wash" as const, image: images.driveway, badge: "Pressure Wash" },
  { label: "Clear, Flowing Gutters", caption: "Debris removed & hauled", icon: "gutter" as const, image: images.gutterFlowing, badge: "Gutters" },
  { label: "Showroom-Clean Vehicle", caption: "Mobile detail at home", icon: "detail" as const, image: images.detailing, badge: "Detailing" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />

      {/* Services Preview */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Complete Exterior Cleaning & Home Services"
              description="From crystal-clear windows to a freshly washed driveway, Clear View Cleaning Company keeps every part of your Charleston home looking its best."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-coastal/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="overflow-hidden rounded-3xl border border-white/15 shadow-card">
                <VisualCard
                  label="Clear View Cleaning Company"
                  caption="Owner-operated · Charleston, SC"
                  icon="home"
                  image={images.homeRefreshed}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="border-0"
                />
              </div>
              <div className="absolute -right-4 bottom-6 rounded-2xl border border-white/15 bg-white/95 px-5 py-4 shadow-card sm:-right-8">
                <p className="font-serif text-3xl font-semibold text-navy">5+</p>
                <p className="text-xs font-medium text-ink/60">
                  Years of business ownership
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <span className="eyebrow-dark">Meet the Owner</span>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                Meet Nicholas Pfeiffer
              </h2>
              <div className="mt-6 space-y-4 text-ice/80">
                <p>
                  Clear View Cleaning Company is owner-operated by Nicholas
                  Pfeiffer, serving Charleston, SC with honest work, reliable
                  communication, and real attention to detail.
                </p>
                <p>
                  After building a successful exterior cleaning business for over
                  five years out of state, Nicholas brought that same drive,
                  experience, and commitment to excellence to Charleston — and to
                  every home he works on.
                </p>
              </div>

              <div className="mt-8">
                <CheckList
                  theme="dark"
                  columns={1}
                  items={[
                    "5+ years of proven business ownership",
                    "Dedicated to customer satisfaction",
                    "Premium quality with honest, reasonable pricing",
                    "Local service with personal care",
                  ]}
                />
              </div>

              <div className="mt-9">
                <Button href="/about" size="lg">
                  Work With a Local Owner Who Cares
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust proof */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Trust Clear View"
                title="Built on Honest Work, Clean Results & Local Accountability"
                description="No call centers, no rotating crews, no surprises — just a local owner who answers the phone and stands behind every job."
              />
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get a Free Quote
                </Button>
                <Button href={site.phoneHref} variant="outline-navy" size="lg">
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {trustProof.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coastal/10 text-coastal">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-serif text-base font-semibold text-navy">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="See the Clear View Difference"
              description="Real work. Real results. Clean homes across Charleston."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <VisualCard {...item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/gallery" variant="outline-navy" size="lg">
              View Full Gallery
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Charleston Homeowners Choose Clear View"
              description="Premium results, personal service, and a local owner who genuinely cares about doing right by your home."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 70}>
                  <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-coastal/40 hover:shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal/10 text-coastal transition-colors duration-300 group-hover:bg-coastal group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              theme="dark"
              eyebrow="Simple Process"
              title="Getting Started Is Simple"
              description="Four easy steps from first call to a cleaner, better-maintained property."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps theme="dark" />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Service Areas"
                title="Serving Charleston & Surrounding Areas"
                description="Proudly providing exterior cleaning and home services across the Lowcountry."
              />
              <div className="mt-8 flex flex-wrap gap-2.5">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm font-medium text-navy"
                  >
                    <MapPinIcon className="h-4 w-4 text-coastal" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-8 rounded-xl border border-coastal/20 bg-coastal/5 px-5 py-4 text-sm text-ink/75">
                <span className="font-semibold text-navy">
                  Not sure if we serve your area?
                </span>{" "}
                Call or request a quote and we&apos;ll let you know — we&apos;re
                always happy to help.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/service-areas" size="lg">
                  View All Service Areas
                </Button>
                <Button href={site.phoneHref} variant="outline-navy" size="lg">
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-[#0E2E47] via-[#103B57] to-[#4FA3C7] p-8 shadow-card">
              <div className="bg-dot-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <h3 className="font-serif text-2xl font-semibold text-white">
                  The Lowcountry, Covered
                </h3>
                <p className="mt-3 text-ice/80">
                  From historic downtown Charleston to the islands and out to
                  Summerville — we bring premium home services right to your
                  doorstep.
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-ice/90 backdrop-blur-sm"
                    >
                      <CheckIcon className="h-4 w-4 shrink-0 text-coastal" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-mist">
        <CTASection />
      </div>

      {/* Quick service links for SEO/internal linking */}
      <section className="border-t border-ink/10 bg-mist pb-16">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink/40">
            Popular Charleston Services
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="text-ink/60 transition-colors hover:text-coastal"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
