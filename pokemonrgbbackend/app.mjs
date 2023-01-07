import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import env from "dotenv";
import "./helpers/db.mjs";
env.config();
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`スタート: http://localhost:${port}`);
});
