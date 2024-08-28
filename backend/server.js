const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: 'http://localhost:4200', // ou o domínio do seu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const users = [
  { name: "John Doe", email: "john@exemplo.com" },
  { name: "Jane Smith", email: "jane@exemplo.com" },
];

app.post("/api/login", (req, res) => {
  const { name, email } = req.body;
  const user = users.find((u) => u.name === name && u.email === email);
  if (user) {
    res.status(200).json({ message: "Login sucessful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
