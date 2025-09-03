import { useState } from "react";

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="mb-12 px-4 overflow-hidden">
      <h2
        className="text-3xl font-bold text-center text-gray-900 mb-8"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => {
          const aosType = index % 2 === 0 ? "fade-left" : "fade-right";
          return (
            <div
              key={index}
              className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
              data-aos={aosType}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex justify-between items-center">
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
