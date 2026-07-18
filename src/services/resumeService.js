import api from "./api";

// Upload Resume

export const uploadResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await api.post("/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Analyze Resume

export const analyzeResume = async (resumeId) => {
  const response = await api.get(`/resume/analyze/${resumeId}`);

  return response.data;
};

// Get Resume History

export const getResumeHistory = async () => {
  const response = await api.get("/resume/history");

  return response.data;
};

// Get Latest Resume

export const getLatestResume = async () => {
  const response = await api.get("/resume/latest");

  return response.data;
};
