import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("listagem de usuários");

  res.json([
    'André',
    'Diego'
  ]);
});

app.listen(3333);
