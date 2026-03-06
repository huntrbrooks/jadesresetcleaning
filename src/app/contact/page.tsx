"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const serviceOptions = [
  "Regular Cleaning",
  "Deep Cleaning",
  "End of Lease Cleaning",
  "Decluttering & Organisation",
  "Reset Clean",
  "Not sure — need advice",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-sage-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Ready for a cleaner, calmer home? Fill out the form below and I&apos;ll
            get back to you with a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-900 mb-3">
                    Thanks for reaching out!
                  </h2>
                  <p className="text-neutral-600">
                    I&apos;ll review your details and get back to you within 24 hours with a
                    personalised quote. Chat soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="0448 869 115"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="suburb"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Suburb
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        placeholder="e.g. Fitzroy"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-neutral-700 mb-1.5"
                    >
                      Service interested in *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="bedrooms"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Bedrooms
                      </label>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select</option>
                        <option value="studio">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="bathrooms"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Bathrooms
                      </label>
                      <select
                        id="bathrooms"
                        name="bathrooms"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                      placeholder="Tell me a bit about your home and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Send Quote Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-sage-50 rounded-2xl p-6 sm:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-green-900 mb-6">
                  Contact Details
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <a
                        href="mailto:hello@jadesresetcleaning.com.au"
                        className="text-green-700 font-medium hover:text-green-800 transition-colors"
                      >
                        hello@jadesresetcleaning.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <a
                        href="tel:0448869115"
                        className="text-green-700 font-medium hover:text-green-800 transition-colors"
                      >
                        0448 869 115
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Service Area</p>
                      <p className="text-green-700 font-medium">
                        Melbourne CBD &amp; Inner Suburbs
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-sage-200" />

                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    Response Time
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    I typically respond within 24 hours. For urgent enquiries,
                    give me a call and I&apos;ll do my best to get back to you sooner.
                  </p>
                </div>

                <hr className="my-6 border-sage-200" />

                <div>
                  <h3 className="font-semibold text-green-900 mb-3">
                    Free Quotes
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    All quotes are free, transparent and tailored to your specific
                    needs. No hidden fees, no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
