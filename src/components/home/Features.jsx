import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Mic,
  BarChart3,
  Building2,
  Route,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Resume Analyzer",
    desc: "Get ATS score, improvement tips and recruiter-ready feedback.",
  },
  {
    icon: Mic,
    title: "AI Mock Interview",
    desc: "Practice HR and technical interviews with AI feedback.",
  },
  {
    icon: BarChart3,
    title: "DSA Tracker",
    desc: "Track solved questions, streaks and topic progress.",
  },
  {
    icon: FileText,
    title: "Aptitude Practice",
    desc: "Quantitative, Logical and Verbal preparation with analytics.",
  },
  {
    icon: Building2,
    title: "Company Preparation",
    desc: "Prepare for Google, Amazon, Microsoft and more.",
  },
  {
    icon: Route,
    title: "AI Roadmap",
    desc: "Receive a personalized placement roadmap based on your goals.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Everything You Need To Get Placed
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            One platform to prepare for coding interviews, aptitude, resume
            building and company-specific placements.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition hover:border-cyan-500"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500">
                  <Icon
                    size={30}
                    className="text-cyan-400 transition group-hover:text-slate-950"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">{feature.desc}</p>

                <button className="mt-8 text-cyan-400 transition hover:translate-x-2">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
