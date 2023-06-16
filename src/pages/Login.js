import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [user, setUser] = useContext(UserContext);
  const [error, setError] = useState("");
  const { mutate: loginFun } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: (data) => {
      if (data.access) {
        setUser(true);
      } else {
        setError(data);
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginFun();
  };

  if (user) {
    return <Navigate to="/main" />;
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-400 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-medium mb-2"
            >
              UserName
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-center">
            {error && <p className="text-red-500">{error.message}</p>}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
