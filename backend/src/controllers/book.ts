import { Request, Response } from "express";
import { Book } from "../modules/book_store";

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
    res.status(500).json({ message: "Error deleting book" });
  }
};
export const addBook = async (req: Request, res: Response) => {
  try {
    const newBook = await new Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.log("error deleting book", error);
  }
};
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("error fetching book", error);
  }
};

export const updateBooks = async (req: Request, res: Response) => {
  try {
    const updatedBook = await Book.findById(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "failed to update book" });
    } else {
      res.status(200).send({ message: "book is updated sucessfully" });
    }
  } catch (error) {
    console.error("error while updating book", error);
  }
};
export const getASingleBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).send({ message: "book not found" });
    } else {
      res.status(200).send({ message: "your book", book });
    }
  } catch (error) {
    console.error("failed to get your book ", error);
  }
};
