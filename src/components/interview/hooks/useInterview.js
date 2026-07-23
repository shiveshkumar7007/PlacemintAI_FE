import { useEffect, useState } from "react";

import {
  getInterviews,
  createInterview as createInterviewAPI,
  deleteInterview as deleteInterviewAPI,
} from "../../../services/interviewService";

function useInterview() {
  const [interviews, setInterviews] = useState([]);

  const [loading, setLoading] = useState(true);

  // ===============================
  // Fetch Interviews
  // ===============================

  const refreshInterviews = async () => {
    try {
      setLoading(true);

      const res = await getInterviews();

      setInterviews(res.interviews || []);
    } catch (err) {
      console.error("Fetch Interviews Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // Create Interview
  // ===============================

  const createInterview = async (data) => {
    try {
      const res = await createInterviewAPI(data);

      await refreshInterviews();

      return res;
    } catch (err) {
      console.error("Create Interview Error:", err);

      throw err;
    }
  };

  // ===============================
  // Delete Interview
  // ===============================

  const deleteInterview = async (id) => {
    try {
      await deleteInterviewAPI(id);

      await refreshInterviews();
    } catch (err) {
      console.error("Delete Interview Error:", err);

      throw err;
    }
  };

  useEffect(() => {
    refreshInterviews();
  }, []);

  return {
    interviews,

    loading,

    refreshInterviews,

    createInterview,

    deleteInterview,
  };
}

export default useInterview;
