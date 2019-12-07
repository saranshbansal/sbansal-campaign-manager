const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  description: String
});

mongoose.model("todos", todoSchema);
