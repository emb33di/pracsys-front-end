import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[527px] h-[547px] relative bg-[#f0f1e1] rounded-[14px] flex flex-col items-center p-6">
        <h2 className="text-black text-2xl font-semibold font-['Inter'] leading-[28.80px] mb-8">
          Log In To Pracsys
        </h2>
        <input
          type="text"
          placeholder="Email"
          className="w-[324px] h-[55px] bg-white border border-gray-300 rounded-md px-4 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[324px] h-[55px] bg-white border border-gray-300 rounded-md px-4 mb-4"
        />
        <button className="w-[168px] h-[34px] bg-[#5d40ff] text-white text-base font-semibold rounded-md">
          Sign In!
        </button>
        <div className="flex justify-center mt-6">
          <span className="text-black text-sm">Don’t have an account?</span>
          <a href="/signup" className="text-[#5d40ff] text-sm underline ml-2">
            Create one!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
