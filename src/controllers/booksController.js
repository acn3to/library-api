import books from "../models/Book.js";

class BookController {
  static listBooks = (_req, res) => {
    books.find((_err, books) => {
      res.status(200).json(books);
    });
  };
}

export default BookController;
