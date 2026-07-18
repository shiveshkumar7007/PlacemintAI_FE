import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getResumeHistory } from "../../services/resumeService";

function ResumeHistory() {
  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      setLoading(true);

      const data = await getResumeHistory();

      setHistory(data.resumes || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load resume history",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-slate-900 p-6 text-slate-400">
        Loading resume history...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Resume History</h2>

        <span className="text-sm text-slate-400">Last 5 uploads</span>
      </div>

      {history.length === 0 ? (
        <p className="text-slate-400">No resumes uploaded yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((resume) => (
            <div
              key={resume._id}
              className="
                  rounded-lg
                  bg-slate-800
                  p-4
                  transition
                  hover:bg-slate-700
                  "
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  📄 {resume.fileName}
                </h3>

                <span
                  className="
                      rounded-full
                      bg-cyan-500/10
                      px-3
                      py-1
                      text-sm
                      text-cyan-400
                      "
                >
                  {resume.analysis.score === 0
                    ? "Pending"
                    : `${resume.analysis.score}/100`}
                </span>
              </div>

              <div className="mt-3 text-sm text-slate-400">
                <p>
                  📅{" "}
                  {new Date(resume.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <p>
                  🕒{" "}
                  {new Date(resume.createdAt).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeHistory;
