import { CheckCircle2, Circle, Flame, Star, Trophy } from "lucide-react";

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
}

function DSAStats({ stats }) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
      <StatCard
        title="Solved"
        value={stats.totalSolved}
        icon={Trophy}
        color="bg-blue-600"
      />

      <StatCard
        title="Easy"
        value={stats.easySolved}
        icon={CheckCircle2}
        color="bg-green-600"
      />

      <StatCard
        title="Medium"
        value={stats.mediumSolved}
        icon={Circle}
        color="bg-yellow-500"
      />

      <StatCard
        title="Hard"
        value={stats.hardSolved}
        icon={Flame}
        color="bg-red-600"
      />

      <StatCard
        title="Important"
        value={stats.importantCount}
        icon={Star}
        color="bg-amber-500"
      />
    </div>
  );
}

export default DSAStats;
