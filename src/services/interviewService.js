import api from "./api";

// Get all interviews

export const getInterviews = async () => {
  const res = await api.get("/interviews");

  return res.data;
};

// Create interview

export const createInterview = async (data) => {
  const res = await api.post("/interviews", data);

  return res.data;
};

// Delete interview

export const deleteInterview = async (id) => {
  const res = await api.delete(`/interviews/${id}`);

  return res.data;
};

// Get a single interview by ID
export const getInterviewById = async (id) => {
  const res = await api.get(`/interviews/${id}`);
  return res.data;
};

// Submit an answer
export const answerInterview = async (id, answer) => {
  const res = await api.post(`/interviews/answer/${id}`, { answer });
  return res.data;
};

// Finish the interview
export const finishInterview = async (id) => {
  const res = await api.post(`/interviews/finish/${id}`);
  return res.data;
};
