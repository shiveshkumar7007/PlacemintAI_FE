import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";

import RoadmapForm from "../components/roadmap/RoadmapForm";
import RoadmapTimeline from "../components/roadmap/RoadmapTimeline";

import {
  getActiveRoadmap,
  toggleDayCompletion,
  completeRoadmap,
  abandonRoadmap,
} from "../services/roadmapService";

function Roadmap() {
  const [roadmap, setRoadmap] = useState(null);

  const [loading, setLoading] = useState(true);

  async function loadRoadmap() {
    try {
      const data = await getActiveRoadmap();

      setRoadmap(data.roadmap);
    } catch {
      setRoadmap(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRoadmap();
  }, []);

  async function handleToggle(roadmapId, day) {
    try {
      const data = await toggleDayCompletion(roadmapId, day);

      setRoadmap(data.roadmap);

      toast.success("Updated");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  async function handleComplete(id) {
    try {
      await completeRoadmap(id);

      toast.success("Goal Completed");

      loadRoadmap();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  async function handleDrop(id) {
    const reason = prompt("Reason for dropping (optional)");

    try {
      await abandonRoadmap(id, reason);

      toast.success("Roadmap Dropped");

      loadRoadmap();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  if (loading) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      {roadmap ? (
        <RoadmapTimeline
          roadmap={roadmap}
          onToggle={handleToggle}
          onComplete={handleComplete}
          onDrop={handleDrop}
        />
      ) : (
        <RoadmapForm onGenerated={loadRoadmap} />
      )}
    </DashboardLayout>
  );
}

export default Roadmap;
