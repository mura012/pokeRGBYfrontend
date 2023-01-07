import { useGetPokemon } from "fooks/useGetPokemon";
import { Dispatch, SetStateAction } from "react";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const PokemonSearch = ({ selected, setSelected }: Props) => {
  const { data } = useGetPokemon();
  console.log(data);

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
          {data?.map(({ name, number, typeA, typeB }) => {
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
};
