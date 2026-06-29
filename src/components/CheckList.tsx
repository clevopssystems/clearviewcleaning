import { CheckIcon } from "./icons";

type Props = {
  items: string[];
  theme?: "light" | "dark";
  columns?: 1 | 2;
  className?: string;
};

export default function CheckList({
  items,
  theme = "light",
  columns = 1,
  className = "",
}: Props) {
  const isDark = theme === "dark";
  return (
    <ul
      className={`grid gap-x-6 gap-y-3.5 ${
        columns === 2 ? "sm:grid-cols-2" : ""
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coastal/15 text-coastal">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span
            className={`text-[0.95rem] leading-relaxed ${
              isDark ? "text-ice/85" : "text-ink/75"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
