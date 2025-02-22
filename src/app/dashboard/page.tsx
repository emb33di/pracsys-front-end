import Sidebar from "@components/Sidebar";
import Dashboard from "@components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex bg-gradient-to-br from-green-100 via-white to-pink-100 flex-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 flex-h-screen">
        <Dashboard />
      </div>
    </div>
  );
}
