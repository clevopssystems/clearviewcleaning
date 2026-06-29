import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import VisualCard from "@/components/VisualCard";
import Reveal from "@/components/Reveal";
import type { IconName } from "@/lib/services";
import { images, type SiteImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Work | Exterior Cleaning Gallery in Charleston, SC",
  description:
    "See the Clear View difference. Real exterior cleaning results from Charleston, SC — windows, soft washing, gutters, and detailing.",
};

type Item = {
  label: string;
  caption: string;
  icon: IconName;
  badge: string;
  image: SiteImage;
  aspect?: string;
};

const items: Item[] = [
  { label: "Soft-Washed Siding", caption: "Buildup gone — no surface damage", icon: "wash", badge: "Soft Wash", image: images.softWashing, aspect: "aspect-[4/5]" },
  { label: "Clean, Flowing Gutters", caption: "Debris cleared, water flowing free", icon: "gutter", badge: "Gutters", image: images.gutterFlowing },
  { label: "Streak-Free Windows", caption: "More light, inside and out", icon: "window", badge: "Windows", image: images.windowCleaning },
  { label: "Restored Driveway", caption: "Years of grime pressure washed away", icon: "wash", badge: "Pressure Wash", image: images.driveway, aspect: "aspect-[4/5]" },
  { label: "Bright Patio & Pavers", caption: "An outdoor space you'll want to use", icon: "wash", badge: "Pressure Wash", image: images.patio },
  { label: "Showroom-Clean Vehicle", caption: "Detailed right in the driveway", icon: "detail", badge: "Mobile Detailing", image: images.detailing },
  { label: "Refreshed Home Exterior", caption: "A whole-home clean in one visit", icon: "home", badge: "Multi-Service", image: images.homeRefreshed },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Results Around Charleston"
        description="From soft-washed siding to streak-free windows and clear gutters, here's the kind of work Clear View Cleaning Company delivers for homeowners across the Lowcountry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-ink/70">
              Every project is handled with care, clear communication, and
              attention to detail — from the first rinse to the final walk-through.
            </p>
          </Reveal>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 3) * 70} className="break-inside-avoid">
                <VisualCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Quality You Can See"
            title="Every Detail, Done Right"
            description="From the first rinse to the final inspection, we treat your property like it's our own — because reputation is everything in a local business."
          />
        </div>
      </section>

      <CTASection
        title="Want Results Like These at Your Home?"
        description="Request a free quote and let's get your Charleston property looking its absolute best."
      />
    </>
  );
}
