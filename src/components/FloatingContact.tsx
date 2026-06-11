"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  // Show floating buttons after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check initial scroll position
    toggleVisibility();
    
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const waMessage = "Hello Royal Blue Family Restaurant, I would like to know more about table reservations and banquet bookings.";
  const waUrl = `https://wa.me/919471714840?text=${encodeURIComponent(waMessage)}`;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[999] flex flex-col gap-4 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Call Button */}
      <a
        href="tel:+919471714840"
        aria-label="Call Now"
        className="w-14 h-14 bg-royal-blue text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(10,30,80,0.5)] hover:bg-white hover:text-royal-blue border border-transparent hover:border-royal-blue transition-colors group relative"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-royal-blue px-3 py-1.5 rounded-xl text-sm font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Call Now
        </span>
      </a>

      {/* Get Directions Button */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Royal+blue+family+restaurant+and+banquets+hall"
        target="_blank"
        rel="noreferrer"
        aria-label="Get Directions"
        className="w-14 h-14 bg-white text-royal-blue rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:bg-gold hover:text-royal-blue border border-gold transition-colors group relative"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gold text-royal-blue px-3 py-1.5 rounded-xl text-sm font-bold shadow-[0_8px_30px_rgb(212,175,55,0.2)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Get Directions
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Us"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group relative"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#25D366] text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-[0_8px_30px_rgb(37,211,102,0.2)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
