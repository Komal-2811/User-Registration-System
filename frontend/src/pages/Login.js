import React, { useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "./Auth.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      toast.success("✅ Login successful!");
      window.location.href = "/profile";
    } catch {
      toast.error("❌ Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="📧 Email" onChange={handleChange} required />
        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p>
        Don’t have an account? <a href="/">Register</a>
      </p>
    </motion.div>
  );
};

export default Login;
