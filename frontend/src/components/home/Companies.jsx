import { motion } from "framer-motion";
import {
  SiGoogle,
  SiInstagram,
  SiYoutube,
  SiApple,
  SiMeta,
  SiNetflix,
} from "react-icons/si";

const companies = [
  { icon: SiGoogle, name: "Google" },
  { icon: SiInstagram, name: "Instagram" },
  { icon: SiYoutube, name: "YouTube" },
  { icon: SiApple, name: "Apple" },
  { icon: SiMeta, name: "Meta" },
  { icon: SiNetflix, name: "Netflix" },
];

function Companies() {
  return (
    <section className="bg-slate-950 py-16 border-y border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-slate-400 text-sm uppercase tracking-[4px]">

          Trusted by students preparing for

        </p>

        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {companies.map((company) => {
            const Icon = company.icon;

            return (
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                key={company.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 py-6 transition"
              >
                <Icon size={42} className="text-slate-300" />

                <span className="text-slate-400 font-medium">
                  {company.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
}

export default Companies;