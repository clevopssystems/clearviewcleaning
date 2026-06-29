"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowRightIcon } from "./icons";

/**
 * Persistent call / quote bar shown on mobile only. Appears after a short
 * scroll so it never competes with the hero CTAs. Keeps the phone number one
 * tap away on every page — the highest-intent action for a local service.
 */
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer so fixed bar never covers footer content on mobile */}
      <div className="h-20 bg-navy-deep lg:hidden" aria-hidden="true" />

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-all duration-300 lg:hidden ${
          show
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 py-3.5 text-sm font-semibold text-white"
            aria-label={`Call Clear View Cleaning at ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4 text-coastal" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex flex-[1.3] items-center justify-center gap-2 rounded-full bg-coastal py-3.5 text-sm font-semibold text-navy-deep shadow-glow"
          >
            Get a Free Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
