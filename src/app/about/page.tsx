import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import VisualCard from "@/components/VisualCard";
import Reveal from "@/components/Reveal";
import CheckList from "@/components/CheckList";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import {
  HandshakeIcon,
  ShieldIcon,
  SparkleIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Owner-Operated Exterior Cleaning in Charleston, SC",
  description:
    "Meet Nicholas Pfeiffer, owner of Clear View Cleaning Company. Honest work, reliable service, and premium exterior home care in Charleston, SC.",
};

const values = [
  {
    icon: HandshakeIcon,
    title: "Honest Work",
    body: "Straightforward quotes, no upselling, and real recommendations based on what your home actually needs.",
  },
  {
    icon: ShieldIcon,
    title: "Reliable Service",
    body: "We show up when we say we will and follow through — every call, every appointment, every job.",
  },
  {
    icon: SparkleIcon,
    title: "Premium Quality",
    body: "The right method for every surface and a detail-focused finish you'll notice from the curb.",
  },
  {
    icon: MapPinIcon,
    title: "Local Charleston Trust",
    body: "We live and work in the Lowcountry, and we treat your home like it's part of our own community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Clear View Cleaning Company"
        title="A Local Owner Who Genuinely Cares About Your Home"
        description="Clear View Cleaning Company is built on a simple idea: honest work, reliable service, and a finish you can be proud of — delivered by the owner himself, right here in Charleston, SC."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Owner story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <VisualCard
                label="Clear View Cleaning Company"
                caption={`Owner-operated by ${site.owner} · Charleston, SC`}
                icon="home"
                image={images.homeCraftsman}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
              <div className="absolute -right-4 -bottom-5 rounded-2xl border border-ink/10 bg-white px-5 py-4 shadow-card sm:-right-8">
                <p className="font-serif text-3xl font-semibold text-navy">5+</p>
                <p className="text-xs font-medium text-ink/60">
                  Years of business ownership
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Meet Nicholas Pfeiffer"
              />
              <div className="mt-6 space-y-4 text-ink/75">
                <p>
                  Clear View Cleaning Company is owner-operated by Nicholas
                  Pfeiffer, serving Charleston, SC with honest work, reliable
                  communication, and attention to detail on every property.
                </p>
                <p>
                  After building a successful exterior cleaning business for over
                  five years out of state, Nicholas brought that same drive,
                  experience, and commitment to excellence to Charleston. He
                  founded Clear View on the belief that homeowners deserve a
                  company that treats their property with care and stands behind
                  its work.
                </p>
                <p>
                  When you call Clear View, you&apos;re not getting passed around
                  a call center — you&apos;re talking to the owner. That personal
                  accountability is the difference, and it shows up in the
                  quality of every window, driveway, and gutter we touch.
                </p>
              </div>
              <div className="mt-8">
                <CheckList
                  items={[
                    "5+ years of proven business ownership",
                    "Dedicated to customer satisfaction",
                    "Premium quality with honest, reasonable pricing",
                    "Local service with personal care",
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Stand For"
              title="Built on Trust, Quality & Care"
              description="The values that guide every job we take on across Charleston and the surrounding Lowcountry."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal/10 text-coastal">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {value.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="relative overflow-hidden bg-navy-deep py-16 text-center text-white">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-page relative">
          <SparkleIcon className="mx-auto h-8 w-8 text-coastal" />
          <p className="mx-auto mt-5 max-w-3xl font-serif text-2xl font-medium leading-snug sm:text-3xl">
            &ldquo;{site.microTagline}&rdquo;
          </p>
          <p className="mt-4 text-sm text-ice/60">
            — Our promise on every Charleston home we serve
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Work With a Local Owner Who Cares?"
        description="Reach out for a free, no-pressure quote and see why Charleston homeowners trust Clear View Cleaning Company with their property."
      />
    </>
  );
}
