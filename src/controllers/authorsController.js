import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (_req, res) => {
    authors.find((_err, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Fail to create Author!` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author updated successfully!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author deleted successfully!" });
      } else {
        res.status(500).send({ message: `${err.message} - Id not found` });
      }
    });
  };
}

export default AuthorController;
