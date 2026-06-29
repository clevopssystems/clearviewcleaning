import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { reviewChannels } from "@/lib/site";
import { StarIcon, ShieldIcon, HandshakeIcon } from "./icons";

const channelIcons = [StarIcon, ShieldIcon, HandshakeIcon];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="Built on Word of Mouth in the Lowcountry"
            description="Clear View is a local, owner-operated business earning its reputation one Charleston home at a time — honestly."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviewChannels.map((channel, i) => {
            const Icon = channelIcons[i] ?? StarIcon;
            return (
              <Reveal key={channel.label} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-mist p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coastal/10 text-coastal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                      {channel.label}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                    {channel.heading}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                    {channel.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <p className="text-sm text-ink/65">
              Worked with us? Your review could be the first one featured here.
            </p>
            <Button href="/contact" variant="outline-navy" size="sm">
              Request a Free Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
