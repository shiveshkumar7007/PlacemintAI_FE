import api from "./api";

export const generateRoadmap = async (roadmapData) => {
  const { data } = await api.post("/roadmap/generate", roadmapData);
  return data;
};

export const getActiveRoadmap = async () => {
  const { data } = await api.get("/roadmap/active");
  return data;
};

export const getRoadmapHistory = async () => {
  const { data } = await api.get("/roadmap/history");
  return data;
};

export const toggleDayCompletion = async (roadmapId, day) => {
  const { data } = await api.patch(`/roadmap/day/${roadmapId}/${day}`);

  return data;
};

export const completeRoadmap = async (roadmapId) => {
  const { data } = await api.patch(`/roadmap/complete/${roadmapId}`);

  return data;
};

export const abandonRoadmap = async (roadmapId, reason = "") => {
  const { data } = await api.patch(`/roadmap/drop/${roadmapId}`, {
    reason,
  });

  return data;
};
