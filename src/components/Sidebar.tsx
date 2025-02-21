const Sidebar = () => {
  return (
    <aside className="w-64 h-[95vh] bg-white shadow-md p-6 flex flex-col rounded-lg border border-gray-200 m-4">
      <h1 className="text-xl font-bold text-black mb-6">Pracsys</h1>
      <nav>
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-black cursor-pointer">Dashboard</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">PA Tracker</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Contact Us</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Manage Plan</li>
        </ul>
      </nav>
      <button className="text-red-500 font-semibold mt-auto">Sign Out</button>
    </aside>
  );
};

export default Sidebar;
