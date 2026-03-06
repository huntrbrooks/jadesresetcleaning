import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Jade's Reset Cleaning",
  description:
    "Explore our full range of residential cleaning services in Melbourne — regular cleaning, deep cleans, end of lease, decluttering and reset cleans.",
};

const services = [
  {
    id: "regular",
    title: "Regular Cleaning",
    subtitle: "Weekly, fortnightly or as-needed",
    description:
      "Consistent, reliable cleaning that keeps your home feeling fresh between deeper cleans. I'll maintain your space to the highest standard so you can focus on what matters most.",
    includes: [
      "Dusting and wiping all surfaces",
      "Vacuuming and mopping floors",
      "Kitchen and bathroom cleaning",
      "Tidying and general straightening",
      "Bed making and linen changes",
      "Emptying bins and replacing liners",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    subtitle: "When your home needs extra love",
    description:
      "An intensive, top-to-bottom clean that tackles every corner, crevice and overlooked surface. Perfect as a seasonal refresh or a first-time clean before transitioning to regular visits.",
    includes: [
      "Everything in a regular clean, plus:",
      "Inside cupboards and drawers",
      "Skirting boards and door frames",
      "Light switches and power points",
      "Appliance exteriors and interiors",
      "Window sills and tracks",
      "Behind and under furniture",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "endoflease",
    title: "End of Lease Cleaning",
    subtitle: "Bond-back confidence",
    description:
      "Moving out? I'll make sure your property is left in pristine condition to satisfy even the strictest property managers. Meticulous, thorough and designed to help you get your full bond back.",
    includes: [
      "Complete property deep clean",
      "Oven and rangehood degreasing",
      "Bathroom descaling and sanitising",
      "Carpet vacuuming and spot treatment",
      "Window cleaning (interior)",
      "Wall marks and scuff removal",
      "Garage and balcony sweep",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "declutter",
    title: "Decluttering & Home Organisation",
    subtitle: "Clear space, clear mind",
    description:
      "More than just tidying — I'll help you sort, streamline and organise your belongings room by room. Together we'll create a system that's easy to maintain and brings calm to your daily routine.",
    includes: [
      "Room-by-room assessment",
      "Sorting and categorising belongings",
      "Donation and disposal coordination",
      "Drawer and cupboard organisation",
      "Storage solutions and labelling",
      "Pantry and wardrobe restructuring",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "reset",
    title: "Reset Cleans",
    subtitle: "A fresh start when you need it most",
    description:
      "Life gets busy and homes can fall behind. Whether it's after hosting guests, a renovation, illness or just a period of overwhelm — a reset clean restores order so you can move forward feeling lighter.",
    includes: [
      "Customised to your specific needs",
      "Kitchen and living area restoration",
      "Bathroom deep refresh",
      "Laundry and linen cycling",
      "Surface decluttering",
      "General tidying and reorganisation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-sage-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
                Services
              </h1>
              <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
                Every home is different. That&apos;s why I offer a range of services designed
                to meet you exactly where you are — whether that&apos;s a weekly refresh or a
                full-scale transformation.
              </p>
            </div>
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-xl hidden lg:block">
              <Image
                src="/jade-vacuuming.png"
                alt="Jade vacuuming a living room floor during a regular cleaning session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-16 items-start`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-green-600 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Get a quote for this service
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-sage-50 rounded-2xl p-6 sm:p-8">
                    <h3 className="font-semibold text-green-900 mb-4">
                      What&apos;s included:
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-neutral-600">
                          <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            No worries — get in touch and I&apos;ll help you figure out the best option for
            your home. Every quote is free and tailored to your space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
