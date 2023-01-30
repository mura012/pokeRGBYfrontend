import { PokemonTypes } from "./pokemonType";

export type Pokemon = {
  number: number;
  name: string;
  typeA: PokemonTypes;
  typeB?: PokemonTypes;
  point: number;
  evolutionLevel?: number;
  afterEvolution?: string;
};

export type PokemonType = Pokemons[] | [];
