import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Brain, Target, Mic } from "lucide-react";

// Removed Resume Analyzer and Analytics
// Added 'path' to each object so we know where to route them
const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "DSA Tracker",
    icon: Brain,
    path: "/dsa",
  },
  {
    name: "Roadmap",
    icon: Target,
    path: "/roadmap",
  },
  {
    name: "Mock Interview",
    icon: Mic,
    path: "/interview",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // Used to check which page we are currently on

  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 lg:block">
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold">
          PlaceMint <span className="text-cyan-400">AI</span>
        </h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // Checks if the current URL matches the button's path to highlight it
            const isActive = location.pathname.includes(item.path);

            return (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-cyan-400 ${
                    isActive ? "bg-slate-800 text-cyan-400" : "text-slate-300"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
