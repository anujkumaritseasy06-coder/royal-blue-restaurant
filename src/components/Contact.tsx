"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-bg text-white relative border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3 block">Plan Your Visit</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            We're Ready to <span className="text-gold">Welcome You</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Whether you're craving a delicious family dinner, planning a milestone birthday, or organizing a grand corporate banquet, our team is here to make it effortless and extraordinary.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details & Actions */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            
            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
                target="_blank"
                rel="noreferrer"
                className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <svg className="w-6 h-6 text-white group-hover:text-royal-blue transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors">WhatsApp Us</h3>
                <p className="text-gray-400 text-sm mb-3">Fastest for reservations & inquiries</p>
                <span className="text-gold text-sm font-semibold mt-auto">Click to Chat &rarr;</span>
              </a>

              {/* Call Card */}
              <a 
                href="tel:+919471714840"
                className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <svg className="w-6 h-6 text-white group-hover:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors">Call Direct</h3>
                <p className="text-gray-400 text-sm mb-3">Speak to our event planners instantly</p>
                <span className="text-gold text-sm font-semibold mt-auto">+91 94717 14840 &rarr;</span>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Prime Location</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Near Vinoba Bhave University, NH-33 Road<br />
                    Hazaribagh, Jharkhand 825301
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Royal+blue+family+restaurant+and+banquets+hall" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-2 hover:underline"
                  >
                    Get Directions <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-white/10"></div>

              <div className="flex gap-4 items-start">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Operating Hours</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Monday - Sunday<br />
                    <span className="text-gold font-medium">10:00 AM - 11:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map/Location Area */}
          <div className="lg:w-1/2 w-full h-[400px] lg:h-auto rounded-2xl overflow-hidden relative group border border-white/10 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58307.69275575625!2d85.30148024863281!3d24.022925100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49de524f822e3%3A0x654e38bc494a0afd!2sRoyal%20blue%20family%20restaurant%20and%20banquets%20hall!5e0!3m2!1sen!2sin!4v1781092141399!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full filter grayscale-[20%] contrast-[1.1] opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Get Directions Overlay Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto z-20">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Royal+blue+family+restaurant+and+banquets+hall" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gold text-royal-blue font-bold tracking-wide hover:bg-white transition-colors rounded-full shadow-xl flex items-center justify-center gap-2 border border-gold/50"
              >
                Get Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
