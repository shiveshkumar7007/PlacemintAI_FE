import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardCard from "../components/dashboard/DashboardCard";

import QuickActionCard from "../components/dashboard/QuickActionCard";

import ResumeUpload from "../components/resume/ResumeUpload";

import ResumeScore from "../components/resume/ResumeScore";

import ResumeAnalysis from "../components/resume/ResumeAnalysis";

import ResumeHistory from "../components/resume/ResumeHistory";

import { getLatestResume } from "../services/resumeService";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    loadLatestResume();
  }, []);

  const loadLatestResume = async () => {
    try {
      const data = await getLatestResume();

      if (data.resume) {
        setAnalysis(data.resume.analysis);
      }
    } catch (error) {
      console.log("Failed to load latest resume", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            title="Daily Streak"
            value="8 🔥"
            subtitle="Keep the momentum going"
          />

          <DashboardCard
            title="Resume Score"
            value={analysis ? `${analysis.score}/100` : "--"}
            subtitle="AI powered analysis"
          />

          <DashboardCard
            title="Problems Solved"
            value="0"
            subtitle="Start your DSA journey"
          />

          <DashboardCard
            title="Roadmap Progress"
            value="0%"
            subtitle="Generate your roadmap"
          />
        </section>

        {/* Resume Analyzer */}

        <section className="space-y-6">
          <h2 className="text-xl font-bold">Resume Analyzer</h2>

          <ResumeUpload onAnalyzed={setAnalysis} />

          <ResumeScore analysis={analysis} />

          <ResumeAnalysis analysis={analysis} />
        </section>

        {/* Resume History */}

        <section>
          <ResumeHistory />
        </section>

        {/* Quick Actions */}

        <section>
          <h2 className="mb-4 text-xl font-bold">Quick Actions</h2>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <QuickActionCard title="📄 Resume Analyzer" />

            <QuickActionCard title="🗺️ Generate Roadmap" />

            <QuickActionCard title="🎤 Mock Interview" />

            <QuickActionCard title="💻 Solve DSA" />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
