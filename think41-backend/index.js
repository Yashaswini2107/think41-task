const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable JSON parsing and CORS
app.use(express.json());
app.use(cors());

// In-memory user data
let users = [
  { id: 1, name: "Yashaswini", email: "yash@example.com" },
  { id: 2, name: "Amit", email: "amit@example.com" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
