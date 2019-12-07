const mongoose = require("mongoose");
const Todo = mongoose.model("todos");

module.exports = app => {
  app.get(`/api/todos`, async (req, res) => {
    let todos = await Todo.find();
    return res.status(200).send(todos);
  });

  app.post(`/api/todo`, async (req, res) => {
    let todo = await Todo.create(req.body);
    return res.status(201).send({
      error: false,
      todo
    });
  });

  app.put(`/api/todo/:id`, async (req, res) => {
    const { id } = req.params;

    let todo = await Todo.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      todo
    });
  });

  app.delete(`/api/todo/:id`, async (req, res) => {
    const { id } = req.params;

    let todo = await Todo.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      todo
    });
  });
};
