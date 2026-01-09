const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", require("./routes/authRoutes"));

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// React fallback
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html")
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
