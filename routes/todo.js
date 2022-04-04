const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("todoes");
});

module.exports = router;
