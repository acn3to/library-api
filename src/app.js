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

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Books added successfully!");
});

export default app;
