export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  guests: string;
  location: string;
  date: string;
  description: string;
  highlights: string[];
  images: string[];
  thumbnail: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    slug: "xyz-bank-annual-gathering-2024",
    title: "XYZ Bank Annual Gathering 2024",
    category: "Corporate Event",
    guests: "500 tamu",
    location: "Bali",
    date: "Desember 2024",
    description: "Annual gathering spektakuler untuk seluruh karyawan XYZ Bank dengan tema 'Together We Grow'. Acara berlangsung selama 3 hari di resort mewah di Bali dengan berbagai aktivitas team building, gala dinner, dan awarding ceremony.",
    highlights: [
      "Opening ceremony dengan tarian tradisional Bali",
      "Team building activities di pantai",
      "Gala dinner dengan tema tropical paradise",
      "Awarding ceremony untuk best performers",
      "Live music performance"
    ],
    images: ["/images/portfolio/corporate-event.svg"],
    thumbnail: "/images/portfolio/corporate-event.svg"
  },
  {
    slug: "abc-tech-product-launch",
    title: "ABC Tech Product Launch",
    category: "Product Launching",
    guests: "1000 tamu",
    location: "JCC, Jakarta",
    date: "Oktober 2024",
    description: "Grand launching produk teknologi terbaru ABC Tech dengan konsep futuristik. Acara menghadirkan demo produk interaktif, keynote speaker dari Silicon Valley, dan media coverage nasional.",
    highlights: [
      "Panggung holographic 360 derajat",
      "Demo produk interaktif",
      "Keynote speaker internasional",
      "Media coverage 50+ outlet",
      "Networking session dengan investor"
    ],
    images: ["/images/portfolio/product-launch.svg"],
    thumbnail: "/images/portfolio/product-launch.svg"
  },
  {
    slug: "fashion-week-exhibition",
    title: "Fashion Week Exhibition",
    category: "Exhibition & Expo",
    guests: "5000+ pengunjung",
    location: "PIK Avenue, Jakarta",
    date: "September 2024",
    description: "Pameran fashion terbesar tahun ini yang menampilkan 50+ brand lokal dan internasional. Event berlangsung selama 3 hari dengan berbagai fashion show, workshop, dan meet & greet dengan designer.",
    highlights: [
      "50+ booth brand fashion",
      "12 fashion show",
      "Workshop dengan designer ternama",
      "Pop-up store exclusive",
      "Photo booth interaktif"
    ],
    images: ["/images/portfolio/exhibition.svg"],
    thumbnail: "/images/portfolio/exhibition.svg"
  },
  {
    slug: "startup-networking-night",
    title: "Startup Networking Night",
    category: "Gala Dinner",
    guests: "200 tamu",
    location: "Rooftop Jakarta",
    date: "Agustus 2024",
    description: "Exclusive networking event untuk founder dan investor startup Indonesia. Acara diadakan di rooftop dengan view kota Jakarta yang spektakuler, dilengkapi dengan pitching session dan panel discussion.",
    highlights: [
      "Pitching session 10 startup terpilih",
      "Panel discussion dengan unicorn founders",
      "Speed networking session",
      "Cocktail dan fine dining",
      "Live acoustic performance"
    ],
    images: ["/images/portfolio/gala-dinner.svg"],
    thumbnail: "/images/portfolio/gala-dinner.svg"
  },
  {
    slug: "corporate-team-building-2024",
    title: "MegaCorp Team Building 2024",
    category: "Team Building",
    guests: "300 peserta",
    location: "Sentul, Bogor",
    date: "Juli 2024",
    description: "Program team building intensif selama 2 hari untuk mempererat hubungan antar departemen. Aktivitas meliputi outbound games, survival challenge, dan bonding activity yang dirancang khusus.",
    highlights: [
      "Outbound games kompetitif",
      "Survival challenge",
      "Campfire bonding night",
      "Leadership workshop",
      "Amazing race"
    ],
    images: ["/images/portfolio/team-building.svg"],
    thumbnail: "/images/portfolio/team-building.svg"
  },
  {
    slug: "virtual-conference-2024",
    title: "Indonesia Digital Summit 2024",
    category: "Virtual Event",
    guests: "2000+ peserta online",
    location: "Virtual",
    date: "Juni 2024",
    description: "Konferensi virtual terbesar tentang transformasi digital di Indonesia. Menampilkan 20+ speaker dari berbagai industri dengan platform interaktif yang memungkinkan networking virtual.",
    highlights: [
      "Platform virtual custom",
      "20+ speaker nasional dan internasional",
      "Virtual networking rooms",
      "Interactive Q&A sessions",
      "Digital goodie bags"
    ],
    images: ["/images/portfolio/virtual-event.svg"],
    thumbnail: "/images/portfolio/virtual-event.svg"
  }
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioData.find(item => item.slug === slug);
};
