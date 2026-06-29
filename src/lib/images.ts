/**
 * Central registry of real, context-matching photography for the site.
 *
 * Every image was hand-picked to match the exact service or section it appears
 * in (Charleston-style homes, soft washing, window cleaning, gutter cleaning,
 * mobile detailing, patios). URLs point at the Unsplash and Pexels image CDNs,
 * which are allow-listed in next.config.mjs and served through next/image for
 * automatic optimization and responsive sizing.
 *
 * To swap in Clear View's own job photos later: drop the file in /public and
 * replace `src` with the local path — alt text and layout stay the same.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;
const P = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const images = {
  // Premium, bright coastal home — "this company cleans and protects real homes."
  hero: {
    src: U("1564013799919-ab600027ffc6"),
    alt: "Bright, freshly cleaned coastal-style home with white siding and palm trees in Charleston, SC",
  },
  // Classic Charleston-style home with a wraparound porch.
  homeRefreshed: {
    src: U("1570129477492-45c003edd2be"),
    alt: "Charleston-style home with a white wraparound porch and a clean, bright exterior",
  },
  // Lowcountry craftsman home with palmettos.
  homeCraftsman: {
    src: U("1583608205776-bfd35f0d9f83"),
    alt: "Lowcountry craftsman home with a clean exterior, covered porch, and palmetto trees",
  },
  // Brick home with a clean, restored driveway.
  driveway: {
    src: U("1605276374104-dee2a0ed3cd6"),
    alt: "Residential home with a clean, freshly washed concrete driveway",
  },
  // Soft washing house siding.
  softWashing: {
    src: P("5652626"),
    alt: "Professional in protective gear soft washing the gray siding of a two-story home",
  },
  // Professional exterior window cleaning with a squeegee.
  windowCleaning: {
    src: P("31435403"),
    alt: "Professional cleaning a home's exterior window to a streak-free finish with a squeegee",
  },
  // Cleaning a home's gutters with a pressure wand.
  gutterCleaning: {
    src: P("35153375"),
    alt: "Cleaning out a residential roof gutter, clearing debris so water can flow freely",
  },
  // Clean gutter with water flowing freely, home in the background.
  gutterFlowing: {
    src: P("529964"),
    alt: "Rainwater flowing freely from a clean downspout away from a home",
  },
  // Mobile auto detailing — foam wash in a driveway.
  detailing: {
    src: U("1607860108855-64acf2078ed9"),
    alt: "Vehicle being hand washed with foam during a mobile detailing service",
  },
  // Bright, clean patio with stone pavers and French doors.
  patio: {
    src: P("35416040"),
    alt: "Clean stone-paver patio with French doors and potted plants outside a home",
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof images;
