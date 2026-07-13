import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Brain, Star, Sparkles } from "lucide-react";

const hero = {
  badge: "100% FREE AI PLATFORM",
  title: "Land Your Dream Job",
  subtitle: "with AI-powered Preparation",
  description:
    "Practice DSA, AI Resume Review, Mock Interviews, Aptitude Tests and Company-wise Interview Preparation in one intelligent platform.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Glow */}

      <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-12 lg:flex-row">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2">
            <Sparkles size={18} className="text-cyan-400" />

            <span className="text-sm font-semibold tracking-wide text-cyan-300">
              {hero.badge}
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            {hero.title}

            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {hero.subtitle}
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {hero.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Start Preparing
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={20}
              />
            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 px-8 py-4 text-white transition hover:border-cyan-400 hover:text-cyan-400">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Trust */}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} fill="#facc15" color="#facc15" size={18} />
              ))}
            </div>

            <span className="text-slate-300">Trusted by 10,000+ Students</span>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex w-full justify-center lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-[120px]" />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                repeat: Infinity,

                duration: 4,
              }}
              className="relative flex h-[280px] w-[280px] items-center justify-center rounded-[40px] border border-slate-800 bg-slate-900 shadow-2xl sm:h-[350px] sm:w-[350px] lg:h-[480px] lg:w-[480px]"
            >
              <Brain size={170} className="text-cyan-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
