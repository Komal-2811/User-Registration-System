import React, { useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "./Auth.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/auth/register", form);
      toast.success("🎉 Registration successful!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
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
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="👤 Name" onChange={handleChange} required />
        <input name="email" placeholder="📧 Email" onChange={handleChange} required />
        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          required
        />

        <p style={{ color: "white", fontSize: "12px" }}>
          Password strength:{" "}
          {form.password.length < 6
            ? "Weak"
            : form.password.length < 10
            ? "Medium"
            : "Strong"}
        </p>

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </motion.div>
  );
};

export default Register;
