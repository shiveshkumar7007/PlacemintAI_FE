import { Brain } from "lucide-react";

function AuthLayout({ title, subtitle, children }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}

        <div className="mb-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
            <Brain size={34} className="text-slate-950" />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-white">
            PlaceMint <span className="text-cyan-400">AI</span>
          </h1>

          <h2 className="mt-8 text-3xl font-bold text-white">{title}</h2>

          <p className="mt-3 text-slate-400">{subtitle}</p>
        </div>

        {/* Form */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
