import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form className="w-full max-w-sm rounded-xl bg-zinc-900 p-8 shadow-2xl border border-zinc-700">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Login
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-white"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-white"
          />
        </div>

        {/* Remember Me */}
        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 accent-white"
          />
          <label htmlFor="remember" className="text-sm text-gray-300">
            Remember Me
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;