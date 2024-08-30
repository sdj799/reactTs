const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.json({ randomNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
