import { Plant, Category, GalleryItem, Testimonial, Service, FAQ, Inquiry, WebsiteSettings, AdminUser, ActivityLog } from '../types';

export const INITIAL_SETTINGS: WebsiteSettings = {
  businessName: "PPN Nursery",
  tagline: "Your One-Stop Destination for Premium Plants & Gardening Solutions",
  phone: "+91 87620 43246",
  whatsappNumber: "918762043246",
  email: "info@ppnnursery.com",
  address: "Venus Home, 57/1 Ward 52, Kithaganur Main Road, TC Palya Cross Road, TC Palya Circle, Virgo Nagar Road, Old Madras Road",
  locationLandmark: "Near Indus Valley School, Battarahalli",
  cityStatePincode: "Bengaluru, Karnataka 560049",
  businessHours: "Open Daily: 9:00 AM – 8:00 PM",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3202951717316!2d77.7052!3d13.0152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzU0LjciTiA3N8KwNDInMTguNyJF!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl: "https://maps.google.com/?q=PPN+Nursery+Battarahalli+Bengaluru",
  rating: 5.0,
  totalReviews: 321,
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
};

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Indoor Plants",
    description: "Air-purifying & lush foliage plants ideal for home interiors and office spaces.",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
    itemCount: 24,
    status: "Active"
  },
  {
    id: "cat-2",
    name: "Outdoor Plants",
    description: "Sun-loving flowering and evergreen plants to elevate your lawn and balconies.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    itemCount: 38,
    status: "Active"
  },
  {
    id: "cat-3",
    name: "Flower Plants",
    description: "Vibrant blooming roses, hibiscuses, bougainvilleas, and seasonal flowers.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    itemCount: 30,
    status: "Active"
  },
  {
    id: "cat-4",
    name: "Fruit Plants",
    description: "High-yield grafted fruit saplings including Mango, Guava, Lemon, and Chikoo.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    itemCount: 18,
    status: "Active"
  },
  {
    id: "cat-5",
    name: "Medicinal Plants",
    description: "Traditional herbal and therapeutic saplings like Tulsi, Neem, Aloe Vera, and Mint.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    itemCount: 15,
    status: "Active"
  },
  {
    id: "cat-6",
    name: "Ornamental Plants",
    description: "Decorative architectural foliage for sophisticated landscape designs.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80",
    itemCount: 20,
    status: "Active"
  },
  {
    id: "cat-7",
    name: "Palm Trees",
    description: "Elegant Areca, Foxtail, and Royal Palms for avenues, gardens, and entryways.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    itemCount: 12,
    status: "Active"
  },
  {
    id: "cat-8",
    name: "Succulents & Cacti",
    description: "Low-maintenance, drought-tolerant desk companions and decorative arrangements.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    itemCount: 28,
    status: "Active"
  },
  {
    id: "cat-9",
    name: "Hanging Plants",
    description: "Cascading greenery like Money Plant, Boston Fern, and String of Pearls.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
    itemCount: 16,
    status: "Active"
  },
  {
    id: "cat-10",
    name: "Bonsai",
    description: "Artfully sculpted miniature trees including Ficus, Jade, and Juniper bonsai.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    itemCount: 10,
    status: "Active"
  },
  {
    id: "cat-11",
    name: "Herbal Plants",
    description: "Fresh culinary herbs like Rosemary, Thyme, Basil, Oregano, and Curry Leaf.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    itemCount: 14,
    status: "Active"
  },
  {
    id: "cat-12",
    name: "Garden Accessories",
    description: "Terracotta pots, organic fertilizers, coco peat, watering cans, and tools.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    itemCount: 35,
    status: "Active"
  }
];

export const INITIAL_PLANTS: Plant[] = [
  {
    id: "plant-1",
    name: "Areca Palm",
    category: "Palm Trees",
    description: "Popular tropical air-cleansing palm that adds luxurious greenery and humidity to indoor and balcony spaces.",
    price: 350,
    image: "https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Indirect Sun",
    water: "Moderate"
  },
  {
    id: "plant-2",
    name: "Money Plant (Golden Pothos)",
    category: "Indoor Plants",
    description: "Resilient vine known for bringing good luck and thriving effortlessly in water or soil.",
    price: 180,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Partial Shade",
    water: "Moderate"
  },
  {
    id: "plant-3",
    name: "Snake Plant (Sansevieria)",
    category: "Indoor Plants",
    description: "Indestructible oxygen booster that releases oxygen during the night. Perfect for bedrooms.",
    price: 280,
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Low Light",
    water: "Low"
  },
  {
    id: "plant-4",
    name: "Fiddle Leaf Fig",
    category: "Indoor Plants",
    description: "Dramatic architectural plant with broad glossy leaves that creates an instant focal point.",
    price: 850,
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Moderate",
    sunlight: "Indirect Sun",
    water: "Moderate"
  },
  {
    id: "plant-5",
    name: "Rubber Plant (Burgundy)",
    category: "Indoor Plants",
    description: "Glossy deep green-burgundy leaves. Excellent for absorbing indoor air toxins.",
    price: 420,
    image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Indirect Sun",
    water: "Moderate"
  },
  {
    id: "plant-6",
    name: "Mango Sapling (Alphonso Grafted)",
    category: "Fruit Plants",
    description: "Premium grafted Alphonso mango sapling bred for rapid growth and rich sweet harvests.",
    price: 250,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    water: "Frequent"
  },
  {
    id: "plant-7",
    name: "Hybrid Rose Plant (Red Delight)",
    category: "Flower Plants",
    description: "Fragrant perennial bloomer featuring heavy double petals with continuous flowering cycles.",
    price: 150,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Moderate",
    sunlight: "Direct Sun",
    water: "Frequent"
  },
  {
    id: "plant-8",
    name: "Hibiscus (Tropical Pink)",
    category: "Flower Plants",
    description: "Showy large tropical flowers that attract pollinators and bring vibrant color to sunny gardens.",
    price: 160,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Direct Sun",
    water: "Frequent"
  },
  {
    id: "plant-9",
    name: "Paper Flower (Bougainvillea Magenta)",
    category: "Outdoor Plants",
    description: "Hardy, drought-tolerant climbing shrub with striking magenta bracts that thrive in full sun.",
    price: 220,
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Direct Sun",
    water: "Low"
  },
  {
    id: "plant-10",
    name: "Holy Basil (Tulsi)",
    category: "Medicinal Plants",
    description: "Sacred medicinal herb valued in Ayurveda for immunity, stress relief, and air purification.",
    price: 80,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Direct Sun",
    water: "Moderate"
  },
  {
    id: "plant-11",
    name: "Ficus Microcarpa Bonsai",
    category: "Bonsai",
    description: "Stunning thick banyan root trunk bonsai tree with lush glossy green canopy in ceramic pot.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    inStock: true,
    careLevel: "Moderate",
    sunlight: "Indirect Sun",
    water: "Moderate"
  },
  {
    id: "plant-12",
    name: "Echeveria Succulent Trio",
    category: "Succulents & Cacti",
    description: "Rosette-shaped fleshy succulents potted in handcrafted terracotta planter.",
    price: 320,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    inStock: true,
    careLevel: "Easy",
    sunlight: "Direct Sun",
    water: "Low"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "PPN Nursery Entrance & Plant Displays",
    category: "Nursery",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    description: "Spacious green shaded nursery aisles packed with healthy tropical and blooming plants.",
    dateAdded: "2026-07-15"
  },
  {
    id: "gal-2",
    title: "Rare Indoor Foliage Collection",
    category: "Plants",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
    description: "Curated collection of Monstera, Fiddle Leaf Figs, and Calatheas ready for homes.",
    dateAdded: "2026-07-18"
  },
  {
    id: "gal-3",
    title: "Villa Garden Landscape Project - Indiranagar",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    description: "Custom turfing, stone pathways, and palm tree lining executed by PPN Nursery team.",
    dateAdded: "2026-07-20"
  },
  {
    id: "gal-4",
    title: "Grafted Fruit Sapling Section",
    category: "Plants",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    description: "Healthy grafted Mango, Lemon, Guava, and Pomegranate saplings.",
    dateAdded: "2026-07-22"
  },
  {
    id: "gal-5",
    title: "Terracotta & Modern Ceramic Pot Section",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    description: "Hand-painted ceramic pots and eco-friendly terracotta planters.",
    dateAdded: "2026-07-25"
  },
  {
    id: "gal-6",
    title: "Rooftop Garden Setup - Whitefield",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
    description: "Lush rooftop greenery installation with automated drip irrigation.",
    dateAdded: "2026-07-28"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Anand Rajagopal",
    location: "Kithaganur, Bengaluru",
    rating: 5,
    review: "PPN Nursery is a hidden gem in Battarahalli! Bought 10 Areca Palms and grafted Alphonso saplings. The owner gave expert advice on soil mix and watering. All plants are thriving nicely!",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    date: "2026-07-12",
    status: "Approved"
  },
  {
    id: "rev-2",
    name: "Priya Sundaram",
    location: "TC Palya, Bengaluru",
    rating: 5,
    review: "Superb collection of indoor plants and flowering shrubs. I ordered doorstep delivery for my balcony garden setup. Delivery was prompt and plants arrived in perfect healthy condition!",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    date: "2026-07-18",
    status: "Approved"
  },
  {
    id: "rev-3",
    name: "Vikram Nambiar",
    location: "Virgo Nagar, Bengaluru",
    rating: 5,
    review: "Hired PPN Nursery for our villa landscaping and lawn development. Very professional team, high quality healthy saplings, and fair pricing. Highly recommended for wholesale and retail plants!",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    date: "2026-07-21",
    status: "Approved"
  },
  {
    id: "rev-4",
    name: "Sneha Kulkarni",
    location: "Old Madras Road, Bengaluru",
    rating: 5,
    review: "The plant quality is miles ahead of online nurseries! Snake plants, Money plants, and Bonsai tree were packed with rich organic compost. Great prices and very friendly staff.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "2026-07-24",
    status: "Approved"
  },
  {
    id: "rev-5",
    name: "Ramesh Sharma",
    location: "Battarahalli, Bengaluru",
    rating: 5,
    review: "One-stop destination for all plant lovers! They have everything from medicinal tulsi & neem to exotic hanging ferns and designer pots. Visited their physical nursery near TC Palya Cross.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    date: "2026-07-27",
    status: "Approved"
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Home Gardening Solutions",
    description: "Complete design, plant selection, soil enrichment, and setup for balconies, terraces, and indoor spaces.",
    iconName: "Home",
    features: ["Balcony & Terrace Layouts", "Soil & Potting Mix", "Plant Selection Guide", "Setup & Installation"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-2",
    title: "Landscape Projects",
    description: "Turnkey residential villa garden landscaping, lawn turfing, stone pathways, and garden feature design.",
    iconName: "Trees",
    features: ["Softscaping & Hardscaping", "Natural Lawn Turfing", "Irrigation Systems", "Avenue & Boundary Palms"],
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-3",
    title: "Corporate & Office Landscaping",
    description: "Air-purifying green walls, executive desk planters, and indoor biophilic designs for corporate offices.",
    iconName: "Building2",
    features: ["Biophilic Interior Design", "Vertical Green Walls", "Maintenance Subscription", "Air-Purifying Species"],
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-4",
    title: "Apartment Community Gardens",
    description: "Comprehensive greening for housing societies, common parks, entry gates, and clubhouse landscapes.",
    iconName: "Building",
    features: ["Boundary Hedging", "Aesthetic Tree Avenues", "Children Park Greening", "Bulk Supply Discounts"],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-5",
    title: "Garden Maintenance",
    description: "Periodic pruning, organic pest management, fertilization, repotting, and health check-ups.",
    iconName: "Wrench",
    features: ["Monthly Service Visits", "Organic Insecticide Spray", "Pruning & Trimming", "Nutrient Top-up"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "srv-6",
    title: "Plant Doorstep Delivery",
    description: "Safe and eco-friendly vehicle delivery across Bengaluru with safe root packing.",
    iconName: "Truck",
    features: ["Same-Day Local Delivery", "Safe Root-Ball Packing", "Unboxing Guidance", "Complimentary Fertilizer"],
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
  }
];

export const INITIAL_FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What types of plants are available at PPN Nursery?",
    answer: "We offer an extensive range of healthy plants including Indoor air-purifiers, Outdoor flowering shrubs, Grafted fruit saplings, Medicinal & herbal plants, Palms, Succulents, Hanging ferns, Bonsai, and Garden accessories.",
    category: "General",
    status: "Published"
  },
  {
    id: "faq-2",
    question: "Do you provide plant delivery services in Bengaluru?",
    answer: "Yes! We offer safe, eco-friendly doorstep delivery across Bengaluru including Battarahalli, TC Palya, Kithaganur, Whitefield, KR Puram, Indiranagar, and surrounding areas.",
    category: "Delivery",
    status: "Published"
  },
  {
    id: "faq-3",
    question: "Can I visit the nursery directly to choose plants?",
    answer: "Absolutely! You are warmly welcome to visit us at Venus Home, 57/1 Ward 52, Kithaganur Main Road, Near TC Palya Cross, Battarahalli, Bengaluru. We are open daily from 9:00 AM to 8:00 PM.",
    category: "Visit",
    status: "Published"
  },
  {
    id: "faq-4",
    question: "Do you offer landscaping and garden installation services?",
    answer: "Yes, we provide end-to-end landscaping services for residential villas, rooftops, corporate offices, hotels, and apartment complexes. Our team handles design, soil preparation, plant supply, and installation.",
    category: "Services",
    status: "Published"
  },
  {
    id: "faq-5",
    question: "How do I place bulk or wholesale orders for projects?",
    answer: "For bulk orders, you can submit an inquiry through our website form, call us directly at +91 87620 43246, or contact us on WhatsApp. We offer special discounted pricing for bulk purchases.",
    category: "Orders",
    status: "Published"
  },
  {
    id: "faq-6",
    question: "Are your plants grown organically with healthy soil mixes?",
    answer: "Yes, all our saplings are nurtured using organic manure, vermicompost, and neem cake to ensure strong root development and disease resistance.",
    category: "General",
    status: "Published"
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-1",
    name: "Srinivas Rao",
    phone: "+91 98450 12345",
    email: "srinivas.rao@gmail.com",
    requirement: "Wholesale Order",
    plantType: "Areca Palms & Golden Pothos",
    quantity: "50 Plants",
    message: "Need 50 Areca Palms (5ft height) and 30 hanging pothos pots for a commercial office layout near ITPL.",
    date: "2026-07-29",
    status: "New"
  },
  {
    id: "inq-2",
    name: "Meenakshi Reddy",
    phone: "+91 97312 98765",
    email: "meenakshi.r@yahoo.com",
    requirement: "Landscaping",
    plantType: "Lawn & Flowering Shrubs",
    quantity: "Villa Garden (1200 sq ft)",
    message: "Looking for complete landscape setup for my new villa in Kithaganur. Would like to schedule a site visit.",
    date: "2026-07-28",
    status: "Contacted"
  },
  {
    id: "inq-3",
    name: "Karthik V",
    phone: "+91 88841 55221",
    email: "karthik.v@hotmail.com",
    requirement: "Retail Purchase",
    plantType: "Grafted Alphonso & Lemon",
    quantity: "4 Saplings",
    message: "Inquiring about price for 4ft grafted Alphonso mango saplings and sweet lime plants.",
    date: "2026-07-27",
    status: "Closed"
  }
];

export const DEFAULT_ADMIN: AdminUser = {
  name: "Nursery Manager",
  email: "admin@ppnnursery.com",
  username: "admin",
  role: "Super Admin",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
};

export const INITIAL_ACTIVITY_LOGS: ActivityLog[] = [
  {
    id: "act-1",
    action: "Inquiry Received",
    details: "Srinivas Rao requested quote for 50 Areca Palms",
    timestamp: "2026-07-29 10:45 AM",
    user: "System"
  },
  {
    id: "act-2",
    action: "Plant Added",
    details: "Added 'Ficus Microcarpa Bonsai' to catalog",
    timestamp: "2026-07-28 04:30 PM",
    user: "admin"
  },
  {
    id: "act-3",
    action: "Inquiry Updated",
    details: "Marked Meenakshi Reddy inquiry as Contacted",
    timestamp: "2026-07-28 02:15 PM",
    user: "admin"
  }
];
