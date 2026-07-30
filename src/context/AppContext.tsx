import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Plant,
  Category,
  GalleryItem,
  Testimonial,
  Service,
  FAQ,
  Inquiry,
  WebsiteSettings,
  AdminUser,
  ActivityLog,
  PageRoute
} from '../types';
import {
  INITIAL_PLANTS,
  INITIAL_CATEGORIES,
  INITIAL_GALLERY,
  INITIAL_TESTIMONIALS,
  INITIAL_SERVICES,
  INITIAL_FAQS,
  INITIAL_INQUIRIES,
  INITIAL_SETTINGS,
  DEFAULT_ADMIN,
  INITIAL_ACTIVITY_LOGS
} from '../data/initialData';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface AppContextType {
  // Navigation
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  navigateTo: (page: PageRoute, plantCategory?: string) => void;

  // Data
  plants: Plant[];
  categories: Category[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  services: Service[];
  faqs: FAQ[];
  inquiries: Inquiry[];
  settings: WebsiteSettings;
  adminUser: AdminUser;
  activityLogs: ActivityLog[];

  // Admin Auth
  isAdminLoggedIn: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;
  updateAdminProfile: (updated: Partial<AdminUser>) => void;

  // Search & Filter
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  // Modals
  enquiryPlant: Plant | null;
  setEnquiryPlant: (plant: Plant | null) => void;
  lightboxImage: { url: string; title: string; category?: string } | null;
  setLightboxImage: (img: { url: string; title: string; category?: string } | null) => void;

  // CRUD Operations
  addPlant: (plant: Omit<Plant, 'id'>) => void;
  updatePlant: (id: string, plant: Partial<Plant>) => void;
  deletePlant: (id: string) => void;

  addCategory: (cat: Omit<Category, 'id' | 'itemCount'>) => void;
  updateCategory: (id: string, cat: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addGalleryItem: (item: Omit<GalleryItem, 'id' | 'dateAdded'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;

  addTestimonial: (test: Omit<Testimonial, 'id' | 'date'>) => void;
  updateTestimonial: (id: string, test: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  addService: (srv: Omit<Service, 'id'>) => void;
  updateService: (id: string, srv: Partial<Service>) => void;
  deleteService: (id: string) => void;

  addFAQ: (faq: Omit<FAQ, 'id'>) => void;
  updateFAQ: (id: string, faq: Partial<FAQ>) => void;
  deleteFAQ: (id: string) => void;

  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  deleteInquiry: (id: string) => void;

  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;

  // Toasts
  toasts: ToastMessage[];
  addToast: (type: ToastMessage['type'], title: string, message: string) => void;
  removeToast: (id: string) => void;

  // Reset to default
  resetDataToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PLANTS: 'ppn_nursery_plants_v2',
  CATEGORIES: 'ppn_nursery_categories_v2',
  GALLERY: 'ppn_nursery_gallery_v2',
  TESTIMONIALS: 'ppn_nursery_testimonials_v2',
  SERVICES: 'ppn_nursery_services_v2',
  FAQS: 'ppn_nursery_faqs_v2',
  INQUIRIES: 'ppn_nursery_inquiries_v2',
  SETTINGS: 'ppn_nursery_settings_v2',
  ADMIN_USER: 'ppn_nursery_admin_user_v2',
  IS_LOGGED_IN: 'ppn_nursery_is_logged_in_v2',
  LOGS: 'ppn_nursery_logs_v2'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Page route state
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Load state from localStorage or initial defaults
  const [plants, setPlants] = useState<Plant[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PLANTS);
    return saved ? JSON.parse(saved) : INITIAL_PLANTS;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [faqs, setFaqs] = useState<FAQ[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FAQS);
    return saved ? JSON.parse(saved) : INITIAL_FAQS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  const [settings, setSettings] = useState<WebsiteSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [adminUser, setAdminUser] = useState<AdminUser>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMIN_USER);
    return saved ? JSON.parse(saved) : DEFAULT_ADMIN;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN);
    return saved ? JSON.parse(saved) : false;
  });

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LOGS);
    return saved ? JSON.parse(saved) : INITIAL_ACTIVITY_LOGS;
  });

  // Modals & UI states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [enquiryPlant, setEnquiryPlant] = useState<Plant | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category?: string } | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to localStorage
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PLANTS, JSON.stringify(plants)); }, [plants]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery)); }, [gallery]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials)); }, [testimonials]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs)); }, [faqs]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries)); }, [inquiries]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ADMIN_USER, JSON.stringify(adminUser)); }, [adminUser]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, JSON.stringify(isAdminLoggedIn)); }, [isAdminLoggedIn]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(activityLogs)); }, [activityLogs]);

  // Toast Helpers
  const addToast = (type: ToastMessage['type'], title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 5);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const logActivity = (action: string, details: string) => {
    const newLog: ActivityLog = {
      id: `act-${Date.now()}`,
      action,
      details,
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
      user: isAdminLoggedIn ? adminUser.username : 'Customer'
    };
    setActivityLogs((prev) => [newLog, ...prev]);
  };

  const navigateTo = (page: PageRoute, plantCategory?: string) => {
    setCurrentPage(page);
    if (plantCategory) {
      setSelectedCategory(plantCategory);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth
  const loginAdmin = (user: string, pass: string): boolean => {
    if (user === 'admin' && pass === 'admin123') {
      setIsAdminLoggedIn(true);
      addToast('success', 'Welcome Back!', 'Logged into PPN Nursery Admin Panel.');
      logActivity('Admin Login', 'Admin user logged in successfully');
      return true;
    }
    addToast('error', 'Login Failed', 'Invalid username or password. Try admin / admin123.');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    addToast('info', 'Logged Out', 'You have been logged out of the admin panel.');
    logActivity('Admin Logout', 'Admin user logged out');
    setCurrentPage('home');
  };

  const updateAdminProfile = (updated: Partial<AdminUser>) => {
    setAdminUser((prev) => ({ ...prev, ...updated }));
    addToast('success', 'Profile Updated', 'Admin profile changes saved.');
    logActivity('Profile Update', 'Updated admin profile details');
  };

  // CRUD Operations
  const addPlant = (plantData: Omit<Plant, 'id'>) => {
    const newPlant: Plant = {
      ...plantData,
      id: `plant-${Date.now()}`
    };
    setPlants((prev) => [newPlant, ...prev]);
    addToast('success', 'Plant Added', `${newPlant.name} added to catalog.`);
    logActivity('Plant Created', `Added ${newPlant.name} (${newPlant.category})`);
  };

  const updatePlant = (id: string, plantData: Partial<Plant>) => {
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...plantData } : p))
    );
    addToast('success', 'Plant Updated', 'Plant details modified successfully.');
    logActivity('Plant Updated', `Updated plant ID ${id}`);
  };

  const deletePlant = (id: string) => {
    const target = plants.find((p) => p.id === id);
    setPlants((prev) => prev.filter((p) => p.id !== id));
    addToast('info', 'Plant Deleted', `${target?.name || 'Item'} removed from database.`);
    logActivity('Plant Deleted', `Removed plant ${target?.name || id}`);
  };

  // Categories CRUD
  const addCategory = (catData: Omit<Category, 'id' | 'itemCount'>) => {
    const newCat: Category = {
      ...catData,
      id: `cat-${Date.now()}`,
      itemCount: 0
    };
    setCategories((prev) => [...prev, newCat]);
    addToast('success', 'Category Created', `New category ${newCat.name} created.`);
    logActivity('Category Created', `Added category ${newCat.name}`);
  };

  const updateCategory = (id: string, catData: Partial<Category>) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...catData } : c)));
    addToast('success', 'Category Updated', 'Category details saved.');
    logActivity('Category Updated', `Updated category ID ${id}`);
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    addToast('info', 'Category Deleted', 'Category removed.');
    logActivity('Category Deleted', `Deleted category ID ${id}`);
  };

  // Gallery CRUD
  const addGalleryItem = (itemData: Omit<GalleryItem, 'id' | 'dateAdded'>) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now()}`,
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setGallery((prev) => [newItem, ...prev]);
    addToast('success', 'Image Added', 'New gallery photo published.');
    logActivity('Gallery Photo Added', `Uploaded photo ${newItem.title}`);
  };

  const updateGalleryItem = (id: string, itemData: Partial<GalleryItem>) => {
    setGallery((prev) => prev.map((g) => (g.id === id ? { ...g, ...itemData } : g)));
    addToast('success', 'Photo Updated', 'Gallery item updated.');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
    addToast('info', 'Photo Removed', 'Image deleted from gallery.');
  };

  // Testimonial CRUD
  const addTestimonial = (testData: Omit<Testimonial, 'id' | 'date'>) => {
    const newTest: Testimonial = {
      ...testData,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials((prev) => [newTest, ...prev]);
    addToast('success', 'Review Added', 'Customer review recorded.');
  };

  const updateTestimonial = (id: string, testData: Partial<Testimonial>) => {
    setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...testData } : t)));
    addToast('success', 'Review Updated', 'Testimonial updated.');
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    addToast('info', 'Review Deleted', 'Testimonial removed.');
  };

  // Services CRUD
  const addService = (srvData: Omit<Service, 'id'>) => {
    const newSrv: Service = { ...srvData, id: `srv-${Date.now()}` };
    setServices((prev) => [...prev, newSrv]);
    addToast('success', 'Service Added', `${newSrv.title} added.`);
  };

  const updateService = (id: string, srvData: Partial<Service>) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...srvData } : s)));
    addToast('success', 'Service Saved', 'Service updated.');
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    addToast('info', 'Service Removed', 'Service removed.');
  };

  // FAQ CRUD
  const addFAQ = (faqData: Omit<FAQ, 'id'>) => {
    const newFaq: FAQ = { ...faqData, id: `faq-${Date.now()}` };
    setFaqs((prev) => [...prev, newFaq]);
    addToast('success', 'FAQ Added', 'New FAQ published.');
  };

  const updateFAQ = (id: string, faqData: Partial<FAQ>) => {
    setFaqs((prev) => prev.map((f) => (f.id === id ? { ...f, ...faqData } : f)));
    addToast('success', 'FAQ Saved', 'FAQ updated.');
  };

  const deleteFAQ = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
    addToast('info', 'FAQ Deleted', 'FAQ removed.');
  };

  // Inquiry CRUD
  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    addToast('success', 'Inquiry Submitted!', 'Thank you! PPN Nursery will contact you shortly.');
    logActivity('Inquiry Submitted', `New request from ${newInquiry.name} (${newInquiry.phone})`);
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    addToast('info', 'Status Updated', `Inquiry status changed to ${status}.`);
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    addToast('info', 'Inquiry Deleted', 'Request deleted.');
  };

  // Settings
  const updateSettings = (newSettings: Partial<WebsiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    addToast('success', 'Settings Saved', 'PPN Nursery website settings updated.');
    logActivity('Settings Modified', 'Updated website store contact and branding details');
  };

  const resetDataToDefaults = () => {
    setPlants(INITIAL_PLANTS);
    setCategories(INITIAL_CATEGORIES);
    setGallery(INITIAL_GALLERY);
    setTestimonials(INITIAL_TESTIMONIALS);
    setServices(INITIAL_SERVICES);
    setFaqs(INITIAL_FAQS);
    setInquiries(INITIAL_INQUIRIES);
    setSettings(INITIAL_SETTINGS);
    setAdminUser(DEFAULT_ADMIN);
    setActivityLogs(INITIAL_ACTIVITY_LOGS);
    addToast('info', 'Reset Complete', 'Restored all original PPN Nursery demo data.');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,

        plants,
        categories,
        gallery,
        testimonials,
        services,
        faqs,
        inquiries,
        settings,
        adminUser,
        activityLogs,

        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        updateAdminProfile,

        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,

        enquiryPlant,
        setEnquiryPlant,
        lightboxImage,
        setLightboxImage,

        addPlant,
        updatePlant,
        deletePlant,

        addCategory,
        updateCategory,
        deleteCategory,

        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,

        addTestimonial,
        updateTestimonial,
        deleteTestimonial,

        addService,
        updateService,
        deleteService,

        addFAQ,
        updateFAQ,
        deleteFAQ,

        addInquiry,
        updateInquiryStatus,
        deleteInquiry,

        updateSettings,

        toasts,
        addToast,
        removeToast,

        resetDataToDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
