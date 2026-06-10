"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#050A15] text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Dynamic Image Collage */}
          <div className="lg:w-1/2 relative w-full h-[600px]">
            {/* Main Image */}
            <div className="absolute top-0 right-10 w-[80%] h-[80%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
              <Image 
                src="/images/dining.jpeg"
                alt="Luxury Dining Interior at Royal Blue Family Restaurant Hazaribagh"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/80 to-transparent opacity-60"></div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden border-[6px] border-[#050A15] shadow-2xl group z-10">
              <Image 
                src="/images/exterior.jpeg"
                alt="Exterior of Royal Blue Banquet Hall and Restaurant in Hazaribagh"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>

            {/* Floating Experience Badge (Glassmorphism) */}
            <div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 z-20">
              <div className="w-32 h-32 rounded-full glass border border-gold/30 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-float">
                <span className="text-4xl font-serif text-gold font-bold leading-none mb-1">10+</span>
                <span className="text-[10px] tracking-widest text-white uppercase text-center font-medium">Years of<br/>Legacy</span>
              </div>
            </div>
            
            {/* Decorative Dots Pattern */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 grid grid-cols-4 grid-rows-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold"></div>
              ))}
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-gold tracking-[0.2em] text-sm font-semibold uppercase">The Royal Blue Story</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-white leading-[1.1]">
              A Legacy of Taste & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Grand Celebrations</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed font-light">
              Located in the heart of Hazaribagh Town Area near Vinoba Bhave University, and easily accessible from Matwari and Korra, <strong className="text-white font-medium">Royal Blue</strong> is not just a restaurant—it’s a destination where culinary art meets majestic hospitality. 
            </p>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed font-light">
              Whether you are sharing a cozy family dinner after visiting Hazaribagh Lake, enjoying a relaxing evening near Canary Hill, or hosting a grand milestone celebration, our elegant interiors and expertly crafted multi-cuisine menu ensure every moment becomes an unforgettable memory.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-12">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 shrink-0 rounded-full glass flex items-center justify-center text-gold border border-white/5 group-hover:border-gold/50 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-gold transition-colors">Premium Ambiance</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Luxurious interiors, soft ambient lighting, and welcoming energy.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group">
                <div className="w-14 h-14 shrink-0 rounded-full glass flex items-center justify-center text-gold border border-white/5 group-hover:border-gold/50 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-gold transition-colors">Unforgettable Events</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Spacious banquet halls dedicated to your most special days.</p>
                </div>
              </div>
            </div>

            <a href="#menu" className="group inline-flex items-center gap-4 text-white font-bold tracking-widest uppercase text-sm">
              <span className="relative">
                Discover Our Menu
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#050A15] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
