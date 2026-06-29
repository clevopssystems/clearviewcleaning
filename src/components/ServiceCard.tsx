import Link from "next/link";
import type { Service } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";
import { ArrowRightIcon } from "./icons";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-coastal/40 hover:shadow-card">
      {/* Accent corner */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-25`}
        aria-hidden="true"
      />

      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-mist text-navy-700 transition-colors duration-300 group-hover:bg-coastal group-hover:text-white">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-xl font-semibold text-navy">
          {service.name}
        </h3>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/70">
        {service.cardDescription}
      </p>

      <div className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-5">
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-coastal"
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-ink/20">|</span>
        <Link
          href="/contact"
          className="text-sm font-semibold text-coastal transition-colors hover:text-navy"
        >
          Get Quote
        </Link>
      </div>
    </article>
  );
}
