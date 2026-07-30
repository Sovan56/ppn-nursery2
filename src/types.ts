export interface Plant {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  inStock: boolean;
  careLevel: 'Easy' | 'Moderate' | 'Expert';
  sunlight: 'Direct Sun' | 'Indirect Sun' | 'Partial Shade' | 'Low Light';
  water: 'Low' | 'Moderate' | 'Frequent';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  status: 'Active' | 'Inactive';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plants' | 'Nursery' | 'Landscapes' | 'Accessories';
  image: string;
  description?: string;
  dateAdded: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  photo: string;
  date: string;
  status: 'Approved' | 'Pending';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  status: 'Published' | 'Draft';
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  requirement: 'Retail Purchase' | 'Wholesale Order' | 'Landscaping' | 'Garden Maintenance' | 'Consultation';
  plantType?: string;
  quantity?: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export interface WebsiteSettings {
  businessName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  locationLandmark: string;
  cityStatePincode: string;
  businessHours: string;
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  rating: number;
  totalReviews: number;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
}

export interface AdminUser {
  name: string;
  email: string;
  username: string;
  role: string;
  photo: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  details: string;
  timestamp: string;
  user: string;
}

export type PageRoute = 'home' | 'about' | 'plants' | 'gallery' | 'services' | 'testimonials' | 'faq' | 'contact' | 'admin' | '404';
