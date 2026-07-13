import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is PlaceMint AI completely free?",
    answer:
      "Yes. Every feature in the current version is completely free for students.",
  },
  {
    question: "Can I prepare company-wise?",
    answer:
      "Yes. You can prepare for Google, Amazon, Microsoft and many more companies.",
  },
  {
    question: "Does it include DSA tracking?",
    answer:
      "Yes. You'll be able to solve questions, track progress and maintain streaks.",
  },
  {
    question: "Will AI review my resume?",
    answer:
      "Yes. AI will analyze your resume and provide ATS score with improvement suggestions.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Everything you need to know before starting your placement journey.
          </p>
        </motion.div>

        {/* Accordion */}

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
