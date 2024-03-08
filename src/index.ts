import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function verifyToken(token: string, secretKey: string): any {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    throw new Error("Invalid token");
  }
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies["token"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.USER_JWT_SECRET as string,
    (err: Error | null, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
}

export function authenticateAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies["adminToken"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.ADMIN_JWT_SECRET as string,
    (err: Error | null, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
}

export function authenticateRole(role: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    const token = req.cookies[`${role}Token`];

    if (token == null) return res.sendStatus(401);

    jwt.verify(
      token,
      process.env[`${role.toUpperCase()}_JWT_SECRET`] as string,
      (err: Error | null, user: any) => {
        if (err) return res.sendStatus(403);
        if (user.role !== role) return res.sendStatus(403);
        req.user = user;
        next();
      }
    );
  };
}
