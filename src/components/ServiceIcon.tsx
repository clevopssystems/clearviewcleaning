import type { IconName } from "@/lib/services";

type Props = {
  name: IconName;
  className?: string;
};

/**
 * Clean, line-based SVG icons for each service. Stroke uses currentColor so
 * the icon inherits its color from the parent.
 */
export default function ServiceIcon({ name, className = "h-7 w-7" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "wash":
      return (
        <svg {...common}>
          <path d="M7 3v6" />
          <path d="M7 9c-2 0-3 1.4-3 3.2 0 1.7 1.3 3.1 3 3.1s3-1.4 3-3.1C10 10.4 9 9 7 9Z" />
          <path d="M7 15.3V21" />
          <path d="M13 5h7" />
          <path d="M13 9h5" />
          <path d="M13 13h6" />
          <path d="M13 17h4" />
        </svg>
      );
    case "window":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M12 3v18" />
          <path d="M4 12h16" />
          <path d="M15.5 6.5 17.5 8.5" />
        </svg>
      );
    case "gutter":
      return (
        <svg {...common}>
          <path d="M3 7 12 3l9 4" />
          <path d="M5 9v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
          <path d="M8 16v2" />
          <path d="M12 16v3" />
          <path d="M16 16v2" />
        </svg>
      );
    case "detail":
      return (
        <svg {...common}>
          <path d="M3 13l1.6-4.2A2 2 0 0 1 6.5 7.5h11a2 2 0 0 1 1.9 1.3L21 13" />
          <path d="M3 13h18v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
          <path d="M6.5 15.5h.01" />
          <path d="M17.5 15.5h.01" />
        </svg>
      );
    case "home":
    default:
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
          <path d="M9.5 20v-5h5v5" />
        </svg>
      );
  }
}
