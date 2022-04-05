const express = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const route = express.Router();
const fs = require("fs");
const dbPath = path.join(path.resolve(), "/data/data.json");

/* 
type : Post,
discription : to add todo
*/

route.post("/", (req, res) => {
  try {
    const { task } = req.body;
    const todos = JSON.parse(fs.readFileSync(dbPath));
    if (task) {
      const todo = {
        id: uuidv4(),
        task,
        isPending: true,
        date: Date.now(),
      };
      todos.push(todo);
      fs.writeFileSync(dbPath, JSON.stringify(todos));
      return res.json({
        todo,
        massage: "Todo added ",
        success: true,
      });
    }
    return res.json({
      todo: null,
      massage: "Todo cann't be empty !",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      todo: null,
      massage: error.massage,
      success: false,
    });
  }
});

/* 
type : Post,
discription : to add todo
*/

route.get("/", (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(dbPath));

    return res.json({
      todos,
      massage: "todos fatched",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      todos: null,
      massage: error.massage,
      success: false,
    });
  }
});

module.exports = route;
