const http = require("http");
const { describe, it } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../app");

const server = http.createServer(app);

describe("API mon-api", () => {
  describe("GET /", () => {
    it("retourne un JSON avec message Hello DevOps!", async () => {
      const res = await request(server).get("/");
      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.headers["content-type"].includes("application/json"), true);
      assert.deepStrictEqual(res.body, { message: "Hello DevOps!" });
    });
  });

  describe("GET /login", () => {
    it("retourne la page login avec un formulaire", async () => {
      const res = await request(server).get("/login");
      assert.strictEqual(res.status, 200);
      assert.ok(res.text.includes("<h2>Login</h2>"));
      assert.ok(res.text.includes('action="/login"'));
      assert.ok(res.text.includes('name="username"'));
      assert.ok(res.text.includes('name="password"'));
    });
  });

  describe("POST /login", () => {
    it("accepte username et password et retourne Connexion réussie !", async () => {
      const res = await request(server)
        .post("/login")
        .send("username=test&password=secret")
        .set("Content-Type", "application/x-www-form-urlencoded");
      assert.strictEqual(res.status, 200);
      assert.ok(res.text.includes("Connexion réussie !"));
    });
  });

  describe("GET /register", () => {
    it("retourne la page register avec un formulaire", async () => {
      const res = await request(server).get("/register");
      assert.strictEqual(res.status, 200);
      assert.ok(res.text.includes("<h2>Register</h2>"));
      assert.ok(res.text.includes('name="username"'));
      assert.ok(res.text.includes('name="email"'));
      assert.ok(res.text.includes('name="password"'));
    });
  });

  describe("POST /register", () => {
    it("accepte username, email, password et retourne Utilisateur enregistré !", async () => {
      const res = await request(server)
        .post("/register")
        .send("username=user&email=user@test.com&password=pass123")
        .set("Content-Type", "application/x-www-form-urlencoded");
      assert.strictEqual(res.status, 200);
      assert.ok(res.text.includes("Utilisateur enregistré !"));
    });
  });
});
