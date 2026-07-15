import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
