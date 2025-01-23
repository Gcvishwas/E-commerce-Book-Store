import { Request, Response } from "express";
import Book from "../modules/book_store";

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(400).json({ message: "Book not found" });
      return;
    } else {
      res.status(200).json({ message: "Book is delete" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
