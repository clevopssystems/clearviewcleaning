import Button from "@/components/Button";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-hero-gradient pt-24">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-page relative text-center">
        <p className="font-serif text-7xl font-semibold text-coastal sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
          This Page Took a Different Route
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ice/80">
          The page you&apos;re looking for isn&apos;t here — but we&apos;d still
          love to help with your home. Head back or give us a call.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href={site.phoneHref} variant="outline" size="lg">
            <PhoneIcon className="h-4 w-4" />
            Call {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
