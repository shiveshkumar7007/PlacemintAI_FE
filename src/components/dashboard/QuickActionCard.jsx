function QuickActionCard({ title }) {
  return (
    <button className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-cyan-400 hover:bg-slate-800">
      <h3 className="font-semibold">{title}</h3>
    </button>
  );
}

export default QuickActionCard;
