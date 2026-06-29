import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CheckList from "@/components/CheckList";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ServiceIcon from "@/components/ServiceIcon";
import { getService, pageServices, services } from "@/lib/services";
import { site } from "@/lib/site";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams() {
  return pageServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: service.href },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service || service.slug === "additional-exterior-services") {
    notFound();
  }

  const related = services.filter(
    (s) => s.slug !== service.slug && s.slug !== "additional-exterior-services"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={`${service.name} · Charleston, SC`}
        title={service.heroHeadline}
        description={service.heroSub}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Benefits + Why it matters */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="The Benefits"
                title={`Why ${service.name} Matters`}
              />
              <p className="mt-5 text-ink/75">{service.whyItMatters}</p>
              <p className="mt-5 flex items-start gap-2 rounded-xl border border-coastal/20 bg-coastal/5 px-4 py-3 text-sm font-medium text-navy">
                <ServiceIcon
                  name={service.icon}
                  className="mt-0.5 h-4 w-4 shrink-0 text-coastal"
                />
                {service.bestFor}
              </p>
              <div className="mt-8">
                <CheckList items={service.benefits} columns={1} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mb-8 overflow-hidden rounded-3xl border border-ink/10 shadow-card">
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 to-transparent" />
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-mist p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-glow`}
                >
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  What&apos;s Included
                </h3>
              </div>
              <ul className="mt-7 space-y-3.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coastal/15 text-coastal">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-[0.95rem] text-ink/75">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white sm:py-24">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              theme="dark"
              eyebrow="How It Works"
              title="Getting Started Is Simple"
              description="A straightforward, no-pressure process from first call to a cleaner property."
            />
          </Reveal>
          <div className="mt-14">
            <ProcessSteps theme="dark" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Good to Know"
              title={`${service.name} FAQs`}
              description="Answers to the questions Charleston homeowners ask us most."
            />
          </Reveal>
          <div className="mt-12">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Explore More"
              title="Other Services You Might Need"
              description="Bundle multiple services in one visit and keep your whole home looking its best."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-coastal/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal/10 text-coastal transition-colors group-hover:bg-coastal group-hover:text-white">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-base font-semibold text-navy">
                    {s.name}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coastal">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.name} in Charleston?`}
        description={`Request your free, no-pressure quote today, or call ${site.phoneDisplay} to talk through your project with the owner.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
