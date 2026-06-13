import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/lib/auth";
import prisma from "./src/lib/prisma";
import songsRouter from "./src/modules/songs/songs.routes";

const app = express();
const port = process.env.PORT ?? "3000";

// Allow the Next.js frontend to call the API with credentials (cookies).
// Must be registered before the auth handler and routes.
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
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

app.listen(port, async () => {
  await prisma.$connect();
  console.log(`Server listening on port ${port}`);
});
