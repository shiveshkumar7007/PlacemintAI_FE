import { useEffect, useState } from "react";

import { ExternalLink, Star, Save } from "lucide-react";

import { updateProblemProgress } from "../../services/dsaService";

function ProblemDrawer({
  open,
  onClose,
  problem,
  refreshProblems,
  refreshStats,
}) {
  const [status, setStatus] = useState("Not Started");
  const [important, setImportant] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!problem) return;

    setStatus(problem.progress.status);

    setImportant(problem.progress.important);

    setAttempts(problem.progress.attempts);

    setNotes(problem.progress.notes);
  }, [problem]);

  if (!open || !problem) return null;

  const handleSave = async () => {
    try {
      await updateProblemProgress(problem.problem._id, {
        status,
        important,
        attempts,
        notes,
      });

      await refreshProblems();

      await refreshStats();

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-40 bg-black/60" />

      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto border-l border-slate-700 bg-slate-900 p-6">
        {/* Header */}

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {problem.problem.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {problem.problem.primaryTopic}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Difficulty */}

        <div className="mb-6">
          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white">
            {problem.problem.difficulty}
          </span>
        </div>

        {/* Companies */}

        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-white">Companies</h3>

          <div className="flex flex-wrap gap-2">
            {problem.problem.companies.map((company) => (
              <span
                key={company}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Topics */}

        <div className="mb-6">
          <h3 className="mb-2 font-semibold text-white">Topics</h3>

          <div className="flex flex-wrap gap-2">
            {problem.problem.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Open LeetCode */}

        <a
          href={problem.problem.problemLink}
          target="_blank"
          rel="noreferrer"
          className="mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          <ExternalLink size={18} />
          Open on LeetCode
        </a>

        {/* Status */}

        <div className="mb-5">
          <label className="mb-2 block text-white">Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          >
            <option>Not Started</option>

            <option>In Progress</option>

            <option>Solved</option>
          </select>
        </div>

        {/* Attempts */}

        <div className="mb-5">
          <label className="mb-2 block text-white">Attempts</label>

          <input
            type="number"
            value={attempts}
            min={0}
            onChange={(e) => setAttempts(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        {/* Important */}

        <button
          onClick={() => setImportant(!important)}
          className={`mb-6 flex items-center gap-2 rounded-xl px-4 py-3 ${
            important ? "bg-yellow-500 text-black" : "bg-slate-800 text-white"
          }`}
        >
          <Star size={18} fill={important ? "currentColor" : "none"} />
          Mark Important
        </button>

        {/* Notes */}

        <div className="mb-8">
          <label className="mb-2 block text-white">Notes</label>

          <textarea
            rows={6}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        {/* Save */}

        <button
          onClick={handleSave}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Save size={18} />
          Save Progress
        </button>
      </div>
    </>
  );
}

export default ProblemDrawer;
