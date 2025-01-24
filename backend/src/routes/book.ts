import express from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getASingleBook,
  updateBooks,
} from "../controllers/book";
import verifyAdminToken from "../middleware/verifyAdmin";

const router = express.Router();

router.post("/create-book", verifyAdminToken, addBook);
router.get("/", getAllBooks);
router.get("/:id", getASingleBook);
router.put("/edit/:id", verifyAdminToken, updateBooks);
router.delete("/:id", verifyAdminToken, deleteBook);

export default router;
