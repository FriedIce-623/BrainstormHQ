const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files from parent folder
app.use(express.static(path.join(__dirname, "..")));

// Routes
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");

// Mount routes ONCE
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

// Serve homepage when visiting "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "homepage.html"));
});

// Start server
app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on http://localhost:4000");
  console.log("External access: http://YOUR_IP:4000");
});
