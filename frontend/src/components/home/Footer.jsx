import { Brain, UserRound, GitCommit, Mail} from "lucide-react";

const quickLinks = ["Home", "Features", "About"];

const resources = ["DSA", "Resume", "Mock Interview", "Roadmap"];

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <Brain className="text-cyan-400" />

              <h2 className="text-2xl font-bold text-white">PlaceMint AI</h2>
            </div>

            <p className="mt-5 text-slate-400 leading-7">
              AI-powered placement preparation platform helping students crack
              their dream companies.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-slate-400 transition hover:text-cyan-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>

            <div className="mt-5 space-y-3">
              {resources.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>

            <div className="mt-5 flex gap-4">
              {[GitCommit, UserRound, Mail].map((Icon, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 p-3 transition hover:border-cyan-400 hover:bg-slate-900"
                >
                  <Icon size={20} className="text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500">
            © 2026 PlaceMint AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
