import jwt from "jsonwebtoken";

export function verifyToken(token: string, secretKey: string): any {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    throw new Error("Invalid token");
  }
}
