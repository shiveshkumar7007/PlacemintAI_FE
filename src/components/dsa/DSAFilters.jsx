import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getFilters } from "../../services/dsaService";

function DSAFilters({ filters, setFilters }) {
  const [companies, setCompanies] = useState([]);
  const [topics, setTopics] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await getFilters();
        setCompanies(res.companies || []);
        setTopics(res.topics || []);
        setDifficulties(res.difficulties || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFilters();
  }, []);

  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      company: "",
      difficulty: "",
      topic: "",
      status: "", // Clears status
    });
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search Problem..."
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-2 pl-10 pr-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Company */}
        <select
          value={filters.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-white"
        >
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>

        {/* Difficulty */}
        <select
          value={filters.difficulty}
          onChange={(e) => handleChange("difficulty", e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-white"
        >
          <option value="">All Difficulties</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>

        {/* Topic */}
        <select
          value={filters.topic}
          onChange={(e) => handleChange("topic", e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-white"
        >
          <option value="">All Topics</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          value={filters.status || ""}
          onChange={(e) => handleChange("status", e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-white"
        >
          <option value="">Status</option>
          <option value="Solved">Solved</option>
          <option value="Unsolved">Unsolved</option>
          <option value="Important">Important</option>
        </select>

        {/* Clear */}
        <button
          onClick={clearFilters}
          className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
        >
          <X size={18} />
          Clear
        </button>
      </div>
    </div>
  );
}

export default DSAFilters;
