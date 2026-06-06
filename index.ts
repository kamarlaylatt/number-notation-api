import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/lib/auth";
import prisma from "./src/lib/prisma";

const app = express();
const port = process.env.PORT ?? "3000";

// Must be before express.json()
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Number Notation API" });
});

app.listen(port, async () => {
  await prisma.$connect();
  console.log(`Server listening on port ${port}`);
});
