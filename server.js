const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.post("/api/subscribe", (req, res) => {
    const { email } = req.body;
    console.log("New subscriber:", email);
    res.json({ message: "Subscription successful! 🎉" });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});

app.use(express.json());

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  console.log("New subscriber:", email);

  res.json({ message: "Subscribed successfully!" });
});
const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});