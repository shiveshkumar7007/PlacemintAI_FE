import InterviewCard from "./InterviewCard";

function InterviewHistory({ interviews, onDelete }) {
  if (!interviews || interviews.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/50">
        <p className="text-slate-400">
          No interviews logged yet. Start one above!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-xl font-bold text-white">Recent Interviews</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview._id}
            interview={interview}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewHistory;
