"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/exterior.jpeg",
  "/images/dining.jpeg",
  "/images/banquet.jpeg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[600px] md:min-h-[700px] flex flex-col overflow-hidden bg-[#02050A]">
      {/* Dynamic Background Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <Image
            src={src}
            alt={`Best Family Restaurant in Hazaribagh - Royal Blue Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
        </div>
      ))}
      
      {/* Premium Cinematic Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02050A]/90 via-[#050A15]/60 to-[#02050A]/95"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#02050A] via-transparent to-transparent opacity-90"></div>

      {/* Luxury Ambient Glows (Floating Effects) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-royal-blue/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-50"></div>

      {/* Main Content Wrapper */}
      <div className="flex-1 relative z-20 container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-6 flex flex-col items-center justify-center text-center">
        
        {/* Luxury Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 md:mb-10 opacity-0 animate-fade-in-up">
          <div className="glass-dark border border-white/10 px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 sm:gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-gold/30 hover:bg-white/5 transition-all duration-300">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className="text-gray-200 text-[10px] sm:text-sm font-medium tracking-wide">4.8/5 on Google Reviews</span>
          </div>
          <div className="glass-dark border border-white/10 px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 sm:gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-gold/30 hover:bg-white/5 transition-all duration-300">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <span className="text-gray-200 text-[10px] sm:text-sm font-medium tracking-wide">10k+ Happy Customers</span>
          </div>
          <div className="glass-dark border border-white/10 px-5 py-2 rounded-full hidden md:flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-gold/30 hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="text-gray-200 text-xs sm:text-sm font-medium tracking-wide">Near Vinoba Bhave University</span>
          </div>
        </div>

        {/* Positioning Statement & Headlines */}
        <span className="text-gold tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-xs font-bold uppercase mb-4 md:mb-6 opacity-0 animate-fade-in-up animation-delay-200 block">
          Hazaribagh's Premier Dining & Celebration Destination
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white font-bold mb-4 md:mb-8 drop-shadow-2xl leading-[1.1] opacity-0 animate-fade-in-up animation-delay-400 max-w-5xl mx-auto">
          Where <span className="text-white/95 relative inline-block">Exceptional Dining</span><br className="hidden md:block"/>
          <span className="md:hidden"> </span>Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#FFDF73] to-gold">Grand Celebrations</span>
        </h1>
        
        <p className="text-gray-300 text-sm sm:text-base md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-12 opacity-0 animate-fade-in-up animation-delay-600 leading-relaxed mix-blend-screen px-2">
          Experience a luxurious atmosphere offering masterfully crafted multi-cuisine delicacies and elegant banquet facilities for your most unforgettable occasions.
        </p>
        
        {/* Luxury Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto opacity-0 animate-fade-in-up animation-delay-600 max-w-sm sm:max-w-none mx-auto">
          {/* Primary CTA */}
          <a
            href="#banquets"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gold to-[#d4a821] text-[#050A15] font-bold tracking-widest uppercase text-xs sm:text-sm hover:scale-105 transition-transform duration-300 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group shrink-0"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            <span className="relative z-10">Book a Celebration</span>
          </a>
          
          {/* Secondary & Tertiary Container */}
          <div className="flex flex-row items-center justify-between w-full sm:w-auto gap-3 sm:gap-5">
            {/* Secondary CTA */}
            <a
              href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none px-2 sm:px-8 py-3.5 sm:py-4 glass text-white font-bold tracking-[0.1em] sm:tracking-widest uppercase text-[10px] sm:text-sm hover:bg-white hover:text-[#050A15] transition-all duration-300 rounded-full flex items-center justify-center gap-1.5 sm:gap-3 border border-white/20 hover:border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Reserve Table
            </a>

            {/* Tertiary CTA - Directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Royal+blue+family+restaurant+and+banquets+hall"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none px-2 sm:px-8 py-3.5 sm:py-4 glass text-white font-bold tracking-[0.1em] sm:tracking-widest uppercase text-[10px] sm:text-sm hover:bg-white hover:text-[#050A15] transition-all duration-300 rounded-full flex items-center justify-center gap-1.5 sm:gap-3 border border-white/20 hover:border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Pure Visual Luxury Scroll Indicator */}
      <div className="relative z-10 pb-12 hidden md:flex flex-col items-center justify-end opacity-0 animate-fade-in-up animation-delay-600">
        <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden rounded-full">
          {/* Animated dropping dot */}
          <div className="absolute top-0 left-0 w-full h-[6px] bg-gold rounded-full animate-scroll-drop shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
        </div>
      </div>
    </section>
  );
}
