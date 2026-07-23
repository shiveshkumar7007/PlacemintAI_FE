import api from "./api.js";

export const getDSAStats = async () => {
  const { data } = await api.get("/dsa/stats");

  return data;
};

export const getProblems = async (params) => {
  const { data } = await api.get("/dsa/problems", { params });
  return data;
};

export const getProblemDetails = async (problemId) => {
  const { data } = await api.get(`/dsa/problems/${problemId}`);

  return data;
};

export const updateProblemProgress = async (problemId, payload) => {
  const { data } = await api.put(`/dsa/progress/${problemId}`,payload,);
  return data;
};

export const getFilters = async () => {
  const { data } = await api.get("/dsa/filters");

  return data;
};
