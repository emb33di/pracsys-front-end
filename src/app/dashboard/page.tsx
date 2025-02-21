import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}