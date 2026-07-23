import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InterviewModal({ isOpen, onClose, onCreate }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    role: "",
    company: "",
    interviewType: "Technical",
    difficulty: "Medium",
    duration: "30",
    mode: "Text",
    language: "English",
    description: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Capture the response to get the newly created interviewId
      const res = await onCreate(formData);

      // Reset form on success
      setFormData({
        title: "",
        role: "",
        company: "",
        interviewType: "Technical",
        difficulty: "Medium",
        duration: "30",
        mode: "Text",
        language: "English",
        description: "",
      });

      onClose();

      // Navigate to the active interview session!
      if (res && res.interviewId) {
        navigate(`/interview/${res.interviewId}`);
      }
    } catch (err) {
      console.error("Failed to create interview", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">New Interview</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Interview Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
              placeholder="e.g. Google SWE Mock"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Role */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Role
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
                placeholder="e.g. Frontend Dev"
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Company
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
                placeholder="e.g. Google"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Interview Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Type
              </label>
              <select
                required
                value={formData.interviewType}
                onChange={(e) =>
                  setFormData({ ...formData, interviewType: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
              >
                <option value="Technical">Technical</option>
                <option value="Behavioral">Behavioral</option>
                <option value="System Design">System Design</option>
                <option value="HR">HR / Culture Fit</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Difficulty
              </label>
              <select
                required
                value={formData.difficulty}
                onChange={(e) =>
                  setFormData({ ...formData, difficulty: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Duration */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Duration (mins)
              </label>
              <select
                required
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
              >
                <option value="15">15 mins</option>
                <option value="30">30 mins</option>
                <option value="45">45 mins</option>
                <option value="60">60 mins</option>
              </select>
            </div>

            {/* Mode */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Mode
              </label>
              <select
                required
                value={formData.mode}
                onChange={(e) =>
                  setFormData({ ...formData, mode: e.target.value })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
              >
                <option value="Text">Text</option>
                <option value="Audio">Audio</option>
                <option value="Video">Video</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3 border-t border-slate-700 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-5 py-2.5 font-medium text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
            >
              Start Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InterviewModal;
