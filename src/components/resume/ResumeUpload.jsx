import { useState } from "react";
import toast from "react-hot-toast";
import { Upload } from "lucide-react"; // Added this icon

import { uploadResume, analyzeResume } from "../../services/resumeService";

function ResumeUpload({ onAnalyzed }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF");
      return;
    }

    try {
      setLoading(true);
      const uploadResponse = await uploadResume(file);
      const result = await analyzeResume(uploadResponse.resumeId);

      onAnalyzed(result.analysis);
      toast.success("Resume analyzed successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Upload Resume</h2>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        {/* Styled File Input */}
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-600 bg-slate-800 px-4 py-2 text-slate-300 transition hover:bg-slate-700">
          <Upload size={20} className="text-cyan-500" />
          <span className="truncate max-w-[200px]">
            {file ? file.name : "Select PDF File"}
          </span>
          <input
            type="file"
            accept="application/pdf"
            className="hidden" // Hides the default browser input
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {/* Analyze Button */}
        <button
          onClick={handleUpload}
          disabled={loading || !file} // Disabled if no file is selected
          className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </div>
  );
}

export default ResumeUpload;
