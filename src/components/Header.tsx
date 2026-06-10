"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex flex-col group">
          <span className="font-serif text-2xl md:text-[28px] font-bold tracking-widest text-white leading-none group-hover:opacity-90 transition-opacity">
            ROYAL<span className="text-gold">BLUE</span>
          </span>
          <span className="text-gold/80 text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-medium mt-1.5 md:mt-1 leading-none">
            Family Restaurant & Banquet Hall
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#about" className="text-white hover:text-gold transition-colors">
            ABOUT
          </Link>
          <Link href="#menu" className="text-white hover:text-gold transition-colors">
            DINING
          </Link>
          <Link href="#banquets" className="text-white hover:text-gold transition-colors">
            BANQUETS
          </Link>
          <Link href="#contact" className="text-white hover:text-gold transition-colors">
            CONTACT
          </Link>
          <a
            href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border-2 border-gold text-gold hover:bg-gold hover:text-royal-blue transition-all font-semibold rounded-full"
          >
            BOOK NOW
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 right-0 border-t border-white/10 flex flex-col items-center py-6 gap-6">
          <Link
            href="#about"
            className="text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="#menu"
            className="text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DINING
          </Link>
          <Link
            href="#banquets"
            className="text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BANQUETS
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
          <a
            href="https://wa.me/919471714840?text=Hello%20Royal%20Blue%20Family%20Restaurant%2C%20I%20would%20like%20to%20know%20more%20about%20table%20reservations%20and%20banquet%20bookings."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border-2 border-gold text-gold hover:bg-gold hover:text-royal-blue transition-all font-semibold rounded-full"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}
