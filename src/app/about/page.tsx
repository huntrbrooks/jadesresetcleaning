import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Jade's Reset Cleaning",
  description:
    "Meet Jade — Melbourne's dedicated residential cleaning professional. Learn about the person behind the service and the values that drive every clean.",
};

const values = [
  {
    title: "Thoroughness",
    description:
      "I don't cut corners. Every surface, every detail, every time. Your home deserves the same care I'd give my own.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "I show up on time, every time. You'll always know who's coming into your home and when to expect them — me.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trust & Respect",
    description:
      "Your home is your sanctuary. I treat every space with discretion and respect — no judgement, just genuine care.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Personal Touch",
    description:
      "As a solo operator, you deal directly with me. No call centres, no rotating staff — just consistent, personal service.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-sage-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
              Meet Jade
            </h1>
            <p className="mt-4 text-lg text-neutral-500">
              The person behind the clean.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/jade-organising.png"
                alt="Jade organising and decluttering a living room entertainment unit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p className="text-xl leading-relaxed">
                Hi, I&apos;m Jade — and I believe your home should be a place where you can
                truly relax, recharge and feel at peace.
              </p>
              <p>
                I started Jade&apos;s Reset Cleaning because I saw how much a clean, well-organised
                home can change the way people feel. For busy professionals juggling
                demanding careers and full lives, coming home to a calm, fresh space
                isn&apos;t a luxury — it&apos;s essential.
              </p>
              <p>
                What sets my service apart is the level of care and attention I bring to
                every home. I&apos;m not here to rush through a checklist. I&apos;m here to
                genuinely transform your space — from the skirting boards to the feeling
                you get when you walk through the door.
              </p>
              <p>
                As a solo operator based in Melbourne&apos;s inner suburbs, you&apos;ll always
                deal directly with me. That means consistent quality, reliable
                scheduling and someone who actually gets to know your home and
                preferences over time.
              </p>
              <p>
                Whether you need weekly maintenance, a one-off deep clean, help
                decluttering, or a complete reset after a hectic period — I&apos;m here
                to help you reclaim your space and your time.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              What I Stand For
            </h2>
            <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
              These aren&apos;t just words — they&apos;re the principles behind every clean.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              Service Area
            </h2>
            <p className="text-neutral-500 text-lg mb-8">
              I service Melbourne CBD and surrounding inner suburbs including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Melbourne CBD",
                "Fitzroy",
                "Collingwood",
                "Carlton",
                "South Yarra",
                "Richmond",
                "Prahran",
                "St Kilda",
                "Brunswick",
                "Northcote",
                "South Melbourne",
                "Port Melbourne",
                "Docklands",
                "Abbotsford",
                "Cremorne",
                "Hawthorn",
              ].map((suburb) => (
                <span
                  key={suburb}
                  className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {suburb}
                </span>
              ))}
            </div>
            <p className="text-neutral-400 text-sm mt-6">
              Not listed? Get in touch — I may still be able to help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to experience the difference a thorough, personal cleaning service
            can make? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
