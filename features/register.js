const express = require("express");
const router = express.Router();

// afficher la page register
router.get("/register", (req, res) => {
    res.send(`
        <h2>Register</h2>
        <form method="POST" action="/register">
            <input type="text" name="username" placeholder="Username" required /><br><br>
            <input type="email" name="email" placeholder="Email" required /><br><br>
            <input type="password" name="password" placeholder="Password" required /><br><br>
            <button type="submit">Register</button>
        </form>
    `);
});

// récupérer les données
router.post("/register", (req, res) => {

    const { username, email, password } = req.body;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    res.send("Utilisateur enregistré !");
});

module.exports = router;