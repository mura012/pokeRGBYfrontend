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
        {PokemonData.map(({ name, number, typeA, typeB, point }: Pokemon) => {
          return (
            <option value={name} key={number}>
              <p>
                {number < 10 ? "0" : ""}
                {number}
              </p>{" "}
              <p>{name}</p>
              {"　"}
              {name.length === 4 ? "　" : ""}
              {name.length === 3 ? "　　" : ""}
              <p>{typeA}</p> <p>{typeB}</p>
            </option>
          );
        })}
      </select>
    </>
  );
};
