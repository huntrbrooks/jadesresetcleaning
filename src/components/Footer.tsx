import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo-full.png"
              alt="Jade Reset Cleaning"
              width={180}
              height={180}
              className="w-32 sm:w-40 h-auto mb-4 brightness-0 invert"
            />
            <p className="text-green-200 text-sm leading-relaxed">
              Professional residential cleaning in Melbourne CBD and inner suburbs.
              Transforming homes into calm, organised spaces.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>
                <Link href="/services#regular" className="hover:text-white transition-colors">
                  Regular Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#deep" className="hover:text-white transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#endoflease" className="hover:text-white transition-colors">
                  End of Lease
                </Link>
              </li>
              <li>
                <Link href="/services#declutter" className="hover:text-white transition-colors">
                  Decluttering &amp; Organisation
                </Link>
              </li>
              <li>
                <Link href="/services#reset" className="hover:text-white transition-colors">
                  Reset Cleans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Jade
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-green-200 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@jadesresetcleaning.com.au" className="hover:text-white transition-colors">
                  hello@jadesresetcleaning.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0448869115" className="hover:text-white transition-colors">
                  0448 869 115
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Melbourne CBD &amp; Inner Suburbs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-8 text-center text-green-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Jade&apos;s Reset Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
