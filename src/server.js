import http from "http";
import { createApp } from "./app.js";

const DEFAULT_PORT = 3000;

export function createServer({ port = DEFAULT_PORT } = {}) {
  const app = createApp();
  const server = http.createServer(app);

  return new Promise((resolve, reject) => {
    server.on("error", (err) => reject(err));
    server.listen(port, () => resolve(server));
  });
}

async function main() {
  const port = Number(process.env.PORT) || DEFAULT_PORT;
  const server = await createServer({ port });

  console.log(`Server listening on port ${port}`);

  // Graceful shutdown (good practice + rollback-friendly)
  const shutdown = async (signal) => {
    console.log(`Received ${signal}. Shutting down...`);
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });

    // Force exit if stuck
    setTimeout(() => process.exit(1), 10_000).unref();
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

if (process.env.NODE_ENV !== "test") {
  main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
  });
}
