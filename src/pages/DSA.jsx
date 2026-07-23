import { useEffect, useState } from "react";
import {
  getDSAStats,
  getProblems,
  getProblemDetails,
} from "../services/dsaService";
import DSAStats from "../components/dsa/DSAStats";
import DSAFilters from "../components/dsa/DSAFilters";
import DSATable from "../components/dsa/DSATable";
import ProblemDrawer from "../components/dsa/ProblemDrawer";
import Pagination from "../components/dsa/Pagination";

function DSA() {
  const [stats, setStats] = useState(null);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    company: "",
    difficulty: "",
    topic: "",
    status: "", // Added status filter
  });

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, 500);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const fetchStats = async () => {
    try {
      const res = await getDSAStats();
      setStats(res.stats);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProblems = async () => {
    try {
      setLoading(true);
      const res = await getProblems({
        ...filters,
        search: debouncedSearch,
        page: currentPage,
      });

      setProblems(res.problems);
      setCurrentPage(res.currentPage);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openProblem = async (problemId) => {
    try {
      const res = await getProblemDetails(problemId);
      setSelectedProblem(res);
      setDrawerOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedProblem(null);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchProblems();
  }, [
    currentPage,
    debouncedSearch,
    filters.company,
    filters.difficulty,
    filters.topic,
    filters.status, // Added status to dependency array
  ]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl space-y-8 p-6">
        <h1 className="text-3xl font-bold text-white">DSA Tracker</h1>

        <DSAStats stats={stats} />

        <DSAFilters filters={filters} setFilters={setFilters} />

        <DSATable
          problems={problems}
          loading={loading}
          openProblem={openProblem}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        <ProblemDrawer
          open={drawerOpen}
          onClose={closeDrawer}
          problem={selectedProblem}
          refreshProblems={fetchProblems}
          refreshStats={fetchStats}
        />
      </div>
    </div>
  );
}

export default DSA;
