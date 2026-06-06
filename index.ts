import express from "express";
import prisma from "./src/lib/prisma";

const app = express();
const port = process.env.PORT ?? "3000";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Number Notation API" });
});

app.listen(port, async () => {
  await prisma.$connect();
  console.log(`Server listening on port ${port}`);
});
