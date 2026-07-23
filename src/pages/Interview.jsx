import { useState } from "react";
import useInterview from "../components/interview/hooks/useInterview";

// Import your brand new components
import InterviewHero from "../components/interview/InterviewHero";
import InterviewStats from "../components/interview/InterviewStats";
import InterviewHistory from "../components/interview/InterviewHistory";
import InterviewModal from "../components/interview/InterviewModal";

function Interview() {
  const { interviews, loading, createInterview, deleteInterview } =
    useInterview();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-8 text-white">
        <div className="text-xl font-medium animate-pulse">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-12">
      <div className="mx-auto max-w-7xl space-y-8 p-6">
        <h1 className="text-3xl font-bold text-white">AI Interviews</h1>

        {/* Top Banner */}
        <InterviewHero onOpenModal={() => setIsModalOpen(true)} />

        {/* Stats Row */}
        <InterviewStats interviews={interviews} />

        {/* List of past interviews */}
        <InterviewHistory interviews={interviews} onDelete={deleteInterview} />
      </div>

      {/* Hidden by default, opens when clicking "New Interview" */}
      <InterviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={createInterview}
      />
    </div>
  );
}

export default Interview;
