import { motion } from "framer-motion";
import { UserPlus, Building2, Brain, Code2, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Sign up and build your placement profile.",
  },
  {
    icon: Building2,
    title: "Choose Dream Company",
    desc: "Google, Amazon, Microsoft or any company.",
  },
  {
    icon: Brain,
    title: "AI Creates Roadmap",
    desc: "Personalized preparation roadmap generated instantly.",
  },
  {
    icon: Code2,
    title: "Practice Daily",
    desc: "Solve DSA, Aptitude, Resume and Mock Interviews.",
  },
  {
    icon: Trophy,
    title: "Get Placed",
    desc: "Track progress until you crack your dream company.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-cyan-400 font-semibold uppercase tracking-[4px]">
            Process
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            How PlaceMint AI Works
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            From your first login to your final placement offer, everything is
            guided by AI.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Timeline */}

          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-slate-800"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                        <Icon size={30} className="text-slate-950" />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-slate-400">{step.desc}</p>
                    </div>
                  </div>

                  {/* Circle */}

                  <div className="hidden lg:flex z-10 h-8 w-8 items-center justify-center rounded-full bg-cyan-500 border-4 border-slate-950"></div>

                  <div className="lg:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
