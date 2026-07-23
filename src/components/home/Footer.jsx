import { Brain } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Brand details centered */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Brain className="text-cyan-400" size={32} />
            <h2 className="text-2xl font-bold text-white">PlaceMint AI</h2>
          </div>

          <p className="mx-auto mt-5 max-w-md leading-7 text-slate-400">
            AI-powered placement preparation platform helping students crack
            their dream companies.
          </p>
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
