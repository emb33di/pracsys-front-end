export default function AuthTable() {
    return (
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-md font-semibold mb-2">Prior Authorization Requests</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Patient</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">John Doe</td>
              <td className="border p-2">Pending</td>
              <td className="border p-2">02/19/2025</td>
            </tr>
            <tr>
              <td className="border p-2">Jane Smith</td>
              <td className="border p-2 text-green-500">Approved</td>
              <td className="border p-2">02/18/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  