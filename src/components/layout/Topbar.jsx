import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  async function handleLogout() {
    try {
      await logoutUser();

      setUser(null);

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">
      <div>
        <h1 className="text-3xl font-bold">
          {greeting},{" "}
          <span className="text-cyan-400">{user?.name || "User"} 👋</span>
        </h1>

        <p className="mt-2 text-slate-400">
          Keep pushing. Your dream offer is getting closer every day.
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 transition hover:bg-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
}

export default Topbar;
