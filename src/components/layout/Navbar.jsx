import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Brain, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/" },
    { name: "Roadmap", path: "/" },
    { name: "About", path: "/" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-blue-950/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-cyan-500 p-2">
              <Brain className="text-slate-950" size={22} />
            </div>

            <h1 className="text-2xl font-bold text-white">
              PlaceMint <span className="text-cyan-400">AI</span>
            </h1>
          </Link>

          {/* Desktop Links */}

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/login"
              className="rounded-xl border border-slate-700 px-5 py-2 text-white transition hover:border-cyan-400"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start Free
              <ArrowRight size={18} />
            </Link>
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
              className="fixed right-0 top-0 z-50 flex h-screen w-[250px] sm:w-60 flex-col bg-slate-900 p-6"
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  PlaceMint <span className="text-cyan-400">AI</span>
                </h2>

                <button onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg text-white transition hover:text-cyan-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-slate-700 py-3 text-center text-white"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950"
                >
                  Start Free
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
