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
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="p-3"
      >
        <option value="---">---</option>
        {PokemonData.map(({ name, number, typeA, typeB }: Pokemon) => {
          return (
            <option value={name} key={number}>
              {`${number}　`}
              {name}
              {`　${typeA} `}
              {typeB}
            </option>
          );
        })}
      </select>
    </>
  );
};
