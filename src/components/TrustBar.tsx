import { trustStrip } from "@/lib/site";
import { CheckIcon } from "./icons";

export default function TrustBar() {
  return (
    <section
      aria-label="Why homeowners trust us"
      className="border-y border-white/10 bg-navy-800"
    >
      <div className="container-page py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {trustStrip.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-ice/85"
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-coastal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
