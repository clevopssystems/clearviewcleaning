"use client";

import { useState } from "react";

type QA = { q: string; a: string };

type Props = {
  items: QA[];
  theme?: "light" | "dark";
};

export default function FAQ({ items, theme = "light" }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const isDark = theme === "dark";

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={isDark ? "divide-white/10" : ""}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={`font-serif text-lg font-medium ${
                  isDark ? "text-white" : "text-navy"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-coastal bg-coastal text-white"
                    : isDark
                    ? "border-white/20 text-ice"
                    : "border-ink/20 text-navy"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-6 pr-12 text-base leading-relaxed ${
                    isDark ? "text-ice/75" : "text-ink/70"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
