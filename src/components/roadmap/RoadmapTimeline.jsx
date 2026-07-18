import Button from "../ui/Button";
import DayCard from "./DayCard";

function RoadmapTimeline({ roadmap, onToggle, onComplete, onDrop }) {
  const completed = roadmap.roadmap.filter((day) => day.completed).length;

  const total = roadmap.roadmap.length;

  const progress = Math.round((completed / total) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{roadmap.company}</h1>

            <p className="mt-2 text-slate-400">{roadmap.role}</p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>📅 {roadmap.targetDays} Days</span>

              <span>📚 {roadmap.skillLevel}</span>

              <span>⏰ {roadmap.dailyStudyHours} hrs/day</span>

              <span>🚦 {roadmap.status}</span>
            </div>
          </div>

          <div className="flex gap-3 w-100">
            <Button onClick={() => onComplete(roadmap._id)}>
              Complete Goal
            </Button>

            <Button variant="secondary" onClick={() => onDrop(roadmap._id)}>
              Drop Goal
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between">
            <span>Progress</span>

            <span>
              {completed}/{total} Days
            </span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-3 text-right text-sm text-cyan-400">
            {progress}% Completed
          </p>
        </div>
      </div>

      {/* Timeline */}

      <div className="space-y-5">
        {roadmap.roadmap.map((day) => (
          <DayCard
            key={day.day}
            day={day}
            roadmapId={roadmap._id}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default RoadmapTimeline;
