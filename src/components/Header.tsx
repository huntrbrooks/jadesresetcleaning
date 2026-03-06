"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">J</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-green-800">
                Jade&apos;s Reset
              </span>
              <span className="hidden sm:inline text-sm text-sage-600 ml-1">
                Cleaning
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-green-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-100 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-neutral-600 hover:text-green-700 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
