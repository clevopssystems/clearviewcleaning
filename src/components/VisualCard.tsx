import Image from "next/image";
import type { IconName } from "@/lib/services";
import type { SiteImage } from "@/lib/images";
import ServiceIcon from "./ServiceIcon";

type Props = {
  label: string;
  caption?: string;
  icon?: IconName;
  gradient?: string;
  className?: string;
  aspect?: string;
  badge?: string;
  /** Real, context-matching photo. When provided it replaces the gradient art. */
  image?: SiteImage;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** Prioritize loading (above-the-fold cards). */
  priority?: boolean;
};

/**
 * Premium result card. When given a real `image`, it renders an optimized,
 * object-cover photo with a readable gradient overlay, a service tag, a
 * result-focused title, and a short benefit line. Without an image it falls
 * back to the branded gradient treatment.
 */
export default function VisualCard({
  label,
  caption,
  icon = "home",
  gradient = "from-[#0B263A] via-[#103B57] to-[#4FA3C7]",
  className = "",
  aspect = "aspect-[4/3]",
  badge,
  image,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: Props) {
  return (
    <div
      className={`group relative ${aspect} overflow-hidden rounded-2xl border border-white/10 bg-navy-deep shadow-card ${className}`}
    >
      {image ? (
        <>
          {/* Real photo */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Readable overlay for the caption bar */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/15 to-navy-deep/5" />
        </>
      ) : (
        <>
          {/* Gradient base */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-105`}
          />

          {/* Large watermark icon for depth */}
          <span
            className="pointer-events-none absolute -right-6 -top-8 text-white/10"
            aria-hidden="true"
          >
            <ServiceIcon name={icon} className="h-44 w-44" />
          </span>

          {/* Dotted texture */}
          <div className="bg-dot-grid absolute inset-0 opacity-40" />

          {/* Coastal water waves */}
          <svg
            className="absolute inset-x-0 bottom-0 h-2/5 w-full text-white/10"
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M0 60c40-20 80-20 120 0s80 20 120 0 80-20 160 0v60H0Z"
            />
            <path
              fill="currentColor"
              opacity="0.6"
              d="M0 80c40-16 90-16 130 4s90 16 140-4 80-12 130 4v32H0Z"
            />
          </svg>

          {/* Top sheen */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
        </>
      )}

      {badge ? (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy shadow-sm">
          {badge}
        </span>
      ) : null}

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-ice backdrop-blur-sm">
            <ServiceIcon name={icon} className="h-6 w-6" />
          </span>
          <div>
            <p className="font-serif text-lg font-semibold leading-tight text-white drop-shadow-sm">
              {label}
            </p>
            {caption ? (
              <p className="text-sm text-ice/90 drop-shadow-sm">{caption}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
