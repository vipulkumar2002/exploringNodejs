const express = require("express");

const app = express();
const path = require("path");
const fs = require("fs");
const middleware = (req, res, next) => {
  console.log(req.headers["user-agent"]);
  if (req.headers["user-agent"].includes("Vipul")) return next();
  return res.send("not valid request");
};
app.use(middleware);
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("This is home Rought");
});

app.get("/image", (req, res) => {
  res.sendFile(
    path.join(
      path.resolve(),
      "/public/WhatsApp Image 2022-03-07 at 6.05.06 PM.jpeg"
    )
  );
});

app.listen(PORT, () => {
  console.log(`Express server listening at ${PORT}`);
});
