const content = [
  {
    comment:
      "Innova Construction is an amazing company with caring employees. They are at the top of our builder list for professionalism, accurate scheduling, and timely communication (just to name a few). Anybody who wants the best in designing and building should go visit their show room and check out all their awards!",
    name: "Richard Jr",
  },
  {
    comment:
      "They did a complete build out of our basement. Their quality of work is superior. They came in and did the design, helped us with color choices and they finished ON TIME! The construction crew was professional, clean and courteous. I would highly recommend them for any remodel project you are considering.",
    name: "Jhon Cruise",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.map((item) => (
            <div
              key={item.name}
              className="relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 right-8 w-12 h-12 text-indigo-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                &ldquo;{item.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
