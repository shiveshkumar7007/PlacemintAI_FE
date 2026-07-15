import {
  LayoutDashboard,
  FileText,
  Brain,
  Target,
  Mic,
  BarChart3,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Resume Analyzer",
    icon: FileText,
  },
  {
    name: "DSA Tracker",
    icon: Brain,
  },
  {
    name: "Roadmap",
    icon: Target,
  },
  {
    name: "Mock Interview",
    icon: Mic,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
];

function Sidebar() {
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

            return (
              <li key={item.name}>
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400">
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
