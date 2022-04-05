import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "Lord of the Rings" },
  { id: 2, title: "The Hobbit" },
];

app.get("/", (_req, res) => {
  res.status(200).send("Welcome!");
});

app.get("/books", (_req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Books added successfully!");
});

app.put("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

function searchBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
