import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Construction Innova - your trusted home builders and renovation experts in Alabama. Meet our team and discover our commitment to quality craftsmanship.",
  openGraph: {
    title: "About Us | Construction Innova",
    description:
      "Learn about Construction Innova - your trusted home builders and renovation experts in Alabama.",
  },
};

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-indigo-100 rounded-3xl rotate-2" />
              <Image
                src="/img/arquitecto.jpg"
                alt="Construction Innova team"
                className="relative rounded-2xl object-cover w-full shadow-xl"
                width={600}
                height={600}
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Building Dreams
                <span className="block text-rose-500">Since Day One</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take care of everything related to the design, permits,
                management of suppliers, contractors and the total construction
                until the delivery of the house. A personalized process for each
                client, from choosing the design that suits their needs and
                budget, to having a 100% finished home with the best materials
                on the market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are specialists building or remodeling houses in urban and
                beach areas throughout Alabama.
              </p>

              {/* Owner */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Arelio Morales</p>
                  <p className="text-sm text-gray-500">Founder & Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Get in touch with us for a free consultation and quote. We&apos;d
            love to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12512842842"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-rose-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (251) 284-2842
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
