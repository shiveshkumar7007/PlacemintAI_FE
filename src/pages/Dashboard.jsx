import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import ResumeUpload from "../components/resume/ResumeUpload";
import ResumeScore from "../components/resume/ResumeScore";
import ResumeAnalysis from "../components/resume/ResumeAnalysis";
import ResumeHistory from "../components/resume/ResumeHistory";

import { getLatestResume } from "../services/resumeService";
import { getDSAStats } from "../services/dsaService";
import { getActiveRoadmap } from "../services/roadmapService";

function Dashboard() {
  const navigate = useNavigate();

  const [analysis, setAnalysis] = useState(null);
  const [dsaSolved, setDsaSolved] = useState(0);
  const [roadmapProgress, setRoadmapProgress] = useState(0);

  useEffect(() => {
    loadLatestResume();
    loadRealStats();
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

  const loadRealStats = async () => {
    try {
      // Fetch Real DSA Stats
      const dsaRes = await getDSAStats();
      const solved =
        dsaRes.totalSolved || dsaRes.stats?.totalSolved || dsaRes.solved || 0;
      setDsaSolved(solved);

      // Fetch Real Roadmap Progress
      const roadmapRes = await getActiveRoadmap();
      // Safely extracting progress depending on your backend's exact response structure
      const progress =
        roadmapRes?.roadmap?.progress ||
        roadmapRes?.progress ||
        roadmapRes?.data?.progress ||
        0;
      setRoadmapProgress(Math.round(progress));
    } catch (error) {
      console.log("Failed to load real stats", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <DashboardCard
            title="Resume Score"
            value={analysis ? `${analysis.score}/100` : "--"}
            subtitle="AI powered analysis"
          />

          <div
            onClick={() => navigate("/dsa")}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <DashboardCard
              title="Problems Solved"
              value={dsaSolved.toString()}
              subtitle="Continue your DSA journey"
            />
          </div>

          <div
            onClick={() => navigate("/roadmap")}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <DashboardCard
              title="Roadmap Progress"
              value={`${roadmapProgress}%`}
              subtitle="View your generated roadmap"
            />
          </div>
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
            <div>
              <QuickActionCard title="📄 Resume Analyzer" />
            </div>

            <div onClick={() => navigate("/roadmap")} className="cursor-pointer">
              <QuickActionCard title="🗺️ Generate Roadmap" />
            </div>

            <div
              onClick={() => navigate("/interview")}
              className="cursor-pointer"
            >
              <QuickActionCard title="🎤 Mock Interview" />
            </div>

            <div onClick={() => navigate("/dsa")} className="cursor-pointer">
              <QuickActionCard title="💻 Solve DSA" />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
