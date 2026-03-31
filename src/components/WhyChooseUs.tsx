import Image from "next/image";

const content = [
  {
    title: "Best Price",
    description:
      "We guarantee the best prices on the market. Show us a quote and we will improve the price.",
    image: "/img/bestPrice.jpg",
  },
  {
    title: "More for Less",
    description:
      "Our services will bring you more value for less expenses. We are connected with the best providers in Alabama.",
    image: "/img/moreforless.jpg",
  },
  {
    title: "We Are Faster",
    description:
      "We are extremely fast building and remodeling homes. In urban or beach areas.",
    image: "/img/faster.jpg",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Our Advantages
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
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
      </div>
    </section>
  );
};
