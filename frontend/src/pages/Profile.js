import React, { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/profile").then((res) => setUser(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (!user) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <motion.div
      className="profile-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h2>Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <button onClick={logout}>Logout</button>
    </motion.div>
  );
};

export default Profile;
