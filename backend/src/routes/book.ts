import "dotenv/config";
import express from "express";
import deleteBook from "../controllers/book";

const router = express.Router();

router.delete("/books/:id", deleteBook);

export default router;
