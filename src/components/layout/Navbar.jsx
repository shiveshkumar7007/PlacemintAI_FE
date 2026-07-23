import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Brain, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/authService";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      // 1. Tell the backend to destroy the secure cookie/session
      await logoutUser();
    } catch (error) {
      console.log(
        "Logout failed on server, clearing local state anyway.",
        error,
      );
    } finally {
      // 2. Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // 3. Clear global state
      if (setUser) setUser(null);

      // 4. Close mobile drawer
      setIsOpen(false);

      // 5. Navigate to login and DESTROY the back-button history
      navigate("/login", { replace: true });
    }
  };

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "DSA Tracker", path: "/dsa" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Mock Interview", path: "/interview" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-blue-950/70 backdrop-blur-lg">
        {/* Increased max-width and changed flex structure */}
        <div className="mx-auto flex max-w-[1400px] items-center px-6 py-4 xl:px-10">
          {/* Logo - Takes up equal space on the left */}
          <div className="flex flex-1 items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-xl bg-cyan-500 p-2">
                <Brain className="text-slate-950" size={22} />
              </div>
              <h1 className="text-2xl font-bold text-white">
                PlaceMint <span className="text-cyan-400">AI</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Links - Perfectly Centered */}
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

          {/* Desktop Buttons - Pushed flush to the right */}
          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
            {isLoggedIn ? (
              <Button
                variant="danger"
                onClick={handleLogout}
                className="!w-auto px-5 py-2"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/login")}
                  className="!w-auto px-5 py-2"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate("/signup")}
                  className="!w-auto flex items-center justify-center gap-2 px-5 py-2"
                >
                  Start Free
                  <ArrowRight size={18} />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button - Also pushed to the right */}
          <div className="flex flex-1 justify-end lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
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
              className="fixed right-0 top-0 z-50 flex h-screen w-[250px] flex-col bg-slate-900 p-6 sm:w-60"
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  PlaceMint <span className="text-cyan-400">AI</span>
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-white">
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

              {/* Mobile Drawer Buttons */}
              <div className="mt-auto flex flex-col gap-4">
                {isLoggedIn ? (
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="py-3"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsOpen(false);
                        navigate("/login");
                      }}
                      className="py-3"
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setIsOpen(false);
                        navigate("/signup");
                      }}
                      className="py-3"
                    >
                      Start Free
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
