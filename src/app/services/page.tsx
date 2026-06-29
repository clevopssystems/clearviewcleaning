import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import CheckList from "@/components/CheckList";
import Button from "@/components/Button";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/services";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services | Exterior Cleaning & Home Services in Charleston, SC",
  description:
    "Explore Clear View Cleaning Company's services in Charleston, SC: window cleaning, pressure & soft washing, gutter cleaning, and mobile detailing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Exterior Cleaning & Home Services in Charleston"
        description="One trusted, owner-operated team for the whole outside of your home. Explore everything Clear View Cleaning Company offers across the Charleston area."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Quick nav */}
      <section className="border-b border-ink/10 bg-white py-8">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-mist px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-coastal/40 hover:text-coastal"
              >
                <ServiceIcon name={s.icon} className="h-4 w-4" />
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail rows */}
      <section className="bg-white">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={service.slug}
              id={service.slug === "additional-exterior-services" ? "additional" : service.slug}
              className={`scroll-mt-28 py-16 sm:py-20 ${
                isEven ? "bg-white" : "bg-mist"
              }`}
            >
              <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Visual */}
                <Reveal
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-ink/10 shadow-card">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-between p-7">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-ice shadow-sm backdrop-blur-md">
                        <ServiceIcon name={service.icon} className="h-7 w-7" />
                      </span>
                      <div>
                        <p className="font-serif text-2xl font-semibold text-white drop-shadow-sm">
                          {service.name}
                        </p>
                        <p className="mt-2 text-ice/90 drop-shadow-sm">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal
                  delay={100}
                  className={isEven ? "lg:order-2" : "lg:order-1"}
                >
                  <div>
                    <span className="eyebrow">{`0${i + 1}`}</span>
                    <h2 className="mt-4 font-serif text-3xl font-semibold text-navy">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-ink/75">{service.heroSub}</p>
                    <p className="mt-5 flex items-start gap-2 rounded-xl border border-coastal/20 bg-coastal/5 px-4 py-3 text-sm font-medium text-navy">
                      <ServiceIcon
                        name={service.icon}
                        className="mt-0.5 h-4 w-4 shrink-0 text-coastal"
                      />
                      {service.bestFor}
                    </p>
                    <div className="mt-6">
                      <CheckList items={service.benefits.slice(0, 4)} columns={1} />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      {service.slug !== "additional-exterior-services" ? (
                        <Button href={service.href}>
                          Learn More
                          <ArrowRightIcon className="h-4 w-4" />
                        </Button>
                      ) : null}
                      <Button
                        href="/contact"
                        variant={
                          service.slug !== "additional-exterior-services"
                            ? "outline-navy"
                            : "primary"
                        }
                      >
                        Get a Free Quote
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bundle note */}
      <section className="bg-navy-deep py-16 text-center text-white">
        <div className="container-page">
          <SectionHeading
            theme="dark"
            eyebrow="Save Time"
            title="Need More Than One Service?"
            description="Bundle window cleaning, washing, gutters, or detailing into one simple quote. Tell us everything your home needs and we'll handle it in a single visit — no chasing multiple contractors."
          />
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Build My Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-mist">
        <CTASection />
      </div>
    </>
  );
}
