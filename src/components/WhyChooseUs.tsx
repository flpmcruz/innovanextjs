import Image from "next/image";

const content = [
    {
        title: "Best Price",
        description: "We guarantee the best prices on the market. Show us a quote and we will improve the price.",
        image: "/img/bestPrice.jpg",
    },
    {
        title: "More for less",
        description: "Our services will bring you more value for less expenses. We are connected with the best providers in Alabama.",
        image: "/img/moreforless.jpg",
    },
    {
        title: "We are faster",
        description: "We are extremely fast building and remodeling homes. In urban or beach areas.",
        image: "/img/faster.jpg",
    },
]

export const WhyChooseUs = () => {
    return (
        <section className="text-gray-600 body-font w-4/5 mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="headings">Why to Choose Us</h2>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        content.map((item, index) => (
                            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="object-cover object-center h-full w-full transform hover:scale-110 duration-500"
                                    />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.title}</h2>
                                <p className="text-base leading-relaxed mt-2">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
