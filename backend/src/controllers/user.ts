import { Request, Response } from "express";

import { User } from "../modules/user_data";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

export const admin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found!" });
    }
    if (admin?.password! == password) {
      res.status(404).send({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: admin?._id, username: admin?.username, role: admin?.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin?.username,
        role: admin?.role,
      },
    });
    return;
  } catch (error) {
    res.status(404).send({ message: "failed to login as admin", error });
  }
};
