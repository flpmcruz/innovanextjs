import Image from 'next/image'

export default function About() {
  return (
    <section>
      <div className="px-4 pb-20 pt-36 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap items-center mx-auto max-w-6xl">

          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div className="w-full max-w-lg mx-auto">
              <Image src="/img/arquitecto.jpg" alt="image about us" className="object-cover object-center mx-auto rounded-lg shadow-2xl p-4 hover:grayscale" width={500} height={500} />
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 p-4">

            <h1 className="headings self-center md:self-start">
              A little more about us
            </h1>
            <span className="mb-8 -mt-5 text-xs font-bold tracking-widest text-rose-600 uppercase self-center md:self-start">
              Innova Construction
            </span>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              We take care of everything related to the design, permits, management of suppliers, contractors and the total construction until the delivery of the house. A personalized process for each client, from choosing the design that suits their needs and budget, the construction process and all the finishes they will have, to having a 100% finished home, with the best materials on the market. We are specialists building or remodeling houses. We are located in Alabama.
            </p>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              Arelio Morales <span className="block font-bold">Owner</span>
            </p>
          </div>
          I</div>
      </div>
    </section>
  )
}
