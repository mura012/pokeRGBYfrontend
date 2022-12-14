export type Pokemon = {
  number: number;
  name: string;
  typeA: string;
  typeB?: string;
  point: number;
  evolutionLevel?: number;
};

export type PokemonType = Pokemons[] | [];
