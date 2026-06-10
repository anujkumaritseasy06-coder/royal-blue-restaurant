"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to make a reservation before visiting?",
    answer: "While walk-ins are always welcome, we highly recommend making a reservation, especially for dinner or on weekends, to ensure we can provide you with the best seating and immediate service without any wait time."
  },
  {
    question: "Can I book the banquet hall for a birthday or anniversary?",
    answer: "Absolutely! Our banquet hall is the perfect venue for birthdays, anniversaries, ring ceremonies, and private family gatherings. We handle everything from customized themes and balloon decorations to curated multi-cuisine catering."
  },
  {
    question: "What cuisines do you serve?",
    answer: "We offer a diverse multi-cuisine menu designed to satisfy every palate. Our specialties include authentic North Indian dishes, tandoor delicacies, flavorful biryanis, and popular Chinese starters, with extensive options for both vegetarians and non-vegetarians."
  },
  {
    question: "Is there parking available near the restaurant?",
    answer: "Yes, we provide convenient parking facilities for our guests. Our location near Vinoba Bhave University is easily accessible, ensuring a hassle-free arrival for you and your family."
  },
  {
    question: "How far in advance should I book for a large event?",
    answer: "For large banquets or corporate events, we recommend booking at least 2 to 3 weeks in advance. This allows our event planners ample time to arrange customized seating, special menus, and decorations tailored to your specific needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#050A15] relative text-white overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-royal-blue/10 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* FAQ Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold"></div>
            <span className="text-gold tracking-[0.3em] text-sm font-semibold uppercase">Common Questions</span>
            <div className="w-8 h-px bg-gold"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-[1.1]">
            Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Help You</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Planning a visit or a special celebration? Here are answers to some of the most common questions from our guests to help you proceed with complete confidence.
          </p>
        </div>

        {/* Premium FAQ Accordion */}
        <div className="space-y-4 mb-32 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass border rounded-2xl overflow-hidden transition-all duration-500 group ${
                  isOpen 
                    ? 'border-gold/40 bg-white/[0.03] shadow-[0_10px_30px_rgba(212,175,55,0.05)]' 
                    : 'border-white/10 hover:border-gold/30 hover:bg-white/[0.02]'
                }`}
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`font-serif text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 ${
                    isOpen ? 'border-gold bg-gold text-[#050A15] rotate-180' : 'border-white/20 text-gold group-hover:border-gold/50'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="w-12 h-px bg-gold/30 mb-6"></div>
                  <p className="text-gray-300 leading-relaxed font-light text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Final Conversion CTA */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
          {/* Background Image with Parallax feel */}
          <div className="absolute inset-0 bg-[url('/images/exterior.jpeg')] bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110"></div>
          
          {/* Elegant Dark Overlays */}
          <div className="absolute inset-0 bg-[#050A15]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A15] via-[#050A15]/80 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-3/5 text-left">
              <span className="text-gold tracking-[0.2em] text-xs font-semibold uppercase block mb-4">Your Table Awaits</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1]">
                Ready for an <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Unforgettable Experience?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl leading-relaxed font-light">
                Whether you are planning a cozy family dinner or a grand milestone celebration, Royal Blue Family Restaurant & Banquet Hall is ready to welcome you with exceptional food and warm hospitality.
              </p>
            </div>
            
            <div className="lg:w-2/5 flex flex-col gap-4 w-full">
              <a
                href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
                target="_blank"
                rel="noreferrer"
                className="w-full px-8 py-5 bg-gradient-to-r from-gold to-yellow-500 text-[#050A15] font-bold tracking-widest uppercase text-sm hover:from-white hover:to-white hover:text-[#050A15] transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
              >
                Reserve Your Table
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="tel:+919471714840"
                className="w-full px-8 py-5 glass border border-white/20 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-gold transition-all rounded-full flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call to Book Banquet
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
