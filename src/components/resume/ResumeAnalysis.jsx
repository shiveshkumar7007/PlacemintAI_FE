function ResumeAnalysis({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="space-y-6">
      {/* Strengths */}

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="mb-4 text-xl font-bold text-green-400">💪 Strengths</h3>

        <ul className="space-y-2 text-slate-300">
          {analysis.strengths.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>

      {/* Weakness */}

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="mb-4 text-xl font-bold text-red-400">⚠️ Weaknesses</h3>

        <ul className="space-y-2 text-slate-300">
          {analysis.weaknesses.map((item, index) => (
            <li key={index}>🔸 {item}</li>
          ))}
        </ul>
      </div>

      {/* Suggestions */}

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="mb-4 text-xl font-bold text-cyan-400">🚀 Suggestions</h3>

        <ul className="space-y-2 text-slate-300">
          {analysis.suggestions.map((item, index) => (
            <li key={index}>💡 {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeAnalysis;
