export default function Footer() {
  return (
    <footer className="bg-[#050A15] border-t border-white/10 text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Brand & Identity */}
          <div className="col-span-1 lg:col-span-1">
            <span className="font-serif text-3xl font-bold tracking-wider text-white mb-6 inline-block">
              ROYAL<span className="text-gold">BLUE</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Hazaribagh's trusted destination for family dining, multi-cuisine excellence, and unforgettable banquet celebrations. Serving our local community with pride and royal hospitality.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.instagram.com/royal_blue_family_restaurant/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-royal-blue transition-colors text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide uppercase text-sm">Experience</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors flex items-center gap-2"><span className="text-gold opacity-0 -ml-3 transition-all">▸</span> Our Story</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors flex items-center gap-2"><span className="text-gold opacity-0 -ml-3 transition-all">▸</span> Culinary Menu</a></li>
              <li><a href="#banquets" className="hover:text-gold transition-colors flex items-center gap-2"><span className="text-gold opacity-0 -ml-3 transition-all">▸</span> Banquets & Events</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors flex items-center gap-2"><span className="text-gold opacity-0 -ml-3 transition-all">▸</span> Visual Gallery</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide uppercase text-sm">Service</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#reviews" className="hover:text-gold transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Location & Parking</a></li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Mon-Sun:</span> 
                <span className="text-gold">10:00 AM - 11:30 PM</span>
              </li>
              <li><span className="inline-block px-3 py-1 bg-white/10 text-white text-xs rounded-full mt-2">Dine-in & Takeaway</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
            <h4 className="font-bold text-white text-lg mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="text-gold mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Near Vinoba Bhave University, NH-33 Road<br/>Hazaribagh, Jharkhand 825301
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Royal+blue+family+restaurant+and+banquets+hall"
                    target="_blank"
                    rel="noreferrer" 
                    className="flex items-center gap-1 text-gold font-medium mt-2 hover:text-white transition-colors"
                  >
                    Get Directions <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-gold mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="text-sm text-gray-400 flex flex-col gap-1">
                  <a href="tel:+919471714840" className="hover:text-gold transition-colors font-medium text-white">+91 94717 14840</a>
                  <a href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings." className="hover:text-gold transition-colors">WhatsApp Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Royal Blue Family Restaurant & Banquet Hall.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>|</span>
            <span className="text-gold">Designed for Hazaribagh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
