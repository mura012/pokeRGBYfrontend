export type Pokemon = {
  number: number;
  name: string;
  typeA: string;
  typeB?: string;
  point: number;
  evolutionLevel?: number;
  afterEvolution?: string;
};

export type PokemonType = Pokemons[] | [];
