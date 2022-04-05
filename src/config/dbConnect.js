import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://acn3to:Ne152127.@library-api.dykgx.mongodb.net/library"
);

let db = mongoose.connection;

export default db;
