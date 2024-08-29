const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  const delay = parseInt(req.query.t) || 0;
  await new Promise((resolve) => setTimeout(resolve, delay));
  res.json({ randomNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
