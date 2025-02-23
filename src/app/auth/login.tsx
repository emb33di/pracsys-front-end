"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Redirect after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f1e1]">
      <div className="w-[527px] h-[547px] bg-[#f0f1e1] rounded-[14px] p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-black text-center mb-6">
          Log In To Pracsys
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Enter Provider Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md bg-white text-black"
          />
          <input
            type="password"
            placeholder="Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md bg-white text-black"
          />
          <button
            type="submit"
            className="w-full bg-[#f5ad9b] text-black font-semibold py-3 rounded-[10px]"
          >
            Sign In!
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-black">Don’t have an account? </span>
          <a href="/register" className="text-[#5d40ff] underline">
            Create one!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
