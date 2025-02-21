import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered with: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold">Register</h2>
      <input 
        type="email" 
        placeholder="Email" 
        className="border p-2 mt-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="border p-2 mt-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        className="border p-2 mt-2"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}
