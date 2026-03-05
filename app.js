// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello DevOps!' });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});

const registerRoutes = require("./features/register");
const loginRoutes = require("./features/login");

app.use(express.urlencoded({ extended: true }));
app.use("/", registerRoutes);
app.use("/", loginRoutes);