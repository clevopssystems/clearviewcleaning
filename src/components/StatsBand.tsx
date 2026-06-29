import { stats } from "@/lib/site";
import Reveal from "./Reveal";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-14">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="container-page relative">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center lg:border-r lg:border-white/10 lg:last:border-r-0">
                <dt className="font-serif text-4xl font-semibold text-coastal sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 max-w-[12rem] text-sm text-ice/70">
                  {stat.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
