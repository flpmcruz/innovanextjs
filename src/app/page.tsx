import Image from "next/image";
import Link from "next/link";
import { WhyChooseUs, Faqs, Testimonials } from "@/components/";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/fotos/photo_10.jpeg"
          alt="Construction Innova project"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Home Builders & Renovation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              We Build
              <span className="block text-rose-500">Your Dream</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
              Professional construction and renovation services in Alabama.
              Quality craftsmanship, on-time delivery, and competitive pricing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12512842842"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-rose-700 transition-all duration-300 hover:shadow-rose-600/25 hover:-translate-y-0.5"
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
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
              Simple Process
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              How It Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Contact & Consultation",
                  description:
                    "Contact us and we will meet shortly to analyze your request and prepare a detailed quote.",
                },
                {
                  step: "02",
                  title: "Agreement & Start",
                  description:
                    "Once the fee is agreed and the deposit is paid, we start your project right away.",
                },
                {
                  step: "03",
                  title: "Delivery",
                  description:
                    "We deliver the keys to your new home with all the licenses and documents ready.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-3xl -rotate-2" />
              <Image
                src="/fotos/photo_14.jpeg"
                alt="Construction project in progress"
                width={600}
                height={450}
                className="relative rounded-2xl object-cover w-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our Recent Work
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[40, 27, 23, 7, 33, 56].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl group">
                <Image
                  src={`/fotos/photo_${n}.jpeg`}
                  alt={`Construction project ${n}`}
                  width={500}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Projects
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <Faqs />
    </>
  );
}
