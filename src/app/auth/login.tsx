export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-bold">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 mt-4" />
        <input type="password" placeholder="Password" className="border p-2 mt-2" />
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white">Login</button>
      </div>
    );
  }
  