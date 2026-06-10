"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Dining Experience", "Banquets & Celebrations", "Culinary Excellence"];

const galleryImages = [
  {
    src: "/images/exterior.jpeg",
    category: "Dining Experience",
    title: "A Grand Welcome",
    description: "Our beautiful exterior inviting you into a world of premium hospitality."
  },
  {
    src: "/images/dining.jpeg",
    category: "Dining Experience",
    title: "Vibrant Ambience",
    description: "Comfortable seating, elegant lighting, and a family-friendly atmosphere."
  },
  {
    src: "/images/banquet.jpeg",
    category: "Banquets & Celebrations",
    title: "Unforgettable Celebrations",
    description: "Spacious and wonderfully decorated halls ready for your special moments."
  },
  {
    src: "/images/biryani.jpeg",
    category: "Culinary Excellence",
    title: "Signature Biryani",
    description: "Aromatic and perfectly spiced, a true feast for the senses."
  },
  {
    src: "/images/tandoori.jpeg",
    category: "Culinary Excellence",
    title: "Tandoori Delights",
    description: "Fresh from our traditional clay oven."
  },
  {
    src: "/images/paneer.jpeg",
    category: "Culinary Excellence",
    title: "Rich Indian Flavors",
    description: "Authentic, mouth-watering curries prepared by expert chefs."
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-dark-bg text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3 block">Visual Storytelling</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Experience the <span className="text-gold">Atmosphere</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Take a glimpse into the Royal Blue experience. From the warmth of our family dining area to the majestic setups of our banquet halls, see where your next great memory will be made.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-royal-blue shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer border border-white/5 bg-gray-900 shadow-xl"
            >
              {/* Image */}
              <Image 
                src={image.src}
                alt={`${image.title} - Royal Blue Restaurant Hazaribagh`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold text-gold mb-2 opacity-90 group-hover:opacity-100">{image.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-20 text-center flex flex-col items-center">
          <p className="text-gray-400 italic mb-8 max-w-2xl text-lg">
            "We believe that a picture is worth a thousand words, but nothing compares to experiencing it in person. Come and see it for yourself."
          </p>
          <a
            href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border border-gold text-gold font-bold tracking-wide hover:bg-gold hover:text-royal-blue transition-all rounded-full flex items-center justify-center gap-2 group"
          >
            Visit Us Today
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
