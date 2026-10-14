export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'architecture' | 'sanctuary' | 'experience' | 'landscape';
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface SuiteItem {
  id: string;
  title: string;
  subtitle: string;
  spatialCategory: string;
  vista: string;
  materials: string;
  orientation: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
}

export interface RitualItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  timeOfDay: string;
  description: string;
  image: string;
  alt: string;
}

export interface ExperienceVignette {
  title: string;
  tag: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}

export const resort = {
  name: "Max Crest Premium Resort Vagamon",
  shortName: "Max Crest",
  tagline: "A Quiet Mountain Retreat",
  location: "Vagamon, Kerala",
  subLocation: "Western Ghats, Kerala, India",
  coordinates: "9.6885° N, 76.9056° E",
  elevation: "1,100M MSL",

  // Contact & Conversion channels (Configurable placeholders)
  contact: {
    phone: "+91 94000 00000",
    phoneDisplay: "+91 94000 00000",
    whatsappNumber: "919400000000", // International format without +
    whatsappDefaultMessage: "Hello Max Crest, I would like to enquire about staying at the resort in Vagamon.",
    email: "concierge@maxcrestvagamon.com",
    mapsUrl: "https://maps.google.com/?q=Max+Crest+Premium+Resort+Vagamon+Kerala",
    instagramUrl: "https://instagram.com",
  },

  navigation: [
    { label: "Sanctuary", href: "#sanctuary", number: "01", previewImage: "/images/architecture-landscape.jpg" },
    { label: "Architecture", href: "#architecture", number: "02", previewImage: "/images/villa-twilight-glow.jpg" },
    { label: "Suites", href: "#suites", number: "03", previewImage: "/images/suite-master-bedroom.jpg" },
    { label: "Rituals", href: "#experiences", number: "04", previewImage: "/images/infinity-plunge-pool.jpg" },
    { label: "Monograph", href: "#gallery", number: "05", previewImage: "/images/hero-sunset-panoramic.jpg" },
    { label: "Topography", href: "#destination", number: "06", previewImage: "/images/architecture-landscape.jpg" },
  ],

  hero: {
    image: "/images/hero-estate-overview.jpg",
    mobileImage: "/images/hero-sunset-panoramic.jpg",
    eyebrow: "VAGAMON · KERALA",
    title: "A quieter side of the mountains.",
    description: "Perched along the emerald ridges of Vagamon, where modern glass pavilions meet the shifting mist and stillness of the Western Ghats.",
    ctaPrimary: "Explore Sanctuary",
    ctaSecondary: "Concierge Enquiry",
  },

  introduction: {
    number: "01",
    eyebrow: "THE SANCTUARY",
    title: "A place shaped by stillness.",
    description: "Far removed from hurried itineraries, Max Crest is conceived as a sanctuary of quiet luxury. Here, architecture does not impose upon the hillside—it opens itself entirely to the undulating tea slopes, morning fog, and ever-changing sky.",
    quote: "“The landscape does not ask for your attention; it quietly restores it.”",
    featureImage: "/images/hero-sunset-panoramic.jpg",
    featureImageAlt: "Panoramic sunset horizon over tea slopes and misty mountain ridges in Vagamon",
    secondaryImage: "/images/boardwalk-walkway.jpg",
    secondaryImageAlt: "Timber walkway alongside the glass facade and water's edge",
    provenance: [
      { label: "PROVENANCE", value: "Vagamon Highlands, Kerala" },
      { label: "TERRAIN", value: "Undulating Tea Slopes & Basalt" },
      { label: "ELEVATION", value: "1,100 Meters Above Sea Level" },
      { label: "MICROCLIMATE", value: "Highland Mist, Rain & Cool Breezes" },
    ]
  },

  architecture: {
    number: "02",
    eyebrow: "MATERIALITY & ARCHITECTURE",
    title: "Architecture in conversation with the landscape.",
    lead: "Designed with clean geometric lines, generous cantilevered timber decks, and transparent glass elevations that frame the raw beauty of the highlands.",
    description: "Solid stone accents anchor the pavilion into the hillside, while full-height glass panels capture the drama of sunrise over tea plantations and the quiet arrival of evening mist.",
    materialsPalette: [
      { num: "01", title: "Natural Basalt", desc: "Locally sourced stone anchoring foundations into the mountain ridge" },
      { num: "02", title: "Teak Decks", desc: "Cantilevered outdoor terraces crafted for open-air highland stillness" },
      { num: "03", title: "Continuous Glazing", desc: "Thermal acoustic low-iron glass opening interiors to shifting fog" },
      { num: "04", title: "Highland Elements", desc: "Passive cross-ventilation channeling cool mountain breeze" }
    ],
    specs: [
      { label: "ORIENTATION", value: "West-facing ridge · Sunset valley vistas" },
      { label: "STRUCTURE", value: "Cantilevered steel & mountain-anchored masonry" },
      { label: "GLAZING", value: "Full-height continuous glass curtain walls" },
    ],
    primaryImage: "/images/villa-twilight-glow.jpg",
    primaryImageAlt: "Twilight view of the villa with glowing interior and wooden deck",
    offsetImage: "/images/architecture-facade.jpg",
    offsetImageAlt: "Modern architectural facade with vertical timber louvers and balconies",
  },

  suites: [
    {
      id: "valley-suite",
      title: "The Master Suite",
      subtitle: "Primary Hillside Residence",
      spatialCategory: "Panoramic Horizon",
      vista: "180° Valley Mist & Sunset Ridge",
      materials: "Polished Basalt Stone, Natural Teak & Belgian Linens",
      orientation: "West-Facing Ridge Horizon",
      description: "Polished stone floors, plush king bedding, and full-height glass doors opening directly onto a private mountain-facing balcony.",
      features: ["Private glass balcony", "Expansive valley horizon", "Polished stone finishes", "Morning mist views"],
      image: "/images/suite-master-bedroom.jpg",
      alt: "Master suite with king bed and private balcony overlooking misty mountains",
    },
    {
      id: "crest-suite",
      title: "The Mountain Balcony Suite",
      subtitle: "Elevated Veranda Sanctuary",
      spatialCategory: "Highland Veranda",
      vista: "Undulating Tea Slopes & Shifting Fog",
      materials: "Natural Timber Framing & Matte Stone Surfaces",
      orientation: "South-West Ridge Terrace",
      description: "Sliding glass partitions framing panoramic tea slopes, allowing the cool mountain breeze to flow effortlessly through the room.",
      features: ["Framed ridge perspectives", "Private veranda seating", "Minimalist natural palette", "Cool mountain breeze"],
      image: "/images/suite-balcony-view.jpg",
      alt: "Suite balcony view overlooking the rolling green slopes of Vagamon",
    },
    {
      id: "pavilion-lounge",
      title: "The Double-Height Lounge",
      subtitle: "Architectural Living Pavilion",
      spatialCategory: "Cathedral Glazing",
      vista: "Full-Height Tea Garden Monolith",
      materials: "Monolithic Glass, Architectural Steel & Bespoke Lounge Seating",
      orientation: "Central Ridge Pavilion",
      description: "Soaring glass elevations dissolving the boundary between interior sanctuary and the expanse of the Western Ghats.",
      features: ["Double-height glass elevation", "Panoramic tea estate view", "Open-plan living architecture", "Bespoke seating"],
      image: "/images/lounge-double-height.jpg",
      alt: "Double-height glass living lounge overlooking green hills",
    },
  ] as SuiteItem[],

  experiences: {
    number: "04",
    eyebrow: "RITUALS OF THE HIGHLAND",
    title: "Slow down. Look around.",
    lead: "Surrounded by tea-covered crests and drifting mountain fog, days at Max Crest are shaped by the elements rather than schedules.",
    heroImage: "/images/infinity-plunge-pool.jpg",
    heroImageAlt: "Infinity plunge pool cantilevered above the slopes of Vagamon",
    rituals: [
      {
        id: "mist",
        num: "01",
        title: "The Morning Mist",
        tag: "DAWN · PLUNGE POOL",
        timeOfDay: "06:00 — 08:30",
        description: "Dawn at 1,100 meters brings cloud inversion that spills across the cantilevered plunge pool. Watch the water mirror changing skies as cool mountain dew carpets the slopes.",
        image: "/images/infinity-plunge-pool.jpg",
        alt: "Infinity plunge pool cantilevered above the slopes of Vagamon"
      },
      {
        id: "fire",
        num: "02",
        title: "The Hearth Twilight",
        tag: "DUSK · STONE HEARTH",
        timeOfDay: "18:00 — 21:00",
        description: "As evening mountain air cools, the outdoor stone hearth gathers warmth. Conversations unfold under starlit skies while woodsmoke drifts into the pine trees.",
        image: "/images/terrace-firepit.jpg",
        alt: "Stone hearth and outdoor deck terrace at twilight"
      },
      {
        id: "ridge",
        num: "03",
        title: "The Tea Ridge Walk",
        tag: "AFTERNOON · SOLITUDE",
        timeOfDay: "15:00 — 17:30",
        description: "Unhurried trails along estate tea paths flanked by solitary highland pines. Walk in quiet contemplation with 360-degree vistas of the Western Ghats.",
        image: "/images/hero-estate-overview.jpg",
        alt: "Panoramic tea garden slopes and highland ridges of Vagamon"
      }
    ] as RitualItem[],
    vignettes: [
      {
        title: "Mist",
        tag: "Elements",
        description: "A landscape softened by shifting mountain weather, morning dew, and drifting cloud cover.",
      },
      {
        title: "Fire",
        tag: "Evenings",
        description: "An open stone hearth for unhurried conversations under starlit highland skies.",
      },
      {
        title: "Ridge",
        tag: "Horizons",
        description: "Panoramic tea garden paths and solitary pines stretching toward the Western Ghats.",
      }
    ]
  },

  cinematicBreak: {
    image: "/images/hero-sunset-panoramic.jpg",
    quoteLine1: "Come for the view.",
    quoteLine2: "Stay for the stillness.",
    subtext: "A sanctuary where time slows down to the rhythm of mountain clouds.",
  },

  gallery: [
    {
      id: "g1",
      src: "/images/hero-estate-overview.jpg",
      alt: "Panoramic landscape view of Max Crest Resort perched on the Vagamon hillside",
      title: "The Estate & Hillside",
      category: "landscape",
      aspect: "landscape",
      caption: "Panoramic perspective of the resort nestled along the contours of the tea hills.",
    },
    {
      id: "g2",
      src: "/images/infinity-plunge-pool.jpg",
      alt: "Infinity plunge pool reflecting clouds and ridges",
      title: "Sky Mirror Plunge Pool",
      category: "experience",
      aspect: "portrait",
      caption: "Still waters mirroring the sky at the edge of the mountain ridge.",
    },
    {
      id: "g3",
      src: "/images/villa-twilight-glow.jpg",
      alt: "Twilight illumination of the glass pavilion and teak deck",
      title: "Twilight on the Pavilion",
      category: "architecture",
      aspect: "portrait",
      caption: "Warm amber glow illuminating the timber deck as dusk settles over the valley.",
    },
    {
      id: "g4",
      src: "/images/lounge-mountain-view.jpg",
      alt: "Double-height living space framing tea estate views",
      title: "High-Ceiling Living Vista",
      category: "sanctuary",
      aspect: "portrait",
      caption: "Full-height glass panels connecting indoor living directly with nature.",
    },
    {
      id: "g5",
      src: "/images/architecture-landscape.jpg",
      alt: "Paved courtyard and modern cottage architecture overlooking green slopes",
      title: "Courtyard & Cottages",
      category: "architecture",
      aspect: "landscape",
      caption: "Stone pathways and contemporary cottages surrounded by mountain flora.",
    },
    {
      id: "g6",
      src: "/images/terrace-firepit.jpg",
      alt: "Stone hearth and outdoor deck terrace",
      title: "Outdoor Hearth Terrace",
      category: "experience",
      aspect: "portrait",
      caption: "Stone-crafted firepit designed for cool highland evenings.",
    },
    {
      id: "g7",
      src: "/images/suite-master-bedroom.jpg",
      alt: "Master bedroom suite with balcony view",
      title: "Master Bedroom Suite",
      category: "sanctuary",
      aspect: "portrait",
      caption: "Crisp linens and polished stone with private balcony facing the hills.",
    },
    {
      id: "g8",
      src: "/images/deck-monsoon-mist.jpg",
      alt: "Teak pool deck shrouded in mountain fog",
      title: "The Monsoon Veil",
      category: "landscape",
      aspect: "portrait",
      caption: "Atmospheric mountain mist rolling over the wooden pool deck.",
    },
    {
      id: "g9",
      src: "/images/boardwalk-walkway.jpg",
      alt: "Boardwalk promenade flanked by glass and pool edge",
      title: "Timber Promenade",
      category: "architecture",
      aspect: "portrait",
      caption: "Architectural walkway bridging living pavilions and water terraces.",
    },
    {
      id: "g10",
      src: "/images/ridge-lone-pine.jpg",
      alt: "Architectural facade and highland garden flora",
      title: "Garden Flora & Facade",
      category: "architecture",
      aspect: "portrait",
      caption: "Timber louvers and blooming mountain flora framing the main villa elevation.",
    },
    {
      id: "g11",
      src: "/images/pool-mist-horizon.jpg",
      alt: "Pool edge vanishing into the morning fog",
      title: "Mist on the Edge",
      category: "experience",
      aspect: "portrait",
      caption: "Where the pool deck merges seamlessly into the quiet morning fog.",
    },
    {
      id: "g12",
      src: "/images/architecture-verandas.jpg",
      alt: "Architectural verandas and stone structure",
      title: "Cantilevered Verandas",
      category: "architecture",
      aspect: "portrait",
      caption: "Geometric lines and stone textures complementing the rugged mountain landscape.",
    },
    {
      id: "g13",
      src: "/images/resort-signage.jpg",
      alt: "Max Crest stone entrance signage",
      title: "The Arrival",
      category: "architecture",
      aspect: "portrait",
      caption: "Natural stone gateway welcoming guests to Max Crest Premium Resort.",
    },
    {
      id: "g14",
      src: "/images/architecture-landscape.jpg",
      alt: "Wide landscape view of resort structure in the tea hills",
      title: "Mountain Contours",
      category: "landscape",
      aspect: "landscape",
      caption: "Low-impact architecture resting peacefully along the natural ridge contour.",
    }
  ] as GalleryItem[],

  destination: {
    region: "Vagamon, Kerala",
    title: "Where the hills disappear into mist.",
    description: "Nestled in the highlands of Kerala's Western Ghats, Vagamon is renowned for its pine-scented breezes, cascading mists, and untouched tea estates. Unlike bustling tourist corridors, this secluded hill station retains an unhurried, timeless cadence.",
    highlights: [
      { label: "Landscape", value: "Rolling tea slopes, pine groves, and mist-filled valleys" },
      { label: "Atmosphere", value: "Cool mountain microclimate with shifting weather and clean air" },
      { label: "Setting", value: "A peaceful retreat away from urban noise and commercial density" }
    ],
    directionsNote: "Located along scenic mountain routes with panoramic views of the Western Ghats.",
  },

  enquiry: {
    eyebrow: "RESERVATIONS & CONCIERGE",
    title: "Your stay begins with a conversation.",
    subtitle: "To ensure absolute privacy and personal attention, all stays at Max Crest are arranged directly with our concierge team.",
    note: "Please contact us via WhatsApp, direct call, or submit an enquiry below. We are pleased to assist with your arrival details and arrangements.",
  }
};
