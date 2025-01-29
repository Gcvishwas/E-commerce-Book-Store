import express from "express";
import { admin } from "../controllers/user";
const router = express.Router();

router.post("/admin", admin);

export default router;
