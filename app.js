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

const registerRoutes = require("./routes/register");

app.use(express.urlencoded({ extended: true }));
app.use("/", registerRoutes);