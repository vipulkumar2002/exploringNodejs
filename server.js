// using express
const express = require("express");
const app = express();

// importing module
const todoRouter = require("./routes/todo");

const PORT = 8080;

/*
  Middle ware
  * We can make our own middle ware, as per our requirement.
  1) express.json() -> pre-defined.
*/
app.use(express.json());

app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Express server listening at ${PORT}`);
});
