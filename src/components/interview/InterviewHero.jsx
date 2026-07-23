import { PlusCircle } from "lucide-react";

function InterviewHero({ onOpenModal }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-500/20 bg-blue-900/20 p-8 md:flex-row md:items-center">
      <div>
        <h2 className="text-2xl font-bold text-white">Mock Interviews</h2>
        <p className="mt-2 text-slate-400">
          Track your interview practice, log your scores, and analyze your
          performance.
        </p>
      </div>
      <button
        onClick={onOpenModal}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <PlusCircle size={20} />
        New Interview
      </button>
    </div>
  );
}

export default InterviewHero;
