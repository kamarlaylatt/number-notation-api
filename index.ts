import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/lib/auth.js";
import songsRouter from "./src/modules/songs/songs.routes.js";

const app = express();
const port = process.env.PORT ?? "3000";

// Allow the Next.js frontend to call the API with credentials (cookies).
// Must be registered before the auth handler and routes.
app.use(
  cors({
    origin: (process.env.FRONTEND_URL ?? "http://localhost:3000").replace(/\/$/, ""),
    credentials: true,
  })
);

// Must be before express.json()
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Number Notation API" });
});

app.use("/api/mysongs", songsRouter);

// On Vercel the app runs as a serverless function via the default export.
// Only start a long-lived listener for local development.
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;
