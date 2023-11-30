const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
  console.log("Successfully Connected!")
}

connectDB()

const TodoSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

app.use(bodyParser.json());

app.get("/api", async (req, res) => {
  const todo = await Todo.find()
  res.json(todo)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
