import { useState } from "react";
import { Menu, X, Brain, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-blue-950/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}

          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-cyan-500 p-2">
              <Brain className="text-slate-950" size={22} />
            </div>

            <h1 className="text-2xl font-bold">
              PlaceMint <span className="text-cyan-400">AI</span>
            </h1>
          </div>

          {/* Desktop Links */}

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">
            <button className="text-white rounded-xl border border-slate-700 px-5 py-2 transition hover:border-cyan-400">
              Login
            </button>

            <button className="text-white flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Start Free
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-screen  w-[250px] sm:w-60 flex-col bg-slate-900 p-6"
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-white text-2xl font-bold">
                  PlaceMint <span className="text-cyan-400">AI</span>
                </h2>

                <button onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white text-lg transition hover:text-cyan-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <button className="text-white rounded-xl border border-slate-700 py-3">
                  Login
                </button>

                <button className="text-white rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950">
                  Start Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
