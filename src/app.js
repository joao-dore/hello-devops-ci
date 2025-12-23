import express from "express";

export function createApp() {
  const app = express();

  // Basic request logging (simple observability)
  app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
      const ms = Date.now() - start;
      // Keep logs minimal; GitHub Actions will show them on failures
      console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${ms}ms`);
    });
    next();
  });

  app.get("/", (req, res) => {
    res.status(200).send("Hello World");
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
  });

  // Error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  });

  return app;
}
