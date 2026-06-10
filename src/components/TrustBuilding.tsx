export default function TrustBuilding() {
  const advantages = [
    {
      title: "Family-Friendly Atmosphere",
      description: "A comfortable, welcoming environment where families can relax, dine, and spend quality time together without worry.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      title: "Memorable Celebrations",
      description: "From intimate anniversary dinners to grand birthday parties, we provide the perfect backdrop for your most cherished moments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
      )
    },
    {
      title: "Culinary Excellence",
      description: "A diverse multi-cuisine menu crafted by expert chefs, ensuring every bite is as spectacular as the ambiance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
      )
    },
    {
      title: "Majestic Banquets",
      description: "Spacious and beautifully decorated halls ready to host your events with impeccable service and elegance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-dark-bg text-white relative border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Trust Indicators Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 -mt-16 relative z-20">
          <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
            <span className="block font-serif text-5xl font-bold text-gold mb-2">4.8</span>
            <div className="flex justify-center gap-1 text-gold mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-1">Google Reviews</h3>
            <p className="text-gray-400 text-sm">Hundreds of 5-star experiences</p>
          </div>
          
          <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300 bg-gradient-to-br from-royal-blue-light/50 to-transparent border-gold/20">
            <span className="block font-serif text-5xl font-bold text-white mb-4">10k+</span>
            <h3 className="font-bold text-lg mb-1 text-gold">Happy Guests</h3>
            <p className="text-gray-400 text-sm">Trusted by families across Hazaribagh</p>
          </div>
          
          <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
            <span className="block font-serif text-5xl font-bold text-gold mb-4">Top</span>
            <h3 className="font-bold text-lg mb-1">Celebration Venue</h3>
            <p className="text-gray-400 text-sm">The first choice for memorable events</p>
          </div>
        </div>

        {/* Why Choose Us Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3 block">Why Choose Royal Blue</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            More Than a Restaurant, <br/>
            <span className="text-gold">A Destination for Memories</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe that great food should be paired with an unforgettable atmosphere. From the moment you walk through our doors, our priority is to provide an experience that makes you want to return.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((adv, index) => (
            <div key={index} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-colors group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-royal-blue flex items-center justify-center border border-white/10 group-hover:bg-gold transition-colors">
                <div className="text-gold group-hover:text-royal-blue transition-colors">
                  {adv.icon}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{adv.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-20 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-gray-300 max-w-4xl mx-auto">
            "Whether it's a cozy dinner for two or a grand celebration for two hundred, Royal Blue Family Restaurant & Banquet Hall promises an experience built on trust, elegance, and exceptional hospitality."
          </p>
        </div>

      </div>
    </section>
  );
}
