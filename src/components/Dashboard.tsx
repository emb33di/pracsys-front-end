import StatsCard from "./StatsCard";
import AuthTable from "./AuthTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Pending Approvals" value="12" />
        <StatsCard title="Approved Requests" value="45" />
        <StatsCard title="Denied Requests" value="5" />
      </div>
      <AuthTable />
    </div>
  );
}

