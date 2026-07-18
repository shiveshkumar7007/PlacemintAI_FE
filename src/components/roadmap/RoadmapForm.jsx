import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import InputField from "../ui/InputField";
import Button from "../ui/Button";

import { generateRoadmap } from "../../services/roadmapService";

function RoadmapForm({ onGenerated }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    targetDays: 30,
    skillLevel: "Intermediate",
    dailyStudyHours: 3,
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await generateRoadmap(formData);
      toast.success("Roadmap generated successfully 🚀");
      onGenerated();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-slate-700 bg-slate-900 p-8"
    >
      <h1 className="text-3xl font-bold">Generate AI Roadmap</h1>

      <InputField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Google"
      />

      <InputField
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Software Engineer"
      />

      <InputField
        type="number"
        label="Preparation Days"
        name="targetDays"
        value={formData.targetDays}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Current Skill
        </label>

        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Daily Study Hours
        </label>

        <select
          name="dailyStudyHours"
          value={formData.dailyStudyHours}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>
      </div>

      <Button type="submit" loading={loading}>
        Generate Roadmap
      </Button>
    </form>
  );
}

export default RoadmapForm;
