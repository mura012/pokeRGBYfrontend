export type Pokemon = {
  number: number;
  name: string;
  typeA: string;
  typeB?: string;
  point: number;
};

export type PokemonType = Pokemons[] | [];
