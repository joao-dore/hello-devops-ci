import request from "supertest";
import { createApp } from "../src/app.js";
import { createServer } from "../src/server.js";

describe("Server", () => {
  test("server starts successfully", async () => {
    const server = await createServer({ port: 0 }); // random available port
    await new Promise((resolve) => server.close(resolve));
    expect(true).toBe(true);
  });

  test("GET / returns Hello World with status 200", async () => {
    const app = createApp();
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World");
  });

  test("GET /health returns status 200", async () => {
    const app = createApp();
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
