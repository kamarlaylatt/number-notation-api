import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";
import { fromNodeHeaders } from "better-auth/node";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const session = await auth.api.getSession({ headers: fromNodeHeaders(req.headers) });
  if (!session) return res.status(401).json({ message: "Unauthorized" });
  // better-auth types `image` as optional (string | null | undefined); Prisma's
  // User expects string | null, so normalize it.
  req.user = { ...session.user, image: session.user.image ?? null };
  next();
};
