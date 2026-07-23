import { Trophy, Target, Briefcase } from "lucide-react";

function InterviewStats({ interviews }) {
  // Simple stats calculation based on the interviews array
  const total = interviews.length;
  const avgScore = total > 0 
    // Changed curr.score to curr.overallScore
    ? Math.round(interviews.reduce((acc, curr) => acc + (curr.overallScore || 0), 0) / total) 
    : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
          <Briefcase size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-400">Total Interviews</p>
          <p className="text-2xl font-bold text-white">{total}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="rounded-xl bg-green-500/20 p-3 text-green-400">
          <Target size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-400">Completed</p>
          <p className="text-2xl font-bold text-white">
            {interviews.filter((i) => i.status === "Completed").length}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400">
          <Trophy size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-400">Avg. Score</p>
          <p className="text-2xl font-bold text-white">{avgScore}%</p>
        </div>
      </div>
    </div>
  );
}

export default InterviewStats;
