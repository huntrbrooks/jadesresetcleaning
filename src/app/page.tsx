import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Regular Cleaning",
    description:
      "Weekly, fortnightly, or as-needed cleaning to keep your home consistently fresh and inviting.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    description:
      "Intensive attention to every detail — skirting boards, appliances, high-touch surfaces and beyond.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "End of Lease",
    description:
      "Bond-back ready cleans with meticulous standards. Leave your rental spotless and stress-free.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Decluttering & Organisation",
    description:
      "Sort, streamline and optimise your belongings for better flow, clarity and mental peace.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Reset Cleans",
    description:
      "One-off refreshes to restore order after life changes, guests, renovations or general buildup.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const whyChoose = [
  {
    title: "Reliable & Consistent",
    description: "Same dedicated cleaner every time. Dependable scheduling you can count on.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Thorough & Detailed",
    description: "Going beyond surface-level tidying to truly transform your space.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Trustworthy & Respectful",
    description: "Your home is treated with care. Non-judgemental, professional and discreet.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Hotel-Like Finish",
    description: "Every clean leaves your home feeling like a calm, welcoming retreat.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    description: "Weekly, fortnightly or one-off. Book around your life, not the other way around.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Local Melbourne Pro",
    description: "Based in Melbourne CBD and servicing inner suburbs with personal, attentive care.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "1",
    title: "Get in Touch",
    description:
      "Reach out via the contact form, email or phone. Tell me about your home and what you need.",
  },
  {
    step: "2",
    title: "Receive Your Quote",
    description:
      "I'll provide a transparent, no-obligation quote tailored to your space and requirements.",
  },
  {
    step: "3",
    title: "Enjoy Your Reset",
    description:
      "Sit back and relax while your home is transformed into a calm, organised sanctuary.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Fitzroy",
    text: "Jade is incredible. My apartment has never felt so peaceful. She goes above and beyond every single time and I genuinely look forward to coming home after she's been.",
  },
  {
    name: "Tom & Lisa K.",
    location: "South Yarra",
    text: "We used Jade for our end of lease clean and got our full bond back with zero issues. She was thorough, punctual and so easy to communicate with. Highly recommend.",
  },
  {
    name: "Rebecca D.",
    location: "Carlton",
    text: "The decluttering session changed my life. Jade helped me sort through years of accumulated stuff with zero judgement. My home finally feels like it has room to breathe.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-sage-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-green-700 font-medium text-sm tracking-wide uppercase mb-4">
                Melbourne CBD &amp; Inner Suburbs
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                A clean home.
                <br />
                <span className="text-green-600">A calmer mind.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Professional residential cleaning that goes beyond surface-level tidying.
                Reclaim your time, reduce stress and thrive in a space that feels truly
                refreshed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-jade.png"
                  alt="Jade from Jade's Reset Cleaning wiping a kitchen counter with eco-friendly products"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Eco-Friendly</p>
                    <p className="text-xs text-neutral-500">Natural products only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Cleaning Services Tailored to You
            </h2>
            <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
              From regular maintenance to one-off transformations, every service is
              delivered with care and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group p-6 sm:p-8 rounded-2xl border border-neutral-100 hover:border-green-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Why Melbourne Chooses Jade
            </h2>
            <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
              More than just a cleaning service — a partner in creating a home that
              supports your wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              How It Works
            </h2>
            <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
              Getting started is simple. Three easy steps to a cleaner, calmer home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm"
              >
                <div className="flex gap-1 text-green-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-green-900">{t.name}</p>
                  <p className="text-sm text-neutral-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Reset Your Home?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. Let&apos;s create a
            space where you can truly relax and thrive.
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
