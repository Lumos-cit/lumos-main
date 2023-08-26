import React, { useState } from "react";
import { showToast } from "./services/showToast";
import { ToastContainer, toast } from "react-toastify";

function Auth({ setAdmin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (name == "lumos@citchennai.net" && password == "Lumos@cit") {
      setAdmin(true);
      localStorage.setItem("admin", true);
      console.log(name, password);
    } else {
      console.log("invalid credentials");
      showToast(toast, "error", "Incorrect Credentials");
    }
  }
  return (
    <div className="flex items-center h-screen w-full">
      <ToastContainer />
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Login
        </span>
        <form className="mb-4" onSubmit={submitForm}>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Username or Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Username or Email"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default Auth;
