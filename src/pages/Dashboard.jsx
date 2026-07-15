import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            title="Daily Streak"
            value="8 🔥"
            subtitle="Keep the momentum going"
          />

          <DashboardCard
            title="Resume Score"
            value="--"
            subtitle="Upload resume to analyze"
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
