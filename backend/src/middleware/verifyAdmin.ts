import { NextFunction, Request, Response, RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET_KEY as string;
interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

const verifyAdminToken: RequestHandler = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    res.status(404).json({ message: "access denied no token provided" });
    return;
  }
  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: "invalid credientials" });
    }
    req.user = user;
    next();
  });
};
export default verifyAdminToken;
