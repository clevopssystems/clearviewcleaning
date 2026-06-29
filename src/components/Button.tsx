import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-navy" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coastal focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-coastal text-navy-deep shadow-glow hover:bg-coastal-light hover:-translate-y-0.5 hover:shadow-[0_24px_70px_-15px_rgba(79,163,199,0.55)]",
  secondary:
    "bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:bg-mist",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-coastal hover:bg-white/10 hover:-translate-y-0.5",
  "outline-navy":
    "border border-navy/20 bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:border-coastal hover:text-coastal",
  ghost: "text-navy hover:text-coastal",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...(linkRest as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
