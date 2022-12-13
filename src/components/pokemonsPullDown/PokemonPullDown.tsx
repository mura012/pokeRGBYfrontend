import { PokemonData } from "mock/pokemons";
import { Dispatch, SetStateAction } from "react";
import { Pokemon } from "types/pokemon";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const PokemonPullDown = ({ selected, setSelected }: Props) => {
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="---">---</option>
        {PokemonData.map((pokemon: Pokemon) => {
          return (
            <option value={pokemon.name} key={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
