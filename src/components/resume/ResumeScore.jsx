function ResumeScore({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="rounded-xlbg-slate-900p-6text-white">
      <h2 className="text-xl font-bold">Latest Resume Score</h2>

      <div className="mt-5 text-6xl font-bold text-cyan-400">
        {analysis.score}
        <span className="text-2xl text-slate-400">/100</span>
      </div>
    </div>
  );
}

export default ResumeScore;
