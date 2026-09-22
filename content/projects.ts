/**
 * Every project on the site lives here.
 *
 * To add a project: append an object to `projects`. Order in this array is the
 * order on the page — lead with live work.
 *
 * To turn a project into a full case study: fill in `caseStudy`. Any project
 * with a `caseStudy` automatically gets a page at /work/<slug>; projects
 * without one just link out to `liveUrl`.
 */

export type ProjectStatus = "live" | "concept";

export type CaseStudySection = {
  /** Short heading, e.g. "Problem", "Research", "Design decisions". */
  heading: string;
  /** One or more paragraphs. */
  body?: string[];
  /** Optional bullet list rendered under the paragraphs. */
  bullets?: string[];
  /** Optional Figma frames / screenshots for this section. */
  images?: ProjectImage[];
};

export type ProjectImage = {
  /** Path under /public, e.g. "/images/projects/worknest-flow.png". */
  src: string;
  alt: string;
  /** Optional caption printed under the image. */
  caption?: string;
  /**
   * Intrinsic pixel size. Section images render at their real aspect ratio, so
   * these keep the page from shifting as they load. Read them off the file:
   *   sips -g pixelWidth -g pixelHeight public/images/projects/your-file.jpg
   * Covers are cropped to 8:5, so they don't need them.
   */
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  /** Short descriptor shown next to the title, e.g. "Booking Platform". */
  subtitle: string;
  year: string;
  status: ProjectStatus;
  /** e.g. "Designed & Built" or "Team of 5". */
  context: string;
  role: string;
  /** Tools / stack chips. */
  stack: string[];
  summary: string;
  highlight: string;
  /** External link for live projects. */
  liveUrl?: string;
  /** Cover image slot — drop a screenshot in /public/images/projects. */
  cover?: ProjectImage;
  /** Present = a /work/<slug> detail page is generated. */
  caseStudy?: {
    intro: string;
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "dey-house",
    title: "Dey House",
    subtitle: "Art Café-Gallery & Studio Booking Platform",
    year: "2025",
    status: "live",
    context: "Designed & Built",
    role: "Product Designer & Builder",
    stack: ["Figma", "Next.js", "Supabase", "AI-assisted"],
    summary:
      "Designed and shipped a live bilingual (RTL) website for a Tehran art café-gallery, covering exhibitions, events, workshops, café menu, and artist collaboration.",
    highlight:
      "Built an online studio-reservation flow with room listings, hourly pricing, and user accounts — owning the product from design through to a deployed, operational site.",
    liveUrl: "https://www.deyhouse.com",
    cover: {
      src: "/images/projects/dey-house-cover.jpg",
      alt: "Dey House homepage — full-bleed photograph of the café-gallery with Persian signage.",
      width: 1600,
      height: 1000,
    },
    caseStudy: {
      intro:
        "Dey House is an art café-gallery in Tehran. I designed and shipped the whole product: a bilingual, right-to-left site covering exhibitions, events, workshops, the café menu and artist collaboration — plus an online studio-reservation flow with room listings, hourly pricing and user accounts.",
      sections: [
        {
          heading: "Studio reservation",
          body: [
            "The core of the product. Each rehearsal studio gets its own page with a photo set, hourly pricing, amenities, a location map, and a date-and-time picker that writes straight to a real booking. Visitors sign in to manage what they have reserved.",
            "Getting this right meant designing for a decision, not just a page: what the room looks like, what it costs per hour, what is in it, and whether it is free — all resolvable without leaving the screen.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-booking.jpg",
              alt: "Dey House studio booking page — room photos, hourly price, amenities list, booking form and a location map.",
              caption: "Studio detail — photos, hourly pricing, amenities and booking",
              width: 1500,
              height: 2125,
            },
          ],
        },
        {
          heading: "Exhibitions",
          body: [
            "The gallery section carries the curatorial writing alongside the exhibition archive, so the space reads as a gallery rather than a venue listing.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-gallery.jpg",
              alt: "Dey House gallery page — a full-width exhibition photograph above curatorial text and an exhibition archive.",
              caption: "Gallery — curatorial text and the exhibition archive",
              width: 1500,
              height: 2237,
            },
          ],
        },
        {
          heading: "Events & workshops",
          body: [
            "Events are filterable by type and by whether they are still open, so the same page serves someone browsing and someone checking one specific date.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-events.jpg",
              alt: "Dey House events listing with poster cards and a sidebar of event-type filters.",
              caption: "Events — poster cards with type and availability filters",
              width: 1500,
              height: 1177,
            },
          ],
        },
        {
          heading: "Café menu",
          body: [
            "The menu is structured as collapsible categories rather than a flat list or a PDF, so it stays readable on a phone at the table.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-cafe.jpg",
              alt: "Dey House café menu — collapsible categories with a category index down the side.",
              caption: "Café menu — collapsible categories",
              width: 1500,
              height: 1542,
            },
          ],
        },
        {
          heading: "Artist collaboration",
          body: [
            "Artists apply to work with the space through a long submission form — contact details, discipline, portfolio upload and sample works. I broke it into labelled steps with explicit file guidance, because the failure mode for a form this long is abandonment.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-artist.jpg",
              alt: "Dey House artist collaboration form — grouped fields, discipline radio options and portfolio upload areas.",
              caption: "Artist submission — grouped fields and portfolio uploads",
              width: 1500,
              height: 2533,
            },
          ],
        },
        {
          heading: "Building it",
          body: [
            "Designed in Figma, built with Next.js and Supabase using AI-assisted development, and deployed. The whole interface is right-to-left Persian, which shaped the layout decisions throughout rather than being retrofitted at the end.",
          ],
        },
      ],
    },
  },
  {
    slug: "log-studio",
    title: "LOG Studio",
    subtitle: "Brand & Visual Studio Website",
    year: "2025",
    status: "live",
    context: "Designed & Built",
    role: "Product Designer & Builder",
    stack: ["Figma", "Next.js", "Supabase", "AI-assisted"],
    summary:
      "Designed and built a bilingual (English/Persian) studio website with a service catalog and a CMS-backed project portfolio.",
    highlight:
      "Owned the full flow — information architecture, UI, and a content-managed, responsive front end.",
    liveUrl: "https://logstudio-tawny.vercel.app",
    cover: {
      src: "/images/projects/log-studio-cover.png",
      alt: "LOG Studio homepage — the LOG Studio wordmark in blue, surrounded by scattered client names.",
      width: 1600,
      height: 1000,
    },
    caseStudy: {
      intro:
        "LOG Studio is a brand and visual studio in Tehran. I designed and built their bilingual site — English and Persian — around two jobs: explain what the studio does, and let the work speak. The project portfolio is content-managed, so the studio adds new work without touching code.",
      sections: [
        {
          heading: "Homepage",
          body: [
            "The landing is a single quiet wordmark ringed by client names — the studio's reputation stated before any pitch. Scrolling moves through the showreel, the studio's story, the client roster, and then the service catalog.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-home.jpg",
              alt: "LOG Studio homepage in full — wordmark hero, showreel, studio intro, client logos and the services section.",
              caption: "Homepage — hero through to the service catalog",
              width: 1500,
              height: 6293,
            },
          ],
        },
        {
          heading: "Service catalog",
          body: [
            "Five services — visual production, strategy and content, event design, visual identity, and web design and development. A sticky index on the left tracks which service you are reading, so a long section stays navigable.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-services.jpg",
              alt: "LOG Studio services section on a deep blue gradient, with a sticky service index beside stacked service cards.",
              caption: "Services — sticky index against stacked cards",
              width: 1500,
              height: 2784,
            },
          ],
        },
        {
          heading: "Project pages",
          body: [
            "Each project page leads with the client, the brief and the credits, then hands the rest of the screen to the work in a varied photo grid. The content comes from the CMS, so the studio publishes new projects itself.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-project.jpg",
              alt: "A LOG Studio project page — title, service tags and credits above a mixed-size black-and-white photo grid.",
              caption: "Project page — credits above a content-managed photo grid",
              width: 1400,
              height: 2800,
            },
          ],
        },
        {
          heading: "About",
          body: [
            "The studio's story, the people behind the work, and the numbers — published projects, disciplines, years working — closing on a single clear call to action.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-about.jpg",
              alt: "LOG Studio about page — studio story, a row of team member cards, headline statistics and a contact call to action.",
              caption: "About — story, team, numbers and a single CTA",
              width: 1500,
              height: 1743,
            },
          ],
        },
        {
          heading: "Building it",
          body: [
            "Information architecture and UI in Figma, then built with Next.js and Supabase using AI-assisted development. Both languages were designed together rather than one being a translation of the other.",
          ],
        },
      ],
    },
  },
  {
    slug: "worknest",
    title: "Worknest",
    subtitle: "Coworking Space Booking Platform",
    year: "2024",
    status: "concept",
    context: "Team of 5",
    role: "Product Designer — UX/UI & Interaction Design",
    stack: ["Figma", "UX Research", "Interaction Design"],
    summary:
      "A web-based platform that simplifies discovering, comparing, and booking coworking spaces for freelancers, remote workers, and small teams.",
    highlight:
      "In a team of five I ran competitor analysis, built the initial wireframes, and designed the search experience, the authentication flow, and the booking-management dashboard.",
    cover: {
      src: "/images/projects/worknest-cover.jpg",
      alt: "Worknest homepage — hero with a workspace-type selector and a location and date search bar.",
      width: 1800,
      height: 1124,
    },
    caseStudy: {
      intro:
        "Worknest is a web-based platform designed to simplify the process of discovering, comparing, and booking coworking spaces. The goal was a seamless, intuitive booking experience for freelancers, remote workers, and small teams.",
      sections: [
        {
          heading: "Problem",
          body: ["Users struggle to efficiently find and book suitable coworking spaces due to:"],
          bullets: [
            "Difficulty comparing multiple options",
            "Unclear information — pricing, amenities, availability",
            "Complex booking processes",
            "Limited control over reservations",
          ],
        },
        {
          heading: "Goal",
          body: ["Design a seamless booking experience that:"],
          bullets: [
            "Simplifies search and navigation",
            "Enables quick comparison between spaces",
            "Reduces decision-making time",
            "Gives users control over their bookings",
          ],
        },
        {
          heading: "Clear and accessible search",
          body: [
            "A prominent search bar sits at the top of the homepage, letting users define location, date and type of workspace straight away. This reduces friction and supports immediate action.",
          ],
          images: [
            {
              src: "/images/projects/worknest-home.jpg",
              alt: "Worknest homepage, full length — hero search, popular spaces, hot desk and meeting room sections.",
              caption: "Homepage — search, category navigation and popular spaces",
              width: 603,
              height: 1800,
            },
          ],
        },
        {
          heading: "Category-based navigation",
          body: [
            "Users switch between workspace types — Hot Desk, Dedicated Desk, Meeting Room, Private Office — to narrow down options quickly based on what they actually need.",
          ],
        },
        {
          heading: "Information-rich cards",
          body: [
            "Each workspace is presented as a card carrying price per day, location, rating and essential amenities such as Wi-Fi and parking. Users compare options at a glance, without opening multiple pages.",
          ],
          images: [
            {
              src: "/images/projects/worknest-cards.jpg",
              alt: "Two workspace card layouts, each showing photo, price, location, rating and amenity tags.",
              caption: "Comparison cards in grid and list layouts",
              width: 1616,
              height: 1800,
            },
          ],
        },
        {
          heading: "Strong call-to-action",
          body: [
            "A clear “Book Now” button sits on every card to encourage quick decisions and cut unnecessary steps out of the booking flow.",
          ],
        },
        {
          heading: "Advanced filtering",
          body: [
            "Users refine their search by price range, duration (hourly, daily, monthly), amenities such as Wi-Fi, parking and printer, plus capacity and rating. This improves relevance and decision speed.",
          ],
          images: [
            {
              src: "/images/projects/worknest-filters.jpg",
              alt: "Worknest search results page with a filter sidebar and a list of workspace results.",
              caption: "Search results with persistent filtering",
              width: 835,
              height: 1800,
            },
          ],
        },
        {
          heading: "Booking management dashboard",
          body: [
            "To give users real control, a dashboard lets them view their bookings, select preferred seats, and modify or cancel reservations.",
          ],
          images: [
            {
              src: "/images/projects/worknest-dashboard.jpg",
              alt: "Booking dashboard listing previous bookings with completed, pending and cancelled statuses.",
              caption: "Booking management — view, modify and cancel reservations",
              width: 1800,
              height: 1280,
            },
          ],
        },
        {
          heading: "Design decisions",
          bullets: [
            "Reducing decision friction — minimise steps so booking stays fast and straightforward.",
            "Designing for quick comparison — structure information so users can evaluate several options without extra navigation.",
            "Enhancing user control — booking management and cancellation increase flexibility and confidence.",
            "Guiding user flow — layout and visual hierarchy lead users naturally from search to booking.",
            "Minimising cognitive load — a clean layout with enough whitespace helps users focus.",
          ],
        },
        {
          heading: "My contribution",
          body: [
            "This project was completed in a five-person team. I contributed to early research through competitor analysis, developed the initial wireframes, and designed key parts of the product: the search experience, the authentication flow (login and sign up), and the booking-management dashboard.",
          ],
        },
      ],
    },
  },
  {
    slug: "idea-soup",
    title: "Idea Soup",
    subtitle: "Idea Capture & Discovery App",
    year: "2024",
    status: "concept",
    context: "UX Research",
    role: "UX Researcher",
    stack: ["Figma", "User Interviews", "Survey", "IA"],
    summary:
      "A concept app that lets people capture ideas in multiple formats and discover inspiration in one place.",
    highlight:
      "A full UX research process — semi-structured interviews and an 80-participant survey, carried through personas, journey mapping, red routes, IA and low-fidelity wireframes.",
    cover: {
      src: "/images/projects/idea-soup-cover.jpg",
      alt: "Three Idea Soup low-fidelity wireframe screens — capture options, interest picker and feature overview.",
      width: 1800,
      height: 1126,
    },
    caseStudy: {
      intro:
        "Idea Soup is a concept app designed to help users capture ideas in multiple formats and discover inspiration in one place. This case study follows the UX research process, from survey to wireframes.",
      sections: [
        {
          heading: "Problem",
          bullets: [
            "Ideas are scattered across multiple tools",
            "No unified format support",
            "Lack of inspiration discovery in idea tools",
            "Difficulty revisiting saved ideas",
          ],
        },
        {
          heading: "Goal",
          body: [
            "Design a flexible idea-saving platform that lets users capture ideas in any format and explore inspiration in one place.",
          ],
        },
        {
          heading: "Research process",
          body: [
            "User interviews and a survey, then analysis, personas, a journey map, red routes, user stories, information architecture and wireframes.",
          ],
        },
        {
          heading: "User interviews",
          body: [
            "I ran semi-structured interviews to understand how people capture, revisit and share ideas in daily life — surfacing behaviours, pain points and unmet needs around idea management.",
          ],
          images: [
            {
              src: "/images/projects/idea-soup-interviews.jpg",
              alt: "Affinity board of colour-coded interview responses, one column per participant.",
              caption: "Interview responses organised by participant and question",
              width: 1800,
              height: 1604,
            },
          ],
        },
        {
          heading: "User survey",
          body: [
            "To understand idea-capturing behaviour at scale, I ran a survey with 80 participants, focused on how people store, revisit and share ideas.",
          ],
          bullets: [
            "Most users keep their ideas in their memory",
            "Users do not use a dedicated app for saving ideas",
            "Users need a way to revisit their ideas",
            "Users want to share ideas with others",
            "Users also need to keep ideas private",
            "Users need a flexible ideation space",
          ],
        },
        {
          heading: "Design implications",
          bullets: [
            "Quick idea capture",
            "Public / private toggle",
            "Sharing capability",
            "Idea library",
            "Review ideas section",
            "Search & organisation",
          ],
        },
        {
          heading: "Personas",
          body: ["Two personas were created based on the patterns found in research."],
          images: [
            {
              src: "/images/projects/idea-soup-personas.jpg",
              alt: "Persona boards covering personal info, personality sliders, behaviours, wants and needs, and pain points.",
              caption: "Personas — behaviours, wants and needs, pain points",
              width: 1800,
              height: 680,
            },
          ],
        },
        {
          heading: "User journey",
          body: [
            "Mapping the user journey helped identify the friction points in capturing and revisiting ideas.",
          ],
          images: [
            {
              src: "/images/projects/idea-soup-journey.jpg",
              alt: "User journey map plotting emotion across the stages of capturing and revisiting an idea.",
              caption: "Journey map — persona one",
              width: 1800,
              height: 973,
            },
            {
              src: "/images/projects/idea-soup-journey-2.jpg",
              alt: "Second user journey map, tracking the other persona through the same stages.",
              caption: "Journey map — persona two",
              width: 1800,
              height: 975,
            },
          ],
        },
        {
          heading: "Red routes",
          body: [
            "A red-route analysis plotted each task by how often it is used and how many users it serves, isolating the few paths that must be frictionless: save idea, browse inspiration, share idea and review ideas.",
          ],
          images: [
            {
              src: "/images/projects/idea-soup-red-routes.jpg",
              alt: "Red route matrix plotting task frequency against how many users perform each task.",
              caption: "Red routes — frequency against reach",
              width: 1800,
              height: 1656,
            },
          ],
        },
        {
          heading: "Information architecture",
          body: ["The app structure was designed around the key user tasks."],
          images: [
            {
              src: "/images/projects/idea-soup-ia.jpg",
              alt: "Information architecture diagram branching into Discover, My Boards, Add, Search, Profile and Mood.",
              caption: "Information architecture",
              width: 1800,
              height: 566,
            },
          ],
        },
        {
          heading: "Low-fidelity wireframes",
          body: ["Five low-fidelity wireframes were created, focused on the core user flows."],
          images: [
            {
              src: "/images/projects/idea-soup-wireframes.jpg",
              alt: "Five low-fidelity mobile wireframes covering capture, interests, features, onboarding and sign-in.",
              caption: "Five wireframes covering the core flows",
              width: 1800,
              height: 689,
            },
          ],
        },
        {
          heading: "Key learnings",
          bullets: [
            "Idea capture is not the main problem — users need a system to revisit ideas, not just somewhere to save them.",
            "Memory-based ideation is common — many users rely on memory rather than writing ideas down, which leads to idea loss.",
            "Sharing and privacy must coexist — users want feedback on some ideas while keeping others private.",
            "Simplicity increases idea capture — reducing friction is critical to encouraging users to save ideas.",
            "Inspiration and storage should be combined — users don't want separate tools for discovery and saving.",
          ],
        },
      ],
    },
  },

];

/** Helpers used by the routes. */
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudySlugs = () => projects.filter((p) => p.caseStudy).map((p) => p.slug);
