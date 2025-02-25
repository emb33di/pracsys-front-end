import Sidebar from "@components/Sidebar";
import Dashboard from "@components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex bg-gradient-to-r from-pink-100 to-green-100 h-screen">
      <Sidebar />
      <div className="flex-1 p-6 h-screen">
        <Dashboard />
      </div>
    </div>
  );
}
