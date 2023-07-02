import Image from 'next/image'
import { WhyChooseUs, Faqs, Testimonials } from '@/components/'

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <section
        className="relative main-hero "
      >
        <div
          className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/25"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-12 md:pb-60 xl:pb-80"
        >
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-5xl font-extrabold sm:text-5xl">
              We Build
              <strong className="block font-extrabold text-rose-700">
                Your Dream
              </strong>
            </h2>

            <h1 className="inline-block px-2 my-4 py-2 sm:text-left text-2xl sm:leading-relaxed bg-white/70 rounded-lg shadow-md font-semibold text-center md:text-left">
              Home Builders and Renovation
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="tel:+12512842842"
                className="block w-1/2 rounded-md mx-auto sm:ml-0 bg-rose-600 sm:px-12 py-3 text-xl font-medium text-white shadow hover:bg-rose-700 hover:scale-105 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto duration-500"
              >
                (251) 284-2842
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHT TO CHOOSE US */}
      <WhyChooseUs />

      {/* HOW IT WORKS */}
      <section className="text-gray-600 body-font bg-gray-100 py-24">
        <h2 className="headings">How it works</h2>

        <div className="container px-5 mx-auto lg:w-8/12 flex flex-wrap">
          <div className="flex flex-wrap w-full relative justify-center">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p className="leading-relaxed">Contact us and we will meet shortly to analyze your request and make the quote.</p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p className="leading-relaxed">Once the fee is agreed, and the agreed percentage is paid, we will start the project</p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p className="leading-relaxed">We are ready to deliver the keys to your new home with all the licenses and documents</p>
                </div>
              </div>
            </div>

            <Image src="/img/steps.jpg" alt="image steps" width={500} height={300} className="object-cover object-center rounded-lg lg:w-3/5 md:w-1/2 md:mt-0 mt-12 transform hover:scale-105 duration-500 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* GALLERY */}
      <section className="text-gray-600 body-font pb-24">
        <h2 className="headings">Image Gallery</h2>

        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/img/slide2.jpg"
                  alt="image slide2"
                  width={500} height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />

              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/img/bath1.jpg"
                  alt="image bath 1"
                  width={500}
                  height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  src="/img/bath4.jpg"
                  alt="image bath 4"
                  width={500}
                  height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  src="/img/slide1.jpg"
                  alt="image Slide 1"
                  width={500}
                  height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/img/kitchen3.jpg"
                  alt="image kitchen 3"
                  width={500}
                  height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/img/kitchen2.jpg"
                  alt="image kitchen 2"
                  width={500}
                  height={300}
                  className="hover:grayscale object-cover rounded-lg w-full h-full object-center block transition hover:rotate-2 hover:scale-95 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <Faqs />
    </>
  )
}
