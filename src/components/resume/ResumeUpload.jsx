import { useState } from "react";
import toast from "react-hot-toast";

import { uploadResume, analyzeResume } from "../../services/resumeService";

function ResumeUpload({ onAnalyzed }) {
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select PDF");

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
    <div className="bg-slate-900 p-6 rounded-xl">
      <h2 className="text-xl text-white font-semibold mb-4">Upload Resume</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
mt-4
bg-cyan-500
px-5
py-2
rounded-lg
text-white
"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}

export default ResumeUpload;
