import pokemonRouter from "./pokemon.mjs";
import express from "express";

const router = express.Router();
router.use("/pokemon", pokemonRouter);

export default router;
