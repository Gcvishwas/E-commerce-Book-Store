import express from "express";
import { createOrder, getOrderById } from "../controllers/order";

const router = express.Router();

router.post("/", createOrder);
router.get("/email/:email", getOrderById);

export default router;
