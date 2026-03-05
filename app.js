// app.js
const express = require('express');
const app = express();
const port = process.env.PORT;

const registerRoutes = require("./features/register");
const loginRoutes = require("./features/login");

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.json({ message: 'Hello DevOps!' });
});
app.use("/", registerRoutes);
app.use("/", loginRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
  });
}

module.exports = app;