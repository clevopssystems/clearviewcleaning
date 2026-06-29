import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <span className={isDark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
      ) : null}
      <h2
        className={`mt-5 max-w-3xl font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isDark ? "text-ice/80" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
