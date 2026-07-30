import api from "./api";

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
export const getResumeHistory = async () => {
  const response = await api.get("/resume/history");

  return response.data;
};
export const getLatestResume = async () => {
  const response = await api.get("/resume/latest");

  return response.data;
};
export const analyzeResume = async (id) => {
  const response = await api.get(`/resume/analyze/${id}`);
  return response.data;
};