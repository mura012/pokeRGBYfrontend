import express from "express";
import Pokemon from "../models/pokemon.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const pokemons = await Pokemon.find();
  res.send(pokemons);
});

export default router;
