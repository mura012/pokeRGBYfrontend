import { model, Schema } from "mongoose";

const pokemonSchema = Schema({
  number: { type: Number, required: true },
  name: { type: String, required: true },
  typeA: { type: String, required: true },
  typeB: { type: String },
  point: { type: Number, required: true, enum: [80, 100, 105, 125] },
  evolutionLevel: { type: Number },
  afterEvolution: { type: String },
});

export default model("pokemonlist", pokemonSchema);
