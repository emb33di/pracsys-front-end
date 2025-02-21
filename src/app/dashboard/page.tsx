import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import Dashboard from "@components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex bg-gradient-to-br from-green-100 via-white to-pink-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
