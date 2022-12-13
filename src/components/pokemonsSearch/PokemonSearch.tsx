import { PokemonData } from "mock/pokemons";
import { Dispatch, SetStateAction } from "react";
import { Pokemon } from "types/pokemon";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const PokemonSearch = ({ selected, setSelected }: Props) => {
  return (
    <>
      <input
        type="text"
        list="example"
        autoComplete="off"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="p-3"
      />

      <datalist id="example">
        <option value="---">---</option>
        {PokemonData.map(({ name, number, typeA, typeB }: Pokemon) => {
          return (
            <option value={name} key={number}>
              {name}
              {`　${typeA} `}
              {typeB}
            </option>
          );
        })}
      </datalist>
    </>
  );
};
