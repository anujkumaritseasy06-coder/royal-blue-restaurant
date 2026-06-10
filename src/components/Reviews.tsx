"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    type: "Family Dinner",
    text: "We visited for my father's birthday and the experience was exceptional. The family-friendly environment made everyone comfortable, and the Paneer Butter Masala was the best we've had in Hazaribagh. Truly a place that understands hospitality.",
    rating: 5,
    initial: "P"
  },
  {
    name: "Rahul Verma",
    type: "Anniversary Celebration",
    text: "Hosted our 10th anniversary party in their banquet hall. The team took care of everything from the beautiful balloon decorations to the catering. Our guests haven't stopped talking about the Royal Blue Special Biryani. Completely stress-free planning!",
    rating: 5,
    initial: "R"
  },
  {
    name: "Amit Kumar",
    type: "Corporate Event",
    text: "Organized a farewell lunch for our office colleagues here. The seating was spacious, the service was highly professional, and the multi-cuisine options ensured everyone had something they loved. Highly recommended for group gatherings.",
    rating: 5,
    initial: "A"
  },
  {
    name: "Neha Gupta",
    type: "Casual Dining",
    text: "My favorite spot near Vinoba Bhave University! The ambience is so vibrant and welcoming. Whether I'm dropping by with friends for mocktails and starters or having a full dinner, the quality and cleanliness are always top-notch.",
    rating: 5,
    initial: "N"
  }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-dark-bg relative overflow-hidden text-foreground">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-[0.03] hidden md:block pointer-events-none">
        <svg className="absolute -top-10 left-10 w-96 h-96 text-gold transform -rotate-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.2em] md:tracking-[0.3em] text-xs font-bold uppercase mb-4 block opacity-90">Community Trust</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFDF73]">Hazaribagh</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 font-light max-w-2xl mx-auto">
            Our greatest achievement isn't just our food; it's the smiles, memories, and thousands of returning guests who have made Royal Blue their second home for celebrations.
          </p>
          
          {/* Major Trust Indicator Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/10">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
            <span className="font-bold text-white text-lg">4.8/5 Rating</span>
            <span className="text-gray-300 font-medium">Based on 500+ Google Reviews</span>
          </div>
        </div>

        {/* Testimonials Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl transition-all duration-500 border ${
                index === activeIndex 
                  ? "bg-gradient-to-br from-royal-blue-light to-royal-blue text-white shadow-[0_0_30px_rgba(212,175,55,0.15)] border-gold/30 transform -translate-y-2 scale-105 z-10" 
                  : "glass text-gray-300 hover:shadow-xl hover:bg-white/10 cursor-pointer border-white/5"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === activeIndex ? "bg-gold text-royal-blue" : "bg-white/10 text-gold"
                }`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className={`text-xs uppercase tracking-wider font-semibold ${
                    index === activeIndex ? "text-gold" : "text-gray-400"
                  }`}>{review.type}</span>
                </div>
              </div>
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className={`italic text-sm leading-relaxed ${
                index === activeIndex ? "text-gray-100" : "text-gray-400"
              }`}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="glass-dark p-10 md:p-16 rounded-3xl text-center border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of happy customers who have made Royal Blue their trusted choice for excellent dining and flawless celebrations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-gold text-royal-blue font-bold tracking-wide hover:bg-gold-light transition-colors rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2"
              >
                Reserve Your Table
              </a>
              <a
                href="#banquets"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 transition-colors rounded-full flex items-center justify-center gap-2"
              >
                Host an Event With Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Review JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "@id": "https://royalbluehazaribagh.com",
            "name": "Royal Blue Family Restaurant & Banquet Hall",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500",
              "bestRating": "5"
            },
            "review": reviews.map((review) => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5"
              },
              "reviewBody": review.text
            }))
          })
        }}
      />
    </section>
  );
}
