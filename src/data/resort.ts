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

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  tripType: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
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
    whatsappDefaultMessage: "Hello Max Crest, I would like to enquire about reserving the whole estate in Vagamon for our group.",
    email: "reservations@maxcrestvagamon.com",
    mapsUrl: "https://maps.google.com/?q=Max+Crest+Premium+Resort+Vagamon+Kerala",
    instagramUrl: "https://instagram.com",
  },

  navigation: [
    { label: "About", href: "#sanctuary", number: "01", previewImage: "./images/architecture-landscape.jpg" },
    { label: "Architecture", href: "#architecture", number: "02", previewImage: "./images/villa-twilight-glow.jpg" },
    { label: "The Estate", href: "#estate", number: "03", previewImage: "./images/suite-master-bedroom.jpg" },
    { label: "Experiences", href: "#experiences", number: "04", previewImage: "./images/infinity-plunge-pool.jpg" },
    { label: "Reviews", href: "#reviews", number: "05", previewImage: "./images/villa-twilight-glow.jpg" },
    { label: "Gallery", href: "#gallery", number: "06", previewImage: "./images/hero-sunset-panoramic.jpg" },
    { label: "FAQ", href: "#faq", number: "07", previewImage: "./images/lounge-mountain-view.jpg" },
    { label: "Location", href: "#destination", number: "08", previewImage: "./images/architecture-landscape.jpg" },
  ],

  hero: {
    image: "./images/hero-estate-overview.jpg",
    mobileImage: "./images/hero-sunset-panoramic.jpg",
    eyebrow: "VAGAMON · EXCLUSIVE PRIVATE ESTATE",
    title: "A quieter side of the mountains.",
    description: "An exclusive private mountain retreat in Vagamon, reserved entirely for your family or group. Modern glass pavilions, private plunge pool, and pure Western Ghats stillness with zero outside guests.",
    ctaPrimary: "Explore the Estate",
    ctaSecondary: "Reserve the Entire Estate",
  },

  introduction: {
    number: "01",
    eyebrow: "ABOUT THE RESORT",
    title: "A place shaped by stillness.",
    description: "Max Crest is an exclusive private villa retreat reserved entirely for one family or private group at a time. Enjoy complete hill-top privacy with no other guests — featuring panoramic glass bedrooms, a private hillside plunge pool, double-height living lounge, and uninterrupted Western Ghats horizons.",
    quote: "“The entire mountain villa exclusively for your family — pure privacy, cool mist, and untouched nature.”",
    featureImage: "./images/hero-sunset-panoramic.jpg",
    featureImageAlt: "Panoramic sunset horizon over tea slopes and misty mountain ridges in Vagamon",
    secondaryImage: "./images/boardwalk-walkway.jpg",
    secondaryImageAlt: "Timber walkway alongside the glass facade and water's edge",
    provenance: [
      { label: "LOCATION", value: "Vagamon Hills, Kerala" },
      { label: "BOOKING TYPE", value: "100% Private Whole-Estate Buyout" },
      { label: "CAPACITY", value: "Up to 10–12 Guests Privately" },
      { label: "WEATHER", value: "Cool Breeze, Mountain Mist & Pleasant Days" },
    ]
  },

  architecture: {
    number: "02",
    eyebrow: "VILLAS & DESIGN",
    title: "Modern comfort surrounded by untouched nature.",
    lead: "Featuring clean modern design, expansive wooden decks, and floor-to-ceiling glass walls that frame panoramic mountain views.",
    description: "Natural stone and rich timber anchor the villas into the hillside, while transparent glass facades let you enjoy glowing sunsets and swirling valley mist right from your room.",
    materialsPalette: [
      { num: "01", title: "Natural Stone", desc: "Solid local mountain stone foundations built securely into the hillside" },
      { num: "02", title: "Timber Decks", desc: "Spacious private outdoor decks crafted for morning coffee and sunset views" },
      { num: "03", title: "Panoramic Glass", desc: "Expansive glass walls offering uninterrupted views of misty valleys" },
      { num: "04", title: "Mountain Breeze", desc: "Open airy layouts designed to invite cool hill breezes indoors" }
    ],
    specs: [
      { label: "SUNSET VIEW", value: "West-facing ridge overlooking sunset valleys" },
      { label: "VILLA DESIGN", value: "Modern glass pavilions with teakwood sundecks" },
      { label: "HIGHLIGHTS", value: "Private infinity pool, firepit & panoramic balconies" },
    ],
    primaryImage: "./images/villa-twilight-glow.jpg",
    primaryImageAlt: "Twilight view of the villa with glowing interior and wooden deck",
    offsetImage: "./images/architecture-facade.jpg",
    offsetImageAlt: "Modern architectural facade with vertical timber louvers and balconies",
  },

  suites: [
    {
      id: "valley-suite",
      title: "The Master Suite",
      subtitle: "Hillside Panoramic Villa",
      spatialCategory: "Valley View",
      vista: "180° Misty Valley & Sunset Ridge",
      materials: "King Bed, Teak Wood & Private Balcony",
      orientation: "Sunset & Valley Facing",
      description: "Polished stone floors, plush king bedding, and full-height glass doors opening directly onto a private mountain-facing balcony.",
      features: ["Private glass balcony", "Expansive valley views", "Plush king bedding", "Morning mist views"],
      image: "./images/suite-master-bedroom.jpg",
      alt: "Master suite with king bed and private balcony overlooking misty mountains",
    },
    {
      id: "crest-suite",
      title: "The Mountain Balcony Suite",
      subtitle: "Elevated Tea Garden View",
      spatialCategory: "Tea Garden Balcony",
      vista: "Undulating Tea Slopes & Shifting Fog",
      materials: "Teak Wood Interiors & Stone Accents",
      orientation: "Tea Estate Facing",
      description: "Sliding glass doors frame lush tea slopes, allowing the cool mountain breeze to flow effortlessly through the room.",
      features: ["Framed ridge perspectives", "Private veranda seating", "Minimalist natural palette", "Cool mountain breeze"],
      image: "./images/suite-balcony-view.jpg",
      alt: "Suite balcony view overlooking the rolling green slopes of Vagamon",
    },
    {
      id: "pavilion-lounge",
      title: "The Double-Height Lounge",
      subtitle: "Grand Glass Living Pavilion",
      spatialCategory: "Glass Living Pavilion",
      vista: "Full-Height Tea Garden Views",
      materials: "Floor-to-Ceiling Glass & Luxury Seating",
      orientation: "Main Resort Living Area",
      description: "Soaring glass walls dissolve the boundary between cozy indoor lounging and panoramic views of the Western Ghats.",
      features: ["Double-height glass walls", "Panoramic tea estate views", "Spacious luxury seating", "Natural mountain daylight"],
      image: "./images/lounge-double-height.jpg",
      alt: "Double-height glass living lounge overlooking green hills",
    },
  ] as SuiteItem[],

  experiences: {
    number: "04",
    eyebrow: "THINGS TO DO & RELAX",
    title: "Slow down. Look around.",
    lead: "Surrounded by tea-covered crests and drifting mountain fog, spend your days enjoying fresh mountain breezes, relaxing dips, and cosy bonfires.",
    heroImage: "./images/infinity-plunge-pool.jpg",
    heroImageAlt: "Infinity plunge pool overlooking the scenic hills of Vagamon",
    rituals: [
      {
        id: "mist",
        num: "01",
        title: "Morning Dip in the Plunge Pool",
        tag: "DAWN · INFINITY POOL",
        timeOfDay: "06:00 — 08:30",
        description: "Start your morning with a refreshing dip in the plunge pool as clouds drift low across the tea hills and the sunrise lights up the valley.",
        image: "./images/infinity-plunge-pool.jpg",
        alt: "Infinity plunge pool overlooking the scenic hills of Vagamon"
      },
      {
        id: "fire",
        num: "02",
        title: "Evening Bonfire & Firepit",
        tag: "EVENING · COSY FIREPIT",
        timeOfDay: "18:00 — 21:00",
        description: "As the mountain air turns cool, gather around our outdoor stone firepit for hot tea, warm conversation, and stargazing.",
        image: "./images/terrace-firepit.jpg",
        alt: "Stone hearth and outdoor deck terrace at twilight"
      },
      {
        id: "ridge",
        num: "03",
        title: "Tea Garden Nature Walk",
        tag: "AFTERNOON · NATURE TRAILS",
        timeOfDay: "15:00 — 17:30",
        description: "Take peaceful walks along estate tea paths lined with pine trees, enjoying 360-degree panoramic views of the Western Ghats.",
        image: "./images/hero-estate-overview.jpg",
        alt: "Panoramic tea garden slopes and highland ridges of Vagamon"
      }
    ] as RitualItem[],
    vignettes: [
      {
        title: "Mountain Mist",
        tag: "Atmosphere",
        description: "Fresh cool air, morning dew, and gentle clouds that drift right up to your balcony.",
      },
      {
        title: "Evening Firepit",
        tag: "Evenings",
        description: "A warm stone firepit for cosy evenings with family and friends under starry skies.",
      },
      {
        title: "Tea Hills",
        tag: "Scenery",
        description: "Vast rolling tea estates and pine-covered mountain trails to explore at leisure.",
      }
    ]
  },

  cinematicBreak: {
    image: "./images/hero-sunset-panoramic.jpg",
    quoteLine1: "Come for the view.",
    quoteLine2: "Stay for the stillness.",
    subtext: "A peaceful mountain hideaway where you can relax, recharge, and take in the view.",
  },

  gallery: [
    {
      id: "g1",
      src: "./images/hero-estate-overview.jpg",
      alt: "Panoramic landscape view of Max Crest Resort perched on the Vagamon hillside",
      title: "The Estate & Hillside",
      category: "landscape",
      aspect: "landscape",
      caption: "Panoramic perspective of the resort nestled along the contours of the tea hills.",
    },
    {
      id: "g2",
      src: "./images/infinity-plunge-pool.jpg",
      alt: "Infinity plunge pool reflecting clouds and ridges",
      title: "Sky Mirror Plunge Pool",
      category: "experience",
      aspect: "portrait",
      caption: "Still waters mirroring the sky at the edge of the mountain ridge.",
    },
    {
      id: "g3",
      src: "./images/villa-twilight-glow.jpg",
      alt: "Twilight illumination of the glass pavilion and teak deck",
      title: "Twilight on the Pavilion",
      category: "architecture",
      aspect: "portrait",
      caption: "Warm amber glow illuminating the timber deck as dusk settles over the valley.",
    },
    {
      id: "g4",
      src: "./images/lounge-mountain-view.jpg",
      alt: "Double-height living space framing tea estate views",
      title: "High-Ceiling Living Vista",
      category: "sanctuary",
      aspect: "portrait",
      caption: "Full-height glass panels connecting indoor living directly with nature.",
    },
    {
      id: "g5",
      src: "./images/architecture-landscape.jpg",
      alt: "Paved courtyard and modern cottage architecture overlooking green slopes",
      title: "Courtyard & Cottages",
      category: "architecture",
      aspect: "landscape",
      caption: "Stone pathways and contemporary cottages surrounded by mountain flora.",
    },
    {
      id: "g6",
      src: "./images/terrace-firepit.jpg",
      alt: "Stone hearth and outdoor deck terrace",
      title: "Outdoor Hearth Terrace",
      category: "experience",
      aspect: "portrait",
      caption: "Stone-crafted firepit designed for cool highland evenings.",
    },
    {
      id: "g7",
      src: "./images/suite-master-bedroom.jpg",
      alt: "Master bedroom suite with balcony view",
      title: "Master Bedroom Suite",
      category: "sanctuary",
      aspect: "portrait",
      caption: "Crisp linens and polished stone with private balcony facing the hills.",
    },
    {
      id: "g8",
      src: "./images/deck-monsoon-mist.jpg",
      alt: "Teak pool deck shrouded in mountain fog",
      title: "The Monsoon Veil",
      category: "landscape",
      aspect: "portrait",
      caption: "Atmospheric mountain mist rolling over the wooden pool deck.",
    },
    {
      id: "g9",
      src: "./images/boardwalk-walkway.jpg",
      alt: "Boardwalk promenade flanked by glass and pool edge",
      title: "Timber Promenade",
      category: "architecture",
      aspect: "portrait",
      caption: "Architectural walkway bridging living pavilions and water terraces.",
    },
    {
      id: "g10",
      src: "./images/ridge-lone-pine.jpg",
      alt: "Architectural facade and highland garden flora",
      title: "Garden Flora & Facade",
      category: "architecture",
      aspect: "portrait",
      caption: "Timber louvers and blooming mountain flora framing the main villa elevation.",
    },
    {
      id: "g11",
      src: "./images/pool-mist-horizon.jpg",
      alt: "Pool edge vanishing into the morning fog",
      title: "Mist on the Edge",
      category: "experience",
      aspect: "portrait",
      caption: "Where the pool deck merges seamlessly into the quiet morning fog.",
    },
    {
      id: "g12",
      src: "./images/architecture-verandas.jpg",
      alt: "Architectural verandas and stone structure",
      title: "Cantilevered Verandas",
      category: "architecture",
      aspect: "portrait",
      caption: "Geometric lines and stone textures complementing the rugged mountain landscape.",
    },
    {
      id: "g13",
      src: "./images/resort-signage.jpg",
      alt: "Max Crest stone entrance signage",
      title: "The Arrival",
      category: "architecture",
      aspect: "portrait",
      caption: "Natural stone gateway welcoming guests to Max Crest Premium Resort.",
    },
    {
      id: "g14",
      src: "./images/architecture-landscape.jpg",
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
    description: "Nestled in the cool hills of Vagamon in Kerala's Western Ghats, this secluded retreat offers clean mountain air, scenic tea gardens, and rolling pine hills away from tourist crowds.",
    highlights: [
      { label: "Scenery", value: "Rolling tea slopes, pine forests, and mist-covered valleys" },
      { label: "Weather", value: "Cool mountain breezes, gentle mist, and clean fresh air" },
      { label: "Vibe", value: "A peaceful retreat away from city noise and tourist crowds" }
    ],
    directionsNote: "Located along scenic mountain routes with panoramic views of the Western Ghats.",
  },

  enquiry: {
    eyebrow: "BOOK YOUR STAY",
    title: "Plan your mountain getaway.",
    subtitle: "To ensure personal care, prompt support, and the best rates, all bookings at Max Crest are handled directly by our on-site team.",
    note: "Reach out via WhatsApp, phone call, or the quick form below. We are here to help you plan your visit.",
  },

  estateBuyout: {
    badge: "100% PRIVATE & EXCLUSIVE",
    tagline: "The Entire Estate Is Exclusively Yours",
    description: "Max Crest does not rent individual rooms to separate travelers. Every booking reserves the complete resort property exclusively for your family or private group, ensuring absolute privacy, personalized on-site service, and undivided access to all amenities.",
    capacity: "Accommodates up to 10–12 guests comfortably",
    spacesIncluded: [
      {
        title: "All Private Bedrooms & Suites",
        desc: "King beds, private view balconies, and floor-to-ceiling glass walls looking out to the misty valley."
      },
      {
        title: "Hillside Infinity Plunge Pool",
        desc: "Reserved 100% for your group with expansive wooden sundeck and tea garden panorama."
      },
      {
        title: "Double-Height Glass Living Lounge",
        desc: "Spacious communal living and dining pavilion with soaring timber ceilings and natural light."
      },
      {
        title: "Outdoor Sunset Firepit Deck",
        desc: "Private stone campfire terrace for evening gatherings, hot Kerala tea, and barbecue under the stars."
      },
      {
        title: "Dedicated On-Site Caretakers",
        desc: "Attentive hospitality team on premises to prepare home-cooked Kerala meals and assist your group."
      },
      {
        title: "Private Lawns & Tea Trails",
        desc: "Direct access to private nature trails and scenic vantage points across the 1,100M ridge."
      }
    ]
  },

  reviews: [
    {
      id: "rev-1",
      name: "Arun & Divya Nair",
      location: "Kochi, Kerala",
      tripType: "Family Vacation (9 Guests)",
      rating: 5,
      date: "Stayed December 2025",
      comment: "Having the entire property to ourselves was the best decision for our family reunion. The kids loved the plunge pool, the elders sat on the balcony watching the fog roll in, and the staff made delicious authentic Kerala meals. Complete privacy with breathtaking views.",
      highlight: "Complete privacy for our whole family"
    },
    {
      id: "rev-2",
      name: "Karthik Subramanian",
      location: "Bangalore, Karnataka",
      tripType: "Friends Getaway (8 Guests)",
      rating: 5,
      date: "Stayed January 2026",
      comment: "Unlike crowded resorts where you share pools and dining spaces, Max Crest was 100% our private haven. The glass living room is stunning at night, and the evening bonfire was magical with cold mountain wind. The caretakers were super friendly and helpful.",
      highlight: "Zero crowds, magical campfire deck"
    },
    {
      id: "rev-3",
      name: "Sneha & Roshan Thomas",
      location: "Chennai, Tamil Nadu",
      tripType: "Private Group Retreat (11 Guests)",
      rating: 5,
      date: "Stayed February 2026",
      comment: "The photos look great, but the reality is even more peaceful. Waking up to 180-degree mist over the tea valleys from the master bedroom was unforgettable. Booking the entire villa meant we could relax on our own schedule without worrying about other guests.",
      highlight: "Unforgettable sunrise mist over the valley"
    }
  ] as ReviewItem[],

  faqs: [
    {
      id: "faq-1",
      category: "Booking & Privacy",
      question: "Can we book only a single room at Max Crest?",
      answer: "No, Max Crest is rented exclusively as a full-estate private buyout. When you make a reservation, the entire property—including all suites, the living pavilion, private infinity pool, and firepit deck—is reserved solely for you and your group. There will never be any outside guests during your stay."
    },
    {
      id: "faq-2",
      category: "Capacity & Guests",
      question: "How many guests can stay at the estate?",
      answer: "The estate comfortably hosts up to 10–12 guests across our private suites and spacious living areas. Extra beds and arrangements can be provided upon request for larger families or intimate celebrations."
    },
    {
      id: "faq-3",
      category: "Food & Dining",
      question: "What dining and meal options are available?",
      answer: "We have an on-site kitchen and dedicated caretakers who prepare fresh, home-cooked Kerala and Indian delicacies. You can coordinate your breakfast, lunch, tea-time snacks, dinner, and campfire barbecue directly with the team before and during your stay."
    },
    {
      id: "faq-4",
      category: "Amenities",
      question: "Is the infinity plunge pool private?",
      answer: "Yes, 100% private. Since you book the entire property, the hillside plunge pool, wooden sundeck, and outdoor firepit terrace are entirely yours to enjoy whenever you wish."
    },
    {
      id: "faq-5",
      category: "Check-in & Location",
      question: "What are the check-in and check-out timings?",
      answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. If you require early arrival or late departure, let us know when booking and we will accommodate based on availability."
    },
    {
      id: "faq-6",
      category: "Access & Roads",
      question: "Is the resort accessible by car?",
      answer: "Yes, the property is situated on accessible paved mountain roads in Vagamon with secure on-site parking for multiple cars and traveler vans. Live GPS location and turn-by-turn guidance are provided as soon as your booking is confirmed."
    }
  ] as FaqItem[]
};
