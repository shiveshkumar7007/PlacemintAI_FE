import { CheckCircle2, Circle, Flame, Star } from "lucide-react";

function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: "bg-green-500/20 text-green-400 border-green-500/30",
    Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Hard: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

function StatusBadge({ status }) {
  switch (status) {
    case "Solved":
      return (
        <span className="flex items-center gap-1 font-medium text-green-400">
          <CheckCircle2 size={16} />
          Solved
        </span>
      );

    case "In Progress":
      return (
        <span className="flex items-center gap-1 font-medium text-yellow-400">
          <Circle size={16} />
          In Progress
        </span>
      );

    default:
      return <span className="text-slate-400">Not Started</span>;
  }
}

function DSATable({ problems, loading, openProblem }) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="space-y-4">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="h-14 animate-pulse rounded-xl bg-slate-800"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Problems</h2>

        <p className="text-sm text-slate-400">{problems.length} Results</p>
      </div>

      {/* Empty State */}

      {problems.length === 0 ? (
        <div className="rounded-2xl border border-slate-700 bg-slate-900 py-20">
          <div className="flex flex-col items-center">
            <div className="mb-5 text-6xl">🔍</div>

            <h2 className="text-2xl font-semibold text-white">
              No Problems Found
            </h2>

            <p className="mt-3 max-w-md text-center text-slate-400">
              Try changing your search keyword or filters.
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-800">
                <tr className="text-left text-sm text-slate-300">
                  <th className="px-6 py-4">⭐</th>

                  <th className="px-6 py-4">Problem</th>

                  <th className="px-6 py-4">Difficulty</th>

                  <th className="px-6 py-4">Topic</th>

                  <th className="px-6 py-4">Companies</th>

                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {problems.map((problem) => (
                  <tr
                    key={problem._id}
                    onClick={() => openProblem(problem._id)}
                    className="cursor-pointer border-t border-slate-800 transition hover:bg-slate-800/70"
                  >
                    {/* Important */}

                    <td className="px-6 py-4">
                      {problem.important ? (
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ) : (
                        <Star size={18} className="text-slate-500" />
                      )}
                    </td>

                    {/* Title */}

                    <td className="px-6 py-4 font-medium text-white">
                      {problem.title}
                    </td>

                    {/* Difficulty */}

                    <td className="px-6 py-4">
                      <DifficultyBadge difficulty={problem.difficulty} />
                    </td>

                    {/* Topic */}

                    <td className="px-6 py-4 text-slate-300">
                      {problem.primaryTopic}
                    </td>

                    {/* Companies */}

                    <td className="max-w-xs truncate px-6 py-4 text-slate-400">
                      {problem.companies.join(", ")}
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4">
                      <StatusBadge status={problem.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default DSATable;
