import Image from 'next/image'

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
            <h1 className="text-5xl font-extrabold sm:text-5xl">
              We Build
              <strong className="block font-extrabold text-rose-700">
                Your Dream
              </strong>
            </h1>

            <p className="inline-block px-2 my-4 py-2 sm:text-left text-2xl sm:leading-relaxed bg-white/70 rounded-lg shadow-md font-semibold text-center md:text-left">
              Home Builders and Renovation
            </p>

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
      <section className="text-gray-600 body-font w-4/5 mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="headings">Why to Choose Us</h2>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/img/bestPrice.jpg"
                  alt="image best price"
                  width={500}
                  height={300}
                  className="object-cover object-center h-full w-full transform hover:scale-110 duration-500"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Best Price</h2>
              <p className="text-base leading-relaxed mt-2">We guarantee the best prices on the market. Show us a quote and we will improve the price.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/img/moreforless.jpg"
                  alt="image moreforless"
                  width={500}
                  height={300}
                  className="object-cover object-center h-full w-full transform hover:scale-110 duration-500"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">More for less</h2>
              <p className="text-base leading-relaxed mt-2">Our services will bring you more value for less expenses. We are connected with the best providers in Alabama.</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  src="/img/faster.jpg"
                  alt="image faster"
                  width={500}
                  height={300}
                  className="object-cover object-center h-full w-full transform hover:scale-110 duration-500"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">We are faster</h2>
              <p className="text-base leading-relaxed mt-2">We are extremely fast building and remodeling homes. In urban or beach areas.</p>
            </div>
          </div>
        </div>
      </section>

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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto lg:w-8/12">
          <h2 className="headings">Testimonials</h2>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Innova Construction is an amazing company with caring employees. They are at the top of our builder list for professionalism, accurate scheduling, and timely communication (just to name a few). Anybody who wants the best in designing and building should go visit their show room and and check out all their awards!”</p>
                <p className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Richard Jr</span>
                    <span className="text-gray-700 text-sm">CLIENT</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">“They did a complete build out of our basement. Their quality of work is superior. They came in and did the design, helped us with color choices and they finished ON TIME! The construction crew was professional, clean and courteous. I would highly recommend them for their any remodel project you are considering.”</p>
                <p className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Jhon Cruise</span>
                    <span className="text-gray-700 text-sm">CLIENT</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="headings">Frequently Asked Questions</h2>
          <p className="max-w-lg px-6 mx-auto text-center">
            Here are some of our FAQs. If you have any other questions you`d like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section id="faq-accordion">
        <div className="container mx-auto px-6 mb-32 text-xl">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              <div
                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              >
                <div
                  className="transition duration-500 ease group-hover:text-red-500"
                >
                  What is the form of payment?
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  "We offer several flexible payment options for our clients` convenience. You can make payments through bank transfers, credit or debit cards, or checks. Typically, we require an upfront deposit to secure your project`s start date. The remaining balance is then paid in installments based on predefined project milestones. We can discuss the specifics and create a payment plan that best suits your financial situation during the contract signing process."
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={2}>
              <div
                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              >
                <div
                  className="transition duration-500 ease group-hover:text-red-500"
                >
                  How long does the construction take?
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  "The duration of construction varies depending on the scope and complexity of the project. A simple remodel may take a few weeks, while constructing a new home from the ground up can take several months. Once we have a clear understanding of your project`s specifics, we can provide a more accurate timeline. We`re committed to completing projects on time while maintaining high standards of quality and craftsmanship."
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={3}>
              <div
                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              >
                <div
                  className="transition duration-500 ease group-hover:text-red-500"
                >
                  And if I don`t like the job
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  "Customer satisfaction is our top priority. If at any point you`re not satisfied with the work, we encourage you to communicate your concerns to us. We will do our utmost to address and rectify any issues promptly. Our contract also outlines the necessary steps for dispute resolution to ensure fairness and transparency."
                </p>
              </div>
            </div>

            <div className="py-1 border-b outline-none group" tabIndex={4}>
              <div
                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              >
                <div
                  className="transition duration-500 ease group-hover:text-red-500"
                >
                  Can I choose the design I want?
                </div>

                <div
                  className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  "Absolutely! We believe that your home should reflect your personal style and preferences. Our team will work closely with you from the initial design stages to ensure your vision becomes a reality. We`re here to offer expert advice and guidance, but the final design decisions are always in your hands. We have a wide range of customizable options for layouts, finishes, and materials to choose from."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
