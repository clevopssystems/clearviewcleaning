import Reveal from "./Reveal";

const steps = [
  {
    title: "Request a Free Quote",
    body: "Call, text, or send the quick form. Tell us what you're looking for and a bit about your property.",
  },
  {
    title: "Tell Us What You Need",
    body: "We'll talk through your home, the services that make sense, and give you honest, straightforward pricing.",
  },
  {
    title: "Get Scheduled",
    body: "Pick a time that works for you. We show up on schedule and treat your property with care.",
  },
  {
    title: "Enjoy a Cleaner Property",
    body: "Sit back and enjoy the results — cleaner, brighter, and better-maintained, done right the first time.",
  },
];

type Props = {
  theme?: "light" | "dark";
};

export default function ProcessSteps({ theme = "light" }: Props) {
  const isDark = theme === "dark";
  return (
    <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Connecting line on large screens */}
      <div
        className={`pointer-events-none absolute left-0 right-0 top-9 hidden h-px lg:block ${
          isDark ? "bg-white/15" : "bg-ink/10"
        }`}
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 90}>
          <div
            className={`relative h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
              isDark
                ? "border-white/10 bg-white/5 hover:border-coastal/40"
                : "border-ink/10 bg-white shadow-soft hover:border-coastal/40 hover:shadow-card"
            }`}
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-coastal-gradient font-serif text-lg font-semibold text-white shadow-glow">
              {i + 1}
            </span>
            <h3
              className={`mt-5 font-serif text-lg font-semibold ${
                isDark ? "text-white" : "text-navy"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                isDark ? "text-ice/70" : "text-ink/70"
              }`}
            >
              {step.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
