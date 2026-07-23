import { Calendar, Trash2, Building, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InterviewCard({ interview, onDelete }) {
  const navigate = useNavigate();

  const date = new Date(interview.createdAt || Date.now()).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-800 p-6 transition hover:border-blue-500 hover:bg-slate-800/80">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Building size={16} />
            {interview.company || "Unknown Company"}
          </div>

          <button
            onClick={() => onDelete(interview._id)}
            className="text-slate-500 transition hover:text-red-500"
            title="Delete Interview"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">
          {interview.role || "Software Engineer"}
        </h3>

        <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
          <Calendar size={16} />
          {date}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-700 pt-4">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400">Score</span>
          {/* Changed from interview.score to interview.overallScore */}
          <span className="font-semibold text-white">
            {interview.overallScore || 0}/100
          </span>
        </div>

        {/* Added onClick navigation */}
        <button
          onClick={() => navigate(`/interview/${interview._id}`)}
          className="flex items-center gap-1 text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default InterviewCard;
