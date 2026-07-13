import { motion } from "framer-motion";
import { Trophy, Brain, FileText, Flame, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    title: "Resume Score",
    value: "91/100",
    color: "text-green-400",
  },
  {
    icon: Brain,
    title: "DSA Solved",
    value: "347",
    color: "text-cyan-400",
  },
  {
    icon: FileText,
    title: "Mock Interviews",
    value: "18",
    color: "text-purple-400",
  },
  {
    icon: Flame,
    title: "Current Streak",
    value: "26 Days",
    color: "text-orange-400",
  },
];

function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Dashboard
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Everything At One Place
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Track your placement journey with AI insights, analytics, resume
            score and interview preparation.
          </p>
        </motion.div>

        {/* Dashboard */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8"
        >
          {/* Top */}

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white">Welcome Back 👋</h3>

              <p className="mt-3 text-slate-400">
                Your AI coach prepared today's roadmap.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition">
              Continue Learning
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
                >
                  <Icon size={34} className={item.color} />

                  <h4 className="mt-6 text-slate-400">{item.title}</h4>

                  <p className="mt-2 text-3xl font-bold text-white">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Progress */}

          <div className="mt-12">
            <div className="flex justify-between">
              <span className="text-slate-300">Placement Progress</span>

              <span className="text-cyan-400">82%</span>
            </div>

            <div className="mt-4 h-4 rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardPreview;
