const express = require("express");
const router = express.Router();

// afficher la page login
router.get("/login", (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required /><br><br>
            <input type="password" name="password" placeholder="Password" required /><br><br>
            <button type="submit">Se connecter</button>
        </form>
    `);
});

// récupérer les données de connexion
router.post("/login", (req, res) => {

    const { username, password } = req.body;

    console.log("Username:", username);
    console.log("Password:", password);

    res.send("Connexion réussie !");
});

module.exports = router;
