"use client";

import Image from "next/image";

export default function Banquets() {
  const celebrationTypes = [
    {
      title: "Joyful Birthdays",
      description: "Vibrant atmospheres filled with joy, customized decorations, and delightful catering for all ages.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
      ),
      bgImage: "/images/extra1.jpeg" // Uses placeholder, adjust if needed
    },
    {
      title: "Romantic Anniversaries",
      description: "Elegant, beautifully lit settings designed to make your special day truly romantic and unforgettable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      ),
      bgImage: "/images/banquet.jpeg"
    },
    {
      title: "Family Gatherings",
      description: "Spacious, comfortable environments where everyone from children to grandparents feels right at home.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      bgImage: "/images/dining.jpeg"
    },
    {
      title: "Corporate Events",
      description: "Seamless business meetings, team lunches, or farewell parties with top-tier professional coordination.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      ),
      bgImage: "/images/exterior.jpeg"
    }
  ];

  return (
    <section id="banquets" className="py-32 bg-[#080d1a] relative overflow-hidden text-white">
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 bg-[url('/images/banquet.jpeg')] bg-cover bg-fixed opacity-5 mix-blend-luminosity"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold"></div>
            <span className="text-gold tracking-[0.3em] text-sm font-semibold uppercase">Events & Banquets</span>
            <div className="w-8 h-px bg-gold"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1] drop-shadow-xl">
            Where Your Special Moments <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Come to Life</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed font-light max-w-3xl mx-auto">
            Hazaribagh's premier destination for life’s most meaningful celebrations. Conveniently located on NH-33 near Vinoba Bhave University, we provide the perfect canvas for your memories.
          </p>
        </div>

        {/* Feature Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          {/* Left: Glass Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left z-20">
            <div className="glass p-10 md:p-12 rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[50px] group-hover:bg-gold/20 transition-colors duration-700"></div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                A Complete <span className="text-gold">Celebration Experience</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
                Organizing an event shouldn't be stressful. When you choose Royal Blue, you aren't just booking a space—you are securing a team dedicated to ensuring your event is flawless. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
                {[
                  'Spacious, beautiful halls', 
                  'Custom multi-cuisine menus', 
                  'Dedicated hospitality staff', 
                  'Theme & balloon decor'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-200 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-[#050A15] font-bold tracking-widest uppercase text-sm hover:from-white hover:to-white hover:text-[#050A15] transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] items-center gap-3"
              >
                Check Availability
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Immersive Image Layout */}
          <div className="lg:w-1/2 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
              <Image 
                src="/images/banquet.jpeg"
                alt="Luxury Banquet Hall at Royal Blue Hazaribagh"
                fill
                className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-[#080d1a]/50"></div>
              
              {/* Floating Element */}
              <div className="absolute bottom-10 right-10 left-10 md:left-auto md:w-80 glass p-6 rounded-2xl border border-gold/30 shadow-2xl transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                <h4 className="font-serif font-bold text-gold text-xl mb-2">Stress-Free Planning</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enjoy your party while we handle the excellent food, attractive décor, and professional hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Interactive Cards Grid */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl font-bold text-white mb-4">Perfect For Every Occasion</h3>
          <p className="text-gray-400">Discover the endless possibilities for your next event.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrationTypes.map((event, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              {/* Card Background Image */}
              <Image 
                src={event.bgImage}
                alt={`${event.title} at Royal Blue Banquet Hall`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              
              {/* Overlay that lightens on hover */}
              <div className="absolute inset-0 bg-[#080d1a]/20 group-hover:bg-[#080d1a]/0 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/60 to-transparent opacity-90"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-center z-10">
                <div className="w-16 h-16 mx-auto rounded-full glass border border-white/20 flex items-center justify-center mb-6 transform group-hover:-translate-y-4 transition-transform duration-500 shadow-xl text-gold group-hover:text-white group-hover:bg-gold">
                  {event.icon}
                </div>
                <h4 className="font-bold text-white text-2xl mb-3 font-serif group-hover:text-gold transition-colors">{event.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {event.description}
                </p>
              </div>
              
              {/* Border & Glow */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold/50 transition-colors duration-500 rounded-2xl shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
