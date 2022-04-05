import express from "express";
import books from "./booksRoutes.js";

const routes = (app) => {
  app.route("/").get((_req, res) => {
    res.status(200).send({ title: "Welcome to my library CRUD!" });
  });

  app.use(express.json(), books);
};

export default routes;
