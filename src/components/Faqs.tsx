const content = [
  {
    id: 1,
    question: "What is the form of payment?",
    answer:
      "We offer several flexible payment options for our clients\u2019 convenience. You can make payments through bank transfers, credit or debit cards, or checks. Typically, we require an upfront deposit to secure your project\u2019s start date. The remaining balance is then paid in installments based on predefined project milestones.",
  },
  {
    id: 2,
    question: "How long does the construction take?",
    answer:
      "The duration of construction varies depending on the scope and complexity of the project. A simple remodel may take a few weeks, while constructing a new home from the ground up can take several months. Once we have a clear understanding of your project\u2019s specifics, we can provide a more accurate timeline.",
  },
  {
    id: 3,
    question: "What if I don\u2019t like the job?",
    answer:
      "Customer satisfaction is our top priority. If at any point you\u2019re not satisfied with the work, we encourage you to communicate your concerns to us. We will do our utmost to address and rectify any issues promptly. Our contract also outlines the necessary steps for dispute resolution to ensure fairness and transparency.",
  },
  {
    id: 4,
    question: "Can I choose the design I want?",
    answer:
      "Absolutely! We believe that your home should reflect your personal style and preferences. Our team will work closely with you from the initial design stages to ensure your vision becomes a reality. We have a wide range of customizable options for layouts, finishes, and materials to choose from.",
  },
];

export const Faqs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Here are some of our FAQs. Feel free to contact us for anything
            else.
          </p>
        </div>

        <div className="space-y-4">
          {content.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md [&[open]]:shadow-md"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-semibold text-gray-900 select-none">
                {faq.question}
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
