import { PokemonData } from "mock/pokemons";
import { Dispatch, memo, SetStateAction } from "react";
import { Pokemon } from "types/pokemon";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const PokemonSearch = memo(({ selected, setSelected }: Props) => {
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
      <div className="relative">
        <datalist id="example">
          {PokemonData.map(({ name, number, typeA, typeB }: Pokemon) => {
            return (
              <option value={name} key={number}>
                {`${typeA}　`}
                {typeB}
              </option>
            );
          })}
        </datalist>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSelected("");
          }}
          className="absolute right-2 top-2 cursor-pointer border-0 bg-white text-xl text-black hover:bg-white"
        >
          ×
        </button>
      </div>
    </>
  );
});
