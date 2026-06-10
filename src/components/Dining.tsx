"use client";

import { useState, useEffect } from "react";

// Mock menu data (Can be replaced with actual menu later)
const menuData = [
  {
    category: "Starters",
    image: "/images/paneer.jpeg",
    description: "Begin your royal feast with our tantalizing appetizers.",
    items: [
      { name: "Paneer Tikka", price: "₹250" },
      { name: "Crispy Corn", price: "₹220" },
      { name: "Chicken 65", price: "₹280" },
      { name: "Hara Bhara Kebab", price: "₹240" },
    ]
  },
  {
    category: "Tandoor",
    image: "/images/tandoori.jpeg",
    description: "Smoky, authentic flavors straight from our traditional clay oven.",
    items: [
      { name: "Tandoori Chicken (Half)", price: "₹350" },
      { name: "Tandoori Roti", price: "₹30" },
      { name: "Butter Naan", price: "₹50" },
      { name: "Garlic Naan", price: "₹65" },
    ]
  },
  {
    category: "Biryani",
    image: "/images/biryani.jpeg",
    description: "Aromatic basmati rice layered with rich spices and herbs.",
    items: [
      { name: "Royal Special Chicken Biryani", price: "₹380" },
      { name: "Mutton Dum Biryani", price: "₹450" },
      { name: "Veg Hyderabadi Biryani", price: "₹290" },
      { name: "Paneer Tikka Biryani", price: "₹320" },
    ]
  },
  {
    category: "Veg Main Course",
    image: "/images/dal.jpeg",
    description: "Rich, creamy, and authentic vegetarian curries.",
    items: [
      { name: "Paneer Butter Masala", price: "₹290" },
      { name: "Dal Makhani", price: "₹240" },
      { name: "Kadhai Paneer", price: "₹280" },
      { name: "Mix Veg", price: "₹250" },
    ]
  },
  {
    category: "Non Veg Main Course",
    image: "/images/extra1.jpeg",
    description: "Hearty and flavorful non-vegetarian specialties.",
    items: [
      { name: "Butter Chicken", price: "₹390" },
      { name: "Chicken Tikka Masala", price: "₹380" },
      { name: "Mutton Rogan Josh", price: "₹420" },
      { name: "Chicken Do Pyaza", price: "₹360" },
    ]
  },
  {
    category: "Chinese",
    image: "/images/extra2.jpeg",
    description: "Wok-tossed Indo-Chinese favorites with a spicy kick.",
    items: [
      { name: "Chilli Chicken", price: "₹290" },
      { name: "Veg Manchurian", price: "₹240" },
      { name: "Hakka Noodles", price: "₹210" },
      { name: "Fried Rice", price: "₹220" },
    ]
  },
  {
    category: "Royal Blue Special Kebab Veg",
    image: "/images/paneer.jpeg",
    description: "Our Chef's exclusive vegetarian kebab creations.",
    items: [
      { name: "Royal Veg Platter", price: "₹450" },
      { name: "Dahi Ke Kebab", price: "₹280" },
      { name: "Mushroom Tikka", price: "₹290" },
    ]
  },
  {
    category: "Royal Blue Special Kebab Non Veg",
    image: "/images/tandoori.jpeg",
    description: "Signature non-vegetarian kebabs marinated to perfection.",
    items: [
      { name: "Royal Non-Veg Platter", price: "₹650" },
      { name: "Chicken Malai Tikka", price: "₹340" },
      { name: "Mutton Seekh Kebab", price: "₹420" },
    ]
  },
  {
    category: "Rice",
    image: "/images/biryani.jpeg",
    description: "Simple, fragrant rice preparations to complement your meal.",
    items: [
      { name: "Jeera Rice", price: "₹140" },
      { name: "Steamed Rice", price: "₹120" },
      { name: "Peas Pulao", price: "₹160" },
    ]
  },
  {
    category: "Paratha",
    image: "/images/dal.jpeg",
    description: "Flaky, buttery, and freshly cooked Indian flatbreads.",
    items: [
      { name: "Lachha Paratha", price: "₹60" },
      { name: "Pudina Paratha", price: "₹65" },
      { name: "Aloo Stuffed Paratha", price: "₹80" },
    ]
  },
  {
    category: "Beverages",
    image: "/images/exterior.jpeg",
    description: "Refreshing mocktails, shakes, and classic drinks.",
    items: [
      { name: "Fresh Lime Soda", price: "₹90" },
      { name: "Virgin Mojito", price: "₹150" },
      { name: "Cold Coffee with Ice Cream", price: "₹180" },
      { name: "Sweet Lassi", price: "₹110" },
    ]
  },
  {
    category: "Desserts",
    image: "/images/dining.jpeg",
    description: "A sweet conclusion to your royal dining experience.",
    items: [
      { name: "Gulab Jamun (2 pcs)", price: "₹90" },
      { name: "Rasmalai (2 pcs)", price: "₹120" },
      { name: "Sizzling Brownie with Ice Cream", price: "₹220" },
      { name: "Choice of Ice Cream", price: "₹100" },
    ]
  }
];

export default function Dining() {
  const [selectedCategory, setSelectedCategory] = useState<typeof menuData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening modal
  const openCategory = (category: typeof menuData[0]) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle closing modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCategory(null);
      document.body.style.overflow = 'auto';
    }, 300); // Wait for transition to finish
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section id="menu" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3 block">Culinary Excellence</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Explore <span className="text-gold">Our Menu</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover a world of rich flavors, crafted with the finest ingredients. From authentic tandoori delights to our signature special kebabs, every dish is prepared to deliver a royal experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuData.map((cat, index) => (
            <div 
              key={index}
              onClick={() => openCategory(cat)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative aspect-[4/3] flex flex-col justify-end shadow-lg hover:shadow-gold/20 transition-all duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{cat.category}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">{cat.description}</p>
                <div className="mt-4 flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Dishes</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        ></div>

        {/* Modal Content Box */}
        <div 
          className={`relative w-full max-w-2xl bg-[#0a0f1a] border border-gold/30 rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col max-h-[90vh] transition-all duration-500 delay-100 ${
            isModalOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          {/* Modal Header */}
          <div className="relative h-40 sm:h-48 shrink-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: selectedCategory ? `url('${selectedCategory.image}')` : 'none' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-black/40"></div>
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-gold hover:text-[#0a0f1a] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-20 border border-white/20 hover:border-transparent"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pb-4 text-center">
              <span className="text-gold tracking-[0.2em] text-xs font-semibold uppercase block mb-2">Royal Blue Menu</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">{selectedCategory?.category}</h2>
            </div>
          </div>

          {/* Modal Body (Scrollable Menu Items) */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-grow">
            <div className="space-y-6">
              {selectedCategory?.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline group">
                  <div className="flex-grow flex items-baseline">
                    <h4 className="text-white font-medium text-lg tracking-wide group-hover:text-gold transition-colors">{item.name}</h4>
                    <div className="flex-grow border-b border-dotted border-gray-600/50 mx-4 relative top-[-4px]"></div>
                  </div>
                  <span className="text-gold font-serif text-xl font-bold">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Bottom CTA within modal */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm italic mb-4">Craving this? Let us reserve a table for you.</p>
              <a 
                href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-[#0a0f1a] font-bold tracking-wide transition-colors rounded-full text-sm"
              >
                Order & Reserve via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
