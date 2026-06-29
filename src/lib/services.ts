import { images, type SiteImage } from "./images";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  icon: IconName;
  /** One-line benefit hook for cards */
  tagline: string;
  /** Card-length, benefit-focused description */
  cardDescription: string;
  /** Short "Best for…" homeowner targeting line */
  bestFor: string;
  /** Hero H1 on the service page */
  heroHeadline: string;
  /** Hero subheadline / local positioning */
  heroSub: string;
  /** Why it matters paragraph */
  whyItMatters: string;
  benefits: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
  /** Real, context-matching photo for this service */
  image: SiteImage;
  accent: string; // tailwind gradient classes for visual card
  metaTitle: string;
  metaDescription: string;
};

export type IconName =
  | "wash"
  | "window"
  | "gutter"
  | "detail"
  | "home";

export const services: Service[] = [
  {
    slug: "power-soft-washing",
    name: "Power / Soft Washing",
    shortName: "Power / Soft Washing",
    href: "/services/power-soft-washing",
    icon: "wash",
    tagline: "Soft washing removes buildup without damaging delicate surfaces.",
    cardDescription:
      "Lift years of dirt, algae, mildew, and grime from driveways, patios, siding, and walkways — with the right pressure for every surface.",
    bestFor:
      "Best for homes with algae-streaked siding, a grimy driveway, or a patio that's lost its color.",
    heroHeadline: "Pressure Washing & Soft Washing in Charleston, SC",
    heroSub:
      "Charleston's humid, coastal climate is hard on exterior surfaces. Clear View Cleaning Company removes built-up dirt, algae, and grime from your home's hard surfaces and delicate areas alike — using the right method for every job.",
    whyItMatters:
      "In the Lowcountry, organic growth and salt-air buildup don't just look bad — they can damage surfaces and create slip hazards over time. Regular pressure and soft washing protects your investment, boosts curb appeal, and keeps your property looking its best year-round.",
    benefits: [
      "Dramatically improved curb appeal in a single visit",
      "Removes algae, mildew, dirt, and stubborn grime",
      "Soft washing for delicate surfaces like siding and roofs",
      "High-pressure cleaning for concrete, brick, and pavers",
      "Safer, cleaner walkways and driveways",
      "Helps protect surfaces from long-term buildup damage",
    ],
    includes: [
      "Driveways, sidewalks, and walkways",
      "Patios, decks, and pool surrounds",
      "House siding (vinyl, stucco, hardie, brick)",
      "Roofs and delicate surfaces via low-pressure soft wash",
      "Fences, garage doors, and exterior steps",
      "Pre-treatment and careful rinse-down of surrounding areas",
    ],
    image: images.softWashing,
    faqs: [
      {
        q: "What is the difference between pressure washing and soft washing?",
        a: "Pressure washing uses high-pressure water to clean hard surfaces like concrete, brick, and pavers. Soft washing uses low pressure combined with specialized cleaning solutions to safely clean delicate surfaces such as roofs, siding, and screens without causing damage. We choose the right method for each surface.",
      },
      {
        q: "Will soft washing damage my siding or roof?",
        a: "No. Soft washing is specifically designed for delicate surfaces. It relies on gentle, low-pressure application and the right cleaning solution rather than force, so your siding and roof get clean without the risk that high pressure can cause.",
      },
      {
        q: "How often should I have my home pressure washed?",
        a: "In Charleston's humid coastal climate, most homeowners benefit from a yearly exterior wash. High-shade areas or surfaces prone to algae may need attention more often. We're happy to recommend a schedule when we provide your quote.",
      },
    ],
    accent: "from-[#103B57] via-[#15496B] to-[#4FA3C7]",
    metaTitle:
      "Pressure Washing & Soft Washing Charleston SC | Clear View Cleaning",
    metaDescription:
      "Professional pressure washing and soft washing in Charleston, SC. Driveways, patios, siding, and roofs cleaned safely. Free quotes — call (843) 212-7116.",
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Window Cleaning",
    href: "/services/window-cleaning",
    icon: "window",
    tagline: "Clean windows make the whole home feel brighter.",
    cardDescription:
      "Let more natural light in and lift your home's curb appeal with a professional, streak-free finish on every pane.",
    bestFor:
      "Best for homeowners tired of spots, film, and streaks they just can't get off the glass themselves.",
    heroHeadline: "Professional Window Cleaning in Charleston, SC",
    heroSub:
      "There's nothing like the view through truly clean glass. Clear View Cleaning Company delivers a streak-free, professional finish on interior and exterior windows so your Charleston home looks brighter and feels more open.",
    whyItMatters:
      "Clean windows do more than look good — they let in more natural light, improve your home's curb appeal, and help you spot wear before it becomes a problem. Coastal pollen, salt spray, and hard-water spots build up fast in the Lowcountry, and DIY cleaning rarely gets that flawless, streak-free result.",
    benefits: [
      "Streak-free, professional finish on every pane",
      "More natural light throughout your home",
      "Noticeably better curb appeal",
      "Interior and exterior glass cleaned",
      "Removal of pollen, salt spray, and hard-water spots",
      "Careful work around frames, sills, and screens",
    ],
    includes: [
      "Interior and exterior window glass",
      "Window sills and tracks wiped down",
      "Screen cleaning on request",
      "Glass doors and storm doors",
      "Spot treatment for hard-water staining",
      "Detail check for a flawless final finish",
    ],
    image: images.windowCleaning,
    faqs: [
      {
        q: "Do you clean both interior and exterior windows?",
        a: "Yes. We clean both the inside and outside of your windows for a complete, streak-free result. You can also request exterior-only service if that's all you need.",
      },
      {
        q: "Do you clean screens and tracks too?",
        a: "We wipe down sills and tracks as part of our standard service and can clean screens on request. Just let us know when you book so we can plan the visit.",
      },
      {
        q: "How often should I have my windows professionally cleaned?",
        a: "Most Charleston homeowners have their windows cleaned one to two times per year. Homes near the water or under heavy pollen may benefit from more frequent visits.",
      },
    ],
    accent: "from-[#0E2E47] via-[#103B57] to-[#6FB9D8]",
    metaTitle:
      "Window Cleaning Charleston SC | Streak-Free | Clear View Cleaning",
    metaDescription:
      "Professional interior and exterior window cleaning in Charleston, SC. Streak-free results that brighten your home. Free quotes — call (843) 212-7116.",
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    href: "/services/gutter-cleaning",
    icon: "gutter",
    tagline: "Clean gutters help protect your roofline, siding, and foundation.",
    cardDescription:
      "Clogged gutters lead to overflow, foundation issues, and roofline damage. We clear them out so water flows where it should.",
    bestFor:
      "Best for tree-shaded homes and anyone who hasn't had their gutters cleared in the last year.",
    heroHeadline: "Gutter Cleaning in Charleston, SC",
    heroSub:
      "Clogged gutters are one of the most overlooked causes of expensive home damage. Clear View Cleaning Company clears your gutters and downspouts so rainwater flows away from your roof, siding, and foundation — exactly where it should.",
    whyItMatters:
      "Charleston gets serious rain, and the Lowcountry's trees fill gutters with leaves and debris fast. When gutters clog, water overflows behind the fascia and pools near your foundation — leading to rot, leaks, erosion, and costly repairs. Routine gutter cleaning is one of the cheapest ways to protect your home.",
    benefits: [
      "Prevents overflow and water damage",
      "Protects your foundation and landscaping",
      "Reduces risk of fascia, soffit, and roofline rot",
      "Helps prevent basement and crawlspace moisture",
      "Keeps downspouts flowing freely",
      "Seasonal maintenance to stay ahead of clogs",
    ],
    includes: [
      "Hand-clearing of leaves, debris, and buildup",
      "Downspout flushing and flow check",
      "Bagging and haul-away of debris",
      "Visual check for sagging or loose sections",
      "Roofline and fascia spot inspection",
      "Tidy cleanup of the work area",
    ],
    image: images.gutterCleaning,
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "Most homes benefit from gutter cleaning twice a year — typically in late spring and late fall. Homes surrounded by trees may need cleaning more often to prevent clogs and overflow.",
      },
      {
        q: "Do you remove and haul away the debris?",
        a: "Yes. We bag and haul away the debris we remove and tidy up the work area so you're left with clean, free-flowing gutters and nothing to clean up afterward.",
      },
      {
        q: "Can you tell me if my gutters need repair?",
        a: "While we focus on cleaning, we'll do a visual check and let you know if we notice sagging sections, loose fasteners, or other issues worth addressing.",
      },
    ],
    accent: "from-[#081C2C] via-[#0E2E47] to-[#4FA3C7]",
    metaTitle:
      "Gutter Cleaning Charleston SC | Prevent Water Damage | Clear View",
    metaDescription:
      "Professional gutter cleaning in Charleston, SC. Protect your home from overflow and water damage. Free quotes — call (843) 212-7116.",
  },
  {
    slug: "mobile-detailing",
    name: "Mobile Detailing",
    shortName: "Mobile Detailing",
    href: "/services/mobile-detailing",
    icon: "detail",
    tagline: "Professional auto detailing at your doorstep.",
    cardDescription:
      "Skip the drive and the wait. We bring a thorough interior and exterior detail right to your home or office.",
    bestFor:
      "Best for busy homeowners who want a showroom-clean vehicle without leaving the driveway.",
    heroHeadline: "Mobile Auto Detailing in Charleston, SC",
    heroSub:
      "Your time is valuable. Clear View Cleaning Company brings professional auto detailing directly to your Charleston home or office — a thorough interior and exterior clean without you ever leaving the driveway.",
    whyItMatters:
      "Between work, family, and life in the Lowcountry, who has time to sit at a detail shop? Mobile detailing gives you a showroom-clean vehicle with total convenience. Salt air, pollen, and humidity are tough on your car's finish and interior — regular detailing keeps it looking sharp and protects its value.",
    benefits: [
      "We come to you — home or office",
      "Thorough interior and exterior detailing",
      "Saves you a trip and a long wait",
      "Protects your vehicle's finish and resale value",
      "Removes pollen, salt, and road grime",
      "Fresh, clean interior you'll actually enjoy",
    ],
    includes: [
      "Exterior hand wash and dry",
      "Wheels, tires, and trim cleaned and dressed",
      "Interior vacuum and surface wipe-down",
      "Glass cleaned inside and out",
      "Door jambs and console detailing",
      "Final inspection for a polished result",
    ],
    image: images.detailing,
    faqs: [
      {
        q: "Do you really come to my location?",
        a: "Yes — that's the whole idea. We bring our equipment to your home or office anywhere in the Charleston area so you can keep your day moving while we detail your vehicle.",
      },
      {
        q: "What do you need from me on-site?",
        a: "Just a place to park the vehicle and access to the area. We bring our own supplies and equipment. If water or power access is limited, let us know in advance and we'll plan accordingly.",
      },
      {
        q: "Do you detail both the interior and exterior?",
        a: "Yes. Our detailing covers both interior and exterior care. Let us know what matters most to you and we'll tailor the service to your vehicle.",
      },
    ],
    accent: "from-[#103B57] via-[#15496B] to-[#6FB9D8]",
    metaTitle:
      "Mobile Detailing Charleston SC | We Come To You | Clear View Cleaning",
    metaDescription:
      "Professional mobile auto detailing in Charleston, SC. Interior and exterior detailing at your home or office. Free quotes — call (843) 212-7116.",
  },
  {
    slug: "additional-exterior-services",
    name: "Additional Exterior Services",
    shortName: "More Services",
    href: "/services#additional",
    icon: "home",
    tagline: "One trusted local team for your home's exterior.",
    cardDescription:
      "Have a project that doesn't fit a category? As your local exterior-cleaning team, we take on a range of home services — just ask.",
    bestFor:
      "Best for homeowners who'd rather call one trusted local team than chase down a new contractor.",
    heroHeadline: "Additional Exterior Home Services in Charleston, SC",
    heroSub:
      "Clear View Cleaning Company is your one-stop local team for keeping the outside of your home clean, bright, and well-maintained. If you have an exterior project in mind, just ask — we'll let you know how we can help.",
    whyItMatters:
      "Owning a home in the Lowcountry means a constant list of outdoor upkeep. Having one reliable, owner-operated team you can call for multiple services saves you time, hassle, and the headache of vetting a new company for every job.",
    benefits: [
      "One trusted team for multiple home services",
      "Owner-operated accountability on every job",
      "Honest recommendations, reasonable pricing",
      "Bundle multiple services in one visit",
      "Local Charleston knowledge and care",
      "Straightforward, no-pressure quotes",
    ],
    includes: [
      "Exterior surface cleaning and maintenance",
      "Seasonal property refreshes",
      "Multi-service visits to save you time",
      "Custom requests — just ask",
      "Honest assessment of what your home needs",
      "Clear communication from start to finish",
    ],
    image: images.homeCraftsman,
    faqs: [
      {
        q: "Can I book multiple services at once?",
        a: "Absolutely. Many homeowners combine services — like windows, soft washing, and gutters — into a single visit. Bundling saves you time and keeps your whole exterior looking its best. Just tell us what you need when you request your quote.",
      },
      {
        q: "What if my project isn't listed on your site?",
        a: "Reach out anyway. We take on a range of exterior home projects and will always be honest about whether it's something we can help with or point you in the right direction.",
      },
      {
        q: "Do you offer free quotes for these services?",
        a: "Yes. All of our quotes are free and no-pressure. Call or request a quote online and we'll get you the details.",
      },
    ],
    accent: "from-[#0E2E47] via-[#15496B] to-[#4FA3C7]",
    metaTitle:
      "Exterior Home Services Charleston SC | Clear View Cleaning Company",
    metaDescription:
      "Additional exterior home services in Charleston, SC from a trusted owner-operated team. Free quotes — call (843) 212-7116.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services that have their own dedicated route (excludes the catch-all). */
export const pageServices = services.filter(
  (s) => s.slug !== "additional-exterior-services"
);
