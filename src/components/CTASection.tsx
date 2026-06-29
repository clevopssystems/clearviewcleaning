import { site } from "@/lib/site";
import Button from "./Button";
import { PhoneIcon } from "./icons";

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

export default function CTASection({
  title = "Ready to Give Your Home a Clearer View?",
  description = "Whether you need clean windows, a fresh driveway, clear gutters, or mobile detailing, Clear View Cleaning Company is ready to help.",
  className = "",
}: Props) {
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 shadow-card sm:px-12 sm:py-16">
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-coastal/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-ice/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow-dark">Free, No-Pressure Quotes</span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ice/80 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Get My Free Quote
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
            <p className="mt-6 text-sm text-ice/60">
              Fastest response: call or text {site.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
