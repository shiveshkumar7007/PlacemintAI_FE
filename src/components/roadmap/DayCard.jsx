import Button from "../ui/Button";

function DayCard({ day, roadmapId, onToggle }) {
  return (
    <div
      className={`rounded-xl border p-6 transition-all ${
        day.completed
          ? "border-green-500 bg-green-950/20"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Day {day.day}</h2>

          <p className="text-slate-300">{day.title}</p>
        </div>

        {day.completed && <span className="text-2xl">✅</span>}
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Topics</h3>

        <ul className="list-disc space-y-1 pl-6 text-slate-300">
          {day.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h3 className="mb-2 font-semibold">Tasks</h3>

        <ul className="list-disc space-y-1 pl-6 text-slate-300">
          {day.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>

      <Button onClick={() => onToggle(roadmapId, day.day)}>
        {day.completed ? "Undo" : "Mark Complete"}
      </Button>
    </div>
  );
}

export default DayCard;
