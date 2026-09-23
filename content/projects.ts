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
  /** Optional frames / screenshots for this section, stacked full width. */
  images?: ProjectImage[];
  /**
   * Optional row of phone screens, shown side by side with no frame behind
   * them. Use this for a handful of narrow captures that read as a sequence;
   * anything wide belongs in `images`.
   */
  screens?: ProjectImage[];
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
    stack: ["Next.js", "Supabase", "AI-assisted"],
    summary:
      "Designed and shipped a live bilingual (RTL) website for a Tehran art café-gallery, covering exhibitions, events, workshops, café menu, and artist collaboration.",
    highlight:
      "Built an online studio-reservation flow with room listings, hourly pricing, and user accounts, owning the product from design through to a deployed, operational site.",
    liveUrl: "https://www.deyhouse.com",
    cover: {
      src: "/images/projects/dey-house-home.jpg",
      alt: "Dey House home page: a full-bleed, motion-blurred photograph of people sitting in the café, with a handwritten Persian line across the middle.",
      width: 1800,
      height: 1034,
    },
    caseStudy: {
      intro:
        "Dey House is a cultural space in Tehran that brings together an art gallery, café, and theater studios. I designed and shipped its website, enabling users to explore and book theater studios, view the café menu and upcoming events, discover exhibitions, and submit their CV and portfolio for potential gallery collaborations.",
      sections: [
        {
          heading: "Studio reservation",
          body: [
            "The core of the product. Each rehearsal studio gets its own page with a photo set, hourly pricing, amenities, a location map, and a date-and-time picker that writes straight to a real booking. Visitors sign in to manage what they have reserved.",
            "Getting this right meant designing for a decision, not just a page: what the room looks like, what it costs per hour, what is in it, and whether it is free, all resolvable without leaving the screen.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-booking.jpg",
              alt: "Dey House studio booking page: room photos, hourly price, amenities list, booking form and a location map.",
              caption: "Studio detail: photos, hourly pricing, amenities and booking",
              width: 1500,
              height: 2125,
            },
            {
              src: "/images/projects/dey-house-booking-calendar.jpg",
              alt: "Dey House date and time picker, open over a studio page: two Persian calendar months side by side, with start and end time selects beneath and a confirm button.",
              caption: "Picking a slot: two months at a time, then a start and end hour",
              width: 1800,
              height: 1079,
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
              alt: "Dey House gallery page: a full-width exhibition photograph above curatorial text and an exhibition archive.",
              caption: "Gallery: curatorial text and the exhibition archive",
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
              caption: "Events: poster cards with type and availability filters",
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
              alt: "Dey House café menu: collapsible categories with a category index down the side.",
              caption: "Café menu: collapsible categories",
              width: 1500,
              height: 1542,
            },
          ],
          screens: [
            {
              src: "/images/projects/dey-house-menu-home.jpg",
              alt: "Dey House home page on a phone: a full-bleed photograph of the café with a Persian line of type across it.",
              caption: "Home",
              width: 414,
              height: 896,
            },
            {
              src: "/images/projects/dey-house-menu-categories.jpg",
              alt: "The café menu on a phone: a short list of house rules, then menu categories collapsed one under another.",
              caption: "Menu categories, collapsed",
              width: 414,
              height: 896,
            },
            {
              src: "/images/projects/dey-house-menu-breakfast.jpg",
              alt: "The breakfast category opened on a phone: each dish with its ingredients, its price and a small photograph.",
              caption: "A category opened, with prices",
              width: 414,
              height: 896,
            },
            {
              src: "/images/projects/dey-house-menu-dish.jpg",
              alt: "A single dish opened full screen on a phone: a large photograph above its name, ingredients and price.",
              caption: "One dish, full screen",
              width: 414,
              height: 896,
            },
          ],
        },
        {
          heading: "Artist collaboration",
          body: [
            "Artists apply to work with the space through a long submission form: contact details, discipline, portfolio upload and sample works. I broke it into labelled steps with explicit file guidance, because the failure mode for a form this long is abandonment.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-artist.jpg",
              alt: "Dey House artist collaboration form: grouped fields, discipline radio options and portfolio upload areas.",
              caption: "Artist submission: grouped fields and portfolio uploads",
              width: 1500,
              height: 2533,
            },
          ],
        },
        {
          heading: "Admin panel",
          body: [
            "The team runs the site themselves. Exhibitions, events, workshops, the café menu and the incoming collaboration and contact requests are all edited from one dashboard, so nothing on the public site needs a developer to change.",
          ],
          images: [
            {
              src: "/images/projects/dey-house-admin.jpg",
              alt: "Dey House admin dashboard on a laptop: a sidebar of sections down one side, a table of exhibitions with their status, and an open form for editing one exhibition's title, artist, description, start and end dates, status and cover image.",
              caption: "Admin panel: editing an exhibition, with its title, artist, dates, status and cover image",
              width: 1536,
              height: 1024,
            },
          ],
        },
        {
          heading: "Building it",
          body: [
            "Designed and built with Next.js and Supabase using AI-assisted development, and deployed. The whole interface is right-to-left Persian, which shaped the layout decisions throughout rather than being retrofitted at the end.",
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
    stack: ["Next.js", "Supabase", "AI-assisted"],
    summary:
      "Designed and built a bilingual (English/Persian) studio website with a service catalog and a CMS-backed project portfolio.",
    highlight:
      "Owned the full flow: information architecture, UI, and a content-managed, responsive front end.",
    liveUrl: "https://logstudio-tawny.vercel.app",
    cover: {
      src: "/images/projects/log-studio-hero.jpg",
      alt: "The LOG Studio homepage: the wordmark set in blue in the middle of an otherwise empty white page, with client names drifting around it in pale grey.",
      width: 1500,
      height: 869,
    },
    caseStudy: {
      intro:
        "LOG Studio is an advertising agency in Tehran that provides a range of creative and visual services to brands. I designed and built their bilingual website in Persian and English to clearly present their services and showcase their work. The portfolio is content-managed, allowing the team to easily add and update projects without touching the code.",
      sections: [
        {
          heading: "Homepage",
          body: [
            "The landing is a single quiet wordmark ringed by client names, the studio's reputation stated before any pitch. Scrolling moves through the showreel, the studio's story, the client roster, and then the service catalog.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-menu.jpg",
              alt: "The same page with the services menu open: the five disciplines listed beside the wordmark, the one under the cursor picked out in blue.",
              caption: "The services menu, opened beside the wordmark",
              width: 1500,
              height: 842,
            },
          ],
        },
        {
          heading: "Service catalog",
          body: [
            "Five services: visual production, strategy and content, event design, visual identity, and web design and development. A sticky index on the left tracks which service you are reading, so a long section stays navigable.",
          ],
          images: [
            {
              src: "/images/projects/log-studio-services.jpg",
              alt: "The LOG Studio services section on a deep blue gradient: the five disciplines listed down the left with the current one lit, beside tall cards that each carry a photograph and a paragraph.",
              caption: "Services: the index on the left tracks whichever card you are on",
              width: 1500,
              height: 874,
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
              alt: "A LOG Studio project page end to end: the project title and the disciplines it used on the left, a credits block naming the director, videographers and photographers on the right, then a video still and an uneven grid of photographs from the event, and at the foot a row of similar projects.",
              caption: "A project page end to end: credits, a content-managed photo grid, then similar projects",
              width: 1500,
              height: 3184,
            },
          ],
        },
        {
          heading: "About",
          body: [
            "The studio's story, the people behind the work, and the numbers: published projects, disciplines, years working. It closes on a single clear call to action.",
          ],
        },
        {
          heading: "Building it",
          body: [
            "Information architecture and UI design, then built with Next.js and Supabase using AI-assisted development. Both languages were designed together rather than one being a translation of the other.",
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
    role: "UI/UX Designer",
    stack: ["UX Research", "Interaction Design"],
    summary:
      "A web-based platform that simplifies discovering, comparing, and booking coworking spaces for freelancers, remote workers, and small teams.",
    highlight:
      "In a team of five I ran competitor analysis, built the initial wireframes, and designed the search experience, the authentication flow, and the booking-management dashboard.",
    cover: {
      src: "/images/projects/worknest-cover.jpg",
      alt: "The Worknest home page in a browser mockup: the hero headline over a photo of a coworking lounge, a booking search bar, and the Popular Spaces row.",
      width: 1140,
      height: 1318,
    },
    caseStudy: {
      intro:
        "Worknest is a conceptual web based platform designed to simplify the process of discovering, comparing, and booking coworking spaces. This project was developed collaboratively as a team concept, with a focus on creating a seamless and intuitive booking experience for freelancers, remote workers, and small teams.",
      sections: [
        {
          heading: "Problem",
          body: ["Users struggle to efficiently find and book suitable coworking spaces due to:"],
          bullets: [
            "Difficulty comparing multiple options",
            "Unclear information: pricing, amenities, availability",
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
              alt: "Worknest homepage, full length: hero search, popular spaces, hot desk and meeting room sections.",
              caption: "Homepage: search, category navigation and popular spaces",
              width: 1429,
              height: 2599,
            },
          ],
        },
        {
          heading: "Category-based navigation",
          body: [
            "Users switch between workspace types: Hot Desk, Dedicated Desk, Meeting Room and Private Office. That narrows down the options quickly, based on what they actually need.",
          ],
        },
        {
          heading: "Information-rich cards",
          body: [
            "Each workspace is presented as a card carrying price per day, location, rating and essential amenities such as Wi-Fi and parking. Users compare options at a glance, without opening multiple pages.",
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
              width: 1500,
              height: 3234,
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
              caption: "Booking management: view, modify and cancel reservations",
              width: 1800,
              height: 1280,
            },
          ],
        },
        {
          heading: "Design decisions",
          bullets: [
            "Reducing decision friction: minimise steps so booking stays fast and straightforward.",
            "Designing for quick comparison: structure information so users can evaluate several options without extra navigation.",
            "Enhancing user control: booking management and cancellation increase flexibility and confidence.",
            "Guiding user flow: layout and visual hierarchy lead users naturally from search to booking.",
            "Minimising cognitive load: a clean layout with enough whitespace helps users focus.",
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
    stack: ["User Interviews", "Survey", "IA"],
    summary:
      "A concept app that lets people capture ideas in multiple formats and discover inspiration in one place.",
    highlight:
      "A full UX research process: semi-structured interviews and an 80-participant survey, carried through personas, journey mapping, red routes, IA and low-fidelity wireframes.",
    cover: {
      src: "/images/projects/idea-soup-cover-interviews.jpg",
      alt: "Affinity board from the Idea Soup interviews: three participant columns of colour-coded sticky notes under their headings.",
      width: 1400,
      height: 1618,
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
            "I ran semi-structured interviews to understand how people capture, revisit and share ideas in daily life, surfacing behaviours, pain points and unmet needs around idea management.",
          ],
          images: [
            {
              src: "/images/projects/idea-soup-interviews.jpg",
              alt: "Affinity board of colour-coded interview responses, one column per participant.",
              caption: "Interview responses organised by participant and question",
              width: 1800,
              height: 1345,
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
        },
        {
          heading: "User journey",
          body: [
            "Mapping the user journey helped identify the friction points in capturing and revisiting ideas.",
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
              alt: "The red routes matrix: how often a task is used down one axis, how many people use it along the other, with the tasks placed in the cells and the most critical ones starred.",
              caption: "Red routes: frequency against reach",
              width: 1716,
              height: 1542,
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
          screens: [
            {
              src: "/images/projects/idea-soup-wf-home.jpg",
              alt: "Wireframe of the Idea Soup home screen: saved ideas stacked as cards, each marked with the kind of thing it holds, a photo, a note or a voice recording, over a four-item bottom bar.",
              caption: "Home: saved ideas as cards",
              width: 700,
              height: 1518,
            },
            {
              src: "/images/projects/idea-soup-wf-capabilities.jpg",
              alt: "Onboarding wireframe listing what the app can do, one claim per row, under a progress bar.",
              caption: "What the app can do",
              width: 700,
              height: 1518,
            },
            {
              src: "/images/projects/idea-soup-wf-interests.jpg",
              alt: "Onboarding wireframe asking the reader to pick at least three interests, shown as a searchable grid of labelled tiles.",
              caption: "Pick at least three interests",
              width: 700,
              height: 1518,
            },
            {
              src: "/images/projects/idea-soup-wf-name.jpg",
              alt: "Onboarding wireframe asking what to call the reader, with a single name field and a continue button.",
              caption: "What should we call you?",
              width: 700,
              height: 1518,
            },
            {
              src: "/images/projects/idea-soup-wf-auth.jpg",
              alt: "Opening wireframe: an illustration placeholder above a sign in button and a register button.",
              caption: "Sign in or register",
              width: 700,
              height: 1518,
            },
          ],
        },
        {
          heading: "Key learnings",
          bullets: [
            "Idea capture is not the main problem: users need a system to revisit ideas, not just somewhere to save them.",
            "Memory-based ideation is common: many users rely on memory rather than writing ideas down, which leads to idea loss.",
            "Sharing and privacy must coexist: users want feedback on some ideas while keeping others private.",
            "Simplicity increases idea capture: reducing friction is critical to encouraging users to save ideas.",
            "Inspiration and storage should be combined: users don't want separate tools for discovery and saving.",
          ],
        },
      ],
    },
  },

];

/** Helpers used by the routes. */
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudySlugs = () => projects.filter((p) => p.caseStudy).map((p) => p.slug);
