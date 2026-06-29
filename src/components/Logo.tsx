import Link from "next/link";

type Props = {
  theme?: "light" | "dark";
  className?: string;
};

/** Wordmark + emblem logo for Clear View Cleaning Company. */
export default function Logo({ theme = "dark", className = "" }: Props) {
  const isDark = theme === "dark";
  return (
    <Link
      href="/"
      aria-label="Clear View Cleaning Company — home"
      className={`group inline-flex items-center ${className}`}
    >
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl font-semibold leading-tight tracking-tight sm:text-2xl ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          Clear View
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-coastal-light">
          Cleaning Co.
        </span>
      </span>
    </Link>
  );
}
