function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-sm text-slate-400">{title}</h3>

      <p className="mt-3 text-3xl font-bold">{value}</p>

      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export default DashboardCard;
