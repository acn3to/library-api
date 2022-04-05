import books from "../models/Book.js";

class BookController {
  static listBooks = (_req, res) => {
    books.find((_err, books) => {
      res.status(200).json(books);
    });
  };

  static listBookById = (req, res) => {
    const id = req.params.id;
    books.findById(id, (err, books) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found` });
      } else {
        res.status(200).send(books);
      }
    });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Fail to create book!` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book updated successfully!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book deleted successfully!" });
      } else {
        res.status(500).send({ message: `${err.message} - Id not found` });
      }
    });
  };
}

export default BookController;
