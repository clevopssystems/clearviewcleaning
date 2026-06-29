import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { serviceAreas, site } from "@/lib/site";
import { MapPinIcon, PhoneIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Service Areas | Charleston & the Lowcountry | Clear View Cleaning",
  description:
    "Clear View Cleaning Company serves Charleston, Mount Pleasant, Daniel Island, North Charleston, James Island, West Ashley, Summerville, Folly Beach & Isle of Palms.",
};

const areaBlurbs: Record<string, string> = {
  Charleston:
    "From historic downtown to the suburbs, we keep Charleston homes bright, clean, and well-maintained year-round.",
  "Mount Pleasant":
    "Premium exterior cleaning for Mount Pleasant's coastal homes — windows, washing, gutters, and more.",
  "Daniel Island":
    "Detail-focused home services for Daniel Island, where curb appeal and a polished exterior matter.",
  "North Charleston":
    "Reliable, owner-operated cleaning and maintenance for North Charleston homeowners.",
  "James Island":
    "Salt air and humidity are tough on James Island homes — we keep your exterior looking its best.",
  "West Ashley":
    "Trusted window cleaning, soft washing, and gutter service across West Ashley neighborhoods.",
  Summerville:
    "We bring premium exterior home services out to Summerville and the surrounding area.",
  "Folly Beach":
    "Coastal living is hard on exteriors. We help Folly Beach homes stay clean and protected.",
  "Isle of Palms":
    "From beach homes to year-round residences, Isle of Palms properties get our full attention.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Charleston & the Surrounding Lowcountry"
        description="Clear View Cleaning Company proudly brings premium exterior cleaning and home services right to your doorstep across the greater Charleston area."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Areas We Proudly Serve"
              description="Don't see your neighborhood? Reach out — we're often able to help in nearby areas too."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <Reveal key={area} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-coastal/40 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coastal/10 text-coastal transition-colors group-hover:bg-coastal group-hover:text-white">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {area}, SC
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {areaBlurbs[area]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure band */}
      <section className="bg-mist py-16">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-12 text-center shadow-card sm:px-12">
              <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  Not Sure if We Serve Your Area?
                </h2>
                <p className="mt-4 text-ice/80">
                  Call or request a quote and we&apos;ll let you know right away.
                  We&apos;re always happy to help Lowcountry homeowners — even if
                  you&apos;re just outside the areas listed here.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Request a Free Quote
                  </Button>
                  <Button
                    href={site.phoneHref}
                    variant="outline"
                    size="lg"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call {site.phoneDisplay}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white py-12">
        <div className="container-page">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "Local Charleston Company",
              "Owner-Operated",
              "Free Quotes",
              "Residential Home Services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-ink/70"
              >
                <CheckIcon className="h-4 w-4 text-coastal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-mist">
        <CTASection />
      </div>
    </>
  );
}
