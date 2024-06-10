import Image from 'next/image'

export default function Gallery() {
  return (
    <>
      <section className=" shadow-2xl bg-white pt-32">
        <div className="carousel-inner relative overflow-hidden w-full md:w-2/4 mx-auto">

          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked hidden readOnly />
          <div className="carousel-item absolute opacity-0 h-96">
            <Image width={500} height={300} src="/fotos/photo_11.jpeg" alt="image house 1" className="block h-full w-full object-cover object-center" />
          </div>

          <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
            ‹
          </label>

          <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
            ›
          </label>

          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" checked hidden readOnly />
          <div className="carousel-item absolute opacity-0 h-96">
            <Image width={500} height={300} src="/fotos/photo_57.jpeg" alt="image house 2" className="block h-full w-full object-cover object-center" />
          </div>

          <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
            ‹
          </label>

          <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
            ›
          </label>

          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" checked hidden readOnly />
          <div className="carousel-item absolute opacity-0 h-96">
            <Image width={500} height={300} src="/fotos/photo_23.jpeg" alt="image house 3" className="block h-full w-full object-cover object-center" />
          </div>

          <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
            ‹
          </label>
          <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
            ›
          </label>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 pt-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="headings">Know our work
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-300 text-2xl">
            Custom designs for all needs. We are specialists in urban areas and beach areas!
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{ backgroundImage: `url('/fotos/photo_50.jpeg')` }}>
              <div
                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Restrooms</h2>
                <a href="tel:+12512842842" className="mt-2 text-lg text-blue-400 ">Call us htmlFor more</a>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{ backgroundImage: `url('/fotos/photo_25.jpeg')` }}>
              <div
                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Livingrooms</h2>
                <a href="tel:+12512842842" className="mt-2 text-lg text-blue-400 ">Call us htmlFor more</a>
              </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group md:col-span-2 xl:col-span-1"
              style={{ backgroundImage: `url('/fotos/photo_52.jpeg')` }}>
              <div
                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Bedrooms</h2>
                <a href="tel:+12512842842" className="mt-2 text-lg text-blue-400 ">Call us htmlFor more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
