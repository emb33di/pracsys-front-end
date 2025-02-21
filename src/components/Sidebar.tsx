import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        </li>
        <li>
          <Link href="/auth/login" className="hover:text-blue-400">Logout</Link>
        </li>
      </ul>
    </aside>
  );
}

