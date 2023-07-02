const content = [
    {
        id: 1,
        question: "What is the form of payment?",
        answer: "We offer several flexible payment options for our clients` convenience. You can make payments through bank transfers, credit or debit cards, or checks. Typically, we require an upfront deposit to secure your project`s start date. The remaining balance is then paid in installments based on predefined project milestones. We can discuss the specifics and create a payment plan that best suits your financial situation during the contract signing process."
    },
    {
        id: 2,
        question: "How long does the construction take?",
        answer: "The duration of construction varies depending on the scope and complexity of the project. A simple remodel may take a few weeks, while constructing a new home from the ground up can take several months. Once we have a clear understanding of your project`s specifics, we can provide a more accurate timeline. We`re committed to completing projects on time while maintaining high standards of quality and craftsmanship."
    },
    {
        id: 3,
        question: "And if I don`t like the job",
        answer: "Customer satisfaction is our top priority. If at any point you`re not satisfied with the work, we encourage you to communicate your concerns to us. We will do our utmost to address and rectify any issues promptly. Our contract also outlines the necessary steps for dispute resolution to ensure fairness and transparency."
    },
    {
        id: 4,
        question: "Can I choose the design I want?",
        answer: "Absolutely! We believe that your home should reflect your personal style and preferences. Our team will work closely with you from the initial design stages to ensure your vision becomes a reality. We`re here to offer expert advice and guidance, but the final design decisions are always in your hands. We have a wide range of customizable options for layouts, finishes, and materials to choose from."
    }
];

export const Faqs = () => {
    return (
        <>
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
                        {
                            content.map((faq) => (
                                <div key={faq.id} className="py-1 border-b outline-none group" tabIndex={faq.id}>
                                    <div
                                        className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                                    >
                                        <div
                                            className="transition duration-500 ease group-hover:text-red-500"
                                        >
                                            {faq.question}
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
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
